const fs = require('fs');
const path = require('path');

let missing = 0;
let checked = 0;

function checkImagesInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Match anything starting with images/ and ending before a quote or space or > 
    const regex = /images\/[^\"\'\>\s]+/g;
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
checkImagesInFile('products.html');
checkImagesInFile('js/main.js');

console.log('Checked ' + checked + ' image references. Missing: ' + missing);
