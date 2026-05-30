const fs = require('fs');

const files = ['index.html', 'products.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // 1. Inject boxShadow into tailwind config if not exists
    if (!content.includes('"boxShadow"')) {
        content = content.replace(
            /"fontSize": {/g,
            `"boxShadow": {
                        "level-1": "0px 4px 20px rgba(15, 23, 42, 0.04)",
                        "level-2": "0px 12px 32px rgba(15, 23, 42, 0.08)",
                        "level-3": "0px 24px 48px rgba(15, 23, 42, 0.12)"
                    },
                    "fontSize": {`
        );
    }

    // 2. Shadows (Ambient Shadows concept)
    content = content.replace(/shadow-sm/g, 'shadow-level-1');
    content = content.replace(/shadow-md/g, 'shadow-level-2');
    content = content.replace(/shadow-lg/g, 'shadow-level-2'); // Level 2 cho interactive/hover
    content = content.replace(/shadow-xl/g, 'shadow-level-3');
    content = content.replace(/shadow-\[0_24px_48px_rgba\(15,23,42,0\.12\)\]/g, 'shadow-level-3');

    // 3. Hình khối (Shapes): 12px cho các component chính (rounded-xl trong config là 0.75rem = 12px)
    content = content.replace(/rounded-lg/g, 'rounded-xl'); 
    
    // 4. Nút bấm (Buttons): Đổi padding từ px-lg(48px) xuống px-md(24px), vertical py-sm(12px)
    content = content.replace(/px-lg py-sm/g, 'px-md py-sm');
    content = content.replace(/px-xl py-md/g, 'px-md py-sm'); // Form submit button

    // 5. Cards: Nền trắng, shadow Level 1, padding 16px (hoặc 24px p-md)
    content = content.replace(/p-lg rounded-2xl/g, 'p-md rounded-2xl');

    // 6. Input Fields: 1px border #CBD5E1, 12px rounded
    content = content.replace(/border-outline-variant focus:border-\[#0f172a\] focus:ring-\[#0f172a\]/g, 'border-[#CBD5E1] focus:border-tertiary focus:ring-tertiary/20 focus:ring-2');

    // 7. Typography fixes
    // Đảm bảo Hanken Grotesk dùng cho tiêu đề, Inter dùng cho nội dung (đã setup đúng trong config)

    fs.writeFileSync(file, content, 'utf8');
});

console.log('UI updated successfully based on Executive Precision spacing, depth, and shape guidelines.');
