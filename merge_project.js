const fs = require('fs');

function fixMojibakeString(str) {
    try {
        const fixed = Buffer.from(str, 'latin1').toString('utf8');
        // If it doesn't contain replacement character, it might be valid
        if (!fixed.includes('\ufffd')) {
            return fixed;
        }
    } catch (e) {}
    return str;
}

console.log("Bắt đầu gộp HTML, CSS, JS...");

if (!fs.existsSync('index.html')) {
    console.error("Không tìm thấy index.html");
    process.exit(1);
}

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Nếu có products.html, trích xuất nội dung
let productsSection = '';
let productsCSS = '';
let productsJS = '';

if (fs.existsSync('products.html')) {
    let productsHtml = fs.readFileSync('products.html', 'utf8');
    
    // Tìm thẻ main của trang products
    const mainStart = productsHtml.indexOf('<main class="container mx-auto px-4 max-w-7xl py-12">');
    let mainEnd = productsHtml.indexOf('</main>', mainStart);
    if (mainEnd !== -1) mainEnd += '</main>'.length;

    if (mainStart !== -1 && mainEnd !== -1) {
        productsSection = productsHtml.substring(mainStart, mainEnd);
        // Đổi main thành section để nhúng vào trang chủ
        productsSection = productsSection.replace('<main', '<section id="products-page"');
        productsSection = productsSection.replace('</main>', '</section>');
    }

    // Trích xuất style
    const styleRegex = /<style>([\s\S]*?)<\/style>/g;
    let match;
    while ((match = styleRegex.exec(productsHtml)) !== null) {
        productsCSS += match[1] + '\n';
    }

    // Trích xuất script nội tuyến
    const scriptRegex = /<script(?!.*tailwind\.config)(?!.*src=)[\s\S]*?>([\s\S]*?)<\/script>/g;
    while ((match = scriptRegex.exec(productsHtml)) !== null) {
        productsJS += match[1] + '\n';
    }
}

// Chèn productsSection vào trước phần Final CTA của index.html
if (productsSection) {
    indexHtml = indexHtml.replace('<!-- Final CTA / Contact -->', 
        `<!-- Product Section (Merged) -->\n    ${productsSection}\n\n    <!-- Final CTA / Contact -->`);
}

// Trích xuất CSS từ index.html
const styleRegexIndex = /<style>([\s\S]*?)<\/style>/g;
let combinedCSS = '';
let matchIndex;
while ((matchIndex = styleRegexIndex.exec(indexHtml)) !== null) {
    combinedCSS += matchIndex[1] + '\n';
}
// Xóa thẻ style khỏi index.html
indexHtml = indexHtml.replace(styleRegexIndex, '');

// Gộp với css hiện tại
if (fs.existsSync('css/style.css')) {
    combinedCSS = fs.readFileSync('css/style.css', 'utf8') + '\n' + combinedCSS;
} else if (fs.existsSync('style.css')) {
    combinedCSS = fs.readFileSync('style.css', 'utf8') + '\n' + combinedCSS;
}
combinedCSS += '\n' + productsCSS;

if (!fs.existsSync('css')) fs.mkdirSync('css');
fs.writeFileSync('css/style.css', combinedCSS, 'utf8');

// Chèn link CSS vào index.html nếu chưa có
if (!indexHtml.includes('<link rel="stylesheet" href="css/style.css">')) {
    indexHtml = indexHtml.replace('</head>', '    <link rel="stylesheet" href="css/style.css">\n</head>');
}

// Gộp JS
let combinedJS = '';
const scriptRegexIndex = /<script(?!.*tailwind\.config)(?!.*src=)[\s\S]*?>([\s\S]*?)<\/script>/g;
while ((matchIndex = scriptRegexIndex.exec(indexHtml)) !== null) {
    combinedJS += matchIndex[1] + '\n';
}
// Xóa thẻ script nội tuyến (trừ tailwind)
indexHtml = indexHtml.replace(scriptRegexIndex, '');

if (fs.existsSync('js/main.js')) {
    combinedJS = fs.readFileSync('js/main.js', 'utf8') + '\n' + combinedJS;
} else if (fs.existsSync('main.js')) {
    combinedJS = fs.readFileSync('main.js', 'utf8') + '\n' + combinedJS;
}
combinedJS += '\n' + productsJS;

if (!fs.existsSync('js')) fs.mkdirSync('js');
fs.writeFileSync('js/main.js', combinedJS, 'utf8');

// Đảm bảo index.html link tới js/main.js
if (!indexHtml.includes('<script src="js/main.js"></script>')) {
    indexHtml = indexHtml.replace('</body>', '    <script src="js/main.js"></script>\n</body>');
}

// Cập nhật lại thanh menu: thay các thẻ <a> trỏ sang products.html thành trỏ về vùng #products-page
indexHtml = indexHtml.replace(/href="products\.html"/g, 'href="#products-page"');

fs.writeFileSync('index.html', indexHtml, 'utf8');

// Xóa file thừa
try {
    if (fs.existsSync('products.html')) fs.unlinkSync('products.html');
    if (fs.existsSync('style.css')) fs.unlinkSync('style.css');
    if (fs.existsSync('main.js')) fs.unlinkSync('main.js');
    if (fs.existsSync('products_html')) fs.unlinkSync('products_html');
    if (fs.existsSync('products.json')) {
        // file json này có thể JS cần để fetch sản phẩm, giữ lại nếu muốn an toàn, hoặc kiểm tra code js.
        // Tôi sẽ giữ lại json để tránh lỗi fetching.
    }
} catch (e) {
    console.error("Lỗi khi xóa file thừa:", e);
}

console.log("Hoàn thành gộp dự án!");
