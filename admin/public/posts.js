(function () {
  'use strict';

  const el = (id) => document.getElementById(id);

  let POSTS = [];
  let currentId = null;      // null = đang viết bài mới
  let coverFile = null;
  let dirty = false;
  let siteUrl = '';          // địa chỉ website thật, để mở xem bài đã đăng

  const postList = el('postList');
  const postCount = el('postCount');
  const emptyPick = el('emptyPick');
  const editorWrap = el('editorWrap');
  const editorMode = el('editorMode');
  const editor = el('editor');
  const wordCount = el('wordCount');
  const formError = el('formError');

  const titleInput = el('titleInput');
  const excerptInput = el('excerptInput');
  const categoryInput = el('categoryInput');
  const tagInput = el('tagInput');
  const dateInput = el('dateInput');
  const authorInput = el('authorInput');
  const sourceInput = el('sourceInput');
  const featuredInput = el('featuredInput');

  const coverInput = el('coverInput');
  const coverDrop = el('coverDrop');
  const coverPreview = el('coverPreview');
  const coverPlaceholder = el('coverPlaceholder');
  const inlineImgInput = el('inlineImgInput');

  const newPostBtn = el('newPostBtn');
  const saveBtn = el('saveBtn');
  const deleteBtn = el('deleteBtn');
  const viewLink = el('viewLink');
  const logoutBtn = el('logoutBtn');

  const toast = el('toast');
  const toastBody = el('toastBody');

  const loginScreen = el('loginScreen');
  const loginForm = el('loginForm');
  const loginPassword = el('loginPassword');
  const loginError = el('loginError');
  const loginBtn = el('loginBtn');

  function escapeHtml(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }

  function formatDate(iso) {
    const p = String(iso || '').split('-');
    return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : (iso || '');
  }

  function setDirty(v) { dirty = v; }

  // Ô tóm tắt cũng có nút In đậm / Nghiêng / Gạch chân
  RichText.attach(excerptInput, { hint: 'Bôi đen rồi bấm B / I / U' });
  const setField = (input, value) => RichText.set(input, value);

  // ---------------------------------------------------------------
  // Đăng nhập
  // ---------------------------------------------------------------
  function showLogin() { loginScreen.style.display = 'flex'; loginPassword.focus(); }
  function hideLogin() { loginScreen.style.display = 'none'; }

  async function checkAuth() {
    try {
      const res = await fetch('/api/me');
      const json = await res.json();
      if (json.needsPassword) logoutBtn.style.display = 'flex';
      if (json.siteUrl) siteUrl = json.siteUrl;
      if (json.authenticated) { hideLogin(); loadPosts(); }
      else showLogin();
    } catch (e) {
      showToast('Không kết nối được tới server.', true);
    }
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.classList.add('hidden');
    loginBtn.disabled = true;
    loginBtn.textContent = 'Đang kiểm tra...';
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: loginPassword.value }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Đăng nhập thất bại.');
      loginPassword.value = '';
      hideLogin();
      logoutBtn.style.display = 'flex';
      loadPosts();
    } catch (err) {
      loginError.textContent = err.message;
      loginError.classList.remove('hidden');
    } finally {
      loginBtn.disabled = false;
      loginBtn.textContent = 'Đăng nhập';
    }
  });

  logoutBtn.addEventListener('click', async () => {
    await fetch('/api/logout', { method: 'POST' });
    showLogin();
  });

  // ---------------------------------------------------------------
  // Danh sách bài
  // ---------------------------------------------------------------
  async function loadPosts() {
    try {
      const res = await fetch('/api/posts');
      if (res.status === 401) { showLogin(); return; }
      if (!res.ok) throw new Error('Không tải được danh sách bài viết.');
      const json = await res.json();
      POSTS = json.posts || [];
      renderList();
      renderCategoryOptions();
    } catch (e) {
      showToast(e.message, true);
    }
  }

  function renderList() {
    postCount.textContent = '(' + POSTS.length + ')';

    postList.innerHTML = POSTS.map((p) => {
      const active = currentId === p.id ? ' active' : '';
      const star = p.featured
        ? '<span class="material-symbols-outlined text-[14px] text-amber-500 shrink-0">star</span>'
        : '';
      return '<button data-id="' + escapeHtml(p.id) + '" class="post-item' + active +
        ' w-full flex items-start gap-2 px-3 py-2.5 rounded-xl text-left hover:bg-gray-50 transition">' +
        '<span class="flex-1 min-w-0">' +
        '<span class="flex items-center gap-1.5">' + star +
        '<span class="block text-xs font-bold truncate">' + escapeHtml(p.title) + '</span></span>' +
        '<span class="sub block text-[10px] text-gray-400 font-medium truncate mt-0.5">' +
        escapeHtml(formatDate(p.date)) + ' · ' + escapeHtml(p.category || 'Tin tức') +
        '</span></span></button>';
    }).join('');

    postList.querySelectorAll('.post-item').forEach((b) => {
      b.addEventListener('click', () => openPost(b.dataset.id));
    });
  }

  function renderCategoryOptions() {
    const cats = [];
    POSTS.forEach((p) => {
      const c = p.category || '';
      if (c && cats.indexOf(c) === -1) cats.push(c);
    });
    el('catList').innerHTML = cats.map((c) => '<option value="' + escapeHtml(c) + '"></option>').join('');
  }

  // ---------------------------------------------------------------
  // Mở / tạo bài
  // ---------------------------------------------------------------
  function resetForm() {
    coverFile = null;
    titleInput.value = '';
    setField(excerptInput, '');
    categoryInput.value = '';
    tagInput.value = '';
    authorInput.value = 'Thành Phong';
    sourceInput.value = '';
    featuredInput.checked = false;
    dateInput.value = new Date().toISOString().slice(0, 10);
    editor.innerHTML = '';
    coverPreview.classList.add('hidden');
    coverPreview.src = '';
    coverPlaceholder.classList.remove('hidden');
    coverInput.value = '';
    formError.classList.add('hidden');
    updateWordCount();
  }

  function newPost() {
    if (dirty && !confirm('Bạn có thay đổi chưa lưu. Bỏ các thay đổi đó?')) return;
    currentId = null;
    resetForm();
    editorMode.textContent = 'Viết bài mới';
    deleteBtn.style.display = 'none';
    viewLink.style.display = 'none';
    emptyPick.style.display = 'none';
    editorWrap.style.display = 'block';
    renderList();
    setDirty(false);
    titleInput.focus();
  }

  function openPost(id) {
    if (dirty && !confirm('Bạn có thay đổi chưa lưu. Chuyển sang bài khác và bỏ các thay đổi đó?')) return;

    const p = POSTS.find((x) => x.id === id);
    if (!p) return;

    currentId = id;
    resetForm();

    titleInput.value = p.title || '';
    setField(excerptInput, p.excerpt || '');
    categoryInput.value = p.category || '';
    tagInput.value = p.tag || '';
    dateInput.value = p.date || '';
    authorInput.value = p.author || 'Thành Phong';
    sourceInput.value = p.sourceUrl || '';
    featuredInput.checked = !!p.featured;
    editor.innerHTML = p.contentHtml || '';

    if (p.cover) {
      // Đường dẫn trong dữ liệu là "../images/..." — server phục vụ ở "/images/..."
      coverPreview.src = p.cover.replace(/^\.\.\//, '/');
      coverPreview.classList.remove('hidden');
      coverPlaceholder.classList.add('hidden');
    }

    editorMode.textContent = 'Đang sửa bài';
    deleteBtn.style.display = 'flex';
    viewLink.style.display = 'flex';
    viewLink.href = (siteUrl || '') + '/tintuc/index.html?bai=' + encodeURIComponent(p.slug);
    viewLink.title = 'Mở bài trên website (chờ GitHub cập nhật khoảng 1-2 phút sau khi lưu)';

    emptyPick.style.display = 'none';
    editorWrap.style.display = 'block';
    renderList();
    updateWordCount();
    setDirty(false);
  }

  newPostBtn.addEventListener('click', newPost);

  // ---------------------------------------------------------------
  // Ảnh bìa
  // ---------------------------------------------------------------
  function handleCover(file) {
    if (!file || !file.type.startsWith('image/')) return;
    coverFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      coverPreview.src = e.target.result;
      coverPreview.classList.remove('hidden');
      coverPlaceholder.classList.add('hidden');
    };
    reader.readAsDataURL(file);
    setDirty(true);
  }

  coverInput.addEventListener('change', () => {
    if (coverInput.files && coverInput.files[0]) handleCover(coverInput.files[0]);
  });

  ['dragover', 'dragenter'].forEach((evt) => {
    coverDrop.addEventListener(evt, (e) => { e.preventDefault(); coverDrop.classList.add('border-[#1D5FA8]'); });
  });
  ['dragleave', 'drop'].forEach((evt) => {
    coverDrop.addEventListener(evt, (e) => { e.preventDefault(); coverDrop.classList.remove('border-[#1D5FA8]'); });
  });
  coverDrop.addEventListener('drop', (e) => {
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) handleCover(f);
  });

  // ---------------------------------------------------------------
  // Trình soạn thảo
  // ---------------------------------------------------------------
  document.querySelectorAll('[data-cmd]').forEach((btn) => {
    btn.addEventListener('mousedown', (e) => e.preventDefault()); // giữ vùng chọn
    btn.addEventListener('click', () => {
      editor.focus();
      document.execCommand(btn.dataset.cmd, false, null);
      setDirty(true);
      updateWordCount();
    });
  });

  document.querySelectorAll('[data-block]').forEach((btn) => {
    btn.addEventListener('mousedown', (e) => e.preventDefault());
    btn.addEventListener('click', () => {
      editor.focus();
      document.execCommand('formatBlock', false, '<' + btn.dataset.block + '>');
      setDirty(true);
    });
  });

  el('linkBtn').addEventListener('mousedown', (e) => e.preventDefault());
  el('linkBtn').addEventListener('click', () => {
    const url = prompt('Nhập địa chỉ liên kết:', 'https://');
    if (!url) return;
    editor.focus();
    document.execCommand('createLink', false, url);
    setDirty(true);
  });

  el('imgBtn').addEventListener('click', () => inlineImgInput.click());

  inlineImgInput.addEventListener('change', async () => {
    const file = inlineImgInput.files && inlineImgInput.files[0];
    if (!file) return;

    showToast('Đang tải ảnh lên...');
    try {
      const fd = new FormData();
      fd.append('image', file);
      fd.append('name', titleInput.value || 'noi-dung');

      const res = await fetch('/api/posts/upload-image', { method: 'POST', body: fd });
      if (res.status === 401) { showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Tải ảnh thất bại.');

      // Chèn ảnh với đường dẫn dùng cho website thật ("../images/...")
      editor.focus();
      document.execCommand('insertHTML', false,
        '<img src="' + json.url + '" alt="' + escapeHtml(titleInput.value) + '">');
      setDirty(true);
      showToast('Đã chèn ảnh vào bài.');
    } catch (e) {
      showToast(e.message, true);
    } finally {
      inlineImgInput.value = '';
    }
  });

  editor.addEventListener('input', () => { setDirty(true); updateWordCount(); });

  // Dán từ Word/web: chỉ lấy chữ, tránh mang theo định dạng rác
  editor.addEventListener('paste', (e) => {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text/plain');
    document.execCommand('insertText', false, text);
  });

  function updateWordCount() {
    const text = editor.innerText.trim();
    const words = text ? text.split(/\s+/).length : 0;
    wordCount.textContent = words + ' từ';
  }

  [titleInput, excerptInput, categoryInput, tagInput, dateInput, authorInput, sourceInput].forEach((i) => {
    i.addEventListener('input', () => setDirty(true));
  });
  featuredInput.addEventListener('change', () => setDirty(true));

  // ---------------------------------------------------------------
  // Lưu / xóa
  // ---------------------------------------------------------------
  saveBtn.addEventListener('click', async () => {
    formError.classList.add('hidden');

    const title = titleInput.value.trim();
    if (!title) {
      formError.textContent = 'Vui lòng nhập tiêu đề bài viết.';
      formError.classList.remove('hidden');
      return;
    }
    if (!currentId && !coverFile) {
      formError.textContent = 'Vui lòng chọn ảnh bìa cho bài viết.';
      formError.classList.remove('hidden');
      return;
    }

    const fd = new FormData();
    fd.append('title', title);
    fd.append('excerpt', excerptInput.value.trim());
    fd.append('category', categoryInput.value.trim());
    fd.append('tag', tagInput.value.trim());
    fd.append('date', dateInput.value);
    fd.append('author', authorInput.value.trim());
    fd.append('sourceUrl', sourceInput.value.trim());
    fd.append('featured', featuredInput.checked ? 'true' : 'false');
    fd.append('contentHtml', editor.innerHTML);
    if (coverFile) fd.append('cover', coverFile);

    saveBtn.disabled = true;
    const original = saveBtn.innerHTML;
    saveBtn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Đang lưu...';

    try {
      const url = currentId ? '/api/posts/' + encodeURIComponent(currentId) : '/api/posts';
      const res = await fetch(url, { method: currentId ? 'PUT' : 'POST', body: fd });
      if (res.status === 401) { showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Lưu thất bại.');

      setDirty(false);
      showToast(currentId ? 'Đã cập nhật bài viết.' : 'Đã đăng bài viết mới.');
      currentId = json.post.id;
      coverFile = null;
      await loadPosts();
      openPostSilently(currentId);
    } catch (e) {
      formError.textContent = e.message;
      formError.classList.remove('hidden');
    } finally {
      saveBtn.innerHTML = original;
      saveBtn.disabled = false;
    }
  });

  // Mở lại bài sau khi lưu mà không hỏi "thay đổi chưa lưu"
  function openPostSilently(id) {
    const wasDirty = dirty;
    dirty = false;
    openPost(id);
    if (wasDirty) dirty = false;
  }

  deleteBtn.addEventListener('click', async () => {
    if (!currentId) return;
    const p = POSTS.find((x) => x.id === currentId);
    if (!confirm('Xóa bài "' + (p ? p.title : '') + '"? Hành động này không thể hoàn tác.')) return;

    try {
      const res = await fetch('/api/posts/' + encodeURIComponent(currentId), { method: 'DELETE' });
      if (res.status === 401) { showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Không xóa được bài.');

      showToast('Đã xóa bài viết.');
      currentId = null;
      dirty = false;
      editorWrap.style.display = 'none';
      emptyPick.style.display = 'block';
      await loadPosts();
    } catch (e) {
      showToast(e.message, true);
    }
  });

  window.addEventListener('beforeunload', (e) => {
    if (dirty) { e.preventDefault(); e.returnValue = ''; }
  });

  // ---------------------------------------------------------------
  let toastTimeout = null;
  function showToast(message, isError) {
    toastBody.textContent = message;
    toastBody.className = 'px-5 py-3 rounded-xl shadow-xl text-sm font-bold text-white ' + (isError ? 'bg-red-600' : 'bg-[#1A2744]');
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 3500);
  }

  // Để chỉ báo đồng bộ (gitstatus.js) báo được lỗi đẩy GitHub cho người dùng
  window.showToast = showToast;

  checkAuth();
})();
