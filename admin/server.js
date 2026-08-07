/**
 * Server quản lý sản phẩm - Thành Phong Bảo Hộ Lao Động
 * ------------------------------------------------------
 * Server chạy được ở 2 chế độ:
 *
 *  1) CHẾ ĐỘ MÁY CÁ NHÂN (không đặt biến GITHUB_TOKEN)
 *     Đọc/ghi trực tiếp các file trong thư mục website trên máy bạn.
 *     Bấm nút "Đồng bộ" để git commit + push lên GitHub.
 *
 *  2) CHẾ ĐỘ ONLINE (có đặt GITHUB_TOKEN + GITHUB_REPO)
 *     Đọc/ghi thẳng vào kho GitHub qua API. Dùng khi deploy lên hosting
 *     (Render, Railway...) để nhiều người cùng vào bằng đường link.
 *     Mọi thay đổi được tự động lưu lên GitHub, không cần bấm đồng bộ.
 *
 * Xem hướng dẫn chi tiết trong file admin/README.md
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { exec } = require('child_process');
const { parseNoidung } = require('../scripts/noidung-parser');

// =====================================================================
// Cấu hình
// =====================================================================

const ROOT = path.join(__dirname, '..');           // thư mục gốc của website
const IMAGES_DIR = path.join(ROOT, 'images');

// Đường dẫn file tính từ gốc kho code (dùng chung cho cả 2 chế độ)
const PRODUCTS_PATH = 'js/products.js';
const CATEGORY_CONTENT_PATH = 'js/category_content.js';
const POSTS_PATH = 'js/posts.js';
const NOIDUNG_PATH = process.env.NOIDUNG_FILE || 'noidung.md';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const GITHUB_REPO = process.env.GITHUB_REPO || 'tranvanminhhieu06-gif/BaoHoThanhPhong';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const SITE_URL = (process.env.SITE_URL || 'https://baohothanhphong.vn').replace(/\/+$/, '');

// Chế độ online = có token GitHub
const ONLINE_MODE = !!GITHUB_TOKEN;

// Tự động phân tích mô tả bằng AI (không bắt buộc - nếu không có key thì
// chỉ dùng cách tách theo từ khóa)
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';
const AI_MODEL = process.env.AI_MODEL || 'claude-sonnet-5';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const SESSION_DAYS = 7;

// An toàn: nếu chạy online mà quên đặt mật khẩu thì KHÔNG cho khởi động,
// tránh việc bất kỳ ai có link cũng sửa/xóa được sản phẩm.
if (ONLINE_MODE && !ADMIN_PASSWORD) {
  console.error('');
  console.error('!!! THIẾU MẬT KHẨU ADMIN !!!');
  console.error('Bạn đang chạy ở chế độ online (có GITHUB_TOKEN) nhưng chưa đặt ADMIN_PASSWORD.');
  console.error('Hãy thêm biến môi trường ADMIN_PASSWORD rồi chạy lại.');
  console.error('');
  process.exit(1);
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB / ảnh
});

const app = express();
app.set('trust proxy', 1); // chạy sau proxy của hosting (Render...)
app.use(express.json());

// =====================================================================
// Đăng nhập (1 mật khẩu chung, lưu bằng cookie có chữ ký)
// =====================================================================

const COOKIE_NAME = 'tp_admin';

function sign(value) {
  return crypto.createHmac('sha256', SESSION_SECRET).update(value).digest('hex');
}

function createToken() {
  const exp = String(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  return exp + '.' + sign(exp);
}

function verifyToken(token) {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [exp, mac] = parts;
  const expected = sign(exp);
  // So sánh chống dò thời gian
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  return Number(exp) > Date.now();
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  const out = {};
  header.split(';').forEach((pair) => {
    const idx = pair.indexOf('=');
    if (idx === -1) return;
    const k = pair.slice(0, idx).trim();
    const v = pair.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  });
  return out;
}

function isAuthenticated(req) {
  if (!ADMIN_PASSWORD) return true; // chạy trên máy cá nhân, không đặt mật khẩu
  return verifyToken(parseCookies(req)[COOKIE_NAME]);
}

function requireAuth(req, res, next) {
  if (isAuthenticated(req)) return next();
  res.status(401).json({ error: 'Bạn cần đăng nhập để thực hiện thao tác này.' });
}

app.get('/api/me', (req, res) => {
  res.json({
    authenticated: isAuthenticated(req),
    needsPassword: !!ADMIN_PASSWORD,
    autoSync: ONLINE_MODE,
    aiEnabled: !!ANTHROPIC_API_KEY,
    siteUrl: SITE_URL,
  });
});

app.post('/api/login', (req, res) => {
  const password = (req.body && req.body.password) || '';
  if (!ADMIN_PASSWORD) return res.json({ ok: true });

  const given = Buffer.from(String(password));
  const real = Buffer.from(ADMIN_PASSWORD);
  const ok = given.length === real.length && crypto.timingSafeEqual(given, real);
  if (!ok) return res.status(401).json({ error: 'Mật khẩu không đúng.' });

  const secure = ONLINE_MODE ? ' Secure;' : '';
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${createToken()}; Path=/; HttpOnly; SameSite=Lax;${secure} Max-Age=${SESSION_DAYS * 24 * 60 * 60}`
  );
  res.json({ ok: true });
});

app.post('/api/logout', (req, res) => {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
  res.json({ ok: true });
});

// Giao diện admin (file tĩnh) - dữ liệu thật vẫn được bảo vệ bởi requireAuth
app.use(express.static(path.join(__dirname, 'public')));

// Xem ảnh: ưu tiên file có sẵn trên máy, nếu không có thì lấy từ website thật
app.use('/images', express.static(IMAGES_DIR));
app.get('/images/*', (req, res) => {
  res.redirect(SITE_URL + req.path);
});

// =====================================================================
// XEM TRƯỚC WEBSITE (live server)
// Phục vụ trực tiếp các file website trên máy, kèm tự động tải lại trang
// mỗi khi có file thay đổi -> xem được kết quả trước khi đồng bộ lên GitHub.
// =====================================================================

// Những thư mục nội bộ, không phải nội dung website
const PREVIEW_BLOCKED = new Set(['admin', '.git', '.github', 'node_modules', 'scripts']);

// Danh sách trình duyệt đang mở trang xem trước
let previewClients = [];

function broadcastReload() {
  previewClients = previewClients.filter((res) => !res.writableEnded);
  previewClients.forEach((res) => {
    try { res.write('data: reload\n\n'); } catch (e) { /* bỏ qua */ }
  });
}

// Kênh báo cho trình duyệt biết cần tải lại
app.get('/preview-events', requireAuth, (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });
  res.flushHeaders && res.flushHeaders();
  res.write('retry: 2000\n\n');

  previewClients.push(res);
  req.on('close', () => {
    previewClients = previewClients.filter((c) => c !== res);
  });
});

