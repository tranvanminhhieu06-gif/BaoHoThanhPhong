const fs = require('fs');
const path = require('path');

const IMAGES_DIR = 'images';
const EXCLUDED_TOP = ['BANNER BAN ĐẦU', 'LOGO', 'TIN TỨC', 'ĐỐI TÁC THÀNH PHONG', 'BÌA'];
const IMG_EXT_RE = /\.(jpe?g|png|webp)$/i;

function viSort(a, b) {
  return a.localeCompare(b, 'vi');
}

const ICON_MAP = {
  'BẢO VỆ TAI': 'hearing_disabled',
  'GĂNG TAY BẢO HỘ LAO ĐỘNG': 'front_hand',
  'MẶT NẠ BẢO HỘ LAO ĐỘNG': 'masks',
  'NÓN BẢO HỘ - NÓN VẢI': 'engineering',
  'QUẦN ÁO CÔNG NHÂN': 'apparel',
  'QUẦN ÁO KỸ SƯ': 'apparel',
  'QUẦN ÁO MƯA – ÁO PHAO': 'umbrella',
  'QUẦN ÁO PHÒNG SẠCH': 'umbrella',
  'THIẾT BỊ AN TOÀN TRÊN CAO': 'security',
  'THIẾT BỊ BẢO VỆ CHÂN': 'footprint',
  'THIẾT BỊ BẢO VỆ MẮT': 'visibility',
  'THIẾT BỊ CÔNG TRÌNH': 'construction',
  'THIẾT BỊ CẢNH BÁO ATGT': 'traffic',
  'THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY': 'fire_extinguisher',
  'THÙNG RÁC': 'delete',
  'ÁO GHILE – ÁO KỸ SƯ': 'visibility',
  'ÁO PHẢN QUANG': 'visibility',
  'ÁO THUN': 'apparel',
  'ĐỒNG PHỤC CÔNG SỞ': 'shield_person',
  'ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ': 'shield_person',
};

function icon(name) {
  return ICON_MAP[name] || 'folder';
}

const topEntries = fs.readdirSync(IMAGES_DIR, { withFileTypes: true })
  .filter(e => e.isDirectory() && !EXCLUDED_TOP.includes(e.name))
  .map(e => e.name)
  .sort(viSort);

let html = '';

