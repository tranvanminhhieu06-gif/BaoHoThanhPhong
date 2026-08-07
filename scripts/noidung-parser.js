/**
 * Bộ đọc file noidung.md (xuất từ Word)
 * -------------------------------------
 * Dùng chung cho:
 *   - scripts/import-noidung.js  (chạy tay để nạp hàng loạt)
 *   - admin/server.js            (dropdown chọn bài trong trang quản lý)
 *
 * File noidung.md có dạng bảng kẻ bằng ký tự:
 *
 *   +--------+--------+
 *   | 7. ĐỒNG PHỤC ... |        <- dòng tiêu đề (tên DANH MỤC)
 *   +========+========+         <- vạch phân cách, quyết định bề rộng các cột
 *   | ÁO BẢO VỆ | QUẦN BẢO VỆ | <- tên DANH MỤC CON
 *   +--------+--------+
 *   | (bài mô tả đầy đủ)        <- nội dung
 *   +--------+--------+
 */

// =====================================================================
// Tiện ích chuỗi
// =====================================================================

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

// Dùng để so khớp tên: bỏ dấu, bỏ ký tự đặc biệt, gộp khoảng trắng
function normKey(str) {
  return removeDiacritics(String(str || ''))
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Gỡ các ký tự thoát do Word sinh ra và chuẩn hóa dấu gạch
function cleanText(str) {
  return String(str || '')
    .replace(/\\([|.\-*_[\]()>])/g, '$1')
    .replace(/\s*--\s*/g, ' – ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Bỏ phần đuôi thương hiệu lặp lại trong tiêu đề
function cleanHeading(str) {
  return cleanText(str)
    .replace(/\s*[|｜]\s*B[ảa]o H[ộo] Lao [ĐD][ộo]ng Th[àa]nh Phong\s*$/i, '')
    .replace(/\s*[|｜]\s*$/, '')
    .trim();
}

// =====================================================================
// Bước 1: Tách file thành các bảng, mỗi bảng thành các ô
// =====================================================================

const isRuler = (l) => /^\+[-=+]+\+\s*$/.test(l);
const isHeaderRuler = (l) => /^\+=[=+]*\+\s*$/.test(l);

// Vị trí các dấu '+' trên vạch kẻ -> ranh giới các cột
function columnBounds(ruler) {
  const pos = [];
  for (let i = 0; i < ruler.length; i++) if (ruler[i] === '+') pos.push(i);
  return pos;
}

// Cắt một dòng nội dung thành các ô theo ranh giới cột
function sliceRow(line, bounds) {
  const padded = line.padEnd(bounds[bounds.length - 1] + 1, ' ');
  const cells = [];
  for (let i = 0; i < bounds.length - 1; i++) {
    cells.push(padded.slice(bounds[i] + 1, bounds[i + 1]));
  }
  return cells;
}

// Gộp nhiều dòng của cùng một hàng thành mảng ô (mỗi ô là mảng dòng)
function splitRow(bufLines, bounds) {
  const colCount = bounds.length - 1;
  const cells = Array.from({ length: colCount }, () => []);
  for (const line of bufLines) {
    const parts = sliceRow(line, bounds);
    for (let c = 0; c < colCount; c++) cells[c].push(parts[c] || '');
  }
  return cells;
}

// Gộp các dòng tiêu đề thành 1 chuỗi cho mỗi cột
function joinCells(headerLines, bounds) {
  const colCount = Math.max(bounds.length - 1, 1);
  const out = Array.from({ length: colCount }, () => '');
  for (const line of headerLines) {
    const parts = sliceRow(line, bounds);
    for (let c = 0; c < colCount; c++) {
      const t = (parts[c] || '').trim();
      if (t) out[c] = (out[c] ? out[c] + ' ' : '') + t;
    }
  }
  return out.map(cleanText);
}

function parseTables(text) {
  const lines = text.split(/\r?\n/);
  const tables = [];

  let i = 0;
  while (i < lines.length) {
    if (!isRuler(lines[i])) { i++; continue; }

    // Tìm vạch '+===+' của bảng này (trong vòng vài dòng tới)
    let headerRulerIdx = -1;
    for (let k = i; k < Math.min(i + 12, lines.length); k++) {
      if (isHeaderRuler(lines[k])) { headerRulerIdx = k; break; }
      if (k > i && !isRuler(lines[k]) && !/^\|/.test(lines[k])) break;
    }
    if (headerRulerIdx === -1) { i++; continue; }

    // Dòng tiêu đề nằm giữa vạch mở đầu và vạch '+===+'
    const headerLines = [];
    for (let k = i + 1; k < headerRulerIdx; k++) {
      if (/^\|/.test(lines[k])) headerLines.push(lines[k]);
    }
    const headerCells = joinCells(headerLines, columnBounds(lines[i]));

    // Các hàng nội dung nằm dưới vạch '+===+'
    const bodyBounds = columnBounds(lines[headerRulerIdx]);
    const rows = [];
    let buf = [];
    let k = headerRulerIdx + 1;
    for (; k < lines.length; k++) {
      const line = lines[k];
      if (isRuler(line)) {
        if (buf.length) { rows.push(splitRow(buf, bodyBounds)); buf = []; }
        const nextIsBody = k + 1 < lines.length && /^\|/.test(lines[k + 1]);
        if (!nextIsBody) { k++; break; }
        continue;
      }
      if (/^\|/.test(line)) { buf.push(line); continue; }
      if (!line.trim()) { if (buf.length) { rows.push(splitRow(buf, bodyBounds)); buf = []; } continue; }
      break;
    }
    if (buf.length) rows.push(splitRow(buf, bodyBounds));

    if (rows.length) tables.push({ headerCells, rows });
    i = k;
  }

  return tables;
}

// =====================================================================
// Bước 2: Phân tích nội dung một ô thành tiêu đề + giới thiệu + các mục
// =====================================================================

function toBlocks(cellLines) {
  const blocks = [];
  let cur = null;
  const flush = () => { if (cur) { blocks.push(cur); cur = null; } };

  for (const raw of cellLines) {
    const line = raw.replace(/\s+$/, '');
    const trimmed = line.trim();

    // Dòng trống hoặc đường kẻ ngang trong ô -> kết thúc khối hiện tại
    if (!trimmed || /^[-–—_=]{3,}$/.test(trimmed)) { flush(); continue; }

    const bullet = trimmed.match(/^([-•*+✔✓☑])\s+(.*)$/);
    const indent = line.length - line.replace(/^\s+/, '').length;

    if (bullet) {
      flush();
      cur = { type: 'bullet', text: bullet[2] };
    } else if (cur && (indent >= 2 || cur.type === 'para')) {
      cur.text += ' ' + trimmed;
    } else {
      flush();
      cur = { type: 'para', text: trimmed };
    }
  }
  flush();

  return blocks.map((b) => ({ type: b.type, text: cleanText(b.text) })).filter((b) => b.text);
}

// Tiêu đề mục: dòng ngắn, không kết thúc bằng dấu chấm
function isHeadingLike(text) {
  return text.length <= 90 && !/[.!;:]$/.test(text);
}

function parseArticle(cellLines) {
  const blocks = toBlocks(cellLines);
  if (!blocks.length) return null;

  const heading = cleanHeading(blocks[0].text);

  const intro = [];
  const sections = [];
  let pendingHeading = '';
  let pendingParas = [];
  let current = null;

  const closeSection = () => {
    if (current && current.items.length) sections.push(current);
    current = null;
  };

  for (const b of blocks.slice(1)) {
    if (b.type === 'bullet') {
      if (!current) {
        current = { title: pendingHeading || 'Thông tin thêm', items: pendingParas.slice() };
        pendingHeading = '';
        pendingParas = [];
      }
      current.items.push(b.text);
      continue;
    }

    // Gặp đoạn văn -> kết thúc mục đang gom
    closeSection();

    if (isHeadingLike(b.text)) {
      // Đoạn văn đang chờ mà chưa có tiêu đề nào -> phần giới thiệu
      if (!pendingHeading && pendingParas.length) { intro.push(...pendingParas); pendingParas = []; }
      // Có tiêu đề cũ kèm đoạn văn nhưng không có gạch đầu dòng -> vẫn tạo mục
      if (pendingHeading && pendingParas.length) {
        sections.push({ title: pendingHeading, items: pendingParas.slice() });
        pendingParas = [];
      }
      pendingHeading = b.text;
    } else if (pendingHeading) {
      pendingParas.push(b.text);
    } else {
      intro.push(b.text);
    }
  }

  closeSection();
  if (pendingHeading && pendingParas.length) sections.push({ title: pendingHeading, items: pendingParas });
  else if (pendingParas.length) intro.push(...pendingParas);

  return { heading, shortDesc: intro.join('\n'), sections };
}

// =====================================================================
// Bước 3: Chọn biểu tượng + màu cho từng khung theo tên mục
// =====================================================================

const BOX_STYLES = [
  { match: /(ung dung|pham vi|doi tuong|phu hop|linh vuc)/, icon: 'info', color: '#1D5FA8' },
  { match: /(uu diem|dac diem|noi bat|loi ich)/, icon: 'verified', color: '#10B981' },
  { match: /(cam ket)/, icon: 'thumb_up', color: '#E8A500' },
  { match: /(bao hanh|chinh sach|doi tra)/, icon: 'shield', color: '#EF4444' },
  { match: /(thong so|ky thuat)/, icon: 'settings', color: '#64748B' },
  { match: /(bao quan|huong dan|su dung)/, icon: 'wash', color: '#0EA5E9' },
  { match: /(cac loai|phan loai|mau ma)/, icon: 'category', color: '#8B5CF6' },
  { match: /(chat lieu|vai)/, icon: 'layers', color: '#8B5CF6' },
  { match: /(thiet ke|kieu dang|form)/, icon: 'design_services', color: '#0EA5E9' },
  { match: /(kich thuoc|size|mau sac)/, icon: 'straighten', color: '#0EA5E9' },
  { match: /(giao hang|van chuyen)/, icon: 'local_shipping', color: '#1D5FA8' },
  { match: /(la gi|gioi thieu)/, icon: 'help', color: '#1D5FA8' },
];

function styleFor(title) {
  const n = normKey(title);
  for (const s of BOX_STYLES) if (s.match.test(n)) return { icon: s.icon, color: s.color };
  return { icon: 'check_circle', color: '#1D5FA8' };
}

// =====================================================================
// So khớp mờ tên bài với danh mục trong products.js
// =====================================================================

// Lưu ý: KHÔNG cộng điểm ưu tiên theo loại (cat/subcat), vì tên như
// "ÁO PHẢN QUANG PALIZE" vừa khớp danh mục "ÁO PHẢN QUANG" vừa khớp danh mục
// con "Áo Phản Quang Palize Cao Cấp..." — phải để mục khớp DÀI HƠN (cụ thể
// hơn) thắng, nếu cộng điểm theo loại thì danh mục cha sẽ thắng sai.
function matchTarget(name, targets) {
  const n = normKey(String(name).replace(/^\s*\d+\s*[.)]\s*/, ''));
  if (!n) return null;

  let best = null;
  let bestScore = 0;

  for (const t of targets) {
    let score = 0;
    if (t.norm === n) score = 1000;
    else if (t.norm.startsWith(n) || n.startsWith(t.norm)) score = 500 + Math.min(n.length, t.norm.length);
    else if (t.norm.includes(n) || n.includes(t.norm)) score = 300 + Math.min(n.length, t.norm.length);
    else {
      const a = new Set(n.split(' ').filter((w) => w.length > 2));
      const b = new Set(t.norm.split(' ').filter((w) => w.length > 2));
      let common = 0;
      for (const w of a) if (b.has(w)) common++;
      if (common >= 2 && common >= a.size * 0.6) score = 100 + common * 10;
    }
    if (score > bestScore) { bestScore = score; best = t; }
  }

  return bestScore >= 100 ? best : null;
}

// =====================================================================
// Hàm chính: đọc cả file -> danh sách bài
// =====================================================================

/**
 * Trả về mảng bài viết:
 * [{ id, sourceName, heading, shortDesc, columns: [{icon,color,title,items}] }]
 */
function parseNoidung(text) {
  const articles = [];
  const usedIds = new Set();

  const add = (art, sourceName) => {
    const columns = art.sections.map((s) => {
      const st = styleFor(s.title);
      return { icon: st.icon, color: st.color, title: cleanText(s.title), items: s.items };
    });

    let base = normKey(sourceName).replace(/\s+/g, '-').slice(0, 40) || 'bai';
    let id = base;
    let n = 2;
    while (usedIds.has(id)) { id = base + '-' + n; n++; }
    usedIds.add(id);

    articles.push({
      id,
      sourceName: cleanText(sourceName),
      heading: art.heading,
      shortDesc: art.shortDesc,
      columns,
    });
  };

  // Phần văn bản trước bảng đầu tiên (nếu có) cũng là 1 bài
  const firstTableIdx = text.indexOf('\n+');
  if (firstTableIdx > 0) {
    const art = parseArticle(text.slice(0, firstTableIdx).split(/\r?\n/));
    if (art && art.sections.length) add(art, art.heading);
  }

  for (const table of parseTables(text)) {
    const catNames = table.headerCells.filter(Boolean);

    // Nếu bảng có từ 2 hàng trở lên: hàng 1 là tên danh mục con, các hàng sau là bài
    const hasSubcatRow = table.rows.length >= 2;
    const subcatNames = hasSubcatRow
      ? table.rows[0].map((cellLines) => cleanText(cellLines.join(' ')))
      : [];
    const bodyRows = hasSubcatRow ? table.rows.slice(1) : table.rows;

    for (const row of bodyRows) {
      row.forEach((cellLines, colIdx) => {
        const art = parseArticle(cellLines);
        if (!art || !art.sections.length) return;

        // Tên đại diện cho bài, ưu tiên tên cụ thể nhất
        let name = subcatNames[colIdx] || '';
        if (!name && catNames.length > 1) name = catNames[colIdx] || '';
        if (!name && catNames.length === 1) name = catNames[0];
        if (!name) name = art.heading;

        add(art, name);
      });
    }
  }

  return articles;
}

module.exports = {
  parseNoidung,
  parseTables,
  parseArticle,
  matchTarget,
  styleFor,
  normKey,
  cleanText,
  cleanHeading,
  removeDiacritics,
};
