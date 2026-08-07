(function () {
  'use strict';

  let DATA = { products: [], categories: [] };
  let currentCat = 'all';
  let searchTerm = '';
  let editingId = null;

  // Thư viện ảnh của sản phẩm đang sửa.
  // Mỗi phần tử: { kind:'old', path:'../images/...' } hoặc { kind:'new', file:File, preview:'data:...' }
  let gallery = [];

  const el = (id) => document.getElementById(id);

  const categoryList = el('categoryList');
  const productGrid = el('productGrid');
  const resultsInfo = el('resultsInfo');
  const emptyState = el('emptyState');
  const searchInput = el('searchInput');
  const addBtn = el('addBtn');
  const syncBtn = el('syncBtn');
  const syncStatus = el('syncStatus');

  const modalBackdrop = el('modalBackdrop');
  const productForm = el('productForm');
  const modalTitle = el('modalTitle');
  const closeModalBtn = el('closeModalBtn');
  const cancelBtn = el('cancelBtn');
  const formError = el('formError');

  const productIdInput = el('productId');
  const titleInput = el('titleInput');
  const catSelect = el('catSelect');
  const newCatInput = el('newCatInput');
  const subcatSelect = el('subcatSelect');
  const newSubcatInput = el('newSubcatInput');
  const descInput = el('descInput');
  const appListInput = el('appListInput');
  const prosListInput = el('prosListInput');
  const commitListInput = el('commitListInput');
  const autoFillBtn = el('autoFillBtn');
  const autoFillNote = el('autoFillNote');

  // Biến các ô nội dung thành ô soạn thảo có nút In đậm / Nghiêng / Gạch chân.
  // Giá trị vẫn được ghi ngược vào textarea nên phần code còn lại không đổi;
  // chỉ cần dùng setField() thay cho phép gán .value trực tiếp.
  RichText.attach(descInput, { hint: 'Mỗi dòng là 1 đoạn' });
  RichText.attach(appListInput);
  RichText.attach(prosListInput);
  RichText.attach(commitListInput);

  function setField(input, value) { RichText.set(input, value); }
  const noidungBox = el('noidungBox');
  const noidungSelect = el('noidungSelect');
  const noidungCount = el('noidungCount');
  const noidungNote = el('noidungNote');

  // Bộ khung nội dung lấy từ bài đã chọn trong file noidung.md (gửi kèm khi lưu)
  let pickedColumns = null;
  let pickedHeading = '';
  let pickedShortDesc = '';

  const dropZone = el('dropZone');
  const imageInput = el('imageInput');
  const galleryGrid = el('galleryGrid');
  const galleryCount = el('galleryCount');
  const addImagesBtn = el('addImagesBtn');

  const toast = el('toast');
  const toastBody = el('toastBody');

  const loginScreen = el('loginScreen');
  const loginForm = el('loginForm');
  const loginPassword = el('loginPassword');
  const loginError = el('loginError');
  const loginBtn = el('loginBtn');
  const logoutBtn = el('logoutBtn');

  // ---------------------------------------------------------------
  // Đăng nhập
  // ---------------------------------------------------------------
  function showLogin() {
    loginScreen.style.display = 'flex';
    loginPassword.focus();
  }

  function hideLogin() {
    loginScreen.style.display = 'none';
  }

  async function checkAuth() {
    try {
      const res = await fetch('/api/me');
      const json = await res.json();

      // Chế độ online tự lưu lên GitHub -> không cần nút đồng bộ thủ công
      if (json.autoSync) syncBtn.style.display = 'none';
      if (json.needsPassword) logoutBtn.style.display = 'flex';

      if (json.authenticated) {
        hideLogin();
        loadData();
        loadNoidungList();
      } else {
        showLogin();
      }
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
      loadData();
      loadNoidungList();
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
  // Data loading
  // ---------------------------------------------------------------
  async function loadData() {
    try {
      const res = await fetch('/api/data');
      if (res.status === 401) { showLogin(); return; }
      if (!res.ok) throw new Error('Không tải được dữ liệu (HTTP ' + res.status + ')');
      DATA = await res.json();
      if (DATA.autoSync) syncBtn.style.display = 'none';
      render();
    } catch (e) {
      showToast('Lỗi tải dữ liệu: ' + e.message, true);
    }
  }

  function render() {
    renderSidebar();
    renderGrid();
  }

  function renderSidebar() {
    const totalCount = DATA.products.length;
    let html = '';
    html += '<button data-cat="all" class="cat-item ' + (currentCat === 'all' ? 'active' : '') +
      ' w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition">' +
      '<span class="flex items-center gap-2"><span class="material-symbols-outlined text-[18px]">grid_view</span>Tất cả</span>' +
      '<span class="cat-count text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">' + totalCount + '</span>' +
      '</button>';

    DATA.categories.forEach((c) => {
      const active = currentCat === c.catId;
      html += '<button data-cat="' + c.catId + '" class="cat-item ' + (active ? 'active' : '') +
        ' w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition text-left">' +
        '<span class="truncate">' + escapeHtml(c.catLabel) + '</span>' +
        '<span class="cat-count shrink-0 text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">' + c.count + '</span>' +
        '</button>';
    });

    categoryList.innerHTML = html;
    categoryList.querySelectorAll('.cat-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentCat = btn.dataset.cat;
        render();
      });
    });
  }

  function getFilteredProducts() {
    let list = DATA.products;
    if (currentCat !== 'all') list = list.filter((p) => p.cat === currentCat);
    if (searchTerm.trim()) {
      const q = searchTerm.trim().toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    return list;
  }

  function renderGrid() {
    const list = getFilteredProducts();
    resultsInfo.textContent = 'Hiển thị ' + list.length + ' / ' + DATA.products.length + ' sản phẩm';

    if (list.length === 0) {
      productGrid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }
    emptyState.classList.add('hidden');

    productGrid.innerHTML = list.map((p) => {
      const label = p.subcatLabel || p.catLabel || '';
      const safeTitle = escapeHtml(p.title);
      const imgSrc = toAdminImgPath(p.img);
      return (
        '<div class="bg-white rounded-2xl border border-gray-200 overflow-hidden group">' +
        '<div class="aspect-square bg-gray-50 overflow-hidden relative">' +
        '<img src="' + imgSrc + '" alt="' + safeTitle + '" loading="lazy" class="w-full h-full object-cover" onerror="this.style.opacity=0.15">' +
        '</div>' +
        '<div class="p-4">' +
        '<p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 truncate" title="' + escapeHtml(label) + '">' + escapeHtml(label) + '</p>' +
        '<h3 class="font-bold text-sm text-[#1A2744] mb-3 line-clamp-2 min-h-[2.5em]" title="' + safeTitle + '">' + safeTitle + '</h3>' +
        '<div class="flex items-center gap-2">' +
        '<button data-edit="' + p.id + '" class="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-gray-50 hover:bg-[#EBF3FF] hover:text-[#1D5FA8] text-xs font-bold text-gray-600 transition">' +
        '<span class="material-symbols-outlined text-[16px]">edit</span>Sửa</button>' +
        '<button data-delete="' + p.id + '" class="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-50 hover:bg-red-50 hover:text-red-600 text-xs font-bold text-gray-500 transition">' +
        '<span class="material-symbols-outlined text-[16px]">delete</span>' +
        '</button>' +
        '</div></div></div>'
      );
    }).join('');

    productGrid.querySelectorAll('[data-edit]').forEach((btn) => {
      btn.addEventListener('click', () => openEditModal(btn.dataset.edit));
    });
    productGrid.querySelectorAll('[data-delete]').forEach((btn) => {
      btn.addEventListener('click', () => deleteProduct(btn.dataset.delete));
    });
  }

  // Trong js/products.js, field "img" có dạng "../images/..." (đường dẫn tương đối
  // tính từ html/ hoặc product/). Server admin phục vụ thư mục images/ qua route
  // riêng "/images", nên ta chỉ cần lấy phần sau "images/" và thêm "/images/" vào trước.
  function toAdminImgPath(imgPath) {
    if (!imgPath) return '';
    const idx = imgPath.indexOf('images/');
    if (idx !== -1) return '/' + imgPath.slice(idx);
    return imgPath;
  }

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }

  // ---------------------------------------------------------------
  // Modal: thêm / sửa
  // ---------------------------------------------------------------
  function populateCatSelect(selectedCatId) {
    let html = '';
    DATA.categories.forEach((c) => {
      html += '<option value="' + c.catId + '">' + escapeHtml(c.catLabel) + '</option>';
    });
    html += '<option value="__new__">➕ Danh mục mới...</option>';
    catSelect.innerHTML = html;
    catSelect.value = selectedCatId || '__new__';
  }

  function populateSubcatSelect(catId, selectedSubcatId) {
    const cat = DATA.categories.find((c) => c.catId === catId);
    let html = '<option value="__none__">(Không có danh mục con)</option>';
    if (cat) {
      cat.subcats.forEach((s) => {
        html += '<option value="' + s.subcatId + '">' + escapeHtml(s.subcatLabel) + '</option>';
      });
    }
    html += '<option value="__new__">➕ Danh mục con mới...</option>';
    subcatSelect.innerHTML = html;
    subcatSelect.value = selectedSubcatId || '__none__';
  }

  function handleCatChange() {
    const isNew = catSelect.value === '__new__';
    newCatInput.classList.toggle('hidden', !isNew);
    if (isNew) {
      newCatInput.value = '';
      newCatInput.focus();
      populateSubcatSelect(null, '__none__');
    } else {
      populateSubcatSelect(catSelect.value, '__none__');
    }
    handleSubcatChange();
  }

  function handleSubcatChange() {
    const isNew = subcatSelect.value === '__new__';
    newSubcatInput.classList.toggle('hidden', !isNew);
    if (isNew) newSubcatInput.value = '';
    refreshCategoryContentFields();
  }

  catSelect.addEventListener('change', handleCatChange);
  subcatSelect.addEventListener('change', handleSubcatChange);

  // Khoá "danh mục/danh mục con" hiện đang được dùng để tải nội dung 3 cột,
  // dùng để tránh nạp chồng lên kết quả cũ khi người dùng đổi lựa chọn liên tục.
  let contentFetchToken = 0;

  // Xác định key nội dung hiệu lực (subcat nếu có & là mục có sẵn, ngược lại cat
  // nếu có sẵn). Nếu đang tạo mới danh mục/danh mục con thì chưa có nội dung sẵn.
  function currentContentKey() {
    if (subcatSelect.value && subcatSelect.value !== '__new__' && subcatSelect.value !== '__none__') {
      return subcatSelect.value;
    }
    if (catSelect.value && catSelect.value !== '__new__') {
      return catSelect.value;
    }
    return null;
  }

  async function refreshCategoryContentFields() {
    const key = currentContentKey();
    const token = ++contentFetchToken;
    if (!key) {
      setField(appListInput, '');
      setField(prosListInput, '');
      setField(commitListInput, '');
      return;
    }
    try {
      const res = await fetch('/api/category-content/' + encodeURIComponent(key));
      if (res.status === 401) { showLogin(); return; }
      if (!res.ok) return;
      const json = await res.json();
      if (token !== contentFetchToken) return; // đã có lựa chọn mới hơn, bỏ kết quả cũ
      setField(appListInput, (json.appItems || []).join('\n'));
      setField(prosListInput, (json.prosItems || []).join('\n'));
      setField(commitListInput, (json.commitItems || []).join('\n'));
    } catch (e) {
      // im lặng bỏ qua, không chặn việc thêm/sửa sản phẩm
    }
  }

  function resetForm() {
    editingId = null;
    gallery = [];
    renderGallery();
    productIdInput.value = '';
    titleInput.value = '';
    setField(descInput, '');
    setField(appListInput, '');
    setField(prosListInput, '');
    setField(commitListInput, '');
    imageInput.value = '';
    formError.classList.add('hidden');
    formError.textContent = '';
    autoFillNote.classList.add('hidden');
    noidungNote.classList.add('hidden');
    noidungSelect.value = '';
    pickedColumns = null;
    pickedHeading = '';
    pickedShortDesc = '';
    populateCatSelect(DATA.categories.length ? DATA.categories[0].catId : '__new__');
    handleCatChange();
  }

  function openAddModal() {
    resetForm();
    modalTitle.textContent = 'Thêm sản phẩm';
    if (currentCat !== 'all') {
      populateCatSelect(currentCat);
      handleCatChange();
    }
    modalBackdrop.classList.remove('hidden');
  }

  function openEditModal(id) {
    const p = DATA.products.find((x) => x.id === id);
    if (!p) return;
    resetForm();
    editingId = id;
    productIdInput.value = id;
    modalTitle.textContent = 'Sửa sản phẩm';
    titleInput.value = p.title;
    setField(descInput, p.desc || '');
    populateCatSelect(p.cat);
    populateSubcatSelect(p.cat, p.subcat || '__none__');
    newCatInput.classList.add('hidden');
    newSubcatInput.classList.add('hidden');
    refreshCategoryContentFields();

    // Sản phẩm cũ chỉ có 1 ảnh (field img) -> vẫn hiện đúng trong thư viện
    const existing = Array.isArray(p.images) && p.images.length
      ? p.images
      : (p.img ? [p.img] : []);
    gallery = existing.map((path) => ({ kind: 'old', path: path }));
    renderGallery();

    modalBackdrop.classList.remove('hidden');
  }

  function closeModal() {
    modalBackdrop.classList.add('hidden');
  }

  addBtn.addEventListener('click', openAddModal);
  closeModalBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => { if (e.target === modalBackdrop) closeModal(); });

  // ---------------------------------------------------------------
  // Thư viện ảnh: thêm nhiều ảnh, kéo sắp xếp, xóa, chọn ảnh bìa
  // ---------------------------------------------------------------
  function renderGallery() {
    galleryCount.textContent = gallery.length ? '(' + gallery.length + ' ảnh)' : '';

    galleryGrid.innerHTML = gallery.map((item, i) => {
      const src = item.kind === 'old' ? toAdminImgPath(item.path) : item.preview;
      return (
        '<div class="gal-item' + (i === 0 ? ' is-cover' : '') + '" data-index="' + i + '" draggable="true">' +
        '<img src="' + escapeHtml(src) + '" alt="Ảnh ' + (i + 1) + '" loading="lazy">' +
        (i === 0 ? '<span class="gal-badge">ẢNH BÌA</span>' : '') +
        '<div class="gal-actions">' +
        (i === 0 ? '' :
          '<button type="button" class="gal-btn" data-action="cover" title="Đặt làm ảnh bìa">' +
          '<span class="material-symbols-outlined">star</span></button>') +
        '<button type="button" class="gal-btn del" data-action="remove" title="Xóa ảnh">' +
        '<span class="material-symbols-outlined">close</span></button>' +
        '</div></div>'
      );
    }).join('');

    wireGalleryItems();
  }

  function wireGalleryItems() {
    galleryGrid.querySelectorAll('.gal-item').forEach((card) => {
      const idx = Number(card.dataset.index);

      const coverBtn = card.querySelector('[data-action="cover"]');
      if (coverBtn) {
        coverBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const [moved] = gallery.splice(idx, 1);
          gallery.unshift(moved);
          renderGallery();
        });
      }

      const delBtn = card.querySelector('[data-action="remove"]');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.preventDefault();
          gallery.splice(idx, 1);
          renderGallery();
        });
      }

      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(idx));
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        galleryGrid.querySelectorAll('.gal-item').forEach((c) => c.classList.remove('drag-over'));
      });
      card.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        card.classList.add('drag-over');
      });
      card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
      card.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        card.classList.remove('drag-over');
        const from = Number(e.dataTransfer.getData('text/plain'));
        if (Number.isNaN(from) || from === idx) return;
        const [moved] = gallery.splice(from, 1);
        gallery.splice(idx, 0, moved);
        renderGallery();
      });
    });
  }

  function addFiles(fileList) {
    const files = Array.from(fileList || []).filter((f) => f.type.startsWith('image/'));
    if (!files.length) return;

    let pending = files.length;
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        gallery.push({ kind: 'new', file: file, preview: e.target.result });
        pending--;
        if (pending === 0) renderGallery();
      };
      reader.readAsDataURL(file);
    });
  }

  addImagesBtn.addEventListener('click', () => imageInput.click());

  imageInput.addEventListener('change', () => {
    addFiles(imageInput.files);
    imageInput.value = '';
  });

  ['dragover', 'dragenter'].forEach((evt) => {
    dropZone.addEventListener(evt, (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
  });
  ['dragleave', 'drop'].forEach((evt) => {
    dropZone.addEventListener(evt, (e) => { e.preventDefault(); dropZone.classList.remove('dragover'); });
  });
  dropZone.addEventListener('drop', (e) => {
    addFiles(e.dataTransfer.files);
  });

  // ---------------------------------------------------------------
  // Submit form (thêm / sửa)
  // ---------------------------------------------------------------
  productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formError.classList.add('hidden');

    const title = titleInput.value.trim();
    if (!title) { showFormError('Vui lòng nhập tên sản phẩm.'); return; }
    if (!gallery.length) { showFormError('Vui lòng thêm ít nhất 1 ảnh sản phẩm.'); return; }

    const fd = new FormData();
    fd.append('title', title);
    fd.append('desc', descInput.value.trim());
    fd.append('catId', catSelect.value);
    fd.append('newCatLabel', newCatInput.value.trim());
    fd.append('subcatId', subcatSelect.value);
    fd.append('newSubcatLabel', newSubcatInput.value.trim());
    fd.append('appList', appListInput.value);
    fd.append('prosList', prosListInput.value);
    fd.append('commitList', commitListInput.value);
    if (pickedColumns && pickedColumns.length) {
      fd.append('noidungColumns', JSON.stringify(pickedColumns));
      fd.append('noidungHeading', pickedHeading);
      fd.append('noidungShortDesc', pickedShortDesc);
    }
    // Thư viện ảnh: gửi thứ tự cuối cùng, ảnh mới đánh dấu bằng __NEW_i__
    // rồi đính kèm file theo đúng thứ tự đó.
    const order = [];
    let newIdx = 0;
    gallery.forEach((item) => {
      if (item.kind === 'old') {
        order.push(item.path);
      } else {
        order.push('__NEW_' + newIdx + '__');
        fd.append('gallery', item.file);
        newIdx++;
      }
    });
    fd.append('imageOrder', JSON.stringify(order));

    const submitBtn = el('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Đang lưu...';

    try {
      const url = editingId ? '/api/products/' + encodeURIComponent(editingId) : '/api/products';
      const method = editingId ? 'PUT' : 'POST';
      const res = await fetch(url, { method, body: fd });
      if (res.status === 401) { closeModal(); showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Có lỗi xảy ra.');
      closeModal();
      showToast(editingId ? 'Đã cập nhật sản phẩm.' : 'Đã thêm sản phẩm mới.');
      await loadData();
    } catch (err) {
      showFormError(err.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Lưu sản phẩm';
    }
  });

  function showFormError(msg) {
    formError.textContent = msg;
    formError.classList.remove('hidden');
  }

  // ---------------------------------------------------------------
  // Danh sách thả xuống: chọn sẵn nội dung từ file noidung.md
  // ---------------------------------------------------------------
  async function loadNoidungList() {
    try {
      const res = await fetch('/api/noidung');
      if (!res.ok) return;
      const json = await res.json();
      if (!json.available || !json.items.length) return;

      noidungSelect.innerHTML =
        '<option value="">— Tự nhập tay —</option>' +
        json.items.map((it) =>
          '<option value="' + escapeHtml(it.id) + '">' +
          escapeHtml(it.name) + ' (' + it.columnCount + ' khung)' +
          '</option>'
        ).join('');

      noidungCount.textContent = json.items.length + ' bài';
      noidungBox.style.display = 'block';
    } catch (e) {
      // Không có file nội dung cũng không sao, chỉ ẩn phần này đi
    }
  }

  // Ghép các khung của bài vào đúng 3 ô quen thuộc; khung nào không thuộc
  // 3 loại đó vẫn được giữ và lưu kèm khi bấm Lưu sản phẩm.
  function fillFromArticle(art) {
    pickedColumns = art.columns || [];
    pickedHeading = art.heading || '';
    pickedShortDesc = art.shortDesc || '';

    if (art.heading) titleInput.value = art.heading;
    if (art.shortDesc) setField(descInput, art.shortDesc);

    const pick = (keyword) => {
      const col = pickedColumns.find((c) => stripTones(c.title).includes(keyword));
      return col ? col.items.join('\n') : '';
    };

    setField(appListInput, pick('ung dung'));
    setField(prosListInput, pick('uu diem') || pick('dac diem') || pick('noi bat'));
    setField(commitListInput, pick('cam ket'));

    const known = ['ung dung', 'uu diem', 'dac diem', 'noi bat', 'cam ket'];
    const extra = pickedColumns.filter(
      (c) => !known.some((k) => stripTones(c.title).includes(k))
    );

    noidungNote.classList.remove('hidden');
    noidungNote.textContent =
      'Đã nạp ' + pickedColumns.length + ' khung nội dung.' +
      (extra.length
        ? ' Trong đó ' + extra.length + ' khung ngoài 3 ô bên dưới (' +
          extra.map((c) => c.title).join(', ') + ') sẽ được thêm khi bạn bấm Lưu.'
        : '');
  }

  // Tạo regex từ mã ký tự thay vì gõ thẳng dấu kết hợp vào mã nguồn,
  // tránh sai lệch khi file được lưu ở bảng mã khác.
  var COMBINING_RE = new RegExp(
    '[' + String.fromCodePoint(0x0300) + '-' + String.fromCodePoint(0x036f) + ']', 'g'
  );

  function stripTones(str) {
    return String(str || '')
      .normalize('NFD')
      .replace(COMBINING_RE, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .toLowerCase();
  }

  noidungSelect.addEventListener('change', async () => {
    const id = noidungSelect.value;
    noidungNote.classList.add('hidden');

    if (!id) {
      pickedColumns = null;
      pickedHeading = '';
      pickedShortDesc = '';
      return;
    }

    try {
      const res = await fetch('/api/noidung/' + encodeURIComponent(id));
      if (res.status === 401) { closeModal(); showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Không tải được nội dung.');
      fillFromArticle(json);
      showToast('Đã điền nội dung từ file. Bạn nên xem lại trước khi lưu.');
    } catch (err) {
      showFormError(err.message);
    }
  });

  // ---------------------------------------------------------------
  // Tự động điền từ nội dung mô tả
  // ---------------------------------------------------------------
  autoFillBtn.addEventListener('click', async () => {
    const desc = descInput.value.trim();
    autoFillNote.classList.add('hidden');

    if (!desc) {
      showFormError('Vui lòng nhập nội dung mô tả trước khi bấm "Tự động điền".');
      return;
    }

    formError.classList.add('hidden');
    autoFillBtn.disabled = true;
    const originalHtml = autoFillBtn.innerHTML;
    autoFillBtn.innerHTML =
      '<span class="material-symbols-outlined text-[16px] animate-spin">progress_activity</span> Đang phân tích...';

    try {
      const res = await fetch('/api/analyze-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ desc }),
      });
      if (res.status === 401) { closeModal(); showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Không phân tích được nội dung.');

      let filled = 0;
      if (json.title) { titleInput.value = json.title; filled++; }
      if (json.appItems && json.appItems.length) { setField(appListInput, json.appItems.join('\n')); filled++; }
      if (json.prosItems && json.prosItems.length) { setField(prosListInput, json.prosItems.join('\n')); filled++; }
      if (json.commitItems && json.commitItems.length) { setField(commitListInput, json.commitItems.join('\n')); filled++; }

      if (json.warning) {
        autoFillNote.textContent = json.warning;
        autoFillNote.classList.remove('hidden');
      }

      if (filled === 0) {
        showFormError('Không tách được nội dung nào từ đoạn mô tả này.');
      } else {
        showToast(
          json.source === 'ai'
            ? 'Đã tự động điền bằng AI. Bạn nên đọc lại và chỉnh cho đúng ý.'
            : 'Đã tự động điền theo tiêu đề trong mô tả.'
        );
      }
    } catch (err) {
      showFormError(err.message);
    } finally {
      autoFillBtn.disabled = false;
      autoFillBtn.innerHTML = originalHtml;
    }
  });

  // ---------------------------------------------------------------
  // Xóa sản phẩm
  // ---------------------------------------------------------------
  async function deleteProduct(id) {
    const p = DATA.products.find((x) => x.id === id);
    const name = p ? p.title : id;
    if (!confirm('Xóa sản phẩm "' + name + '"? Hành động này không thể hoàn tác.')) return;
    try {
      const res = await fetch('/api/products/' + encodeURIComponent(id), { method: 'DELETE' });
      if (res.status === 401) { showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Không xóa được sản phẩm.');
      showToast('Đã xóa sản phẩm.');
      await loadData();
    } catch (err) {
      showToast('Lỗi: ' + err.message, true);
    }
  }

  // ---------------------------------------------------------------
  // Tìm kiếm
  // ---------------------------------------------------------------
  let searchDebounce = null;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      searchTerm = searchInput.value;
      renderGrid();
    }, 150);
  });

  // ---------------------------------------------------------------
  // Đồng bộ GitHub
  // ---------------------------------------------------------------
  syncBtn.addEventListener('click', async () => {
    syncBtn.disabled = true;
    const originalHtml = syncBtn.innerHTML;
    syncBtn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Đang đồng bộ...';
    syncStatus.textContent = '';
    try {
      const res = await fetch('/api/sync', { method: 'POST' });
      const json = await res.json();
      if (!json.ok) throw new Error(json.message || 'Đồng bộ thất bại.');
      showToast(json.message);
      syncStatus.textContent = 'Đồng bộ lúc ' + new Date().toLocaleTimeString('vi-VN');
    } catch (err) {
      showToast('Lỗi đồng bộ: ' + err.message, true);
    } finally {
      syncBtn.disabled = false;
      syncBtn.innerHTML = originalHtml;
    }
  });

  // ---------------------------------------------------------------
  // Toast
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

  // ---------------------------------------------------------------
  checkAuth();
})();
