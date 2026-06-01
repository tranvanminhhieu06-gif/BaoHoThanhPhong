const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');
const folders = fs.readdirSync(imagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'ĐỐI TÁC THÀNH PHONG' && !dirent.name.startsWith('.'));

let products = [];
let catId = 1;

const iconMap = {
    'Bảng cảnh báo': 'warning',
    'Cuộn rào công trình': 'construction',
    'Cà Vạt, Ve Bảo Vệ': 'style',
    'Cầu Vai Bảo Vệ': 'military_tech',
    'Cọc giao thông-cột chia làn đường': 'traffic',
    'Dây An Toàn Toàn Thân': 'safety_divider',
    'Dây an toàn': 'security',
    'Dây thắt lưng bảo vệ Security': 'shop',
    'Gang tay bảo hộ': 'front_hand',
    'Giày bảo hộ lao động': 'footprint',
    'Giày da bảo vệ - Có buộc dây': 'footprint',
    'Giày da bảo vệ - Không buộc dây': 'footprint',
    'Gậy cao su - Dùi cui bảo vệ': 'gavel',
    'Gậy giao thông': 'tour',
    'Hệ Thống Báo Cháy': 'notifications_active',
    'Kính bảo hộ & Khẩu trang': 'masks',
    'Mũ bảo hộ lao động': 'engineering',
    'Mặt Nạ Phòng Độc': 'masks',
    'Mặt nạ hàn bảo hộ lao động': 'masks',
    'Nón , Sao Bảo Vệ': 'stars',
    'Nón vải lưới trùm': 'sanitizer',
    'Nút chống ồn': 'hearing_disabled',
    'Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc': 'smoke_free',
    'Thang Thoát Hiểm Cuốn': 'stairs',
    'Thiết bị PCCC & An toàn': 'fire_extinguisher',
    'Thùng đựng rác': 'delete',
    'Áo Phản Quang': 'visibility',
    'Áo cá sấu mè cao cấp nhiều': 'apparel',
    'Đồ bảo hộ PCCC': 'local_fire_department',
    'Đồ đi mưa - áo phao': 'umbrella',
    'Đồng Phục Bảo Vệ': 'shield_person',
    'Đồng Phục Bảo Vệ NEW': 'shield_person',
    'Ủng bảo hộ lao động': 'directions_walk'
};

const categories = [];

folders.forEach(folder => {
    const currentCatId = `cat${catId}`;
    const icon = iconMap[folder.name] || 'folder';
    
    categories.push({ id: currentCatId, name: folder.name, icon: icon });
    
    const folderPath = path.join(imagesDir, folder.name);
    const files = fs.readdirSync(folderPath).filter(f => f.match(/\.(png|jpe?g|svg|webp)$/i));
    
    files.forEach((file, index) => {
        products.push({
            id: folder.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() + Math.floor(Math.random() * 10000),
            title: `${folder.name} ${index + 1}`,
            cat: currentCatId,
            catLabel: folder.name,
            img: `images/${folder.name}/${file}`
        });
    });
    catId++;
});

