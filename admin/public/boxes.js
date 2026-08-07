(function () {
  'use strict';

  const el = (id) => document.getElementById(id);

  let TARGETS = [];
  let currentKey = null;
  let features = [];   // [{icon,color,iconWrapClass,iconClass,title,desc}]
  let columns = [];    // [{icon,color,title,items[]}]
  let dirty = false;

  const targetList = el('targetList');
  const emptyPick = el('emptyPick');
  const editor = el('editor');
  const editorTitle = el('editorTitle');
  const headingInput = el('headingInput');
  const shortDescInput = el('shortDescInput');
  const featureList = el('featureList');
  const columnList = el('columnList');
  const featureEmpty = el('featureEmpty');
  const columnEmpty = el('columnEmpty');
  const addFeatureBtn = el('addFeatureBtn');
  const addColumnBtn = el('addColumnBtn');
  const saveBtn = el('saveBtn');
  const logoutBtn = el('logoutBtn');
  const toast = el('toast');
  const toastBody = el('toastBody');
  const noidungBox = el('noidungBox');
  const noidungSelect = el('noidungSelect');
  const noidungCount = el('noidungCount');

  const loginScreen = el('loginScreen');
  const loginForm = el('loginForm');
  const loginPassword = el('loginPassword');
  const loginError = el('loginError');
  const loginBtn = el('loginBtn');

  // Bộ biểu tượng gợi ý (tên của Material Symbols)
  const ICON_CHOICES = [
    'verified', 'check_circle', 'info', 'thumb_up', 'groups', 'local_shipping',
    'shield', 'health_and_safety', 'construction', 'engineering', 'factory',
    'trending_up', 'star', 'workspace_premium', 'handshake', 'support_agent',
    'inventory_2', 'payments', 'schedule', 'eco', 'bolt', 'visibility',
  ];

  const COLOR_CHOICES = ['#1D5FA8', '#10B981', '#E8A500', '#EF4444', '#8B5CF6', '#0EA5E9'];

  function escapeHtml(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
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
      if (json.authenticated) { hideLogin(); loadTargets(); loadNoidungList(); }
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
      loadTargets();
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
  // Danh sách danh mục
  // ---------------------------------------------------------------
  async function loadTargets() {
    try {
      const res = await fetch('/api/blocks');
      if (res.status === 401) { showLogin(); return; }
      if (!res.ok) throw new Error('Không tải được danh sách danh mục.');
      const json = await res.json();
      TARGETS = json.targets || [];
      renderTargets();
    } catch (e) {
      showToast(e.message, true);
    }
  }

  function renderTargets() {
    targetList.innerHTML = TARGETS.map((t) => {
      const isSub = t.type === 'subcat';
      const active = currentKey === t.key ? ' active' : '';
      const dot = t.hasContent
        ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>'
        : '<span class="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>';
      return (
        '<button data-key="' + escapeHtml(t.key) + '" class="target-item' + active +
        ' w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left hover:bg-gray-50 transition ' +
        (isSub ? 'pl-7' : '') + '">' +
        dot +
        '<span class="flex-1 min-w-0">' +
        '<span class="block text-xs ' + (isSub ? 'font-semibold' : 'font-bold') + ' truncate">' +
        escapeHtml(t.label) + '</span>' +
        (isSub ? '' : '<span class="target-sub block text-[10px] text-gray-400 font-medium">Danh mục</span>') +
        '</span></button>'
      );
    }).join('');

    targetList.querySelectorAll('.target-item').forEach((btn) => {
      btn.addEventListener('click', () => selectTarget(btn.dataset.key));
    });
  }

  async function selectTarget(key) {
    if (dirty && !confirm('Bạn có thay đổi chưa lưu. Chuyển sang mục khác và bỏ các thay đổi đó?')) return;

    try {
      const res = await fetch('/api/blocks/' + encodeURIComponent(key));
      if (res.status === 401) { showLogin(); return; }
      if (!res.ok) throw new Error('Không tải được nội dung của mục này.');
      const json = await res.json();

      currentKey = key;
      features = json.features || [];
      columns = json.columns || [];
      headingInput.value = json.heading || '';
      shortDescInput.value = json.shortDesc || '';

      const target = TARGETS.find((t) => t.key === key);
      editorTitle.textContent = target ? target.label : key;

      emptyPick.style.display = 'none';
      editor.style.display = 'block';
      noidungSelect.value = '';
      setDirty(false);
      renderTargets();
      renderFeatures();
      renderColumns();
    } catch (e) {
      showToast(e.message, true);
    }
  }

  function setDirty(v) {
    dirty = v;
    saveBtn.disabled = !v;
  }

  // ---------------------------------------------------------------
  // Vẽ danh sách ô đặc điểm
  // ---------------------------------------------------------------
  function iconSelect(value, onChangeAttr) {
    const opts = ICON_CHOICES.slice();
    if (value && !opts.includes(value)) opts.unshift(value);
    return '<select ' + onChangeAttr + ' class="px-2 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold bg-white">' +
      opts.map((ic) => '<option value="' + escapeHtml(ic) + '"' + (ic === value ? ' selected' : '') + '>' + escapeHtml(ic) + '</option>').join('') +
      '</select>';
  }

  function colorSelect(value, onChangeAttr) {
    const opts = COLOR_CHOICES.slice();
    if (value && !opts.includes(value)) opts.unshift(value);
    return '<select ' + onChangeAttr + ' class="px-2 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold bg-white">' +
      opts.map((c) => '<option value="' + escapeHtml(c) + '"' + (c === value ? ' selected' : '') + '>' + escapeHtml(c) + '</option>').join('') +
      '</select>';
  }

  function renderFeatures() {
    featureEmpty.classList.toggle('hidden', features.length > 0);

    featureList.innerHTML = features.map((f, i) => {
      const color = f.color || '#1D5FA8';
      return (
        '<div class="block-card border border-gray-200 rounded-2xl p-4" data-kind="feature" data-index="' + i + '" draggable="false">' +
        '<div class="flex items-start gap-3">' +
        '<span class="drag-handle text-gray-300 hover:text-gray-500 pt-1 select-none" title="Kéo để đổi thứ tự">' +
        '<span class="material-symbols-outlined text-[20px]">drag_indicator</span></span>' +
        '<div class="flex-1 min-w-0">' +
        '<div class="flex flex-wrap items-center gap-2 mb-2">' +
        '<span class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background:' + escapeHtml(color) + '1A;">' +
        '<span class="material-symbols-outlined text-[18px]" style="color:' + escapeHtml(color) + ';">' + escapeHtml(f.icon || 'verified') + '</span></span>' +
        iconSelect(f.icon || 'verified', 'data-field="icon"') +
        colorSelect(f.color || '', 'data-field="color"') +
        '<button data-action="delete" class="ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition" title="Xóa ô">' +
        '<span class="material-symbols-outlined text-[18px]">delete</span></button>' +
        '</div>' +
        '<input data-field="title" type="text" value="' + escapeHtml(f.title) + '" placeholder="Tiêu đề ô"' +
        ' class="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-[#1D5FA8]/20 focus:border-[#1D5FA8]">' +
        '<input data-field="desc" type="text" value="' + escapeHtml(f.desc) + '" placeholder="Mô tả ngắn (có thể để trống)"' +
        ' class="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1D5FA8]/20 focus:border-[#1D5FA8]">' +
        '</div></div></div>'
      );
    }).join('');

    wireCards(featureList, 'feature');
  }

  function renderColumns() {
    columnEmpty.classList.toggle('hidden', columns.length > 0);

    columnList.innerHTML = columns.map((c, i) => {
      const color = c.color || '#1D5FA8';
      return (
        '<div class="block-card border border-gray-200 rounded-2xl p-4" data-kind="column" data-index="' + i + '" draggable="false">' +
        '<div class="flex items-start gap-3">' +
        '<span class="drag-handle text-gray-300 hover:text-gray-500 pt-1 select-none" title="Kéo để đổi thứ tự">' +
        '<span class="material-symbols-outlined text-[20px]">drag_indicator</span></span>' +
        '<div class="flex-1 min-w-0">' +
        '<div class="flex flex-wrap items-center gap-2 mb-2">' +
        '<span class="material-symbols-outlined text-[20px]" style="color:' + escapeHtml(color) + ';">' + escapeHtml(c.icon || 'check_circle') + '</span>' +
        iconSelect(c.icon || 'check_circle', 'data-field="icon"') +
        colorSelect(color, 'data-field="color"') +
        '<button data-action="delete" class="ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition" title="Xóa cột">' +
        '<span class="material-symbols-outlined text-[18px]">delete</span></button>' +
        '</div>' +
        '<input data-field="title" type="text" value="' + escapeHtml(c.title) + '" placeholder="Tiêu đề cột (VD: Ứng Dụng Thực Tế)"' +
        ' class="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-[#1D5FA8]/20 focus:border-[#1D5FA8]">' +
        '<textarea data-field="items" rows="5" placeholder="Mỗi dòng 1 gạch đầu dòng..."' +
        ' class="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1D5FA8]/20 focus:border-[#1D5FA8]">' +
        escapeHtml((c.items || []).join('\n')) + '</textarea>' +
        '</div></div></div>'
      );
    }).join('');

    wireCards(columnList, 'column');
  }

  // ---------------------------------------------------------------
  // Gắn sự kiện cho các thẻ: sửa nội dung, xóa, kéo thả đổi thứ tự
  // ---------------------------------------------------------------
  function wireCards(container, kind) {
    const arr = kind === 'feature' ? features : columns;

    container.querySelectorAll('.block-card').forEach((card) => {
      const idx = Number(card.dataset.index);

      // Sửa nội dung
      card.querySelectorAll('[data-field]').forEach((input) => {
        const field = input.dataset.field;
        const evt = input.tagName === 'SELECT' ? 'change' : 'input';
        input.addEventListener(evt, () => {
          if (field === 'items') {
            arr[idx].items = input.value.split('\n').map((s) => s.trim()).filter(Boolean);
          } else {
            arr[idx][field] = input.value;
          }
          setDirty(true);
          // Đổi biểu tượng/màu thì vẽ lại để cập nhật phần xem trước
          if (field === 'icon' || field === 'color') {
            kind === 'feature' ? renderFeatures() : renderColumns();
          }
        });
      });

      // Xóa
      const delBtn = card.querySelector('[data-action="delete"]');
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          const name = arr[idx].title || '(chưa có tiêu đề)';
          if (!confirm('Xóa "' + name + '"?')) return;
          arr.splice(idx, 1);
          setDirty(true);
          kind === 'feature' ? renderFeatures() : renderColumns();
        });
      }

      // Chỉ cho kéo khi bấm vào tay cầm, tránh việc chọn chữ trong ô cũng kéo theo
      const handle = card.querySelector('.drag-handle');
      if (handle) {
        handle.addEventListener('mousedown', () => { card.draggable = true; });
        handle.addEventListener('mouseup', () => { card.draggable = false; });
      }

      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(idx));
        card.classList.add('dragging');
      });

      card.addEventListener('dragend', () => {
        card.draggable = false;
        card.classList.remove('dragging');
        container.querySelectorAll('.block-card').forEach((c) => c.classList.remove('drag-over'));
      });

      card.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        card.classList.add('drag-over');
      });

      card.addEventListener('dragleave', () => card.classList.remove('drag-over'));

      card.addEventListener('drop', (e) => {
        e.preventDefault();
        card.classList.remove('drag-over');
        const from = Number(e.dataTransfer.getData('text/plain'));
        const to = idx;
        if (Number.isNaN(from) || from === to) return;
        const [moved] = arr.splice(from, 1);
        arr.splice(to, 0, moved);
        setDirty(true);
        kind === 'feature' ? renderFeatures() : renderColumns();
      });
    });
  }

  // ---------------------------------------------------------------
  // Nạp sẵn nội dung từ file noidung.md
  // ---------------------------------------------------------------
  async function loadNoidungList() {
    try {
      const res = await fetch('/api/noidung');
      if (!res.ok) return;
      const json = await res.json();
      if (!json.available || !json.items.length) return;

      noidungSelect.innerHTML =
        '<option value="">— Chọn bài trong file nội dung —</option>' +
        json.items.map(function (it) {
          return '<option value="' + escapeHtml(it.id) + '">' +
            escapeHtml(it.name) + ' (' + it.columnCount + ' khung)</option>';
        }).join('');

      noidungCount.textContent = json.items.length + ' bài';
      noidungBox.style.display = 'block';
    } catch (e) {
      // Không có file nội dung thì ẩn phần này đi
    }
  }

  noidungSelect.addEventListener('change', async () => {
    const id = noidungSelect.value;
    if (!id || !currentKey) return;

    if (dirty && !confirm('Bạn có thay đổi chưa lưu. Nạp nội dung mới và bỏ các thay đổi đó?')) {
      noidungSelect.value = '';
      return;
    }

    try {
      const res = await fetch('/api/noidung/' + encodeURIComponent(id));
      if (res.status === 401) { showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Không tải được nội dung.');

      if (json.heading) headingInput.value = json.heading;
      if (json.shortDesc) shortDescInput.value = json.shortDesc;
      columns = (json.columns || []).map((c) => ({
        icon: c.icon || 'check_circle',
        color: c.color || '#1D5FA8',
        title: c.title || '',
        items: Array.isArray(c.items) ? c.items.slice() : [],
      }));

      setDirty(true);
      renderColumns();
      showToast('Đã nạp ' + columns.length + ' khung. Xem lại rồi bấm Lưu thay đổi.');
    } catch (e) {
      showToast(e.message, true);
    }
  });

  // ---------------------------------------------------------------
  // Thêm khối mới
  // ---------------------------------------------------------------
  addFeatureBtn.addEventListener('click', () => {
    if (!currentKey) return;
    features.push({ icon: 'verified', color: '#1D5FA8', iconWrapClass: '', iconClass: '', title: '', desc: '' });
    setDirty(true);
    renderFeatures();
  });

  addColumnBtn.addEventListener('click', () => {
    if (!currentKey) return;
    columns.push({ icon: 'check_circle', color: '#1D5FA8', title: '', items: [] });
    setDirty(true);
    renderColumns();
  });

  headingInput.addEventListener('input', () => setDirty(true));
  shortDescInput.addEventListener('input', () => setDirty(true));

  // ---------------------------------------------------------------
  // Lưu
  // ---------------------------------------------------------------
  saveBtn.addEventListener('click', async () => {
    if (!currentKey) return;

    const badFeature = features.some((f) => !String(f.title || '').trim());
    const badColumn = columns.some((c) => !String(c.title || '').trim());
    if (badFeature || badColumn) {
      showToast('Còn khối chưa có tiêu đề. Hãy điền tiêu đề hoặc xóa khối đó.', true);
      return;
    }

    saveBtn.disabled = true;
    const original = saveBtn.innerHTML;
    saveBtn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Đang lưu...';

    try {
      const res = await fetch('/api/blocks/' + encodeURIComponent(currentKey), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          heading: headingInput.value,
          shortDesc: shortDescInput.value,
          features,
          columns,
        }),
      });
      if (res.status === 401) { showLogin(); return; }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Lưu thất bại.');

      setDirty(false);
      showToast('Đã lưu thay đổi.');

      const t = TARGETS.find((x) => x.key === currentKey);
      if (t) { t.hasContent = true; renderTargets(); }
    } catch (e) {
      showToast(e.message, true);
    } finally {
      saveBtn.innerHTML = original;
      saveBtn.disabled = !dirty;
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

  setDirty(false);
  checkAuth();
})();
