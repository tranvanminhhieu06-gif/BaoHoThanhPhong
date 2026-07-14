const fs = require('fs');
const path = require('path');

const IMAGES_DIR = 'images';
const EXCLUDED_TOP = ['BANNER BAN ĐẦU', 'LOGO', 'TIN TỨC', 'ĐỐI TÁC THÀNH PHONG', 'BÌA'];
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

// Load baseline category content
let existingCatContent = {};
try {
  existingCatContent = JSON.parse(fs.readFileSync('parsed_category_content.json', 'utf8'));
} catch (e) {
  console.log("No existing parsed_category_content.json found, starting fresh.");
}

// Function to reconstruct Noi_Dung.md from existing JSON data
function reconstructNoiDung(content, label) {
  let md = "";
  if (content.heading) {
    md += `**Tiêu đề:** ${content.heading}\n`;
  } else {
    md += `**Tiêu đề:** ${label}\n`;
  }
  if (content.shortDesc) {
    md += `${content.shortDesc}\n\n`;
  } else {
    md += `${label} chất lượng cao.\n\n`;
  }
  
  md += `**Đặc điểm nổi bật:**\n`;
  md += `Chất liệu nổi bật\n`;
  if (content.features && content.features.length > 0) {
    content.features.forEach(f => {
      md += `${f.title}\n`;
    });
  } else {
    md += `Chất liệu bền bỉ, cao cấp.\n`;
    md += `Chống mài mòn, độ bền cao.\n`;
    md += `Thấm hút mồ hôi tốt.\n`;
  }
  
  const cols = content.columns || [];
  const col1 = cols[0];
  const col2 = cols[1];
  const col3 = cols[2];
  
  if (col2 && col2.items && col2.items.length > 0) {
    md += `Thiết kế tối ưu\n`;
    col2.items.forEach(item => {
      md += `${item}\n`;
    });
  }
  md += `\n`;
  
  md += `**Thông Tin Chi Tiết Sản Phẩm**\n`;
  
  if (col1) {
    md += `Ứng Dụng\n`;
    if (col1.items && col1.items.length > 0) {
      col1.items.forEach(item => {
        md += `${item}\n`;
      });
    }
  }
  
  if (col3) {
    md += `Cam Kết Từ Thành Phong\n`;
    if (col3.items && col3.items.length > 0) {
      col3.items.forEach(item => {
        md += `${item}\n`;
      });
    }
  }
  
  return md;
}

// Function to write default template Noi_Dung.md
function makeDefaultNoiDung(label) {
  return `**Tiêu đề:** ${label.toUpperCase()} CHẤT LƯỢNG CAO TẠI CÔNG TY TNHH BẢO HỘ LAO ĐỘNG THÀNH PHONG
${label} là giải pháp bảo hộ lao động tối ưu cho doanh nghiệp, mang lại sự an toàn, chuyên nghiệp và hiệu quả vượt trội trong suốt quá trình làm việc.

**Đặc điểm nổi bật:**
Chất liệu cao cấp
Chất liệu bền bỉ, cao cấp, độ bền vượt trội.
Chống mài mòn, hạn chế sờn rách hiệu quả.
Thấm hút mồ hôi tốt, thoáng khí tốt.
Thiết kế tối ưu
Form dáng hiện đại, dễ dàng vận động.
Đường may chắc chắn, tỉ mỉ từng chi tiết.
Thiết kế tiện dụng, phù hợp với người lao động.

**Thông Tin Chi Tiết Sản Phẩm**
Đa dạng mẫu mã và màu sắc lựa chọn.
Nhận in thêu logo doanh nghiệp theo yêu cầu.
Đạt tiêu chuẩn an toàn lao động chất lượng cao.
Ứng Dụng
Sản phẩm phù hợp cho:
Nhà máy sản xuất và xưởng cơ khí.
Khu công nghiệp và khu chế xuất.
Công trình xây dựng và khai thác.
Kho vận và logistics chuyên nghiệp.
Lợi Ích Khi Sử Dụng
Tăng tính chuyên nghiệp và đồng bộ cho doanh nghiệp.
Đảm bảo an toàn tối đa cho người lao động.
Nâng cao hiệu suất và trải nghiệm khi làm việc.
Cam Kết Từ Thành Phong
✔ Chất liệu đúng tiêu chuẩn chất lượng.
✔ May đo thiết kế theo yêu cầu doanh nghiệp.
✔ Giá tận gốc cạnh tranh nhất thị trường.
✔ Giao hàng nhanh toàn quốc.
`;
}