const productsJsCode = `const products = ${JSON.stringify(products, null, 2)};
let currentCat = 'all';
let currentSort = 'default';
let currentPage = 1;
const itemsPerPage = 12;

function countByCat(cat){
    return cat === 'all' ? products.length : products.filter(p => p.cat === cat).length;
}

function updateCounts(){
    ['all', ${categories.map(c => `'${c.id}'`).join(', ')}].forEach(c => {
        const el = document.getElementById('cnt-'+c);
        if(el) el.textContent = countByCat(c);
    });
}

function getFiltered(){
    let list = currentCat === 'all' ? [...products] : products.filter(p => p.cat === currentCat);
    if(currentSort === 'az') list.sort((a,b) => a.title.localeCompare(b.title, 'vi'));
    else if(currentSort === 'za') list.sort((a,b) => b.title.localeCompare(a.title, 'vi'));
    return list;
}

function renderGrid(){
    const list = getFiltered();
    const grid = document.getElementById('productsGrid');
    const paginationEl = document.getElementById('paginationControls');
    
    const resultsCountEl = document.getElementById('results-count');
    if(resultsCountEl) resultsCountEl.textContent = 'Hiển thị ' + list.length + ' sản phẩm';
    
    const totalPages = Math.ceil(list.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;
    if (currentPage < 1) currentPage = 1;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedList = list.slice(startIndex, startIndex + itemsPerPage);
    
    grid.innerHTML = paginatedList.map(p => '<div class="product-card group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"><div class="relative aspect-[4/5] bg-gray-50 overflow-hidden cursor-pointer" onclick="openLightbox(' + JSON.stringify(p).replace(/"/g, '&quot;') + ')"><img alt="' + p.title + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="' + p.img + '" onerror="this.src=\\'data:image/svg+xml,%3Csvg xmlns=\\\\\\'http://www.w3.org/2000/svg\\\\\\' width=\\\\\\'200\\\\\\' height=\\\\\\'200\\\\\\'%3E%3Crect fill=\\\\\\'%23f1f5f9\\\\\\' width=\\\\\\'200\\\\\\' height=\\\\\\'200\\\\\\'/%3E%3C/svg%3E\\'"><div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 gap-4"><a href="tel:0931160818" onclick="event.stopPropagation()" class="w-full py-4 bg-[#1D5FA8] text-white text-xs font-bold rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:bg-[#164A85] transition-colors btn-press"><span class="material-symbols-outlined text-[18px]">chat_bubble</span> LIÊN HỆ VỚI CHÚNG TÔI</a><button onclick="event.stopPropagation(); openLightbox(' + JSON.stringify(p).replace(/"/g, '&quot;') + ')" class="w-full py-4 bg-white text-[#1A2744] text-xs font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E8A500] hover:text-white transition-colors btn-press"><span class="material-symbols-outlined text-[18px]">visibility</span> XEM CHI TIẾT</button></div></div><div class="p-6 text-center"><p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 truncate">' + p.catLabel + '</p><h3 class="font-bold text-lg text-[#1A2744] group-hover:text-[#1D5FA8] transition-colors mb-2 truncate">' + p.title + '</h3><p class="text-sm font-bold text-[#E8A500]">Liên hệ để biết giá</p></div></div>').join('');

    if (paginationEl) {
        if (totalPages > 1) {
            let pagesHtml = '<div class="flex items-center justify-center gap-2 mt-12">';
            let pClass = currentPage === 1 ? 'text-gray-300 cursor-not-allowed border border-gray-100' : 'text-gray-600 border border-gray-200 hover:bg-[#1D5FA8] hover:text-white hover:border-[#1D5FA8] btn-press';
            pagesHtml += '<button onclick="window.changePage(' + (currentPage - 1) + ')" class="w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ' + pClass + '"><span class="material-symbols-outlined text-[18px]">chevron_left</span></button>';
            
            let start = currentPage;
            let end = Math.min(totalPages, currentPage + 2);
            if (currentPage + 2 > totalPages) {
                start = Math.max(1, totalPages - 2);
                end = totalPages;
            }

            for(let i=start; i<=end; i++) {
                let bClass = currentPage === i ? 'bg-[#1D5FA8] text-white shadow-lg shadow-blue-100 border border-[#1D5FA8]' : 'text-gray-600 border border-gray-200 hover:bg-[#1D5FA8] hover:text-white hover:border-[#1D5FA8] btn-press';
                pagesHtml += '<button onclick="window.changePage(' + i + ')" class="w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ' + bClass + '">' + i + '</button>';
            }

            if (end < totalPages - 1) {
                pagesHtml += '<span class="text-gray-400 font-bold px-1">...</span>';
            }
            if (end < totalPages) {
                pagesHtml += '<button onclick="window.changePage(' + totalPages + ')" class="w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all text-gray-600 border border-gray-200 hover:bg-[#1D5FA8] hover:text-white hover:border-[#1D5FA8] btn-press">' + totalPages + '</button>';
            }

            let nClass = currentPage === totalPages ? 'text-gray-300 cursor-not-allowed border border-gray-100' : 'text-gray-600 border border-gray-200 hover:bg-[#1D5FA8] hover:text-white hover:border-[#1D5FA8] btn-press';
            pagesHtml += '<button onclick="window.changePage(' + (currentPage + 1) + ')" class="w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ' + nClass + '"><span class="material-symbols-outlined text-[18px]">chevron_right</span></button>';
            
            pagesHtml += '</div>';
            paginationEl.innerHTML = pagesHtml;
        } else {
            paginationEl.innerHTML = '';
        }
    }
}

window.changePage = function(page) {
    const list = getFiltered();
    const totalPages = Math.ceil(list.length / itemsPerPage);
    if(page >= 1 && page <= totalPages) {
        currentPage = page;
        renderGrid();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

window.openLightbox = function(p){
    document.getElementById('lbImg').src = p.img;
    document.getElementById('lbTitle').textContent = p.title;
    document.getElementById('lbCat').textContent = p.catLabel;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
};

window.closeLightbox = function(){
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
        currentCat = catParam;
    }

    const lbClose = document.getElementById('lbClose');
    if(lbClose) lbClose.onclick = window.closeLightbox;
    
    const lightbox = document.getElementById('lightbox');
    if(lightbox) {
        lightbox.onclick = function(e){
            if(e.target === this) window.closeLightbox();
        };
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const url = new URL(window.location);
            url.searchParams.set('cat', btn.dataset.cat);
            window.history.pushState({}, '', url);

            updateActiveFilter(btn.dataset.cat);
            
            currentCat = btn.dataset.cat;
            currentPage = 1;
            renderGrid();
        });
    });

    function updateActiveFilter(catId) {
        filterBtns.forEach(b => {
            b.classList.remove('bg-[#1D5FA8]', 'text-white', 'shadow-xl', 'shadow-blue-100');
            b.classList.add('text-gray-600', 'hover:bg-white', 'hover:shadow-md', 'border', 'border-transparent', 'hover:border-gray-100');
            
            const icon = b.querySelector('.cat-icon');
            if(icon) { icon.classList.remove('text-white'); icon.classList.add('text-gray-400', 'group-hover:text-[#1D5FA8]'); }
            
            const text = b.querySelector('.cat-text');
            if(text) { text.classList.remove('text-white'); text.classList.add('group-hover:text-[#1A2744]'); }
            
            const count = b.querySelector('.cat-count');
            if(count) { count.classList.remove('bg-white/20', 'text-white'); count.classList.add('text-gray-400'); }
            
            if (b.dataset.cat === catId) {
                b.classList.remove('text-gray-600', 'hover:bg-white', 'hover:shadow-md', 'border', 'border-transparent', 'hover:border-gray-100');
                b.classList.add('bg-[#1D5FA8]', 'text-white', 'shadow-xl', 'shadow-blue-100');
                
                if(icon) { icon.classList.remove('text-gray-400', 'group-hover:text-[#1D5FA8]'); icon.classList.add('text-white'); }
                if(text) { text.classList.remove('group-hover:text-[#1A2744]'); text.classList.add('text-white'); }
                if(count) { count.classList.remove('text-gray-400'); count.classList.add('bg-white/20', 'text-white'); }
            }
        });
    }

    if (catParam) {
        updateActiveFilter(catParam);
    }
    
    const sortSelect = document.getElementById('sortSelect');
    if(sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            currentPage = 1;
            renderGrid();
        });
    }

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if(nav) {
            if (window.scrollY > 20) nav.classList.add('shadow-md');
            else nav.classList.remove('shadow-md');
        }
    });

    updateCounts();
    renderGrid();
});
`;

