const fs = require('fs');
const path = require('path');

const IMAGES_DIR = 'images';
const EXCLUDED_TOP = ['BANNER BAN ĐẦU', 'LOGO', 'TIN TỨC', 'ĐỐI TÁC THÀNH PHONG'];
const IMG_EXT_RE = /\.(jpe?g|png|webp)$/i;

function viSort(a, b) {
  return a.localeCompare(b, 'vi');
}

function stripDiacritics(str) {
  return str
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function slug(str) {
  return stripDiacritics(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .slice(0, 12);
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(w => w.length ? w[0].toUpperCase() + w.slice(1) : w)
    .join(' ');
}

// ---- Reused curated content pools (from js/generate_product_data.js) ----
const productData = require('./generate_product_data_pools.js');

// Map: real folder/subfolder label -> array of productData keys to blend (cycle through combined names/descs)
const KEY_MAP = {
  'BẢO VỆ TAI': ['Nút chống ồn'],
  'GANG TAY CÁCH ĐIỆN': ['Gang tay bảo hộ'],
  'GĂNG TAY CAO SU': ['Gang tay bảo hộ'],
  'GĂNG TAY DA HÀN': ['Gang tay bảo hộ'],
  'GĂNG TAY DA HÀN TIG': ['Gang tay bảo hộ'],
  'GĂNG TAY LEN': ['Gang tay bảo hộ'],
  'GĂNG TAY LEN CHẤM HẠT NHỰA': ['Gang tay bảo hộ'],
  'GĂNG TAY PHỦ CAO SU': ['Gang tay bảo hộ'],
  'GĂNG TAY VẢI': ['Gang tay bảo hộ'],
  'GĂNG TAY VẢI MẬP': ['Gang tay bảo hộ'],
  'MẶT NẠ BẢO HỘ LAO ĐỘNG': ['Mặt Nạ Phòng Độc', 'Mặt nạ hàn bảo hộ lao động'],
  'NÓN BẢO HỘ - NÓN VẢI': ['Mũ bảo hộ lao động', 'Nón vải lưới trùm'],
  'QUẦN ÁO MƯA – ÁO PHAO': ['Đồ đi mưa - áo phao'],
  'QUẦN ÁO MƯA BỘ': ['Đồ đi mưa - áo phao'],
  'ÁO MƯA CÁNH DƠI': ['Đồ đi mưa - áo phao'],
  'ÁO PHAO': ['Đồ đi mưa - áo phao'],
  'DÂY AN TOÀN': ['Dây an toàn', 'Dây An Toàn Toàn Thân'],
  'LƯỚI CÔNG TRÌNH': ['Cuộn rào công trình'],
  'THANG DÂY': ['Thang Thoát Hiểm Cuốn'],
  'GIÀY BẢO HỘ': ['Giày bảo hộ lao động', 'Giày da bảo vệ - Có buộc dây', 'Giày da bảo vệ - Không buộc dây'],
  'ỦNG BẢO HỘ': ['Ủng bảo hộ lao động'],
  'THIẾT BỊ BẢO VỆ MẮT': ['Kính bảo hộ & Khẩu trang'],
  'CỌC GIAO THÔNG': ['Cọc giao thông-cột chia làn đường'],
  'NỘI QUY': ['Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc'],
  'THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY': ['Hệ Thống Báo Cháy', 'Thiết bị PCCC & An toàn'],
  'THÙNG RÁC': ['Thùng đựng rác'],
  'ÁO PHẢN QUANG': ['Áo Phản Quang'],
  'ÁO THUN': ['Áo cá sấu mè cao cấp nhiều'],
  'PHỤ KIỆN BẢO VỆ': ['Cà Vạt, Ve Bảo Vệ', 'Cầu Vai Bảo Vệ', 'Nón , Sao Bảo Vệ'],
  'ĐỒNG PHỤC': ['Đồng Phục Bảo Vệ', 'Đồng Phục Bảo Vệ NEW'],
};

// Generic one-liner fallback for labels with no curated pool match.
const GENERIC_DESC = 'Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất.';

function buildPool(label) {
  const keys = KEY_MAP[label];
  if (!keys) return null;
  const names = [];
  const descs = [];
  keys.forEach(k => {
    const d = productData[k];
    if (d) {
      names.push(...d.names);
      descs.push(...d.descs);
    }
  });
  if (names.length === 0) return null;
  return { names, descs };
}

// ---- Walk images/ ----
const topEntries = fs.readdirSync(IMAGES_DIR, { withFileTypes: true })
  .filter(e => e.isDirectory() && !EXCLUDED_TOP.includes(e.name))
  .map(e => e.name)
  .sort(viSort);

console.log('Category order (cat1..cat' + topEntries.length + '):');
topEntries.forEach((name, i) => console.log('  cat' + (i + 1) + ' = ' + name));

const idsList = ['all'];
const updatedProducts = [];
let globalCounter = 0;
const summary = [];
const genericLabels = [];

topEntries.forEach((catName, catIdx) => {
  const catId = 'cat' + (catIdx + 1);
  idsList.push(catId);
  const catPath = path.join(IMAGES_DIR, catName);
  const entries = fs.readdirSync(catPath, { withFileTypes: true });
  const subdirs = entries.filter(e => e.isDirectory()).map(e => e.name).sort(viSort);
  const looseFiles = entries.filter(e => e.isFile() && IMG_EXT_RE.test(e.name)).map(e => e.name).sort(viSort);

  // Non-empty subdirs only
  const nonEmptySubdirs = subdirs.filter(sd => {
    const sdPath = path.join(catPath, sd);
    const files = fs.readdirSync(sdPath, { withFileTypes: true })
      .filter(e => e.isFile() && IMG_EXT_RE.test(e.name));
    return files.length > 0;
  });

  let catTotal = 0;

  // Loose files directly under the category (no subcat)
  if (looseFiles.length > 0) {
    const pool = buildPool(catName);
    if (!pool) genericLabels.push(catName + ' (loose)');
    looseFiles.forEach((file, idx) => {
      globalCounter++;
      catTotal++;
      const title = pool ? pool.names[idx % pool.names.length] : (titleCase(catName) + ' - ' + String(idx + 1).padStart(3, '0'));
      const desc = pool ? pool.descs[idx % pool.descs.length] : GENERIC_DESC;
      updatedProducts.push({
        id: slug(catName) + globalCounter,
        title,
        cat: catId,
        catLabel: catName,
        subcat: '',
        subcatLabel: '',
        img: '../images/' + catName + '/' + file,
        desc,
      });
    });
  }

  // Subcats
  let subIdx = 0;
  nonEmptySubdirs.forEach(sd => {
    subIdx++;
    const subcatId = catId + '_s' + subIdx;
    idsList.push(subcatId);
    const sdPath = path.join(catPath, sd);
    const files = fs.readdirSync(sdPath, { withFileTypes: true })
      .filter(e => e.isFile() && IMG_EXT_RE.test(e.name))
      .map(e => e.name)
      .sort(viSort);

    const pool = buildPool(sd) || buildPool(catName);
    if (!pool) genericLabels.push(catName + ' > ' + sd);

    files.forEach((file, idx) => {
      globalCounter++;
      catTotal++;
      const title = pool ? pool.names[idx % pool.names.length] : (titleCase(sd) + ' - ' + String(idx + 1).padStart(3, '0'));
      const desc = pool ? pool.descs[idx % pool.descs.length] : GENERIC_DESC;
      updatedProducts.push({
        id: slug(sd) + globalCounter,
        title,
        cat: catId,
        catLabel: catName,
        subcat: subcatId,
        subcatLabel: sd,
        img: '../images/' + catName + '/' + sd + '/' + file,
        desc,
      });
    });
  });

  summary.push({ catId, catName, count: catTotal, subcats: subIdx });
});

console.log('\nSummary:');
summary.forEach(s => console.log('  ' + s.catId + ' [' + s.catName + ']: ' + s.count + ' images, ' + s.subcats + ' subcats'));

console.log('\nTotal images processed: ' + updatedProducts.length);
console.log('\nCategories/subcats using GENERIC fallback (no curated pool match):');
genericLabels.forEach(l => console.log('  - ' + l));

// ---- Write into js/products.js ----
const productsJsPath = path.join('js', 'products.js');
let code = fs.readFileSync(productsJsPath, 'utf8');

// Replace the data array
code = code.replace(
  /const products = \[[\s\S]*?\];/,
  'const products = ' + JSON.stringify(updatedProducts, null, 2) + ';'
);

// Replace the ids list inside updateCounts()
code = code.replace(
  /(function updateCounts\(\) \{\s*const ids = )\[[\s\S]*?\];/,
  '$1' + JSON.stringify(idsList) + ';'
);

fs.writeFileSync(productsJsPath, code, 'utf8');
console.log('\nWrote ' + productsJsPath);