const LIVE_RELOAD_SNIPPET = `
<!-- Chế độ xem trước: tự động tải lại khi có thay đổi -->
<script>
(function () {
  try {
    var es = new EventSource('/preview-events');
    es.onmessage = function (e) { if (e.data === 'reload') location.reload(); };
  } catch (err) { /* bỏ qua */ }
  var bar = document.createElement('div');
  bar.textContent = 'BẢN XEM TRƯỚC — chưa đồng bộ lên website thật';
  bar.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:2147483647;' +
    'background:#1A2744;color:#fff;font:700 11px/1 Be Vietnam Pro,sans-serif;' +
    'padding:8px 14px;border-radius:100px;box-shadow:0 4px 14px rgba(0,0,0,.25);' +
    'letter-spacing:.03em;pointer-events:none;opacity:.9;';
  if (document.body) document.body.appendChild(bar);
  else document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(bar); });
})();
</script>
`;

function injectLiveReload(html) {
  if (html.includes('</body>')) return html.replace(/<\/body>/i, LIVE_RELOAD_SNIPPET + '</body>');
  return html + LIVE_RELOAD_SNIPPET;
}

// Thiếu dấu "/" ở cuối thì các đường dẫn tương đối trong trang sẽ sai,
// nên chuyển hướng về dạng có dấu gạch chéo.
app.get('/preview', (req, res) => res.redirect('/preview/'));

app.use('/preview', requireAuth, (req, res, next) => {
  let rel;
  try { rel = decodeURIComponent(req.path); } catch (e) { return res.status(400).send('Đường dẫn không hợp lệ.'); }
  if (!rel || rel === '/') rel = '/index.html';

  // Chặn thư mục nội bộ
  const firstSeg = rel.split('/').filter(Boolean)[0];
  if (firstSeg && PREVIEW_BLOCKED.has(firstSeg)) {
    return res.status(403).send('Thư mục này không thuộc nội dung website.');
  }

  // Chặn truy cập ra ngoài thư mục website
  const full = path.resolve(ROOT, '.' + rel);
  if (full !== ROOT && !full.startsWith(ROOT + path.sep)) {
    return res.status(403).send('Đường dẫn không hợp lệ.');
  }

  let target = full;
  if (!fs.existsSync(target)) return next();
  if (fs.statSync(target).isDirectory()) {
    target = path.join(target, 'index.html');
    if (!fs.existsSync(target)) return next();
  }

  // Trang HTML thì chèn thêm đoạn mã tự tải lại
  if (/\.html?$/i.test(target)) {
    try {
      res.type('html').send(injectLiveReload(fs.readFileSync(target, 'utf8')));
    } catch (e) {
      res.status(500).send('Không đọc được file: ' + e.message);
    }
    return;
  }

  res.sendFile(target);
});

// Theo dõi thay đổi file để tự tải lại. Chỉ bật ở chế độ máy cá nhân —
// chạy online thì file trên máy chủ không thay đổi trực tiếp.
if (!ONLINE_MODE) {
  let reloadTimer = null;
  try {
    fs.watch(ROOT, { recursive: true }, (evt, filename) => {
      if (!filename) return;
      const f = String(filename).replace(/\\/g, '/');
      if (f.includes('node_modules') || f.startsWith('.git') || f.endsWith('.bak')) return;
      if (f.startsWith('admin/')) return; // sửa code admin không cần tải lại website

      clearTimeout(reloadTimer);
      reloadTimer = setTimeout(broadcastReload, 250);
    });
  } catch (e) {
    console.warn('Không theo dõi được thay đổi file (tự tải lại sẽ không hoạt động):', e.message);
  }
}

// =====================================================================
// Lớp lưu trữ: máy cá nhân (fs) hoặc GitHub (API)
// =====================================================================

function ghApiUrl(repoPath) {
  const encoded = repoPath.split('/').map(encodeURIComponent).join('/');
  return `https://api.github.com/repos/${GITHUB_REPO}/contents/${encoded}`;
}

async function ghRequest(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'thanhphong-admin',
      ...(options.headers || {}),
    },
  });
  return res;
}

