const fs = require('fs');
let code = fs.readFileSync('js/products.js', 'utf8');

const oldStr = '<h3 class="font-bold text-lg text-[#1A2744] group-hover:text-[#1D5FA8] transition-colors mb-2 truncate">\' + p.title + \'</h3>';

const newStr = '\' + (p.title.length > 20 ? \'<div class="product-title-wrapper is-long"><h3 class="font-bold text-lg text-[#1A2744] group-hover:text-[#1D5FA8] transition-colors mb-2 product-title-marquee">\' + p.title + \'</h3></div>\' : \'<h3 class="font-bold text-lg text-[#1A2744] group-hover:text-[#1D5FA8] transition-colors mb-2 truncate">\' + p.title + \'</h3>\') + \'';

if (code.includes(oldStr)) {
    code = code.replace(oldStr, newStr);
    fs.writeFileSync('js/products.js', code);
    console.log('Successfully updated title logic in products.js');
} else {
    console.log('oldStr not found');
}
