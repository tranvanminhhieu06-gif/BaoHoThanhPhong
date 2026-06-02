const fs = require('fs');
const path = require('path');

function processHtmlFiles() {
    const htmlDir = 'html';
    if (!fs.existsSync(htmlDir)) return;
    
    const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));
    
    for (const file of files) {
        const filePath = path.join(htmlDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix href="css/...", src="../images/...", src="js/...", href="../images/..."
        const regex = /(href|src)=["'](?!(?:\.\.\/|http|mailto|tel|#|data:))(css\/|js\/|images\/)([^"']+)["']/g;
        content = content.replace(regex, '="../"');
        
        // Fix url('../images/...')
        const urlRegex = /url\(['"]?(?!(?:\.\.\/|http|data:))(images\/)([^)'"]+)['"]?\)/g;
        content = content.replace(urlRegex, 'url("../")');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed ' + filePath);
    }
}

function processJsFiles() {
    const jsDir = 'js';
    if (!fs.existsSync(jsDir)) return;
    
    const files = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));
    
    for (const file of files) {
        const filePath = path.join(jsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix "../images/..." or '../images/...' strings
        const imgRegex = /(['"])(?!(?:\.\.\/|http))(images\/[^'"]+)\1/g;
        content = content.replace(imgRegex, '../');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed ' + filePath);
    }
}

processHtmlFiles();
processJsFiles();
