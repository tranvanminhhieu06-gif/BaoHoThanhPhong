const fs = require('fs');
const zlib = require('zlib');

const SRC = 'images/BANNER BAN ĐẦU/screen.png';
const OUT = 'images/BANNER BAN ĐẦU/khung-san-pham.png';

// ---------- PNG chunk reader ----------
function readChunks(buf) {
  const chunks = [];
  let offset = 8; // skip signature
  while (offset < buf.length) {
    const len = buf.readUInt32BE(offset);
    const type = buf.slice(offset + 4, offset + 8).toString('ascii');
    const data = buf.slice(offset + 8, offset + 8 + len);
    chunks.push({ type, data });
    offset += 8 + len + 4; // skip CRC
    if (type === 'IEND') break;
  }
  return chunks;
}

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      table[n] = c;
    }
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function buildChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcInput = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcInput), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

// ---------- Decode ----------
const srcBuf = fs.readFileSync(SRC);
if (srcBuf.slice(0, 4).toString('hex') !== '89504e47') {
  console.error('Source file is not a valid PNG.');
  process.exit(1);
}

const chunks = readChunks(srcBuf);
const ihdr = chunks.find(c => c.type === 'IHDR').data;
const width = ihdr.readUInt32BE(0);
const height = ihdr.readUInt32BE(4);
const bitDepth = ihdr.readUInt8(8);
const colorType = ihdr.readUInt8(9);

console.log('Source:', width + 'x' + height, 'bitDepth=' + bitDepth, 'colorType=' + colorType);

if (bitDepth !== 8 || (colorType !== 2 && colorType !== 6)) {
  console.error('Unsupported PNG format (expected 8-bit RGB or RGBA). colorType=' + colorType);
  process.exit(1);
}

const channels = colorType === 6 ? 4 : 3;
const idatData = Buffer.concat(chunks.filter(c => c.type === 'IDAT').map(c => c.data));
const raw = zlib.inflateSync(idatData);

// Un-filter scanlines -> RGB(A) pixel buffer
const stride = width * channels;
const pixels = Buffer.alloc(height * stride);

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

let rawOffset = 0;
for (let y = 0; y < height; y++) {
  const filterType = raw[rawOffset++];
  const rowStart = y * stride;
  const prevRowStart = (y - 1) * stride;
  for (let x = 0; x < stride; x++) {
    const rawByte = raw[rawOffset + x];
    const a = x >= channels ? pixels[rowStart + x - channels] : 0;
    const b = y > 0 ? pixels[prevRowStart + x] : 0;
    const c = (y > 0 && x >= channels) ? pixels[prevRowStart + x - channels] : 0;
    let value;
    switch (filterType) {
      case 0: value = rawByte; break;
      case 1: value = rawByte + a; break;
      case 2: value = rawByte + b; break;
      case 3: value = rawByte + Math.floor((a + b) / 2); break;
      case 4: value = rawByte + paeth(a, b, c); break;
      default: throw new Error('Unknown filter type ' + filterType + ' at row ' + y);
    }
    pixels[rowStart + x] = value & 0xFF;
  }
  rawOffset += stride;
}

function getPixel(x, y) {
  const idx = y * stride + x * channels;
  return [pixels[idx], pixels[idx + 1], pixels[idx + 2]];
}

// ---------- Detect "checkerboard-like" pixels: low-saturation (near-gray) + bright ----------
// Sampled directly: checker pixels in this image are near-grayscale (R≈G≈B) with
// brightness roughly 200-255, while the blue border is strongly blue-dominant (low R/G,
// high B) and thus easily distinguished. Using a saturation+brightness test instead of
// exact-color matching makes the flood fill robust to JPEG-artifact noise/dithering
// within the checkerboard area.
const SATURATION_MAX = 18;   // max(r,g,b) - min(r,g,b)
const BRIGHTNESS_MIN = 195;  // average of r,g,b

function isCheckerColor(r, g, b) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const avg = (r + g + b) / 3;
  return (max - min) <= SATURATION_MAX && avg >= BRIGHTNESS_MIN;
}

console.log('Using saturation<=' + SATURATION_MAX + ', brightness>=' + BRIGHTNESS_MIN + ' for checkerboard detection.');

// ---------- Flood fill (BFS, 4-connected) from center ----------
const visited = new Uint8Array(width * height);
const queue = new Int32Array(width * height);
let qHead = 0, qTail = 0;

const startX = Math.floor(width / 2), startY = Math.floor(height / 2);
const startIdx = startY * width + startX;
{
  const [r, g, b] = getPixel(startX, startY);
  if (!isCheckerColor(r, g, b)) {
    console.warn('Warning: center pixel does not match detected checker colors; flood fill may not start correctly.');
  }
}
queue[qTail++] = startIdx;
visited[startIdx] = 1;

while (qHead < qTail) {
  const idx = queue[qHead++];
  const x = idx % width, y = Math.floor(idx / width);
  const neighbors = [
    [x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1],
  ];
  for (const [nx, ny] of neighbors) {
    if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
    const nIdx = ny * width + nx;
    if (visited[nIdx]) continue;
    const [r, g, b] = getPixel(nx, ny);
    if (isCheckerColor(r, g, b)) {
      visited[nIdx] = 1;
      queue[qTail++] = nIdx;
    }
  }
}

let transparentCount = 0;
for (let i = 0; i < visited.length; i++) if (visited[i]) transparentCount++;
console.log('Pixels made transparent:', transparentCount, '/', width * height);

// ---------- Build RGBA output ----------
const outStride = width * 4;
const outPixels = Buffer.alloc(height * outStride);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const [r, g, b] = getPixel(x, y);
    const idx = y * width + x;
    const outIdx = y * outStride + x * 4;
    outPixels[outIdx] = r;
    outPixels[outIdx + 1] = g;
    outPixels[outIdx + 2] = b;
    outPixels[outIdx + 3] = visited[idx] ? 0 : 255;
  }
}

// ---------- Filter scanlines (type 0 / None) and deflate ----------
const filtered = Buffer.alloc(height * (outStride + 1));
for (let y = 0; y < height; y++) {
  filtered[y * (outStride + 1)] = 0; // filter type None
  outPixels.copy(filtered, y * (outStride + 1) + 1, y * outStride, (y + 1) * outStride);
}
const compressed = zlib.deflateSync(filtered, { level: 9 });

// ---------- Write new PNG ----------
const newIhdr = Buffer.alloc(13);
newIhdr.writeUInt32BE(width, 0);
newIhdr.writeUInt32BE(height, 4);
newIhdr.writeUInt8(8, 8);   // bit depth
newIhdr.writeUInt8(6, 9);   // color type RGBA
newIhdr.writeUInt8(0, 10);  // compression
newIhdr.writeUInt8(0, 11);  // filter method
newIhdr.writeUInt8(0, 12);  // interlace

const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const outBuf = Buffer.concat([
  signature,
  buildChunk('IHDR', newIhdr),
  buildChunk('IDAT', compressed),
  buildChunk('IEND', Buffer.alloc(0)),
]);

fs.writeFileSync(OUT, outBuf);
console.log('Wrote', OUT, '(' + outBuf.length + ' bytes)');
