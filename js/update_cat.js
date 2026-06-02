const fs = require('fs');
let code = fs.readFileSync('js/products.js', 'utf8');

const oldStr = '<p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 truncate">\' + p.catLabel + \'</p>';

const newStr = '\' + (p.catLabel.length > 20 ? \'<div class="product-title-wrapper is-long"><p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 product-title-marquee">\' + p.catLabel + \'</p></div>\' : \'<p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 truncate">\' + p.catLabel + \'</p>\') + \'';

if (code.includes(oldStr)) {
    code = code.replace(oldStr, newStr);
    fs.writeFileSync('js/products.js', code);
    console.log('Successfully updated catLabel logic in products.js');
} else {
    console.log('oldStr not found');
}
