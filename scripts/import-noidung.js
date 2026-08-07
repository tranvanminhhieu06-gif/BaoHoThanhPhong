/**
 * Nạp hàng loạt nội dung từ file noidung.md vào website
 * ----------------------------------------------------
 * (Phần đọc/tách file nằm ở scripts/noidung-parser.js)
 *
 * CÁCH CHẠY (mở Command Prompt tại thư mục BaoHoThanhPhong):
 *
 *   node scripts/import-noidung.js noidung.md
 *       -> Chỉ tạo bản xem trước, KHÔNG đụng vào website.
 *          Xem kết quả tại: admin/preview/demo.html
 *
 *   node scripts/import-noidung.js noidung.md --apply
 *       -> Ghi nội dung thật vào js/category_content.js
 *          (tự động sao lưu ra category_content.js.bak trước khi ghi)
 */

const fs = require('fs');
const path = require('path');
const { parseNoidung, matchTarget, normKey } = require('./noidung-parser');

const ROOT = path.join(__dirname, '..');
const PRODUCTS_JS = path.join(ROOT, 'js', 'products.js');
const CATEGORY_CONTENT_JS = path.join(ROOT, 'js', 'category_content.js');
const PREVIEW_DIR = path.join(ROOT, 'admin', 'preview');

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const inputArg = args.find((a) => !a.startsWith('--')) || 'noidung.md';
const INPUT = path.isAbsolute(inputArg) ? inputArg : path.join(ROOT, inputArg);

// =====================================================================
// Đọc danh mục hiện có trong js/products.js
// =====================================================================

function findBalanced(str, startIdx, openCh, closeCh) {
  let depth = 0, inStr = false, esc = false;
  for (let i = startIdx; i < str.length; i++) {
    const ch = str[i];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === '\\') esc = true;
      else if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') { inStr = true; continue; }
    if (ch === openCh) depth++;
    else if (ch === closeCh) { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function readJsonBlock(raw, marker, open, close) {
  const idx = raw.indexOf(marker);
  if (idx === -1) throw new Error('Không tìm thấy "' + marker + '"');
  const start = idx + marker.length;
  const end = findBalanced(raw, start, open, close);
  if (end === -1) throw new Error('Ngoặc không khớp sau "' + marker + '"');
  return { value: JSON.parse(raw.slice(start, end + 1)), start, end };
}

function loadTargets() {
  const raw = fs.readFileSync(PRODUCTS_JS, 'utf8');
  const { value: products } = readJsonBlock(raw, 'const products = ', '[', ']');

  const targets = [];
  const seen = new Set();
  for (const p of products) {
    if (p.cat && !seen.has(p.cat)) {
      seen.add(p.cat);
      targets.push({ key: p.cat, label: p.catLabel, type: 'cat', norm: normKey(p.catLabel) });
    }
    if (p.subcat && !seen.has(p.subcat)) {
      seen.add(p.subcat);
      targets.push({ key: p.subcat, label: p.subcatLabel, type: 'subcat', norm: normKey(p.subcatLabel) });
    }
  }
  return targets;
}

// =====================================================================

function main() {
  if (!fs.existsSync(INPUT)) {
    console.error('Không tìm thấy file: ' + INPUT);
    console.error('Hãy chép file noidung.md vào thư mục BaoHoThanhPhong rồi chạy lại.');
    process.exit(1);
  }

  const text = fs.readFileSync(INPUT, 'utf8');
  const targets = loadTargets();
  const articles = parseNoidung(text);

  console.log('Đã đọc ' + articles.length + ' bài trong file.');

  const matched = [];
  const unmatched = [];

  for (const art of articles) {
    // Thử theo tên đại diện trước, không được thì thử theo tiêu đề bài
    const target = matchTarget(art.sourceName, targets) || matchTarget(art.heading, targets);
    const entry = {
      id: art.id,
      sourceName: art.sourceName,
      key: target ? target.key : null,
      label: target ? target.label : null,
      type: target ? target.type : null,
      heading: art.heading,
      shortDesc: art.shortDesc,
      columns: art.columns,
    };
    if (target) matched.push(entry); else unmatched.push(entry);
  }

  // ---- Ghi bản xem trước ----
  fs.mkdirSync(PREVIEW_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(PREVIEW_DIR, 'noidung-data.js'),
    'window.__NOIDUNG__ = ' + JSON.stringify({
      generatedAt: new Date().toISOString(),
      sourceFile: path.basename(INPUT),
      matched,
      unmatched,
    }, null, 2) + ';\n',
    'utf8'
  );

  console.log('');
  console.log('Ghép được   : ' + matched.length + ' bài vào danh mục');
  console.log('Chưa ghép   : ' + unmatched.length + ' bài (xem trong trang demo)');
  console.log('');
  matched.forEach((r) => {
    console.log('  [OK] ' + String(r.key).padEnd(12) + ' <- ' + r.sourceName + '  (' + r.columns.length + ' khung)');
  });
  unmatched.forEach((r) => {
    console.log('  [??] ' + r.sourceName + '  (' + r.columns.length + ' khung)');
  });

  console.log('');
  console.log('Bản xem trước: admin/preview/demo.html');

  if (!APPLY) {
    console.log('');
    console.log('Chưa ghi gì vào website. Xem demo ưng ý rồi chạy lại kèm --apply:');
    console.log('   node scripts/import-noidung.js ' + path.basename(INPUT) + ' --apply');
    return;
  }

  // ---- Ghi thật vào js/category_content.js ----
  const raw = fs.readFileSync(CATEGORY_CONTENT_JS, 'utf8');
  const { value: content, start, end } = readJsonBlock(raw, 'var categoryContent = ', '{', '}');

  let changed = 0;
  for (const r of matched) {
    const old = content[r.key] || {};
    content[r.key] = {
      tagline: old.tagline || '',
      heading: r.heading || old.heading || r.label,
      shortDesc: r.shortDesc || old.shortDesc || '',
      features: Array.isArray(old.features) ? old.features : [],
      columns: r.columns,
    };
    changed++;
  }

  fs.writeFileSync(CATEGORY_CONTENT_JS + '.bak', raw, 'utf8');
  fs.writeFileSync(
    CATEGORY_CONTENT_JS,
    raw.slice(0, start) + JSON.stringify(content, null, 2) + raw.slice(end + 1),
    'utf8'
  );

  console.log('');
  console.log('ĐÃ GHI ' + changed + ' danh mục vào js/category_content.js');
  console.log('Bản cũ được lưu tại js/category_content.js.bak');
}

main();