// Parse function for Noi_Dung.md
function parseNoiDung(content) {
  const lines = content.split(/\r?\n/).map(line => line.trim());
  
  let heading = "";
  let shortDescLines = [];
  
  let currentMainSection = "intro";
  let currentSubheading = "";
  
  let featuresSubsections = [];
  let looseFeatures = [];
  let applications = [];
  let benefits = [];
  let commitments = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    
    const lowerLine = line.toLowerCase();
    if (lowerLine.includes("đặc điểm nổi bật") || lowerLine.includes("dac diem noi bat")) {
      currentMainSection = "features";
      currentSubheading = "";
      continue;
    } else if (lowerLine.includes("thông tin chi tiết sản phẩm") || lowerLine.includes("thong tin chi tiet san pham")) {
      currentMainSection = "details";
      currentSubheading = "";
      continue;
    } else if (lowerLine.includes("ứng dụng") || lowerLine.includes("ung dung")) {
      currentMainSection = "app";
      currentSubheading = "";
      continue;
    } else if (lowerLine.includes("lợi ích khi sử dụng") || lowerLine.includes("loi ich khi su dung") || lowerLine.includes("lợi ích") || lowerLine.includes("loi ich")) {
      currentMainSection = "benefits";
      currentSubheading = "";
      continue;
    } else if (lowerLine.includes("cam kết") || lowerLine.includes("cam ket")) {
      currentMainSection = "commit";
      currentSubheading = "";
      continue;
    }
    
    if (currentMainSection === "intro") {
      if (line.startsWith("**Tiêu đề:**") || line.startsWith("**Tiêu đề**")) {
        heading = line.replace(/^\*\*Tiêu đề:?\s*\*\*/i, "").replace(/^\*\*Tiêu đề:?\*\*\s*/i, "").replace(/^\*\*Tiêu đề:\*\*/i, "").trim();
        heading = heading.replace(/^\*\*|\*\*$/g, "").trim();
      } else if (!heading) {
        heading = line.replace(/^\*\*|\*\*$/g, "").trim();
      } else {
        shortDescLines.push(line);
      }
    } else if (currentMainSection === "features" || currentMainSection === "details") {
      const isListItem = /^[-\*•✔✅\d\.]/.test(line);
      if (!isListItem && line.length < 50 && !line.endsWith('.')) {
        currentSubheading = line.replace(/^\*\*|\*\*$/g, "").trim();
      } else {
        const cleanItem = line.replace(/^[-\*•✔✅\d\.]+\s*/, "").replace(/^\*\*|\*\*$/g, "").trim();
        if (currentSubheading) {
          let sub = featuresSubsections.find(s => s.title === currentSubheading);
          if (!sub) {
            sub = { title: currentSubheading, items: [] };
            featuresSubsections.push(sub);
          }
          sub.items.push(cleanItem);
        } else {
          looseFeatures.push(cleanItem);
        }
      }
    } else if (currentMainSection === "app") {
      const cleanItem = line.replace(/^[-\*•✔✅\d\.]+\s*/, "").replace(/^\*\*|\*\*$/g, "").trim();
      applications.push(cleanItem);
    } else if (currentMainSection === "benefits") {
      const cleanItem = line.replace(/^[-\*•✔✅\d\.]+\s*/, "").replace(/^\*\*|\*\*$/g, "").trim();
      benefits.push(cleanItem);
    } else if (currentMainSection === "commit") {
      const cleanItem = line.replace(/^[-\*•✔✅\d\.]+\s*/, "").replace(/^\*\*|\*\*$/g, "").trim();
      commitments.push(cleanItem);
    }
  }
  
  const features = [];
  if (featuresSubsections.length > 0 && featuresSubsections[0].items.length > 0) {
    featuresSubsections[0].items.slice(0, 3).forEach(item => {
      features.push({
        icon: "verified",
        iconWrapClass: "bg-blue-50",
        iconClass: "text-[#1D5FA8]",
        title: item,
        desc: ""
      });
    });
  } else {
    looseFeatures.slice(0, 3).forEach(item => {
      features.push({
        icon: "verified",
        iconWrapClass: "bg-blue-50",
        iconClass: "text-[#1D5FA8]",
        title: item,
        desc: ""
      });
    });
  }
  
  const col1Items = [...applications, ...benefits];
  let col2Items = [];
  for (let j = 1; j < featuresSubsections.length; j++) {
    col2Items.push(...featuresSubsections[j].items);
  }
  col2Items.push(...looseFeatures);
  
  const col3Items = commitments.map(c => c.startsWith('✔') ? c : '✔ ' + c);
  
  const columns = [
    {
      icon: "info",
      color: "#1D5FA8",
      title: "Ứng Dụng Thực Tế",
      items: col1Items
    },
    {
      icon: "verified",
      color: "#10B981",
      title: "Ưu Điểm Nổi Bật",
      items: col2Items
    },
    {
      icon: "thumb_up",
      color: "#E8A500",
      title: "Cam Kết Từ Thành Phong",
      items: col3Items
    }
  ];
  
  return {
    tagline: "",
    heading: heading || "Sản Phẩm Chất Lượng Cao",
    shortDesc: shortDescLines.join('\n').trim(),
    features,
    columns
  };
}