// Đọc file: trả về { text, sha } hoặc null nếu file chưa tồn tại
async function readFileEntry(repoPath) {
  if (!ONLINE_MODE) {
    const full = path.join(ROOT, repoPath);
    if (!fs.existsSync(full)) return null;
    return { text: fs.readFileSync(full, 'utf8'), sha: null };
  }

  const res = await ghRequest(`${ghApiUrl(repoPath)}?ref=${encodeURIComponent(GITHUB_BRANCH)}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub đọc "${repoPath}" lỗi ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return {
    text: Buffer.from(json.content || '', 'base64').toString('utf8'),
    sha: json.sha,
  };
}

async function fileExists(repoPath) {
  if (!ONLINE_MODE) return fs.existsSync(path.join(ROOT, repoPath));
  const res = await ghRequest(`${ghApiUrl(repoPath)}?ref=${encodeURIComponent(GITHUB_BRANCH)}`, { method: 'HEAD' });
  return res.status !== 404;
}

// Ghi file (nhận Buffer hoặc chuỗi). sha chỉ dùng ở chế độ online khi ghi đè.
async function writeFileEntry(repoPath, data, message, sha) {
  const buffer = Buffer.isBuffer(data) ? data : Buffer.from(String(data), 'utf8');

  if (!ONLINE_MODE) {
    const full = path.join(ROOT, repoPath);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, buffer);
    return null;
  }

  const body = {
    message: message || 'Cap nhat qua trang quan ly',
    content: buffer.toString('base64'),
    branch: GITHUB_BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await ghRequest(ghApiUrl(repoPath), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (res.status === 409 || res.status === 422) {
    throw new Error(
      'Dữ liệu vừa bị người khác thay đổi trong lúc bạn đang sửa. ' +
      'Vui lòng tải lại trang (F5) rồi thao tác lại.'
    );
  }
  if (!res.ok) throw new Error(`GitHub ghi "${repoPath}" lỗi ${res.status}: ${await res.text()}`);
  const json = await res.json();

  // Lưu thêm 1 bản trên đĩa để xem trước ảnh được ngay, không phải chờ
  // GitHub Pages cập nhật. Nếu không ghi được cũng không sao.
  try {
    const full = path.join(ROOT, repoPath);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, buffer);
  } catch (e) { /* bỏ qua */ }

  return json.content ? json.content.sha : null;
}

// =====================================================================
// Đọc / ghi js/products.js mà không đụng tới phần code hiển thị
// =====================================================================

// Tìm dấu đóng ngoặc khớp với dấu mở ngoặc tại startIdx, có tính tới chuỗi
// (string) để không đếm nhầm ngoặc nằm bên trong "..."
function findBalanced(str, startIdx, openCh, closeCh) {
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = startIdx; i < str.length; i++) {
    const ch = str[i];
    if (inStr) {
      if (esc) { esc = false; }
      else if (ch === '\\') { esc = true; }
      else if (ch === '"') { inStr = false; }
      continue;
    }
    if (ch === '"') { inStr = true; continue; }
    if (ch === openCh) depth++;
    else if (ch === closeCh) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

async function loadData() {
  const entry = await readFileEntry(PRODUCTS_PATH);
  if (!entry) throw new Error('Không tìm thấy file js/products.js');
  const raw = entry.text;

  const prodMarker = 'const products = ';
  const prodMarkerIdx = raw.indexOf(prodMarker);
  if (prodMarkerIdx === -1) throw new Error('Không tìm thấy "const products" trong js/products.js');
  const prodArrStart = prodMarkerIdx + prodMarker.length;
  const prodArrEnd = findBalanced(raw, prodArrStart, '[', ']');
  if (prodArrEnd === -1) throw new Error('Không đọc được mảng products (ngoặc không khớp)');
  const products = JSON.parse(raw.slice(prodArrStart, prodArrEnd + 1));

  const biaMarker = 'const catBiaImages = ';
  const biaMarkerIdx = raw.indexOf(biaMarker);
  if (biaMarkerIdx === -1) throw new Error('Không tìm thấy "const catBiaImages" trong js/products.js');
  const biaObjStart = biaMarkerIdx + biaMarker.length;
  const biaObjEnd = findBalanced(raw, biaObjStart, '{', '}');
  if (biaObjEnd === -1) throw new Error('Không đọc được catBiaImages (ngoặc không khớp)');
  const catBiaImages = JSON.parse(raw.slice(biaObjStart, biaObjEnd + 1));

  return {
    raw,
    sha: entry.sha,
    products,
    catBiaImages,
    prodRange: [prodArrStart, prodArrEnd],
    biaRange: [biaObjStart, biaObjEnd],
  };
}

async function saveData(loaded, products, catBiaImages, message) {
  const { raw, prodRange, biaRange } = loaded;
  const newBiaJson = JSON.stringify(catBiaImages, null, 2);
  const newProdJson = JSON.stringify(products, null, 2);

  // catBiaImages nằm sau products trong file -> thay thế trước để không
  // làm lệch vị trí (index) của đoạn products.
  let out = raw.slice(0, biaRange[0]) + newBiaJson + raw.slice(biaRange[1] + 1);
  out = out.slice(0, prodRange[0]) + newProdJson + out.slice(prodRange[1] + 1);

  if (!ONLINE_MODE) {
    try { fs.writeFileSync(path.join(ROOT, PRODUCTS_PATH) + '.bak', raw, 'utf8'); } catch (e) { /* bỏ qua */ }
  }

  await writeFileEntry(PRODUCTS_PATH, out, message || 'Cap nhat san pham qua trang quan ly', loaded.sha);
}

// ---- js/category_content.js: nội dung "Ứng Dụng Thực Tế / Ưu Điểm Nổi Bật /
// Cam Kết Từ Thành Phong" hiển thị ở trang chi tiết sản phẩm. Nội dung này áp
// dụng cho cả danh mục con (hoặc danh mục nếu không có danh mục con).
async function loadCategoryContent() {
  const entry = await readFileEntry(CATEGORY_CONTENT_PATH);
  if (!entry) throw new Error('Không tìm thấy file js/category_content.js');
  const raw = entry.text;

  const marker = 'var categoryContent = ';
  const markerIdx = raw.indexOf(marker);
  if (markerIdx === -1) throw new Error('Không tìm thấy "var categoryContent" trong js/category_content.js');
  const objStart = markerIdx + marker.length;
  const objEnd = findBalanced(raw, objStart, '{', '}');
  if (objEnd === -1) throw new Error('Không đọc được categoryContent (ngoặc không khớp)');
  const categoryContent = JSON.parse(raw.slice(objStart, objEnd + 1));

  return { raw, sha: entry.sha, categoryContent, range: [objStart, objEnd] };
}

async function saveCategoryContent(loaded, categoryContent) {
  const { raw, range } = loaded;
  const newJson = JSON.stringify(categoryContent, null, 2);
  const out = raw.slice(0, range[0]) + newJson + raw.slice(range[1] + 1);

  if (!ONLINE_MODE) {
    try { fs.writeFileSync(path.join(ROOT, CATEGORY_CONTENT_PATH) + '.bak', raw, 'utf8'); } catch (e) { /* bỏ qua */ }
  }

  await writeFileEntry(CATEGORY_CONTENT_PATH, out, 'Cap nhat noi dung danh muc qua trang quan ly', loaded.sha);
}

// Mẫu chuẩn 3 cột, đúng thứ tự + icon/màu đang dùng xuyên suốt category_content.js
const COLUMN_DEFAULTS = [
  { icon: 'info', color: '#1D5FA8', title: 'Ứng Dụng Thực Tế' },
  { icon: 'verified', color: '#10B981', title: 'Ưu Điểm Nổi Bật' },
  { icon: 'thumb_up', color: '#E8A500', title: 'Cam Kết Từ Thành Phong' },
];

function linesToItems(text) {
  return String(text || '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
}

function ensureContentEntry(categoryContent, key, label, fallbackDesc) {
  if (!categoryContent[key]) {
    categoryContent[key] = {
      tagline: '',
      heading: label || '',
      shortDesc: fallbackDesc || '',
      features: [],
      columns: COLUMN_DEFAULTS.map((c) => ({ ...c, items: [] })),
    };
  }
  if (!Array.isArray(categoryContent[key].columns) || categoryContent[key].columns.length === 0) {
    categoryContent[key].columns = COLUMN_DEFAULTS.map((c) => ({ ...c, items: [] }));
  }
  return categoryContent[key];
}

function findColumn(entry, keyword) {
  return entry.columns.find((c) => c.title && removeDiacritics(c.title).toLowerCase().includes(keyword));
}

function setColumnItems(entry, keyword, items) {
  const col = findColumn(entry, keyword);
  if (col) {
    col.items = items;
    return;
  }
  // Không tự tạo cột rỗng: nếu người dùng đã xóa cột này ở trang "Khối nội
  // dung" thì tôn trọng lựa chọn đó, chỉ tạo lại khi thực sự có nội dung.
  if (!items.length) return;
  const def = COLUMN_DEFAULTS.find((d) => removeDiacritics(d.title).toLowerCase().includes(keyword));
  if (def) entry.columns.push({ ...def, items });
}

function getColumnItems(entry, keyword) {
  const col = entry && findColumn(entry, keyword);
  return col && Array.isArray(col.items) ? col.items : [];
}

async function updateCategoryContentColumns(contentKey, label, fallbackDesc, body) {
  // Trường hợp 1: người dùng chọn sẵn 1 bài từ file noidung.md trong danh sách
  // thả xuống -> thay nguyên bộ khung nội dung theo bài đó.
  let fullColumns = null;
  if (body.noidungColumns) {
    try {
      const parsed = JSON.parse(body.noidungColumns);
      if (Array.isArray(parsed) && parsed.length) {
        fullColumns = parsed
          .map((c) => ({
            icon: String(c.icon || 'check_circle').trim(),
            color: String(c.color || '#1D5FA8').trim(),
            title: String(c.title || '').trim(),
            items: (Array.isArray(c.items) ? c.items : []).map((s) => String(s).trim()).filter(Boolean),
          }))
          .filter((c) => c.title && c.items.length);
      }
    } catch (e) {
      console.error('noidungColumns không hợp lệ:', e.message);
    }
  }

  if (fullColumns) {
    const ccLoaded = await loadCategoryContent();
    const entry = ensureContentEntry(ccLoaded.categoryContent, contentKey, label, fallbackDesc);
    if (body.noidungHeading) entry.heading = String(body.noidungHeading).trim();
    if (body.noidungShortDesc) entry.shortDesc = String(body.noidungShortDesc).trim();
    entry.columns = fullColumns;
    await saveCategoryContent(ccLoaded, ccLoaded.categoryContent);
    return;
  }

  // Trường hợp 2: nhập tay 3 ô quen thuộc
  const appItems = linesToItems(body.appList);
  const prosItems = linesToItems(body.prosList);
  const commitItems = linesToItems(body.commitList);
  const hasAnyContent = appItems.length || prosItems.length || commitItems.length;

  const ccLoaded = await loadCategoryContent();
  const alreadyExists = !!ccLoaded.categoryContent[contentKey];
  if (!hasAnyContent && !alreadyExists) return; // không tạo mục rỗng không cần thiết

  const entry = ensureContentEntry(ccLoaded.categoryContent, contentKey, label, fallbackDesc);
  setColumnItems(entry, 'ung dung', appItems);
  setColumnItems(entry, 'uu diem', prosItems);
  setColumnItems(entry, 'cam ket', commitItems);
  await saveCategoryContent(ccLoaded, ccLoaded.categoryContent);
}

// =====================================================================
// Helpers: chuỗi / slug / id / tên file / tên thư mục
// =====================================================================

// Xây regex từ mã ký tự (code point) thay vì gõ trực tiếp ký tự dấu kết hợp
// trong source code, để tránh lỗi sai lệch encoding khi lưu file.
const COMBINING_MARKS_RE = new RegExp(
  '[' + String.fromCodePoint(0x0300) + '-' + String.fromCodePoint(0x036f) + ']',
  'g'
);

function removeDiacritics(str) {
  return String(str)
    .normalize('NFD')
    .replace(COMBINING_MARKS_RE, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

function slugId(title, maxLen = 10) {
  let s = removeDiacritics(String(title || '')).toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!s) s = 'sp';
  return s.slice(0, maxLen);
}

function slugFile(title) {
  let s = removeDiacritics(String(title || ''))
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (!s) s = 'san-pham';
  return s;
}

function uniqueId(base, products) {
  const ids = new Set(products.map((p) => p.id));
  let n = 1;
  let id = base + n;
  while (ids.has(id)) { n++; id = base + n; }
  return id;
}

// Loại bỏ ký tự không hợp lệ trong tên thư mục/file
function sanitizeFolder(str) {
  return String(str || '').replace(/[<>:"/\\|?*]/g, '').trim();
}

function nextCatId(products, catBiaImages) {
  let maxN = 0;
  for (const p of products) {
    const m = /^cat(\d+)$/.exec(p.cat || '');
    if (m) maxN = Math.max(maxN, parseInt(m[1], 10));
  }
  for (const k of Object.keys(catBiaImages)) {
    const m = /^cat(\d+)$/.exec(k);
    if (m) maxN = Math.max(maxN, parseInt(m[1], 10));
  }
  return 'cat' + (maxN + 1);
}

function nextSubcatId(products, catId) {
  let maxS = 0;
  const re = new RegExp('^' + catId + '_s(\\d+)$');
  for (const p of products) {
    if (p.cat === catId) {
      const m = re.exec(p.subcat || '');
      if (m) maxS = Math.max(maxS, parseInt(m[1], 10));
    }
  }
  return catId + '_s' + (maxS + 1);
}

/**
 * Dựng danh sách ảnh của sản phẩm (thư viện ảnh).
 *
 * Trang quản lý gửi lên:
 *   - imageOrder : mảng JSON mô tả thứ tự ảnh cuối cùng. Ảnh cũ là đường dẫn
 *                  sẵn có, ảnh mới là chuỗi "__NEW_0__", "__NEW_1__"...
 *   - gallery    : các file ảnh mới, đúng theo thứ tự __NEW_0__, __NEW_1__...
 *
 * Nhờ vậy người dùng vừa thêm/xóa vừa kéo sắp xếp lẫn lộn ảnh cũ và ảnh mới
 * mà thứ tự vẫn đúng.
 */
async function buildImageList(body, files, catLabel, subcatLabel, title, oldImages) {
  let order = null;
  if (body.imageOrder) {
    try {
      const parsed = JSON.parse(body.imageOrder);
      if (Array.isArray(parsed)) order = parsed.map((s) => String(s));
    } catch (e) {
      console.error('imageOrder không hợp lệ:', e.message);
    }
  }

  const list = Array.isArray(files) ? files : [];

  // Không gửi thứ tự -> giữ ảnh cũ và nối các ảnh mới vào cuối
  if (!order) {
    const uploaded = [];
    for (const f of list) uploaded.push(await saveImageFile(f, catLabel, subcatLabel, title));
    return (oldImages || []).concat(uploaded);
  }

  const out = [];
  for (const token of order) {
    const m = /^__NEW_(\d+)__$/.exec(token);
    if (m) {
      const file = list[Number(m[1])];
      if (file) out.push(await saveImageFile(file, catLabel, subcatLabel, title));
    } else if (token) {
      out.push(token);
    }
  }
  return out;
}

// Lưu ảnh vào images/<catLabel>/<subcatLabel>/filename
// Trả về đường dẫn để lưu vào field "img" (trang web dùng từ html/ hoặc
// product/ nên có tiền tố "../")
async function saveImageFile(file, catLabel, subcatLabel, titleForName) {
  const folderCat = sanitizeFolder(catLabel) || 'Danh-muc';
  const folderSub = sanitizeFolder(subcatLabel) || folderCat;

  const ext = (path.extname(file.originalname) || '.png').toLowerCase();
  const base = 'sp-' + slugFile(titleForName);

  let filename = base + ext;
  let repoPath = `images/${folderCat}/${folderSub}/${filename}`;
  if (await fileExists(repoPath)) {
    filename = base + '-' + Date.now() + ext;
    repoPath = `images/${folderCat}/${folderSub}/${filename}`;
  }

  await writeFileEntry(repoPath, file.buffer, `Them anh san pham: ${filename}`);
  return '../' + repoPath;
}

// =====================================================================
// Tự động phân tích nội dung mô tả -> tên SP + 3 mục nội dung
// =====================================================================

// Các tiêu đề thường gặp trong mô tả sản phẩm (đã bỏ dấu để so khớp)
const HEADING_PATTERNS = [
  { key: 'title', re: /^(ten san pham|ten sp|ten hang)\b/ },
  { key: 'app', re: /^(ung dung|ap dung|pham vi|doi tuong|dung cho|phu hop|su dung (cho|trong)|linh vuc)\b/ },
  { key: 'pros', re: /^(uu diem|dac diem|tinh nang|noi bat|diem manh|uu the|thong so|chat lieu|cau tao)\b/ },
  { key: 'commit', re: /^(cam ket|bao hanh|chinh sach|dich vu|ho tro|quyen loi)\b/ },
];

// Bỏ ký tự đầu dòng kiểu gạch đầu dòng / số thứ tự
function stripBullet(line) {
  return String(line).replace(/^[\s\-–—•*+>#✔✓☑»]+/, '').replace(/^\d+[.)]\s*/, '').trim();
}

// Chỉ coi là TIÊU ĐỀ khi dòng đó thực sự trông giống tiêu đề, để tránh nhầm
// một câu bình thường (vd "Phù hợp mọi môi trường làm việc.") thành tiêu đề:
//  - có dấu ":" nằm gần đầu dòng, hoặc
//  - là dòng ngắn, không kết thúc bằng dấu chấm
function detectHeading(line) {
  const clean = stripBullet(line);
  if (!clean) return null;

  const colonIdx = clean.indexOf(':');
  const hasEarlyColon = colonIdx > 0 && colonIdx <= 40;
  const looksLikeShortHeading = clean.length <= 40 && !/[.!?]$/.test(clean);
  if (!hasEarlyColon && !looksLikeShortHeading) return null;

  // Chỉ so khớp phần đứng trước dấu ":" (nếu có)
  const label = hasEarlyColon ? clean.slice(0, colonIdx) : clean;
  const norm = removeDiacritics(label).toLowerCase().trim();

  for (const { key, re } of HEADING_PATTERNS) {
    if (re.test(norm)) {
      return { key, inline: hasEarlyColon ? clean.slice(colonIdx + 1).trim() : '' };
    }
  }
  return null;
}

// Một dòng dài chứa nhiều ý -> tách thành nhiều gạch đầu dòng
function splitLongLine(line) {
  if (line.length <= 120) return [line];
  const parts = line.split(/(?<=[.;])\s+/).map((s) => s.trim()).filter(Boolean);
  return parts.length > 1 ? parts : [line];
}

function analyzeByKeywords(desc) {
  const lines = String(desc || '').split('\n').map((l) => l.trim());
  const buckets = { title: [], app: [], pros: [], commit: [], other: [] };

  let current = 'other';
  let sawHeading = false;

  for (const line of lines) {
    if (!line) continue;
    const heading = detectHeading(line);
    if (heading) {
      sawHeading = true;
      current = heading.key;
      if (heading.inline) buckets[current].push(heading.inline);
      continue;
    }
    buckets[current].push(stripBullet(line));
  }

  const toItems = (arr) =>
    arr.flatMap(splitLongLine).map((s) => s.trim()).filter(Boolean);

  // Tên sản phẩm: lấy từ mục "tên sản phẩm", nếu không có thì lấy dòng đầu
  // tiên (thường là tiêu đề của cả đoạn mô tả)
  let title = toItems(buckets.title)[0] || '';
  if (!title) {
    const first = buckets.other[0] || '';
    if (first && first.length <= 120) title = first;
  }
  if (title.length > 120) title = '';

  const appItems = toItems(buckets.app);
  const prosItems = toItems(buckets.pros);
  const commitItems = toItems(buckets.commit);

  // Đủ tin cậy khi nhận diện được tiêu đề và có ít nhất 2 trong 3 mục
  const filled = [appItems, prosItems, commitItems].filter((a) => a.length > 0).length;
  const confident = sawHeading && filled >= 2;

  return { title, appItems, prosItems, commitItems, confident };
}

const AI_PROMPT = `Bạn là trợ lý biên tập nội dung cho công ty bán thiết bị bảo hộ lao động Thành Phong (Việt Nam).

Dựa vào đoạn mô tả sản phẩm dưới đây, hãy trả về DUY NHẤT một khối JSON hợp lệ, không kèm giải thích, không kèm dấu \`\`\`, theo đúng cấu trúc:

{
  "title": "Tên sản phẩm ngắn gọn, viết hoa chữ cái đầu mỗi từ chính",
  "appItems": ["Ứng dụng thực tế 1", "..."],
  "prosItems": ["Ưu điểm nổi bật 1", "..."],
  "commitItems": ["Cam kết từ Thành Phong 1", "..."]
}

Yêu cầu:
- Viết bằng tiếng Việt có dấu, giọng văn chuyên nghiệp, ngắn gọn.
- Mỗi mảng có từ 4 đến 8 mục, mỗi mục là một câu ngắn kết thúc bằng dấu chấm.
- "appItems": sản phẩm dùng ở đâu, cho đối tượng/ngành nghề nào.
- "prosItems": điểm mạnh về chất liệu, thiết kế, độ bền, tiêu chuẩn an toàn.
- "commitItems": cam kết của Thành Phong về chất lượng, nguồn gốc, bảo hành, tư vấn, giao hàng.
- Chỉ dựa trên thông tin trong mô tả; nếu thiếu thì suy luận hợp lý theo đặc thù ngành bảo hộ lao động, tuyệt đối không bịa số liệu, chứng nhận hay thông số kỹ thuật cụ thể.

Mô tả sản phẩm:
`;

async function analyzeByAI(desc) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: AI_MODEL,
      max_tokens: 2000,
      messages: [{ role: 'user', content: AI_PROMPT + desc }],
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`AI trả về lỗi ${res.status}: ${detail.slice(0, 300)}`);
  }

  const json = await res.json();
  const text = (json.content || []).map((c) => c.text || '').join('').trim();

  // Phòng trường hợp AI kèm thêm chữ quanh khối JSON
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('AI không trả về đúng định dạng JSON.');

  const parsed = JSON.parse(text.slice(start, end + 1));
  const arr = (v) => (Array.isArray(v) ? v.map((s) => String(s).trim()).filter(Boolean) : []);

  return {
    title: String(parsed.title || '').trim(),
    appItems: arr(parsed.appItems),
    prosItems: arr(parsed.prosItems),
    commitItems: arr(parsed.commitItems),
  };
}

