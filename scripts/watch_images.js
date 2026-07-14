const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const IMAGES_DIR = path.join(__dirname, '../images');
const DEBOUNCE_DELAY = 1500; // Đợi 1.5 giây sau thay đổi cuối cùng trước khi chạy cập nhật

let timeout = null;
let pendingChanges = new Set();

console.log('=============================================');
console.log('🔄 BẮT ĐẦU THEO DÕI THƯ MỤC HÌNH ẢNH (IMAGES WATCHER)');
console.log('Thư mục:', IMAGES_DIR);
console.log('Sẽ tự động cập nhật dữ liệu sản phẩm và số lượng khi thêm/xóa ảnh.');
console.log('Nhấn Ctrl + C để dừng.');
console.log('=============================================');

if (!fs.existsSync(IMAGES_DIR)) {
  console.error(`❌ Thư mục ${IMAGES_DIR} không tồn tại!`);
  process.exit(1);
}

fs.watch(IMAGES_DIR, { recursive: true }, (eventType, filename) => {
  if (!filename) return;

  // Chỉ quan tâm tới các file hình ảnh
  const ext = path.extname(filename).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
    return;
  }

  pendingChanges.add(filename);

  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    const changesList = Array.from(pendingChanges);
    const displayList = changesList.length > 3 
      ? changesList.slice(0, 3).join(', ') + ` và ${changesList.length - 3} file khác`
      : changesList.join(', ');

    console.log(`\n[${new Date().toLocaleTimeString()}] 📸 Phát hiện thay đổi ảnh: ${displayList}`);
    pendingChanges.clear();
    console.log('⏳ Đang chạy script cập nhật danh sách và số lượng sản phẩm...');

    const runScript = (scriptName) => {
      return new Promise((resolve, reject) => {
        exec(`node scripts/${scriptName}`, { cwd: path.join(__dirname, '..') }, (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else {
            resolve(stdout);
          }
        });
      });
    };

    Promise.all([
      runScript('generate_products.js'),
      runScript('generate_sidebar.js')
    ])
      .then(() => {
        console.log('✅ Thành công! Dữ liệu sản phẩm (js/products.js) và số lượng trong sidebar đã được đồng bộ tự động.');
      })
      .catch(err => {
        console.error('❌ Lỗi khi tự động cập nhật:', err.message);
      });

  }, DEBOUNCE_DELAY);
});