// Map of category/subcategory ID -> content
const newCategoryContent = {};

function processNoiDungFile(dirPath, id, label) {
  const noiDungPath = path.join(dirPath, 'Noi_Dung.md');
  let mdContent = "";
  
  if (fs.existsSync(noiDungPath)) {
    mdContent = fs.readFileSync(noiDungPath, 'utf8');
  } else {
    // Reconstruct or create default
    if (existingCatContent[id]) {
      console.log(`Reconstructing Noi_Dung.md for ${id} from existing parsed data...`);
      mdContent = reconstructNoiDung(existingCatContent[id], label);
    } else {
      console.log(`Creating default template Noi_Dung.md for ${id}...`);
      mdContent = makeDefaultNoiDung(label);
    }
    fs.writeFileSync(noiDungPath, mdContent, 'utf8');
  }
  
  try {
    const parsed = parseNoiDung(mdContent);
    newCategoryContent[id] = parsed;
  } catch (err) {
    console.error(`Error parsing Noi_Dung.md for ${id}: ${err.message}`);
    newCategoryContent[id] = existingCatContent[id] || parseNoiDung(makeDefaultNoiDung(label));
  }
}

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

  // Auto-generate/parse Noi_Dung.md for the parent category
  processNoiDungFile(catPath, catId, catName);

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
      const cleanCatName = catName.split(/[–—]|\s-\s/)[0].trim();
      const title = titleCase(cleanCatName) + ' - ' + String(idx + 1).padStart(3, '0');
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

    // Auto-generate/parse Noi_Dung.md for the subcategory
    processNoiDungFile(sdPath, subcatId, sd);

    const pool = buildPool(sd) || buildPool(catName);
    if (!pool) genericLabels.push(catName + ' > ' + sd);

    files.forEach((file, idx) => {
      globalCounter++;
      catTotal++;
      const cleanSd = sd.split(/[–—]|\s-\s/)[0].trim();
      const title = titleCase(cleanSd) + ' - ' + String(idx + 1).padStart(3, '0');
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

// ---- Write Category Content ----
fs.writeFileSync('parsed_category_content.json', JSON.stringify(newCategoryContent, null, 2), 'utf8');
console.log('Wrote parsed_category_content.json');

const newJsContent = `var categoryContent = ${JSON.stringify(newCategoryContent, null, 2)};`;
fs.writeFileSync(path.join('js', 'category_content.js'), newJsContent, 'utf8');
console.log('Wrote js/category_content.js');
