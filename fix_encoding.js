const fs = require('fs');

function fixMojibake(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log('File not found:', filePath);
        return;
    }
    
    // Read raw bytes
    const rawBytes = fs.readFileSync(filePath);
    const asUtf8 = rawBytes.toString('utf8');
    
    // Check if it contains mojibake patterns
    if (asUtf8.includes('ThÃ\u00A0nh') || asUtf8.includes('Ã\u0081') || asUtf8.includes('Ä\u0091á»')) {
        console.log(filePath + ': Detected mojibake, attempting fix...');
        
        // The file was saved as UTF-8 bytes but then re-encoded as UTF-8 again
        // (double-encoded). We need to interpret the UTF-8 bytes as Latin-1 
        // to get the original UTF-8 bytes back.
        const fixed = Buffer.from(asUtf8, 'latin1').toString('utf8');
        
        if (fixed.includes('Thành Phong') || fixed.includes('Bảo Hộ') || fixed.includes('sản phẩm')) {
            fs.writeFileSync(filePath, fixed, 'utf8');
            console.log(filePath + ': FIXED successfully!');
            console.log('  Sample: ' + fixed.substring(fixed.indexOf('Th'), fixed.indexOf('Th') + 30));
        } else {
            console.log(filePath + ': Fix attempt did not produce valid Vietnamese. Skipping.');
            console.log('  Sample: ' + fixed.substring(0, 200));
        }
    } else if (asUtf8.includes('Thành Phong') || asUtf8.includes('Bảo Hộ')) {
        console.log(filePath + ': Already contains correct Vietnamese text. No fix needed.');
    } else {
        console.log(filePath + ': Unknown encoding state.');
        console.log('  First 200 chars: ' + asUtf8.substring(0, 200));
    }
}

fixMojibake('index.html');
fixMojibake('products.html');