fs.writeFileSync(path.join(__dirname, 'js/products.js'), productsJsCode);

let sidebarHtml = `
    <a href="#" class="filter-btn flex items-center justify-between p-3 rounded-2xl bg-[#1D5FA8] text-white shadow-xl shadow-blue-100 transition-all duration-300 group" data-cat="all">
        <div class="flex items-center gap-3 w-full">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[20px] cat-icon text-white">grid_view</span>
            </div>
            <span class="font-bold text-sm text-left truncate cat-text text-white">Tất cả sản phẩm</span>
        </div>
        <span class="text-xs font-bold px-3 py-1 bg-white/20 text-white rounded-lg cat-count" id="cnt-all">0</span>
    </a>`;

categories.forEach(cat => {
    sidebarHtml += `
    <a href="#" class="filter-btn flex items-center justify-between p-3 rounded-2xl text-gray-600 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300 group" data-cat="${cat.id}">
        <div class="flex items-center gap-3 w-full">
            <div class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors shrink-0">
                <span class="material-symbols-outlined text-[20px] cat-icon text-gray-400 group-hover:text-[#1D5FA8] transition-colors">${cat.icon}</span>
            </div>
            <span class="font-bold text-sm text-left truncate cat-text group-hover:text-[#1A2744] transition-colors">${cat.name}</span>
        </div>
        <span class="text-xs font-bold px-3 py-1 bg-gray-50 group-hover:bg-gray-100 text-gray-400 rounded-lg cat-count" id="cnt-${cat.id}">0</span>
    </a>`;
});

const htmlFiles = ['products.html', 'desktop.html', 'mobile.html'];
htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    const catFilterRegex = /<div class="space-y-2(?:\s+custom-scrollbar)?"(?:\s+id="categoryFilter")?(?:\s+style="[^"]*")?>([\s\S]*?)<\/div>\s*<\/div>\s*<!-- Promotion Card -->/;
    content = content.replace(catFilterRegex, `<div class="space-y-2 custom-scrollbar" id="categoryFilter" style="max-height: 60vh; overflow-y: auto; padding-right: 8px;">\n${sidebarHtml}\n</div>\n            </div>\n\n            <!-- Promotion Card -->`);
    fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
});

console.log('Update script executed successfully.');
