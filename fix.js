const fs = require('fs');
let code = fs.readFileSync('update_categories.js', 'utf8');
code = code.replace(/\\`/g, '`');
code = code.replace(/\\\$/g, '$');
fs.writeFileSync('update_categories.js', code);