topEntries.forEach((catName, catIdx) => {
  const catId = 'cat' + (catIdx + 1);
  const catPath = path.join(IMAGES_DIR, catName);
  const entries = fs.readdirSync(catPath, { withFileTypes: true });
  const subdirs = entries.filter(e => e.isDirectory()).map(e => e.name).sort(viSort);

  const nonEmptySubdirs = subdirs.filter(sd => {
    const sdPath = path.join(catPath, sd);
    const files = fs.readdirSync(sdPath, { withFileTypes: true })
      .filter(e => e.isFile() && IMG_EXT_RE.test(e.name));
    return files.length > 0;
  });

  const ic = icon(catName);

  if (nonEmptySubdirs.length === 0) {
    html += `    <a href="#" class="filter-btn flex items-center justify-between p-3 rounded-2xl text-gray-600 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300 group" data-cat="${catId}">\n` +
      `        <div class="flex items-center gap-3 flex-1 min-w-0">\n` +
      `            <div class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors shrink-0">\n` +
      `                <span class="material-symbols-outlined text-[20px] cat-icon text-gray-400 group-hover:text-[#1D5FA8] transition-colors">${ic}</span>\n` +
      `            </div>\n` +
      `            <span class="font-bold text-sm text-left truncate cat-text group-hover:text-[#1A2744] transition-colors">${catName}</span>\n` +
      `        </div>\n` +
      `        <span class="text-xs font-bold px-3 py-1 bg-gray-50 group-hover:bg-gray-100 text-gray-400 rounded-lg cat-count shrink-0" id="cnt-${catId}">0</span>\n` +
      `    </a>\n`;
  } else {
    html += `    <div class="accordion-group">\n` +
      `    <button class="filter-btn accordion-toggle w-full flex items-center justify-between p-3 rounded-2xl text-gray-600 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300 group" data-cat="${catId}" data-has-children="true">\n` +
      `        <div class="flex items-center gap-3 flex-1 min-w-0">\n` +
      `            <div class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors shrink-0">\n` +
      `                <span class="material-symbols-outlined text-[20px] cat-icon text-gray-400 group-hover:text-[#1D5FA8] transition-colors">${ic}</span>\n` +
      `            </div>\n` +
      `            <span class="font-bold text-sm text-left truncate cat-text group-hover:text-[#1A2744] transition-colors">${catName}</span>\n` +
      `        </div>\n` +
      `        <div class="flex items-center gap-1 shrink-0 ml-1">\n` +
      `            <span class="text-xs font-bold px-2 py-1 bg-gray-50 group-hover:bg-gray-100 text-gray-400 rounded-lg cat-count" id="cnt-${catId}">0</span>\n` +
      `            <span class="material-symbols-outlined text-[18px] text-gray-400 accordion-chevron transition-transform duration-300">expand_more</span>\n` +
      `        </div>\n` +
      `    </button>\n` +
      `    <div class="accordion-children" id="children-${catId}">\n` +
      `        <div class="ml-3 mt-1 space-y-1 border-l-2 border-blue-100 pl-3 pb-1">\n`;

    nonEmptySubdirs.forEach((sd, sIdx) => {
      const subcatId = catId + '_s' + (sIdx + 1);
      html += `        <a href="#" class="filter-btn subcat-btn flex items-center justify-between p-2 rounded-xl text-gray-500 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all duration-200 group" data-cat="${catId}" data-subcat="${subcatId}">\n` +
        `            <span class="font-semibold text-xs text-left truncate group-hover:text-[#1A2744] transition-colors">${sd}</span>\n` +
        `            <span class="text-xs font-bold px-2 py-0.5 bg-gray-50 group-hover:bg-gray-100 text-gray-400 rounded-md cat-count shrink-0 ml-1" id="cnt-${subcatId}">0</span>\n` +
        `        </a>\n`;
    });

    html += `        </div>\n` +
      `    </div>\n` +
      `    </div>\n`;
  }
});

const sanphamPath = path.join('html', 'sanpham.html');
let pageCode = fs.readFileSync(sanphamPath, 'utf8');

// Normalize everything to LF to prevent CRLF/LF mismatches
const normalizedCode = pageCode.replace(/\r\n/g, '\n');

// Find the end of the first "all" category filter link
const marker = 'id="cnt-all">0</span>';
const startIdx = normalizedCode.indexOf(marker);
if (startIdx === -1) {
  console.error('Marker id="cnt-all">0</span> not found!');
  process.exit(1);
}

// Find the closing </a> for the "all" filter link
const closeAIdx = normalizedCode.indexOf('</a>', startIdx);
if (closeAIdx === -1) {
  console.error('Closing </a> tag for "all" filter not found!');
  process.exit(1);
}

const insertAt = closeAIdx + 4; // Right after </a>

// Find the end marker (closing divs of categoryFilter and aside)
const endMarkerPattern = '</div>\n        </div>\n    </aside>';
let endIdx = normalizedCode.indexOf(endMarkerPattern, insertAt);
if (endIdx === -1) {
  // Try with different indentation just in case
  const fallbackPattern = '</div>\n    </div>\n</aside>';
  endIdx = normalizedCode.indexOf(fallbackPattern, insertAt);
  if (endIdx === -1) {
    // Try finding close tag by matching closing div
    const genericPattern = '</div>\n        </div>';
    endIdx = normalizedCode.indexOf(genericPattern, insertAt);
    if (endIdx === -1) {
      console.error('End marker not found!');
      process.exit(1);
    }
  }
}

// Re-generate the page code with the new sidebar inserted
const before = normalizedCode.slice(0, insertAt);
const after = normalizedCode.slice(endIdx);

// Standardize HTML indentation
const cleanHtml = '\n' + html.trim() + '\n';
const newPageCode = before + cleanHtml + after;

// Write back preserving standard CRLF if original had it, or just write it out
fs.writeFileSync(sanphamPath, newPageCode.replace(/\n/g, '\r\n'), 'utf8');
console.log('Sidebar regenerated. Categories:', topEntries.length);

