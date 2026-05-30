const fs = require('fs');

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    
    // Read as raw bytes
    const raw = fs.readFileSync(filePath);
    
    // Try interpreting as latin1 then re-encoding as utf8
    // This fixes the "double UTF-8 encoding" problem
    const asLatin1 = raw.toString('latin1');
    const attempt1 = Buffer.from(asLatin1, 'latin1').toString('utf8');
    
    // Check if this produces valid Vietnamese
    if (attempt1.includes('Thành Phong') || attempt1.includes('Bảo Hộ')) {
        fs.writeFileSync(filePath, attempt1, 'utf8');
        console.log(filePath + ': Fixed with single decode! Title check: ' + 
            attempt1.substring(attempt1.indexOf('Thành'), attempt1.indexOf('Thành') + 30));
        return;
    }
    
    // If still broken, the file might have been triple-encoded or mixed
    // Try another approach: read byte by byte and fix known patterns
    const replacements = {
        'ThÃ\u00A0nh': 'Thành',
        'Ã\u0080': 'À', 'Ã\u0081': 'Á', 'Ã\u0082': 'Â', 'Ã\u0083': 'Ã', 'Ã\u0084': 'Ä', 'Ã\u0085': 'Å',
        'Ã\u0086': 'Æ', 'Ã\u0087': 'Ç', 'Ã\u0088': 'È', 'Ã\u0089': 'É', 'Ã\u008A': 'Ê', 'Ã\u008B': 'Ë',
        'Ã\u008C': 'Ì', 'Ã\u008D': 'Í', 'Ã\u008E': 'Î', 'Ã\u008F': 'Ï', 'Ã\u0090': 'Ð', 'Ã\u0091': 'Ñ',
        'Ã\u0092': 'Ò', 'Ã\u0093': 'Ó', 'Ã\u0094': 'Ô', 'Ã\u0095': 'Õ', 'Ã\u0096': 'Ö', 'Ã\u0097': '×',
        'Ã\u0098': 'Ø', 'Ã\u0099': 'Ù', 'Ã\u009A': 'Ú', 'Ã\u009B': 'Û', 'Ã\u009C': 'Ü', 'Ã\u009D': 'Ý',
        'Ã\u009E': 'Þ', 'Ã\u009F': 'ß', 'Ã\u00A0': 'à', 'Ã¡': 'á', 'Ã¢': 'â', 'Ã£': 'ã',
        'Ã¤': 'ä', 'Ã¥': 'å', 'Ã¦': 'æ', 'Ã§': 'ç', 'Ã¨': 'è', 'Ã©': 'é',
        'Ãª': 'ê', 'Ã«': 'ë', 'Ã¬': 'ì', 'Ã­': 'í', 'Ã®': 'î', 'Ã¯': 'ï',
        'Ã°': 'ð', 'Ã±': 'ñ', 'Ã²': 'ò', 'Ã³': 'ó', 'Ã´': 'ô', 'Ã µ': 'õ',
        'Ã¶': 'ö', 'Ã·': '÷', 'Ã¸': 'ø', 'Ã¹': 'ù', 'Ãº': 'ú', 'Ã»': 'û',
        'Ã¼': 'ü', 'Ã½': 'ý', 'Ã¾': 'þ', 'Ã¿': 'ÿ',
        'Ä\u0080': 'Ā', 'Ä\u0081': 'ā', 'Ä\u0082': 'Ă', 'Ä\u0083': 'ă',
        'Ä\u0090': 'Đ', 'Ä\u0091': 'đ',
        'Æ°': 'ư', 'Æ¡': 'ơ',
        'áº£': 'ả', 'áº¡': 'ạ', 'áº¯': 'ắ', 'áº±': 'ằ', 'áº³': 'ẳ', 'áº·': 'ặ', 'áºµ': 'ẵ',
        'áº¥': 'ấ', 'áº§': 'ầ', 'áº©': 'ẩ', 'áº«': 'ẫ', 'áº­': 'ậ',
        'áº¿': 'ế', 'á»': 'ề', 'á»ƒ': 'ể', 'á»…': 'ễ', 'á»‡': 'ệ',
        'á»': 'ỉ', 'á»‹': 'ị',
        'á»': 'ồ', 'á»'': 'ố', 'á»"': 'ổ', 'á»—': 'ỗ', 'á»™': 'ộ',
        'á»›': 'ớ', 'á»': 'ờ', 'á»Ÿ': 'ở', 'á»¡': 'ỡ', 'á»£': 'ợ',
        'á»©': 'ứ', 'á»«': 'ừ', 'á»­': 'ử', 'á»¯': 'ữ', 'á»±': 'ự',
        'á»³': 'ỳ', 'á»µ': 'ỷ', 'á»·': 'ỹ',
        'á»"': 'ồ', 'á»'': 'ố',
        'Báº£o': 'Bảo', 'há»™': 'hộ', 'Há»™': 'Hộ',
        'Äá»™ng': 'Động', 'Ä'á»™ng': 'động',
        'cháº¥t': 'chất', 'lÆ°á»£ng': 'lượng',
    };
    
    console.log(filePath + ': Attempting pattern-based fix...');
    let text = raw.toString('utf8');
    for (const [broken, fixed] of Object.entries(replacements)) {
        text = text.split(broken).join(fixed);
    }
    
    fs.writeFileSync(filePath, text, 'utf8');
    console.log(filePath + ': Pattern replacement done.');
}

fixFile('index.html');
fixFile('products.html');
