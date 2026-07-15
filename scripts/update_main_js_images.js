const fs = require('fs');
const path = require('path');

const IMAGES_DIR = 'images';
const MAIN_JS_PATH = path.join('js', 'main.js');

// 1. Scan images directory recursively to build a map of filename -> actual path on disk
function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      scanDirectory(fullPath, fileList);
    } else if (/\.(jpe?g|png|webp|gif)$/i.test(file.name)) {
      // Normalize to forward slashes for web usage
      const relativePath = fullPath.replace(/\\/g, '/');
      fileList.push({
        name: file.name.toLowerCase(),
        path: '../' + relativePath,
        dirName: path.basename(dir).toLowerCase()
      });
    }
  }
  return fileList;
}

console.log('Scanning images directory...');
const diskImages = scanDirectory(IMAGES_DIR);
console.log(`Found ${diskImages.length} images on disk.`);

// 2. Read js/main.js
if (!fs.existsSync(MAIN_JS_PATH)) {
  console.error(`Error: ${MAIN_JS_PATH} not found.`);
  process.exit(1);
}
let code = fs.readFileSync(MAIN_JS_PATH, 'utf8');

// 3. Locate productData object in js/main.js using brace counting
const startPattern = 'const productData = {';
const startIdx = code.indexOf(startPattern);
if (startIdx === -1) {
  console.error('Could not find const productData definition in js/main.js');
  process.exit(1);
}

const objStartIdx = startIdx + startPattern.length - 1; // index of '{'
let braceCount = 0;
let endIdx = -1;

for (let i = objStartIdx; i < code.length; i++) {
  if (code[i] === '{') {
    braceCount++;
  } else if (code[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      endIdx = i;
      break;
    }
  }
}

if (endIdx === -1) {
  console.error('Could not find matching closing brace for productData');
  process.exit(1);
}

const objText = code.substring(objStartIdx, endIdx + 1);

// 4. Parse the object using eval
let productDataObj;
try {
  productDataObj = eval('(' + objText + ')');
} catch (e) {
  console.error('Failed to parse productData object using eval:', e.message);
  process.exit(1);
}

// 5. Update image paths
let updatedCount = 0;
let deletedCount = 0;
let keptCount = 0;

for (const key of Object.keys(productDataObj)) {
  const p = productDataObj[key];
  if (Array.isArray(p.imgs)) {
    const newImgs = [];
    for (const oldPath of p.imgs) {
      const filename = path.basename(oldPath).toLowerCase();
      
      // Try to find matching image on disk
      // We look for same filename. If there are duplicates, we filter by category/directory name match if possible
      const matches = diskImages.filter(img => img.name === filename);
      
      if (matches.length === 0) {
        // File no longer exists, remove it
        deletedCount++;
        continue;
      }
      
      let bestMatch = matches[0];
      if (matches.length > 1) {
        // Find best match by checking if the old path contains the directory name of the new path
        let maxScore = -1;
        for (const match of matches) {
          let score = 0;
          if (oldPath.toLowerCase().includes(match.dirName)) {
            score = 2;
          }
          if (score > maxScore) {
            maxScore = score;
            bestMatch = match;
          }
        }
      }
      
      if (bestMatch.path !== oldPath) {
        updatedCount++;
      } else {
        keptCount++;
      }
      newImgs.push(bestMatch.path);
    }
    p.imgs = newImgs;
  }
}

console.log(`Path updates: kept ${keptCount}, updated ${updatedCount}, deleted ${deletedCount}.`);

// 6. Serialize the updated object and write back to js/main.js
const updatedObjText = JSON.stringify(productDataObj, null, 4);

// Replace the block in code
const before = code.substring(0, startIdx);
const after = code.substring(endIdx + 1);
const newCode = before + 'const productData = ' + updatedObjText + after;

fs.writeFileSync(MAIN_JS_PATH, newCode, 'utf8');
console.log('Successfully updated js/main.js!');
