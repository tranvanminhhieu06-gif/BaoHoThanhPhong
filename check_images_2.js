const fs = require('fs');

function checkFileImages(file, regexStr) {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    const regex = new RegExp(regexStr, 'g');
    let match;
    let missing = 0;
    let total = 0;
    
    while ((match = regex.exec(content)) !== null) {
        const imgPath = match[1];
        total++;
        if (!fs.existsSync(imgPath)) {
            console.log('Missing: ' + imgPath + ' in ' + file);
            missing++;
        }
    }
    console.log(file + ' -> Checked: ' + total + ' images, Missing: ' + missing);
}

// Check index.html (looking for src="...")
checkFileImages('index.html', 'src=\\"(images/[^\\"]+)\\"');

// Check products.html
checkFileImages('products.html', 'src=\\"(images/[^\\"]+)\\"');

// Check js/main.js (looking for "images/...")
checkFileImages('js/main.js', '\\"(images/[^\\"]+)\\"');
