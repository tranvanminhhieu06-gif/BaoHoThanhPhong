/**
 * Server quản lý sản phẩm - Thành Phong Bảo Hộ Lao Động
 * ------------------------------------------------------
 * Server nhỏ chạy local (Node.js + Express) cho phép:
 *  - Xem danh sách danh mục / sản phẩm (đọc từ ../js/products.js)
 *  - Thêm / Sửa / Xóa sản phẩm, upload ảnh vào đúng thư mục images/
 *  - Ghi thẳng lại file ../js/products.js (giữ nguyên toàn bộ code hiển thị)
 *  - Nút đồng bộ (git add/commit/push) để đẩy thay đổi lên GitHub Pages
 *
 * Chạy:  npm install   rồi   npm start
 * Mở trình duyệt: http://localhost:3000
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const GIT_PATH = '"C:\\Program Files\\Git\\cmd\\git.exe"';

const ROOT = path.join(__dirname, '..');           // thư mục gốc của website
const PRODUCTS_JS = path.join(ROOT, 'js', 'products.js');
const IMAGES_DIR = path.join(ROOT, 'images');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB / ảnh
});

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Cho phép trang quản lý xem trực tiếp ảnh trong thư mục images/ của website
app.use('/images', express.static(IMAGES_DIR));

// =====================================================================
// Helpers: đọc / ghi js/products.js mà không đụng tới phần code JS khác
// =====================================================================

// Tìm vị trí dấu đóng ngoặc khớp với dấu mở ngoặc tại startIdx,
// có tính tới chuỗi (string) để không đếm nhầm ngoặc bên trong "..."
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

function loadData() {
  const raw = fs.readFileSync(PRODUCTS_JS, 'utf8');

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
    products,
    catBiaImages,
    prodRange: [prodArrStart, prodArrEnd],
    biaRange: [biaObjStart, biaObjEnd],
  };
}

function saveData(loaded, products, catBiaImages) {
  const { raw, prodRange, biaRange } = loaded;
  const newBiaJson = JSON.stringify(catBiaImages, null, 2);
  const newProdJson = JSON.stringify(products, null, 2);

  // catBiaImages nằm sau products trong file -> thay thế trước để không
  // làm lệch vị trí (index) của đoạn products.
  let out = raw.slice(0, biaRange[0]) + newBiaJson + raw.slice(biaRange[1] + 1);
  out = out.slice(0, prodRange[0]) + newProdJson + out.slice(prodRange[1] + 1);

  // Sao lưu bản trước khi ghi đè, phòng khi cần khôi phục
  try { fs.writeFileSync(PRODUCTS_JS + '.bak', raw, 'utf8'); } catch (e) { /* ignore */ }

  fs.writeFileSync(PRODUCTS_JS, out, 'utf8');
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

// Loại bỏ ký tự Windows không cho phép trong tên thư mục/file
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

// Lưu file ảnh (buffer) vào images/<catLabel>/<subcatLabel>/filename
// Trả về đường dẫn tương đối để lưu vào field "img" (dùng từ html/ hoặc product/ nên có "../")
function saveImageFile(file, catLabel, subcatLabel, titleForName) {
  const folderCat = sanitizeFolder(catLabel) || 'Danh-muc';
  const folderSub = sanitizeFolder(subcatLabel) || folderCat;
  const folder = path.join(IMAGES_DIR, folderCat, folderSub);
  fs.mkdirSync(folder, { recursive: true });

  const ext = (path.extname(file.originalname) || '.png').toLowerCase();
  const base = 'sp-' + slugFile(titleForName);
  let filename = base + ext;
  let counter = 1;
  while (fs.existsSync(path.join(folder, filename))) {
    filename = base + '-' + counter + ext;
    counter++;
  }
  fs.writeFileSync(path.join(folder, filename), file.buffer);

  return '../images/' + folderCat + '/' + folderSub + '/' + filename;
}

function saveCoverImageFile(file, catLabel) {
  const folder = path.join(IMAGES_DIR, 'BÌA');
  fs.mkdirSync(folder, { recursive: true });
  const ext = (path.extname(file.originalname) || '.png').toLowerCase();
  const base = 'bia-' + slugFile(catLabel);
  let filename = base + ext;
  let counter = 1;
  while (fs.existsSync(path.join(folder, filename))) {
    filename = base + '-' + counter + ext;
    counter++;
  }
  fs.writeFileSync(path.join(folder, filename), file.buffer);
  return '../images/BÌA/' + filename;
}

// =====================================================================
// API
// =====================================================================

// Lấy toàn bộ dữ liệu: sản phẩm + danh mục (tổng hợp từ products + catBiaImages)
app.get('/api/data', (req, res) => {
  try {
    const { products, catBiaImages } = loadData();

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

    res.json({ products, categories });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Thêm sản phẩm mới
app.post('/api/products', upload.single('image'), (req, res) => {
  try {
    const body = req.body || {};
    const title = (body.title || '').trim();
    const desc = (body.desc || '').trim();
    if (!title) return res.status(400).json({ error: 'Vui lòng nhập tên sản phẩm.' });
    if (!req.file) return res.status(400).json({ error: 'Vui lòng chọn ảnh sản phẩm.' });

    const loaded = loadData();
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

    // ---- Ảnh ----
    const imgPath = saveImageFile(req.file, catLabel, subcatLabel || catLabel, title);

    // ---- Danh mục mới thì cần ảnh bìa cho catBiaImages ----
    if (isNewCat) {
      catBiaImages[catId] = imgPath;
    }

    const id = uniqueId(slugId(title), products);
    const newProduct = {
      id,
      title,
      cat: catId,
      catLabel,
      subcat: subcatId,
      subcatLabel,
      img: imgPath,
      desc,
    };
    products.push(newProduct);

    saveData(loaded, products, catBiaImages);
    res.json({ ok: true, product: newProduct });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Sửa sản phẩm
app.put('/api/products/:id', upload.single('image'), (req, res) => {
  try {
    const body = req.body || {};
    const loaded = loadData();
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

    // ---- Ảnh (chỉ thay nếu có upload mới) ----
    let imgPath = product.img;
    if (req.file) {
      imgPath = saveImageFile(req.file, catLabel, subcatLabel || catLabel, title);
    }

    if (isNewCat) {
      catBiaImages[catId] = catBiaImages[catId] || imgPath;
    }

    products[idx] = {
      ...product,
      title,
      cat: catId,
      catLabel,
      subcat: subcatId,
      subcatLabel,
      img: imgPath,
      desc: (body.desc || '').trim(),
    };

    saveData(loaded, products, catBiaImages);
    res.json({ ok: true, product: products[idx] });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Xóa sản phẩm
app.delete('/api/products/:id', (req, res) => {
  try {
    const loaded = loadData();
    const { products, catBiaImages } = loaded;
    const idx = products.findIndex((p) => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Không tìm thấy sản phẩm.' });
    products.splice(idx, 1);
    saveData(loaded, products, catBiaImages);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Đồng bộ lên GitHub (git add / commit / push) - dùng cho GitHub Pages
app.post('/api/sync', (req, res) => {
  const cmd = `${GIT_PATH} add -A && ${GIT_PATH} commit -m "Cap nhat san pham qua trang quan ly" && ${GIT_PATH} push origin main`;
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('=============================================');
  console.log('Trang quản lý sản phẩm Thành Phong đang chạy tại:');
  console.log('  http://localhost:' + PORT);
  console.log('=============================================');
});
