const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const WATCH_DIR = __dirname;
// Thay đổi thời gian chờ (debounce) trước khi commit (mặc định 10 giây = 10000ms)
const DEBOUNCE_DELAY = 10000; 

let timeout = null;
let changedFiles = new Set();

console.log('=============================================');
console.log('🔄 BẮT ĐẦU THEO DÕI THAY ĐỔI FILE (AUTO-COMMIT)');
console.log('Thư mục:', WATCH_DIR);
console.log('Nhấn Ctrl + C để dừng.');
console.log('=============================================');

fs.watch(WATCH_DIR, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    
    // Bỏ qua thư mục .git, node_modules và chính file này để tránh lặp vô tận
    if (
        filename.includes('.git') || 
        filename.includes('node_modules') || 
        filename === 'autocommit.js'
    ) {
        return;
    }

    changedFiles.add(filename);

    // Reset lại bộ đếm thời gian (debounce) nếu có file khác tiếp tục được lưu
    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        // Lấy danh sách các file đã thay đổi (giới hạn hiển thị 3 file để tên không quá dài)
        let filesArr = Array.from(changedFiles);
        let filesDisplay = filesArr.length > 3 
            ? filesArr.slice(0, 3).join(', ') + ` và ${filesArr.length - 3} file khác`
            : filesArr.join(', ');
            
        changedFiles.clear();
        
        console.log(`\n[${new Date().toLocaleTimeString()}] 📦 Phát hiện thay đổi: ${filesDisplay}`);
        console.log('⏳ Đang tiến hành add, commit và push...');

        const commitMessage = `Auto-update: Cập nhật ${filesDisplay}`;
        
        // Chuỗi lệnh Git
        const gitCommand = `git add . && git commit -m "${commitMessage}" && git push origin main`;

        exec(gitCommand, { cwd: WATCH_DIR }, (error, stdout, stderr) => {
            if (error) {
                // Thường lỗi này xuất hiện khi "nothing to commit"
                if (stdout.includes('nothing to commit')) {
                    console.log('ℹ️ Không có thay đổi nào mới cần commit.');
                } else {
                    console.error(`❌ Lỗi: ${error.message}`);
                }
                return;
            }
            
            console.log(`✅ Thành công! Đã push thay đổi lên Github branch main.`);
        });
    }, DEBOUNCE_DELAY);
});
