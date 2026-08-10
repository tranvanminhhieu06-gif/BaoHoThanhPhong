/**
 * Chỉ báo trạng thái đẩy lên GitHub
 * ---------------------------------
 * Ở chế độ máy cá nhân, mỗi lần lưu xong server tự chạy git add/commit/push.
 * Đoạn mã này hỏi server vài giây một lần rồi hiện trạng thái lên thanh đầu
 * trang, để bạn biết nội dung đã lên website thật hay chưa.
 *
 * Cách dùng: thêm <div id="gitStatus"></div> vào thanh đầu trang, rồi nạp file
 * này. Không cần gọi hàm gì thêm.
 */
(function (window, document) {
  'use strict';

  var box = null;
  var timer = null;
  var lastAt = null;

  var LOOK = {
    idle:    { icon: 'cloud_done',           cls: 'text-gray-400',     text: 'Đã đồng bộ' },
    pending: { icon: 'cloud_upload',         cls: 'text-amber-600',    text: 'Sắp đẩy lên GitHub...' },
    pushing: { icon: 'progress_activity',    cls: 'text-[#1D5FA8]',    text: 'Đang đẩy lên GitHub...' },
    ok:      { icon: 'cloud_done',           cls: 'text-emerald-600',  text: 'Đã đẩy lên GitHub' },
    error:   { icon: 'cloud_off',            cls: 'text-red-600',      text: 'Lỗi đẩy lên GitHub' }
  };

  function paint(data) {
    if (!box) return;

    // Chế độ online: mọi thay đổi đã ghi thẳng lên GitHub, không cần chỉ báo
    if (data.onlineMode) {
      box.innerHTML =
        '<span class="flex items-center gap-1.5 text-xs font-bold text-emerald-600" title="Thay đổi được lưu thẳng lên GitHub">' +
        '<span class="material-symbols-outlined text-[16px]">cloud_done</span>' +
        '<span class="hidden md:inline">Tự lưu lên GitHub</span></span>';
      return;
    }

    var look = LOOK[data.state] || LOOK.idle;
    var spin = data.state === 'pushing' ? ' animate-spin' : '';
    var label = data.state === 'ok' && data.message ? data.message : look.text;

    box.innerHTML =
      '<span class="flex items-center gap-1.5 text-xs font-bold ' + look.cls + '" title="' +
      String(data.message || look.text).replace(/"/g, '&quot;') + '">' +
      '<span class="material-symbols-outlined text-[16px]' + spin + '">' + look.icon + '</span>' +
      '<span class="hidden md:inline">' + label + '</span></span>';

    // Đẩy lỗi thì báo rõ 1 lần cho người dùng biết
    if (data.state === 'error' && data.at && data.at !== lastAt) {
      lastAt = data.at;
      if (typeof window.showToast === 'function') window.showToast(data.message, true);
      else console.error(data.message);
    }
    if (data.at) lastAt = data.at;
  }

  async function poll() {
    try {
      var res = await fetch('/api/git-status');
      if (!res.ok) return;
      paint(await res.json());
    } catch (e) {
      /* mất kết nối thì bỏ qua, lần sau hỏi lại */
    }
  }

  function start() {
    box = document.getElementById('gitStatus');
    if (!box) return;
    poll();
    clearInterval(timer);
    timer = setInterval(poll, 3000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  // Gọi ngay sau khi lưu để trạng thái cập nhật liền, không phải chờ 3 giây
  window.refreshGitStatus = poll;
})(window, document);
