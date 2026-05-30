const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const productsScript = fs.readFileSync('products_script.js', 'utf8');

// Extract Tailwind config, header, footer from index.html
const headEnd = indexHtml.indexOf('</head>');
let head = indexHtml.substring(0, headEnd + 7);
// Fix the title
head = head.replace(/<title>.*?<\/title>/, '<title>Sản Phẩm - Bảo Hộ Lao Động Thành Phong</title>');

// Extract Navbar
const navStart = indexHtml.indexOf('<nav class="bg-surface-bright');
const navEnd = indexHtml.indexOf('</nav>') + 6;
let nav = indexHtml.substring(navStart, navEnd);

// Extract Footer
const footerStart = indexHtml.indexOf('<footer class="bg-surface-container-lowest border-t border-surface-container mt-32">');
const footerEnd = indexHtml.indexOf('</footer>') + 9;
let footer = indexHtml.substring(footerStart, footerEnd);

// Extract Floating Actions, Cart and Lightbox from index.html
const floatingStart = indexHtml.indexOf('<!-- OVERLAY -->');
let floatingEnd = indexHtml.indexOf('<script src="js/main.js">');
if (floatingEnd === -1) floatingEnd = indexHtml.indexOf('</body>');
let floating = indexHtml.substring(floatingStart, floatingEnd);

