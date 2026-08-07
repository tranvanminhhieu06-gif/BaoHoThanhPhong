/**
 * Ô soạn thảo nhỏ có nút In đậm / In nghiêng / Gạch chân
 * ------------------------------------------------------
 * Cách hoạt động: giữ nguyên thẻ <textarea> gốc (ẩn đi) và dựng một ô soạn
 * thảo hiển thị đè lên. Mọi thay đổi được ghi ngược lại vào textarea.value,
 * nên phần code cũ đọc `.value` vẫn chạy y như trước.
 *
 * Mỗi dòng trong ô là một dòng nội dung ("\n" ngăn cách), giống hệt cách
 * các ô cũ đang lưu — chỉ khác là trong dòng có thể chứa <b>, <i>, <u>.
 *
 * Dùng:
 *   RichText.attach(document.getElementById('descInput'));
 *   RichText.set(textarea, 'giá trị mới');   // thay cho textarea.value = ...
 */
(function (window, document) {
  'use strict';

  // Chỉ cho phép đúng mấy thẻ định dạng chữ, không cho thuộc tính nào
  var ALLOWED = /^(B|STRONG|I|EM|U)$/;

  // ---------------------------------------------------------------
  // Kiểu hiển thị (chèn 1 lần cho cả trang)
  // ---------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById('rt-styles')) return;
    var css =
      '.rt-wrap{border:1px solid #E2E8F0;border-radius:12px;overflow:hidden;background:#fff;transition:.15s;}' +
      '.rt-wrap:focus-within{border-color:#1D5FA8;box-shadow:0 0 0 3px rgba(29,95,168,.12);}' +
      '.rt-bar{display:flex;align-items:center;gap:2px;padding:4px 6px;border-bottom:1px solid #F1F5F9;background:#F8FAFC;}' +
      '.rt-btn{width:28px;height:28px;display:flex;align-items:center;justify-content:center;border:none;' +
      'background:transparent;border-radius:6px;cursor:pointer;color:#475569;font-size:13px;line-height:1;transition:.15s;}' +
      '.rt-btn:hover{background:#EBF3FF;color:#1D5FA8;}' +
      '.rt-btn b{font-weight:800;}.rt-btn i{font-style:italic;}.rt-btn u{text-decoration:underline;}' +
      '.rt-hint{margin-left:auto;font-size:10px;font-weight:600;color:#94A3B8;padding-right:4px;}' +
      '.rt-editor{padding:10px 14px;outline:none;font-size:14px;font-weight:500;line-height:1.7;color:#334155;' +
      'min-height:64px;max-height:320px;overflow-y:auto;}' +
      '.rt-editor:empty:before{content:attr(data-placeholder);color:#94A3B8;font-weight:400;}' +
      '.rt-editor div{min-height:1.7em;}';
    var el = document.createElement('style');
    el.id = 'rt-styles';
    el.textContent = css;
    document.head.appendChild(el);
  }

  // ---------------------------------------------------------------
  // Làm sạch: bỏ mọi thẻ lạ, chỉ chừa b/strong/i/em/u
  // ---------------------------------------------------------------
  function stripNode(parent) {
    Array.prototype.slice.call(parent.childNodes).forEach(function (n) {
      if (n.nodeType === 3) return;              // chữ thường -> giữ
      if (n.nodeType !== 1) { n.parentNode.removeChild(n); return; }

      stripNode(n);

      if (ALLOWED.test(n.tagName)) {
        // Bỏ hết thuộc tính (style, class, onclick...)
        Array.prototype.slice.call(n.attributes).forEach(function (a) {
          n.removeAttribute(a.name);
        });
      } else {
        // Thẻ không cho phép -> giữ lại phần chữ bên trong
        while (n.firstChild) parent.insertBefore(n.firstChild, n);
        parent.removeChild(n);
      }
    });
  }

  function cleanLine(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = String(html == null ? '' : html).replace(/<br\s*\/?>/gi, '');
    stripNode(tmp);
    return tmp.innerHTML.replace(/ /g, ' ').trim();
  }

  function escapeText(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }

  // ---------------------------------------------------------------
  // Chuyển đổi giữa "nhiều dòng ngăn bằng \n" và nội dung ô soạn thảo
  // ---------------------------------------------------------------
  function linesToHtml(value) {
    var lines = String(value == null ? '' : value).split('\n');
    if (!lines.length) return '';
    return lines.map(function (l) {
      return '<div>' + (cleanLine(l) || '<br>') + '</div>';
    }).join('');
  }

  function htmlToLines(ed) {
    var lines = [];
    var buf = '';

    Array.prototype.slice.call(ed.childNodes).forEach(function (n) {
      if (n.nodeType === 1 && (n.tagName === 'DIV' || n.tagName === 'P')) {
        if (buf.trim()) lines.push(buf);
        buf = '';
        lines.push(n.innerHTML);
      } else if (n.nodeType === 1 && n.tagName === 'BR') {
        lines.push(buf);
        buf = '';
      } else if (n.nodeType === 1) {
        buf += n.outerHTML;
      } else {
        buf += escapeText(n.textContent);
      }
    });
    if (buf.trim()) lines.push(buf);

    return lines.map(cleanLine).filter(function (l) { return l !== ''; }).join('\n');
  }

  // ---------------------------------------------------------------
  // Gắn ô soạn thảo vào một textarea
  // ---------------------------------------------------------------
  function attach(textarea, opts) {
    if (!textarea) return null;
    if (textarea._rt) return textarea._rt;

    injectStyles();
    opts = opts || {};

    // Ô <input> chỉ có 1 dòng, không tách theo "\n"
    var singleLine = textarea.tagName === 'INPUT';

    var wrap = document.createElement('div');
    wrap.className = 'rt-wrap';

    var defaultHint = singleLine ? 'Bôi đen rồi bấm B / I / U' : 'Mỗi dòng là 1 ý';
    var bar = document.createElement('div');
    bar.className = 'rt-bar';
    bar.innerHTML =
      '<button type="button" class="rt-btn" data-cmd="bold" title="In đậm (Ctrl+B)"><b>B</b></button>' +
      '<button type="button" class="rt-btn" data-cmd="italic" title="In nghiêng (Ctrl+I)"><i>I</i></button>' +
      '<button type="button" class="rt-btn" data-cmd="underline" title="Gạch chân (Ctrl+U)"><u>U</u></button>' +
      '<button type="button" class="rt-btn" data-cmd="removeFormat" title="Xóa định dạng">✕</button>' +
      '<span class="rt-hint">' + (opts.hint || defaultHint) + '</span>';

    var ed = document.createElement('div');
    ed.className = 'rt-editor';
    ed.contentEditable = 'true';
    if (textarea.placeholder) ed.setAttribute('data-placeholder', textarea.placeholder);
    if (singleLine) ed.style.minHeight = '0';
    if (opts.minHeight) ed.style.minHeight = opts.minHeight;

    textarea.style.display = 'none';
    textarea.parentNode.insertBefore(wrap, textarea);
    wrap.appendChild(bar);
    wrap.appendChild(ed);
    wrap.appendChild(textarea);

    // Ô 1 dòng thì chặn phím Enter để không tạo dòng mới
    if (singleLine) {
      ed.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') e.preventDefault();
      });
    }

    function pull() {
      ed.innerHTML = singleLine ? cleanLine(textarea.value) : linesToHtml(textarea.value);
    }
    function push() {
      textarea.value = singleLine ? cleanLine(ed.innerHTML) : htmlToLines(ed);
    }

    ed.addEventListener('input', function () {
      push();
      // Báo cho code cũ đang lắng nghe sự kiện input của textarea
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    });

    // Dán từ nơi khác: chỉ lấy chữ, tránh mang theo định dạng rác
    ed.addEventListener('paste', function (e) {
      e.preventDefault();
      var text = (e.clipboardData || window.clipboardData).getData('text/plain');
      document.execCommand('insertText', false, text);
    });

    bar.querySelectorAll('[data-cmd]').forEach(function (btn) {
      btn.addEventListener('mousedown', function (e) { e.preventDefault(); }); // giữ vùng bôi đen
      btn.addEventListener('click', function () {
        ed.focus();
        document.execCommand(btn.dataset.cmd, false, null);
        push();
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    var api = { editor: ed, wrap: wrap, pull: pull, push: push };
    textarea._rt = api;
    pull();
    return api;
  }

  // Thay cho `textarea.value = ...` để ô soạn thảo cập nhật theo
  function set(textarea, value) {
    if (!textarea) return;
    textarea.value = value == null ? '' : value;
    if (textarea._rt) textarea._rt.pull();
  }

  window.RichText = { attach: attach, set: set, cleanLine: cleanLine };
})(window, document);
