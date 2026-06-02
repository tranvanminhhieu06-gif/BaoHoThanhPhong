const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8');
const imgRegex = /<img[^>]+src=["'](.*?)["']/g;
let match;
let missing = [];
while ((match = imgRegex.exec(lines)) !== null) {
  let src = match[1];
  // decode uri component since paths might be URL encoded
  try {
      src = decodeURIComponent(src);
  } catch (e) {}
  if (!src.startsWith('http') && !fs.existsSync(src)) {
    missing.push(src);
  }
}
console.log('Missing images:', missing.length > 0 ? missing : 'None');