app.post('/api/analyze-description', requireAuth, async (req, res) => {
  try {
    const desc = ((req.body && req.body.desc) || '').trim();
    if (!desc) return res.status(400).json({ error: 'Vui lòng nhập nội dung mô tả trước.' });

    // 1) Thử tách theo từ khóa (miễn phí, tức thì)
    const byKeyword = analyzeByKeywords(desc);
    if (byKeyword.confident) {
      return res.json({ ...byKeyword, source: 'keyword' });
    }

    // 2) Không đủ tin cậy -> nhờ AI
    if (ANTHROPIC_API_KEY) {
      try {
        const byAI = await analyzeByAI(desc);
        return res.json({ ...byAI, source: 'ai' });
      } catch (aiErr) {
        console.error('Lỗi gọi AI:', aiErr);
        return res.json({
          ...byKeyword,
          source: 'keyword',
          warning: 'Không gọi được AI (' + aiErr.message + '). Đã tạm tách theo từ khóa.',
        });
      }
    }

    res.json({
      ...byKeyword,
      source: 'keyword',
      warning:
        'Chưa nhận diện được các tiêu đề như "Ứng dụng:", "Ưu điểm:", "Cam kết:" trong mô tả. ' +
        'Hãy thêm các tiêu đề đó, hoặc cài đặt AI để tự động phân tích.',
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// =====================================================================
// API dữ liệu (yêu cầu đăng nhập)
// =====================================================================

// Lấy toàn bộ dữ liệu: sản phẩm + danh mục
app.get('/api/data', requireAuth, async (req, res) => {
  try {
    const { products, catBiaImages } = await loadData();

    const catMap = new Map();
    for (const p of products) {
      if (!catMap.has(p.cat)) {
        catMap.set(p.cat, {
          catId: p.cat,
          catLabel: p.catLabel,
          cover: catBiaImages[p.cat] || '',
          count: 0,
          subcats: new Map(),
        });
      }
      const c = catMap.get(p.cat);
      c.count++;
      if (p.subcat) {
        if (!c.subcats.has(p.subcat)) {
          c.subcats.set(p.subcat, { subcatId: p.subcat, subcatLabel: p.subcatLabel, count: 0 });
        }
        c.subcats.get(p.subcat).count++;
      }
    }

    const categories = Array.from(catMap.values())
      .map((c) => ({ ...c, subcats: Array.from(c.subcats.values()) }))
      .sort((a, b) => a.catLabel.localeCompare(b.catLabel, 'vi'));

    res.json({ products, categories, autoSync: ONLINE_MODE });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Lấy nội dung 3 cột hiện có của 1 danh mục / danh mục con
app.get('/api/category-content/:key', requireAuth, async (req, res) => {
  try {
    const { categoryContent } = await loadCategoryContent();
    const entry = categoryContent[req.params.key];
    res.json({
      appItems: getColumnItems(entry, 'ung dung'),
      prosItems: getColumnItems(entry, 'uu diem'),
      commitItems: getColumnItems(entry, 'cam ket'),
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// =====================================================================
// Bài viết / tin tức (js/posts.js)
// =====================================================================

async function loadPosts() {
  const entry = await readFileEntry(POSTS_PATH);
  if (!entry) throw new Error('Không tìm thấy file js/posts.js');
  const raw = entry.text;

  const marker = 'const posts = ';
  const idx = raw.indexOf(marker);
  if (idx === -1) throw new Error('Không tìm thấy "const posts" trong js/posts.js');
  const start = idx + marker.length;
  const end = findBalanced(raw, start, '[', ']');
  if (end === -1) throw new Error('Không đọc được mảng posts (ngoặc không khớp)');

  return { raw, sha: entry.sha, posts: JSON.parse(raw.slice(start, end + 1)), range: [start, end] };
}

async function savePosts(loaded, posts, message) {
  const { raw, range } = loaded;
  const out = raw.slice(0, range[0]) + JSON.stringify(posts, null, 2) + raw.slice(range[1] + 1);

  if (!ONLINE_MODE) {
    try { fs.writeFileSync(path.join(ROOT, POSTS_PATH) + '.bak', raw, 'utf8'); } catch (e) { /* bỏ qua */ }
  }
  await writeFileEntry(POSTS_PATH, out, message || 'Cap nhat bai viet qua trang quan ly', loaded.sha);
}

/**
 * Lọc HTML do người soạn nhập vào.
 * Nội dung này do quản trị viên tự viết nên rủi ro thấp, nhưng vẫn loại bỏ
 * thẻ script/iframe, thuộc tính on... và link javascript: cho chắc chắn.
 */
function sanitizeHtml(html) {
  let s = String(html || '');
  s = s.replace(/<\s*(script|style|iframe|object|embed|form|link|meta)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '');
  s = s.replace(/<\s*(script|style|iframe|object|embed|form|link|meta)[^>]*\/?\s*>/gi, '');
  s = s.replace(/\son\w+\s*=\s*"[^"]*"/gi, '');
  s = s.replace(/\son\w+\s*=\s*'[^']*'/gi, '');
  s = s.replace(/\son\w+\s*=\s*[^\s>]+/gi, '');
  s = s.replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"');
  return s.trim();
}

function slugify(title) {
  const s = removeDiacritics(String(title || ''))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return s.slice(0, 80) || 'bai-viet';
}

function uniqueSlug(base, posts, ignoreId) {
  const taken = new Set(posts.filter((p) => p.id !== ignoreId).map((p) => p.slug));
  if (!taken.has(base)) return base;
  let n = 2;
  while (taken.has(base + '-' + n)) n++;
  return base + '-' + n;
}

function nextPostId(posts) {
  let max = 0;
  for (const p of posts) {
    const m = /^p(\d+)$/.exec(p.id || '');
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return 'p' + (max + 1);
}

// Lấy dữ liệu từ form (multipart) và chuẩn hóa thành 1 bài viết
function buildPostFromBody(body, old, coverPath) {
  const title = String(body.title || '').trim();
  return {
    title,
    excerpt: String(body.excerpt || '').trim(),
    cover: coverPath || (old ? old.cover : ''),
    tag: String(body.tag || '').trim(),
    category: String(body.category || '').trim() || 'Tin tức',
    date: String(body.date || '').trim() || new Date().toISOString().slice(0, 10),
    author: String(body.author || '').trim() || 'Thành Phong',
    sourceUrl: String(body.sourceUrl || '').trim(),
    featured: body.featured === 'true' || body.featured === true,
    contentHtml: sanitizeHtml(body.contentHtml),
  };
}

// Lưu ảnh của bài viết vào images/TIN TỨC/
async function savePostImage(file, nameHint) {
  const ext = (path.extname(file.originalname) || '.png').toLowerCase();
  const base = 'bai-' + slugify(nameHint || 'anh');
  let filename = base + ext;
  let repoPath = 'images/TIN TỨC/' + filename;
  if (await fileExists(repoPath)) {
    filename = base + '-' + Date.now() + ext;
    repoPath = 'images/TIN TỨC/' + filename;
  }
  await writeFileEntry(repoPath, file.buffer, 'Them anh bai viet: ' + filename);
  return '../' + repoPath;
}

app.get('/api/posts', requireAuth, async (req, res) => {
  try {
    const { posts } = await loadPosts();
    res.json({ posts });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/posts', requireAuth, upload.single('cover'), async (req, res) => {
  try {
    const body = req.body || {};
    const title = String(body.title || '').trim();
    if (!title) return res.status(400).json({ error: 'Vui lòng nhập tiêu đề bài viết.' });

    const loaded = await loadPosts();
    const { posts } = loaded;

    const coverPath = req.file ? await savePostImage(req.file, title) : '';
    const post = buildPostFromBody(body, null, coverPath);
    post.id = nextPostId(posts);
    post.slug = uniqueSlug(String(body.slug || '').trim() || slugify(title), posts, null);

    posts.unshift(post);
    await savePosts(loaded, posts, 'Them bai viet: ' + title);
    res.json({ ok: true, post });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/posts/:id', requireAuth, upload.single('cover'), async (req, res) => {
  try {
    const body = req.body || {};
    const loaded = await loadPosts();
    const { posts } = loaded;

    const idx = posts.findIndex((p) => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Không tìm thấy bài viết.' });

    const title = String(body.title || '').trim();
    if (!title) return res.status(400).json({ error: 'Vui lòng nhập tiêu đề bài viết.' });

    const old = posts[idx];
    const coverPath = req.file ? await savePostImage(req.file, title) : '';
    const updated = buildPostFromBody(body, old, coverPath);
    updated.id = old.id;
    updated.slug = uniqueSlug(String(body.slug || '').trim() || old.slug || slugify(title), posts, old.id);

    posts[idx] = updated;
    await savePosts(loaded, posts, 'Sua bai viet: ' + title);
    res.json({ ok: true, post: updated });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/posts/:id', requireAuth, async (req, res) => {
  try {
    const loaded = await loadPosts();
    const { posts } = loaded;
    const idx = posts.findIndex((p) => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Không tìm thấy bài viết.' });
    const removed = posts[idx];
    posts.splice(idx, 1);
    await savePosts(loaded, posts, 'Xoa bai viet: ' + removed.title);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Chèn ảnh vào giữa bài viết
app.post('/api/posts/upload-image', requireAuth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Chưa chọn ảnh.' });
    const url = await savePostImage(req.file, (req.body && req.body.name) || 'noi-dung');
    // Trang admin nằm khác cấp thư mục nên trả về thêm đường dẫn để xem trước
    res.json({ ok: true, url, previewUrl: url.replace(/^\.\.\//, '/') });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// =====================================================================
// Kho nội dung có sẵn (file noidung.md) - dùng cho danh sách thả xuống
// =====================================================================

// File này khá lớn (vài trăm KB) nên chỉ đọc và phân tích 1 lần rồi giữ lại.
let noidungCache = null;

async function getNoidungArticles() {
  if (noidungCache) return noidungCache;

  const entry = await readFileEntry(NOIDUNG_PATH);
  if (!entry) {
    noidungCache = { available: false, articles: [] };
    return noidungCache;
  }

  const articles = parseNoidung(entry.text);
  noidungCache = { available: true, articles };
  console.log('Đã nạp ' + articles.length + ' bài từ ' + NOIDUNG_PATH);
  return noidungCache;
}

// Danh sách rút gọn để đổ vào dropdown
app.get('/api/noidung', requireAuth, async (req, res) => {
  try {
    const { available, articles } = await getNoidungArticles();
    res.json({
      available,
      file: NOIDUNG_PATH,
      items: articles.map((a) => ({
        id: a.id,
        name: a.sourceName,
        heading: a.heading,
        columnCount: a.columns.length,
      })),
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Nội dung đầy đủ của 1 bài
app.get('/api/noidung/:id', requireAuth, async (req, res) => {
  try {
    const { articles } = await getNoidungArticles();
    const art = articles.find((a) => a.id === req.params.id);
    if (!art) return res.status(404).json({ error: 'Không tìm thấy bài này trong file nội dung.' });
    res.json(art);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Đọc lại file (dùng khi vừa cập nhật noidung.md)
app.post('/api/noidung/reload', requireAuth, async (req, res) => {
  try {
    noidungCache = null;
    const { available, articles } = await getNoidungArticles();
    res.json({ ok: true, available, count: articles.length });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// =====================================================================
// Quản lý các khối nội dung (ô đặc điểm + cột nội dung) của trang chi tiết
// =====================================================================

// Danh sách danh mục / danh mục con để chọn
app.get('/api/blocks', requireAuth, async (req, res) => {
  try {
    const { products } = await loadData();
    const { categoryContent } = await loadCategoryContent();

    const seenCat = new Map();
    for (const p of products) {
      if (!seenCat.has(p.cat)) {
        seenCat.set(p.cat, { key: p.cat, label: p.catLabel, type: 'cat', subcats: new Map() });
      }
      if (p.subcat && !seenCat.get(p.cat).subcats.has(p.subcat)) {
        seenCat.get(p.cat).subcats.set(p.subcat, {
          key: p.subcat,
          label: p.subcatLabel,
          type: 'subcat',
        });
      }
    }

    const targets = [];
    for (const cat of Array.from(seenCat.values()).sort((a, b) => a.label.localeCompare(b.label, 'vi'))) {
      targets.push({ ...cat, subcats: undefined, hasContent: !!categoryContent[cat.key] });
      for (const sub of cat.subcats.values()) {
        targets.push({ ...sub, parent: cat.key, hasContent: !!categoryContent[sub.key] });
      }
    }

    res.json({ targets });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Lấy các khối của 1 danh mục / danh mục con
app.get('/api/blocks/:key', requireAuth, async (req, res) => {
  try {
    const { categoryContent } = await loadCategoryContent();
    const entry = categoryContent[req.params.key];
    res.json({
      exists: !!entry,
      tagline: (entry && entry.tagline) || '',
      heading: (entry && entry.heading) || '',
      shortDesc: (entry && entry.shortDesc) || '',
      features: (entry && Array.isArray(entry.features) ? entry.features : []).map((f) => ({
        icon: f.icon || 'verified',
        color: f.color || '',
        iconWrapClass: f.iconWrapClass || '',
        iconClass: f.iconClass || '',
        title: f.title || '',
        desc: f.desc || '',
      })),
      columns: (entry && Array.isArray(entry.columns) ? entry.columns : []).map((c) => ({
        icon: c.icon || 'check_circle',
        color: c.color || '#1D5FA8',
        title: c.title || '',
        items: Array.isArray(c.items) ? c.items : [],
      })),
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Lưu các khối (đã sửa nội dung / đổi thứ tự / thêm / xóa)
app.put('/api/blocks/:key', requireAuth, async (req, res) => {
  try {
    const key = req.params.key;
    const body = req.body || {};

    const features = (Array.isArray(body.features) ? body.features : [])
      .map((f) => ({
        icon: String(f.icon || 'verified').trim(),
        color: String(f.color || '').trim(),
        iconWrapClass: String(f.iconWrapClass || '').trim(),
        iconClass: String(f.iconClass || '').trim(),
        title: String(f.title || '').trim(),
        desc: String(f.desc || '').trim(),
      }))
      .filter((f) => f.title);

    const columns = (Array.isArray(body.columns) ? body.columns : [])
      .map((c) => ({
        icon: String(c.icon || 'check_circle').trim(),
        color: String(c.color || '#1D5FA8').trim(),
        title: String(c.title || '').trim(),
        items: (Array.isArray(c.items) ? c.items : [])
          .map((s) => String(s).trim())
          .filter(Boolean),
      }))
      .filter((c) => c.title);

    const loaded = await loadCategoryContent();
    const entry = ensureContentEntry(
      loaded.categoryContent,
      key,
      String(body.heading || '').trim() || key,
      String(body.shortDesc || '').trim()
    );

    if (body.tagline !== undefined) entry.tagline = String(body.tagline).trim();
    if (body.heading !== undefined) entry.heading = String(body.heading).trim();
    if (body.shortDesc !== undefined) entry.shortDesc = String(body.shortDesc).trim();
    entry.features = features;
    entry.columns = columns;

    await saveCategoryContent(loaded, loaded.categoryContent);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Thêm sản phẩm mới
app.post('/api/products', requireAuth, upload.array('gallery', 20), async (req, res) => {
  try {
    const body = req.body || {};
    const title = (body.title || '').trim();
    const desc = (body.desc || '').trim();
    if (!title) return res.status(400).json({ error: 'Vui lòng nhập tên sản phẩm.' });
    if (!req.files || !req.files.length) {
      return res.status(400).json({ error: 'Vui lòng chọn ít nhất 1 ảnh sản phẩm.' });
    }

    const loaded = await loadData();
    const { products, catBiaImages } = loaded;

    // ---- Danh mục ----
    let catId = body.catId;
    let catLabel;
    let isNewCat = false;
    if (!catId || catId === '__new__') {
      const newCatLabel = (body.newCatLabel || '').trim();
      if (!newCatLabel) return res.status(400).json({ error: 'Vui lòng nhập tên danh mục mới.' });
      catId = nextCatId(products, catBiaImages);
      catLabel = newCatLabel;
      isNewCat = true;
    } else {
      const existing = products.find((p) => p.cat === catId);
      if (!existing) return res.status(400).json({ error: 'Danh mục không hợp lệ.' });
      catLabel = existing.catLabel;
    }

    // ---- Danh mục con ----
    let subcatId = body.subcatId;
    let subcatLabel = '';
    if (subcatId === '__none__' || !subcatId) {
      subcatId = '';
      subcatLabel = '';
    } else if (subcatId === '__new__') {
      const newSubcatLabel = (body.newSubcatLabel || '').trim();
      if (!newSubcatLabel) return res.status(400).json({ error: 'Vui lòng nhập tên danh mục con mới.' });
      subcatId = nextSubcatId(products, catId);
      subcatLabel = newSubcatLabel;
    } else {
      const existingSub = products.find((p) => p.subcat === subcatId);
      if (!existingSub) return res.status(400).json({ error: 'Danh mục con không hợp lệ.' });
      subcatLabel = existingSub.subcatLabel;
    }

    // ---- Thư viện ảnh (ảnh đầu tiên là ảnh bìa) ----
    const images = await buildImageList(body, req.files, catLabel, subcatLabel || catLabel, title, []);
    if (!images.length) return res.status(400).json({ error: 'Không lưu được ảnh sản phẩm.' });
    const imgPath = images[0];

    // Danh mục mới thì cần ảnh bìa cho catBiaImages
    if (isNewCat) catBiaImages[catId] = imgPath;

    const id = uniqueId(slugId(title), products);
    const newProduct = {
      id,
      title,
      cat: catId,
      catLabel,
      subcat: subcatId,
      subcatLabel,
      img: imgPath,
      images,
      desc,
    };
    products.push(newProduct);

    await saveData(loaded, products, catBiaImages, `Them san pham: ${title}`);

    try {
      await updateCategoryContentColumns(subcatId || catId, subcatLabel || catLabel, desc, body);
    } catch (e2) {
      console.error('Lỗi cập nhật category_content.js:', e2);
    }

    res.json({ ok: true, product: newProduct });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Sửa sản phẩm
app.put('/api/products/:id', requireAuth, upload.array('gallery', 20), async (req, res) => {
  try {
    const body = req.body || {};
    const loaded = await loadData();
    const { products, catBiaImages } = loaded;

    const idx = products.findIndex((p) => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Không tìm thấy sản phẩm.' });
    const product = products[idx];

    const title = (body.title || '').trim();
    if (!title) return res.status(400).json({ error: 'Vui lòng nhập tên sản phẩm.' });

    // ---- Danh mục ----
    let catId = body.catId;
    let catLabel;
    let isNewCat = false;
    if (!catId || catId === '__new__') {
      const newCatLabel = (body.newCatLabel || '').trim();
      if (!newCatLabel) return res.status(400).json({ error: 'Vui lòng nhập tên danh mục mới.' });
      catId = nextCatId(products, catBiaImages);
      catLabel = newCatLabel;
      isNewCat = true;
    } else {
      const existing = products.find((p) => p.cat === catId);
      catLabel = existing ? existing.catLabel : product.catLabel;
    }

    // ---- Danh mục con ----
    let subcatId = body.subcatId;
    let subcatLabel = '';
    if (subcatId === '__none__' || !subcatId) {
      subcatId = '';
      subcatLabel = '';
    } else if (subcatId === '__new__') {
      const newSubcatLabel = (body.newSubcatLabel || '').trim();
      if (!newSubcatLabel) return res.status(400).json({ error: 'Vui lòng nhập tên danh mục con mới.' });
      subcatId = nextSubcatId(products, catId);
      subcatLabel = newSubcatLabel;
    } else {
      const existingSub = products.find((p) => p.subcat === subcatId);
      subcatLabel = existingSub ? existingSub.subcatLabel : '';
    }

    // ---- Thư viện ảnh ----
    // Ảnh cũ: dùng mảng images nếu có, không thì lấy tạm ảnh bìa cũ
    const oldImages = Array.isArray(product.images) && product.images.length
      ? product.images
      : (product.img ? [product.img] : []);

    let images = await buildImageList(body, req.files, catLabel, subcatLabel || catLabel, title, oldImages);
    if (!images.length) images = oldImages;
    const imgPath = images[0] || product.img;

    if (isNewCat) catBiaImages[catId] = catBiaImages[catId] || imgPath;

    products[idx] = {
      ...product,
      title,
      cat: catId,
      catLabel,
      subcat: subcatId,
      subcatLabel,
      img: imgPath,
      images,
      desc: (body.desc || '').trim(),
    };

    await saveData(loaded, products, catBiaImages, `Sua san pham: ${title}`);

    try {
      await updateCategoryContentColumns(subcatId || catId, subcatLabel || catLabel, products[idx].desc, body);
    } catch (e2) {
      console.error('Lỗi cập nhật category_content.js:', e2);
    }

    res.json({ ok: true, product: products[idx] });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Xóa sản phẩm
app.delete('/api/products/:id', requireAuth, async (req, res) => {
  try {
    const loaded = await loadData();
    const { products, catBiaImages } = loaded;
    const idx = products.findIndex((p) => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Không tìm thấy sản phẩm.' });
    const removed = products[idx];
    products.splice(idx, 1);
    await saveData(loaded, products, catBiaImages, `Xoa san pham: ${removed.title}`);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Đồng bộ lên GitHub - chỉ cần ở chế độ máy cá nhân
app.post('/api/sync', requireAuth, (req, res) => {
  if (ONLINE_MODE) {
    return res.json({ ok: true, message: 'Chế độ online: thay đổi đã được lưu tự động lên GitHub.' });
  }

  const git = process.platform === 'win32' ? '"C:\\Program Files\\Git\\cmd\\git.exe"' : 'git';
  const cmd = `${git} add -A && ${git} commit -m "Cap nhat san pham qua trang quan ly" && ${git} push origin ${GITHUB_BRANCH}`;
  const env = { ...process.env, PATH: (process.env.PATH || '') + ';C:\\Program Files\\Git\\cmd' };

  exec(cmd, { cwd: ROOT, maxBuffer: 1024 * 1024 * 10, env }, (err, stdout, stderr) => {
    const out = (stdout || '') + (stderr || '');
    if (err) {
      if (out.includes('nothing to commit')) {
        return res.json({ ok: true, message: 'Không có thay đổi nào mới cần đồng bộ.' });
      }
      console.error(out);
      return res.status(500).json({ ok: false, message: out || err.message });
    }
    res.json({ ok: true, message: 'Đã đồng bộ (commit + push) lên GitHub thành công.' });
  });
});

// =====================================================================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('=============================================');
  console.log('Trang quan ly san pham Thanh Phong');
  console.log('  Che do    :', ONLINE_MODE ? 'ONLINE (ghi thang len GitHub)' : 'MAY CA NHAN (ghi file tren may)');
  console.log('  Mat khau  :', ADMIN_PASSWORD ? 'CO' : 'KHONG (chi nen dung tren may ca nhan)');
  console.log('  Dia chi   : http://localhost:' + PORT);
  console.log('=============================================');
  if (ONLINE_MODE && !process.env.SESSION_SECRET) {
    console.warn('Luu y: chua dat SESSION_SECRET -> moi lan server khoi dong lai,');
    console.warn('nguoi dung se phai dang nhap lai. Nen dat bien SESSION_SECRET.');
  }
});