// Update productsScript to use Tailwind classes
let script = productsScript.replace(
    /grid\.innerHTML=list\.map\(p=>.*?join\(''\);/s,
    `grid.innerHTML=list.map(p=>\`
        <div class="group flex flex-col bg-surface-lowest border border-surface-container rounded-2xl overflow-hidden hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-all duration-300 cursor-pointer" onclick="openLightbox(\${JSON.stringify(p).replace(/"/g,'&quot;')})">
            <div class="relative aspect-square overflow-hidden bg-surface-container-lowest">
                <img src="\${p.img}" alt="\${p.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\\\'http://www.w3.org/2000/svg\\\\' width=\\\\'200\\\\' height=\\\\'200\\\\'%3E%3Crect fill=\\\\'%23f1f5f9\\\\' width=\\\\'200\\\\' height=\\\\'200\\\\'/%3E%3C/svg%3E'">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="bg-white/20 text-white font-medium py-2 px-4 rounded-full flex items-center gap-2 backdrop-blur-sm">
                        <i class="fas fa-search-plus"></i> Xem chi tiết
                    </span>
                </div>
            </div>
            <div class="p-4 flex flex-col flex-1">
                <span class="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded-md self-start mb-2 uppercase">\${p.catLabel}</span>
                <h3 class="text-sm font-bold text-primary mb-3 line-clamp-2 leading-snug">\${p.title}</h3>
                <div class="mt-auto flex items-center justify-between pt-2 border-t border-surface-container/50">
                    <span class="text-error font-bold text-sm">Liên hệ</span>
                    <button class="bg-primary text-on-primary px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors" onclick="event.stopPropagation()">Hỏi giá</button>
                </div>
            </div>
        </div>\`).join('');`
);

// We need to inject Tailwind-styled Lightbox for products.html
// But wait, the products.html already has its own Lightbox logic `openLightbox(p)`.
// We will replace `openLightbox` to use the Tailwind lightbox structure.
script = script.replace(
    /function openLightbox\(p\)\{.*?function closeLightbox\(\)\{.*?\}/s,
    `function openLightbox(p){
        document.getElementById('lightboxMainImg').src = p.img;
        document.getElementById('lt-title').textContent = p.title;
        document.getElementById('lt-price').textContent = "Giá: Liên hệ";
        const lb = document.getElementById('productLightbox');
        lb.style.display = 'flex';
        lb.classList.remove('hidden');
    }
    document.querySelector('.lightbox-close').addEventListener('click', () => {
        document.getElementById('productLightbox').style.display = 'none';
        document.getElementById('productLightbox').classList.add('hidden');
    });
    document.querySelector('.lightbox-overlay').addEventListener('click', () => {
        document.getElementById('productLightbox').style.display = 'none';
        document.getElementById('productLightbox').classList.add('hidden');
    });`
);

// Body Content
const bodyContent = `
<body class="bg-surface-bright font-sans text-on-surface antialiased selection:bg-primary selection:text-on-primary">
    ${nav}
    
    <!-- Breadcrumb -->
    <div class="bg-surface-container-lowest border-b border-surface-container">
        <div class="container mx-auto px-4 max-w-7xl py-4 flex items-center gap-2 text-sm">
            <a href="index.html" class="text-on-surface-variant hover:text-primary transition-colors">Trang chủ</a>
            <span class="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            <span class="font-medium text-primary">Sản phẩm</span>
        </div>
    </div>
    
    <main class="container mx-auto px-4 max-w-7xl py-12">
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- Sidebar -->
            <aside class="w-full lg:w-1/4 flex flex-col gap-6">
                <div class="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container shadow-sm">
                    <h2 class="text-lg font-bold text-primary font-['Hanken_Grotesk'] mb-6 flex items-center gap-2 pb-4 border-b border-surface-container">
                        <span class="material-symbols-outlined text-secondary">category</span> Danh mục
                    </h2>
                    <ul class="cat-list flex flex-col gap-2">
                        <li><a href="#" class="cat-link active flex justify-between items-center px-4 py-3 rounded-xl hover:bg-surface-container-low transition-colors font-medium text-primary bg-primary-container text-on-primary-container" data-cat="all">Tất cả sản phẩm <span class="bg-white text-primary text-xs px-2 py-1 rounded-md" id="cnt-all">0</span></a></li>
                        <li><a href="#" class="cat-link flex justify-between items-center px-4 py-3 rounded-xl hover:bg-surface-container-low transition-colors font-medium text-on-surface-variant hover:text-primary" data-cat="uniform">Đồng phục bảo vệ <span class="bg-surface-container text-on-surface text-xs px-2 py-1 rounded-md" id="cnt-uniform">0</span></a></li>
                        <li><a href="#" class="cat-link flex justify-between items-center px-4 py-3 rounded-xl hover:bg-surface-container-low transition-colors font-medium text-on-surface-variant hover:text-primary" data-cat="accessories">Phụ kiện bảo vệ <span class="bg-surface-container text-on-surface text-xs px-2 py-1 rounded-md" id="cnt-accessories">0</span></a></li>
                        <li><a href="#" class="cat-link flex justify-between items-center px-4 py-3 rounded-xl hover:bg-surface-container-low transition-colors font-medium text-on-surface-variant hover:text-primary" data-cat="safety">Bảo hộ lao động <span class="bg-surface-container text-on-surface text-xs px-2 py-1 rounded-md" id="cnt-safety">0</span></a></li>
                        <li><a href="#" class="cat-link flex justify-between items-center px-4 py-3 rounded-xl hover:bg-surface-container-low transition-colors font-medium text-on-surface-variant hover:text-primary" data-cat="shoes">Giày bảo hộ <span class="bg-surface-container text-on-surface text-xs px-2 py-1 rounded-md" id="cnt-shoes">0</span></a></li>
                        <li><a href="#" class="cat-link flex justify-between items-center px-4 py-3 rounded-xl hover:bg-surface-container-low transition-colors font-medium text-on-surface-variant hover:text-primary" data-cat="tools">Dụng cụ & Thiết bị <span class="bg-surface-container text-on-surface text-xs px-2 py-1 rounded-md" id="cnt-tools">0</span></a></li>
                    </ul>
                </div>
            </aside>
            
            <!-- Main Grid -->
            <div class="flex-1 flex flex-col gap-6">
                <!-- Sort Bar -->
                <div class="bg-surface-container-lowest rounded-2xl p-4 border border-surface-container shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-4 w-full sm:w-auto">
                        <span class="text-on-surface-variant font-medium">Sắp xếp:</span>
                        <div class="flex gap-2 bg-surface-container-low p-1 rounded-lg">
                            <button class="sort-btn active px-4 py-2 rounded-md text-sm font-medium bg-surface-lowest shadow-sm text-primary transition-all" data-sort="default">Phổ biến</button>
                            <button class="sort-btn px-4 py-2 rounded-md text-sm font-medium text-on-surface-variant hover:text-primary transition-all" data-sort="az">A &rarr; Z</button>
                            <button class="sort-btn px-4 py-2 rounded-md text-sm font-medium text-on-surface-variant hover:text-primary transition-all" data-sort="za">Z &rarr; A</button>
                        </div>
                    </div>
                    <span class="text-sm font-bold text-tertiary bg-tertiary-container/30 px-4 py-2 rounded-full" id="results-count"></span>
                </div>
                
                <!-- Grid -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" id="productsGrid">
                </div>
            </div>
        </div>
    </main>

    ${floating}
    ${footer}
    
    <script>
    // Modify active states for cat links and sort btns
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.cat-list a').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                document.querySelectorAll('.cat-list a').forEach(x => {
                    x.classList.remove('active', 'bg-primary-container', 'text-on-primary-container');
                    x.classList.add('text-on-surface-variant');
                    x.querySelector('span').classList.remove('bg-white', 'text-primary');
                    x.querySelector('span').classList.add('bg-surface-container', 'text-on-surface');
                });
                a.classList.add('active', 'bg-primary-container', 'text-on-primary-container');
                a.classList.remove('text-on-surface-variant');
                a.querySelector('span').classList.remove('bg-surface-container', 'text-on-surface');
                a.querySelector('span').classList.add('bg-white', 'text-primary');
            });
        });
        
        document.querySelectorAll('.sort-btn').forEach(b => {
            b.addEventListener('click', () => {
                document.querySelectorAll('.sort-btn').forEach(x => {
                    x.classList.remove('active', 'bg-surface-lowest', 'shadow-sm', 'text-primary');
                    x.classList.add('text-on-surface-variant');
                });
                b.classList.add('active', 'bg-surface-lowest', 'shadow-sm', 'text-primary');
                b.classList.remove('text-on-surface-variant');
            });
        });
    });
    </script>
    <script>${script}</script>
    <script src="js/main.js"></script>
</body>
</html>
`;

fs.writeFileSync('products.html', head + bodyContent);
