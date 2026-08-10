(function () {
  'use strict';

  const el = (id) => document.getElementById(id);

  let REVIEWS = [];
  let PRODUCTS = [];
  let filter = 'pending';

  const list = el('list');
  const empty = el('empty');
  const emptyText = el('emptyText');
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

  function starsHtml(n) {
    n = Math.max(0, Math.min(5, Number(n) || 0));
    let s = '';
    for (let i = 1; i <= 5; i++) s += (i <= n ? '★' : '<span class="off">★</span>');
    return '<span class="stars">' + s + '</span>';
  }

  function formatDate(iso) {
    const p = String(iso || '').split('-');
    return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : (iso || '');
  }

  function productName(id) {
    if (!id) return 'Đánh giá chung về công ty';
    const p = PRODUCTS.find((x) => x.id === id);
    return p ? p.title : id;
  }

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
      if (json.authenticated) { hideLogin(); loadAll(); }
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
      loadAll();
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
  // Tải dữ liệu
  // ---------------------------------------------------------------
  async function loadAll() {
    try {
      const [rRes, pRes] = await Promise.all([
        fetch('/api/reviews/all'),
        fetch('/api/data'),
      ]);
      if (rRes.status === 401) { showLogin(); return; }
      if (!rRes.ok) throw new Error('Không tải được danh sách phản hồi.');

      REVIEWS = (await rRes.json()).reviews || [];
      if (pRes.ok) PRODUCTS = (await pRes.json()).products || [];

      render();
    } catch (e) {
      showToast(e.message, true);
    }
  }

  function filtered() {
    if (filter === 'pending') return REVIEWS.filter((r) => !r.approved);
    if (filter === 'approved') return REVIEWS.filter((r) => r.approved);
    if (filter === 'general') return REVIEWS.filter((r) => !r.productId);
    return REVIEWS;
  }

  function render() {
    const pending = REVIEWS.filter((r) => !r.approved).length;
    const approved = REVIEWS.filter((r) => r.approved).length;
    const general = REVIEWS.filter((r) => !r.productId).length;
    el('cntPending').textContent = '(' + pending + ')';
    el('cntApproved').textContent = '(' + approved + ')';
    el('cntGeneral').textContent = '(' + general + ')';

    const items = filtered().slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));

    if (!items.length) {
      list.innerHTML = '';
      empty.classList.remove('hidden');
      emptyText.textContent = filter === 'pending'
        ? 'Không có phản hồi nào đang chờ duyệt.'
        : 'Chưa có phản hồi nào.';
      return;
    }
    empty.classList.add('hidden');

    list.innerHTML = items.map((r) => {
      const badge = r.approved
        ? '<span class="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[11px] font-extrabold">ĐÃ ĐĂNG</span>'
        : '<span class="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-[11px] font-extrabold">CHỜ DUYỆT</span>';

      return (
        '<div class="bg-white rounded-2xl border border-gray-200 p-5" data-id="' + escapeHtml(r.id) + '">' +
        '<div class="flex flex-wrap items-center gap-3 mb-3">' +
        badge + starsHtml(r.rating) +
        '<span class="text-xs font-semibold text-gray-400">' + escapeHtml(formatDate(r.date)) + '</span>' +
        '<span class="text-xs font-bold text-[#1D5FA8] truncate">' + escapeHtml(productName(r.productId)) + '</span>' +
        '</div>' +

        '<h3 class="font-extrabold text-[#1A2744] text-sm mb-1">' + escapeHtml(r.title) + '</h3>' +
        '<p class="text-sm text-gray-600 leading-relaxed mb-2">' + escapeHtml(r.content).replace(/\n/g, '<br>') + '</p>' +
        '<p class="text-xs font-semibold text-gray-400 mb-4">— ' + escapeHtml(r.author) +
        (r.role ? ' <span class="text-gray-300">·</span> ' + escapeHtml(r.role) : '') + '</p>' +

        '<label class="block text-[11px] font-extrabold uppercase tracking-wide text-gray-500 mb-1.5">Phản hồi của Thành Phong</label>' +
        '<textarea data-field="reply" rows="2" placeholder="Nhập câu trả lời (để trống nếu không cần)..."' +
        ' class="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-medium mb-3 focus:outline-none focus:ring-2 focus:ring-[#1D5FA8]/20 focus:border-[#1D5FA8]">' +
        escapeHtml(r.reply || '') + '</textarea>' +

        '<div class="flex flex-wrap items-center gap-2">' +
        (r.approved
          ? '<button data-action="unapprove" class="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 text-xs font-bold hover:bg-gray-200 transition">Gỡ khỏi website</button>'
          : '<button data-action="approve" class="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition">Duyệt &amp; đăng</button>') +
        '<button data-action="save" class="px-4 py-2 rounded-xl bg-[#1D5FA8] text-white text-xs font-bold hover:bg-[#164A85] transition">Lưu câu trả lời</button>' +
        '<button data-action="delete" class="ml-auto px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:bg-red-50 hover:text-red-600 transition">Xóa</button>' +
        '</div></div>'
      );
    }).join('');

    wireItems();
  }

  function wireItems() {
    // Ô trả lời khách cũng có nút In đậm / Nghiêng / Gạch chân
    list.querySelectorAll('textarea[data-field="reply"]').forEach((ta) => {
      RichText.attach(ta, { hint: 'Bôi đen rồi bấm B / I / U' });
    });

    list.querySelectorAll('[data-id]').forEach((card) => {
      const id = card.dataset.id;
      const replyEl = card.querySelector('[data-field="reply"]');

      const act = (action) => async () => {
        if (action === 'delete') {
          if (!confirm('Xóa phản hồi này? Hành động không thể hoàn tác.')) return;
          await send('DELETE', '/api/reviews/' + encodeURIComponent(id), null, 'Đã xóa phản hồi.');
          return;
        }
        const body = { reply: replyEl ? replyEl.value : '' };
        if (action === 'approve') body.approved = true;
        if (action === 'unapprove') body.approved = false;

        const msg = action === 'approve' ? 'Đã duyệt và đăng lên website.'
          : action === 'unapprove' ? 'Đã gỡ khỏi website.'
          : 'Đã lưu câu trả lời.';
        await send('PUT', '/api/reviews/' + encodeURIComponent(id), body, msg);
      };

      ['approve', 'unapprove', 'save', 'delete'].forEach((a) => {
        const btn = card.querySelector('[data-action="' + a + '"]');
        if (btn) btn.addEventListener('click', act(a));
      });
    });
  }

  async function send(method, url, body, okMsg) {
    try {
      const res = await fetch(url, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined,
      });
      if (res.status === 401) { showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Thao tác thất bại.');
      showToast(okMsg);
      await loadAll();
    } catch (e) {
      showToast(e.message, true);
    }
  }

  // ---------------------------------------------------------------
  // Tự thêm đánh giá
  // ---------------------------------------------------------------
  const addBackdrop = el('addBackdrop');
  const addError = el('addError');

  function openAdd() {
    // Đổ danh sách sản phẩm để chọn
    el('aProduct').innerHTML =
      '<option value="">⭐ Đánh giá chung về công ty (hiện ở trang chủ)</option>' +
      PRODUCTS.slice()
        .sort((a, b) => a.title.localeCompare(b.title, 'vi'))
        .map((p) => '<option value="' + escapeHtml(p.id) + '">' + escapeHtml(p.title) + '</option>')
        .join('');

    el('aRating').value = '5';
    el('aAuthor').value = '';
    el('aRole').value = '';
    el('aTitle').value = '';
    el('aContent').value = '';
    el('aDate').value = new Date().toISOString().slice(0, 10);
    addError.classList.add('hidden');

    addBackdrop.style.display = 'flex';
  }

  function closeAdd() { addBackdrop.style.display = 'none'; }

  el('addBtn').addEventListener('click', openAdd);
  el('addClose').addEventListener('click', closeAdd);
  el('addCancel').addEventListener('click', closeAdd);
  addBackdrop.addEventListener('click', (e) => { if (e.target === addBackdrop) closeAdd(); });

  el('addForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    addError.classList.add('hidden');

    const payload = {
      productId: el('aProduct').value,
      rating: el('aRating').value,
      author: el('aAuthor').value.trim(),
      role: el('aRole').value.trim(),
      title: el('aTitle').value.trim(),
      content: el('aContent').value.trim(),
      date: el('aDate').value,
    };

    if (!payload.author || !payload.title || !payload.content) {
      addError.textContent = 'Vui lòng điền họ tên, tóm tắt và nội dung.';
      addError.classList.remove('hidden');
      return;
    }

    const btn = el('addSubmit');
    btn.disabled = true;
    btn.textContent = 'Đang lưu...';
    try {
      const res = await fetch('/api/reviews/manual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 401) { closeAdd(); showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Không thêm được đánh giá.');

      closeAdd();
      showToast('Đã thêm đánh giá và đăng lên website.');
      await loadAll();
    } catch (err) {
      addError.textContent = err.message;
      addError.classList.remove('hidden');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Thêm & đăng';
    }
  });

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      filter = btn.dataset.filter;
      render();
    });
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
