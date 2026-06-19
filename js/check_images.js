const fs = require('fs');
const path = require('path');

let missing = 0;
let checked = 0;

function checkImagesInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Match anything starting with images/ and ending before a quote or > (folder/file names may contain spaces)
    const regex = /images\/[^"'>]+/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const imgPath = match[0];
        const decodedPath = decodeURIComponent(imgPath);
        checked++;
        if (!fs.existsSync(decodedPath)) {
            console.log('MISSING: ' + decodedPath + ' (in ' + filePath + ')');
            missing++;
        }
    }
}

checkImagesInFile('index.html');
checkImagesInFile('js/main.js');
checkImagesInFile('js/products.js');
checkImagesInFile('html/trangchu.html');
checkImagesInFile('html/sanpham.html');
checkImagesInFile('product/index.html');

console.log('Checked ' + checked + ' image references. Missing: ' + missing);
