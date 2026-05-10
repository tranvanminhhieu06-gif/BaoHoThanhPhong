// ============================================
// THÀNH PHONG - BẢO HỘ LAO ĐỘNG
// Main JavaScript - Upgraded Version
// ============================================

// 1. Cấu trúc dữ liệu chi tiết sản phẩm
const productData = {
    'DongPhucBaoVe': {
        title: 'Quần áo bảo vệ - Áo trắng, quần đen',
        price: 'Liên hệ',
        status: 'best-seller',
        desc: 'Đồng phục bảo vệ chuyên nghiệp, chất liệu vải tốt, form dáng chuẩn. Nhận may thêu logo theo yêu cầu.',
        imgs: ['images/Đồng Phục Bảo Vệ/ao-trang-quan-den.png', 'images/Đồng Phục Bảo Vệ/do-bao-ve.png']
    },
    'DongPhucBaoVeNew': {
        title: 'Quần áo bảo vệ - Áo xanh biển, quần xanh than',
        price: 'Liên hệ',
        status: 'new',
        desc: 'Phong cách chuyên nghiệp, vải bền đẹp, thoáng mát, phù hợp môi trường làm việc năng động.',
        imgs: ['images/Đồng Phục Bảo Vệ NEW/ao-xanh-bien-quan-xanh-than.png']
    },
    'CauVaiBaoVe': {
        title: 'Cầu vai bảo vệ',
        price: 'Liên hệ',
        status: 'featured',
        desc: 'Cầu vai viền đỏ, viền vàng, gạch đồng, thông tư mới. Cầu vai TTM loại đẹp (thêu) đầy đủ mẫu mã.',
        imgs: ['images/Cầu Vai Bảo Vệ/do.png']
    },
    'NonSaoBaoVe': {
        title: 'Nón bảo vệ & Sao bảo vệ',
        price: 'Liên hệ',
        status: 'featured',
        desc: 'Nón bảo vệ thêu chữ Security, sao bảo vệ chuẩn quy cách. Logo bảo vệ nội bộ đầy đủ.',
        imgs: ['images/Nón , Sao Bảo Vệ/non-bao-ve.png']
    },
    'CaVatVeAoBaoVe': {
        title: 'Cà vạt & Ve áo bảo vệ',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Cà vạt bảo vệ sang trọng, ve áo bảo vệ thông tư mới. Hoàn thiện bộ đồng phục chuyên nghiệp.',
        imgs: ['images/Cà Vạt, Ve Bảo Vệ/image.png']
    },
    'DayThatLungBaoVe': {
        title: 'Dây thắt lưng bảo vệ Security',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Dây thắt lưng bền chắc, khóa chắc chắn, in logo Security chuyên dụng cho lực lượng bảo vệ.',
        imgs: ['images/Dây thắt lưng bảo vệ Security/day-that-lung.png']
    },
    'DayDaKhongBuoc': {
        title: 'Giày da bảo vệ - Không buộc dây',
        price: 'Liên hệ',
        status: 'best-seller',
        desc: 'Giày da cao cấp, thiết kế sang trọng, không cần buộc dây tiện lợi. Đế chống trượt, êm chân.',
        imgs: ['images/Giày da bảo vệ - Không buộc dây/day-da-kb.png']
    },
    'DayDaCoBuoc': {
        title: 'Giày da bảo vệ - Có buộc dây',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Giày da có dây buộc, ôm chân chắc chắn, phù hợp cho bảo vệ tuần tra, hoạt động ngoài trời.',
        imgs: ['images/Giày da bảo vệ - Có buộc dây/day-co-cao.png']
    },
    'DayBaoHoLaoDong': {
        title: 'Giày bảo hộ lao động',
        price: 'Liên hệ',
        status: 'best-seller',
        desc: 'Giày bảo hộ đầu thép, chống đâm xuyên, chống trượt, đạt tiêu chuẩn an toàn quốc tế.',
        imgs: ['images/Giày bảo hộ lao động/Giày Jogger  .png']
    },
    'MuBaoHoLaoDong': {
        title: 'Mũ bảo hộ lao động',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Mũ bảo hộ đạt chuẩn, chống va đập, nhẹ và thoáng khí. Nhiều màu sắc, phù hợp mọi công trường.',
        imgs: ['images/Mũ bảo hộ lao động/N40-1 Thùy Dương.png']
    },
    'KinhKhauTrangBaoHo': {
        title: 'Kính bảo hộ & Khẩu trang',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Kính chống bụi, chống tia UV, khẩu trang than hoạt tính. Bảo vệ mắt và đường hô hấp hiệu quả.',
        imgs: ['images/Kính bảo hộ & Khẩu trang/k2.png']
    },
    'GangTayBaoHo': {
        title: 'Găng tay bảo hộ',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Găng tay vải, găng tay cao su, găng tay chống cắt. Đa dạng chủng loại cho mọi ngành nghề.',
        imgs: ['images/Gang tay bảo hộ/Găng Tay Da Hàn Đỏ.png']
    },
    'AoPhanQuangQuanAoBaoHo': {
        title: 'Áo phản quang & Quần áo bảo hộ',
        price: 'Liên hệ',
        status: 'featured',
        desc: 'Áo phản quang an toàn, quần áo bảo hộ vải chống cháy, chống hóa chất. Bảo vệ toàn diện cho người lao động.',
        imgs: ['images/Áo Phản Quang/vải POLY/image.png']
    },
    'GayCaoSuDuiCui': {
        title: 'Gậy cao su - Dùi cui bảo vệ',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Gậy cao su chuyên dụng cho bảo vệ, dùi cui chất lượng cao, bền bỉ theo thời gian.',
        imgs: ['images/Gậy cao su - Dùi cui bảo vệ/dcbv.png']
    },
    'GayGiaoThong': {
        title: 'Gậy giao thông',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Gậy điều hướng giao thông phản quang, sáng rõ ban đêm, chuyên dụng cho lực lượng bảo vệ và điều hành giao thông.',
        imgs: ['images/Gậy giao thông/gdt.png']
    },
    'PCCCAnToan': {
        title: 'Thiết thiết bị PCCC & An toàn',
        price: 'Liên hệ',
        status: 'none',
        desc: 'Bình chữa cháy, vòi cứu hỏa, biển báo an toàn. Trang bị đầy đủ cho doanh nghiệp đạt chuẩn PCCC.',
        imgs: ['images/Thiết bị PCCC & An toàn/Bình bột ABC - 4kg .png']
    }
};

// Translations
const translations = {
    'vi': {
        'nav-about': 'Về chúng tôi',
        'nav-products': 'Sản phẩm',
        'nav-contact': 'Liên hệ',
        'hero-badge': 'Bảo Hộ Lao Động Uy Tín Số 1',
        'hero-title-1': 'An Toàn Của Bạn là<br><span class="highlight">Sứ Mệnh Của Chúng Tôi</span>',
        'hero-slogan': '"Uy Tín Là Bảo Hộ Tốt Nhất"',
        'hero-desc-1': 'Chuyên cung cấp trang thiết bị bảo hộ lao động và đồng phục chuyên dụng chất lượng cao, đạt chuẩn an toàn quốc gia và quốc tế.',
        'btn-explore': 'Khám Phá Sản Phẩm',
        'btn-contact': 'Nhận Tư Vấn Ngay',
        'cart-title': 'Giỏ Hàng',
        'cart-empty': 'Giỏ hàng đang trống',
        'cart-checkout': 'Gửi Đơn Qua Zalo',
        'search-placeholder': 'Tìm sản phẩm...',
        'view-detail': 'Xem chi tiết',
        'contact-price': 'Liên hệ báo giá'
    },
    'en': {
        'nav-about': 'About Us',
        'nav-products': 'Products',
        'nav-contact': 'Contact',
        'hero-badge': 'Top Rated Safety Equipment',
        'hero-title-1': 'Your Safety is<br><span class="highlight">Our Mission</span>',
        'hero-slogan': '"Credibility is the Best Protection"',
        'hero-desc-1': 'Specializing in high-quality safety equipment and specialized uniforms, meeting national and international safety standards.',
        'btn-explore': 'Explore Products',
        'btn-contact': 'Get Advice Now',
        'cart-title': 'Shopping Cart',
        'cart-empty': 'Your cart is empty',
        'cart-checkout': 'Order via Zalo',
        'search-placeholder': 'Search products...',
        'view-detail': 'View Detail',
        'contact-price': 'Contact for Quote'
    }
};

// Global State
let cart = JSON.parse(localStorage.getItem('tp_cart')) || [];
let currentLang = localStorage.getItem('tp_lang') || 'vi';

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) setTimeout(() => preloader.classList.add('hidden'), 1000);

    // 2. Initialize Features
    initHeroCarousel();
    initSmoothScroll();
    initNavbarEffects();
    initProductFilters();
    initSearch();
    initCart();
    initLanguage();
    initStatsCounter();
    initScrollTop();
    initContactForm();
    initProductGalleryLightbox();

    // AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }

    updateCartBadge();
});

// 1. Hero Carousel
function initHeroCarousel() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.hero-slider', {
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            effect: 'fade',
            fadeEffect: { crossFade: true },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }
}

// 2. Navbar Effects (Scroll & Toggle)
function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// 3. Product Filters (Category & Status)
function initProductFilters() {
    const categoryBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const statusBtns = document.querySelectorAll('.filter-btn[data-status]');
    const products = document.querySelectorAll('.product-card');

    let currentFilter = 'all';
    let currentStatus = 'all';

    function applyFilters() {
        products.forEach(card => {
            const cat = card.dataset.category;
            const status = card.dataset.status;
            
            const catMatch = currentFilter === 'all' || cat === currentFilter;
            const statusMatch = currentStatus === 'all' || status === currentStatus;

            if (catMatch && statusMatch) {
                card.style.display = 'block';
                card.classList.remove('hidden');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilters();
        });
    });

    statusBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            statusBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStatus = btn.dataset.status;
            applyFilters();
        });
    });
}

// 4. Live Search
function initSearch() {
    const searchTrigger = document.getElementById('searchTrigger');
    const navSearch = document.getElementById('navSearch');
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product-card');

    searchTrigger.addEventListener('click', () => {
        navSearch.classList.toggle('active');
        if (navSearch.classList.contains('active')) searchInput.focus();
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        products.forEach(card => {
            const titleEl = card.querySelector('.product-title');
            const descEl = card.querySelector('.product-desc');
            
            if (!titleEl || !descEl) return;
            
            const title = titleEl.innerText.toLowerCase();
            const desc = descEl.innerText.toLowerCase();
            
            if (title.includes(query) || desc.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// 5. Shopping Cart
function initCart() {
    const cartTrigger = document.getElementById('cartTrigger');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutBtn = document.getElementById('checkoutZalo');

    const toggleCart = () => {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('open');
    };

    if (cartTrigger) cartTrigger.addEventListener('click', toggleCart);
    if (cartClose) cartClose.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Giỏ hàng của bạn đang trống!', 'error');
                return;
            }

            let message = 'Xin chào Thành Phong, tôi muốn đặt hàng:\n\n';
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.title} x ${item.qty}\n`;
            });
            message += '\nTổng cộng: Liên hệ báo giá';

            const encodedMsg = encodeURIComponent(message);
            const zaloUrl = `https://zalo.me/0901234567?text=${encodedMsg}`;
            window.open(zaloUrl, '_blank');
        });
    }

    renderCart();
}

window.handleAddToCart = (id) => {
    const product = productData[id];
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: id,
            title: product.title,
            img: product.imgs[0],
            qty: 1
        });
    }

    saveCart();
    renderCart();
    updateCartBadge();
    showNotification(`Đã thêm ${product.title} vào giỏ hàng!`);
};

function saveCart() {
    localStorage.setItem('tp_cart', JSON.stringify(cart));
}

function renderCart() {
    const list = document.getElementById('cartItemsList');
    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = `
            <div class="empty-cart-msg" style="text-align: center; color: var(--gray-400); margin-top: 40px;">
                <i class="fas fa-shopping-basket" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>${translations[currentLang]['cart-empty']}</p>
            </div>
        `;
        return;
    }

    list.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p class="cart-item-price">Liên hệ</p>
                <div class="cart-item-qty">
                    <div class="qty-btn" onclick="updateQty('${item.id}', -1)">-</div>
                    <span>${item.qty}</span>
                    <div class="qty-btn" onclick="updateQty('${item.id}', 1)">+</div>
                    <i class="fas fa-trash-alt" style="margin-left: auto; color: var(--danger); cursor: pointer;" onclick="removeFromCart('${item.id}')"></i>
                </div>
            </div>
        </div>
    `).join('');
}

window.updateQty = (id, amt) => {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += amt;
        if (item.qty < 1) removeFromCart(id);
        else {
            saveCart();
            renderCart();
            updateCartBadge();
        }
    }
};

window.removeFromCart = (id) => {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    updateCartBadge();
};

function updateCartBadge() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    const count = cart.reduce((total, item) => total + item.qty, 0);
    badge.innerText = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
}

// 6. Language Switcher
function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;
    
    const btns = langToggle.querySelectorAll('.lang-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            currentLang = lang;
            localStorage.setItem('tp_lang', lang);
            
            btns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
            applyTranslations();
        });
    });

    applyTranslations();
}

function applyTranslations() {
    const dict = translations[currentLang];
    
    // Simple text replacement by ID prefix or specific class
    const heroBadge = document.getElementById('trans-hero-badge');
    if (heroBadge) heroBadge.innerHTML = `<i class="fas fa-shield-alt"></i> ${dict['hero-badge']}`;
    
    const heroTitle1 = document.getElementById('trans-hero-title-1');
    if (heroTitle1) heroTitle1.innerHTML = dict['hero-title-1'];
    
    const heroSlogan = document.getElementById('trans-hero-slogan');
    if (heroSlogan) heroSlogan.innerText = dict['hero-slogan'];
    
    const heroDesc1 = document.getElementById('trans-hero-desc-1');
    if (heroDesc1) heroDesc1.innerText = dict['hero-desc-1'];
    
    const btnExplore = document.getElementById('trans-btn-explore');
    if (btnExplore) btnExplore.innerHTML = `${dict['btn-explore']} <i class="fas fa-arrow-right"></i>`;
    
    const btnContact = document.getElementById('trans-btn-contact');
    if (btnContact) btnContact.innerText = dict['btn-contact'];
    
    const cartTitle = document.querySelector('.cart-header h3');
    if (cartTitle) cartTitle.innerText = dict['cart-title'];
    
    const checkoutBtn = document.getElementById('checkoutZalo');
    if (checkoutBtn) checkoutBtn.innerHTML = `<i class="fab fa-whatsapp"></i> ${dict['cart-checkout']}`;
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = dict['search-placeholder'];

    // Update repeating elements
    document.querySelectorAll('.trans-view-detail').forEach(el => el.innerText = dict['view-detail']);
    document.querySelectorAll('.trans-contact-price').forEach(el => el.innerText = dict['contact-price']);
    
    renderCart(); // Re-render cart for empty message translation
}

// 7. Stats Counter
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    if (!statNumbers.length) return;

    let hasAnimated = false;
    const animateCounters = () => {
        if (hasAnimated) return;
        const trigger = document.querySelector('.partners-marquee');
        if (!trigger) return;

        const rect = trigger.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            hasAnimated = true;
            statNumbers.forEach(el => {
                const target = parseInt(el.dataset.count);
                let current = 0;
                const step = target / 100;
                const counter = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        el.innerText = target;
                        clearInterval(counter);
                    } else {
                        el.innerText = Math.floor(current);
                    }
                }, 20);
            });
        }
    };
    window.addEventListener('scroll', animateCounters);
}

// 8. Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 9. Scroll To Top
function initScrollTop() {
    const existing = document.getElementById('scrollTop');
    if (existing) existing.remove();
    
    const btn = document.createElement('div');
    btn.id = 'scrollTop';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    Object.assign(btn.style, {
        position: 'fixed', bottom: '30px', right: '30px', width: '50px', height: '50px',
        background: 'var(--primary)', color: 'white', borderRadius: '50%',
        display: 'none', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', zIndex: '1000', transition: '0.3s', boxShadow: 'var(--shadow-lg)'
    });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.style.display = window.pageYOffset > 500 ? 'flex' : 'none';
    });

    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 10. Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.onsubmit = (e) => {
        e.preventDefault();
        showNotification('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.', 'success');
        form.reset();
    };
}

// 11. Lightbox
let currentProductId = null;
let currentImageIndex = 0;

function initProductGalleryLightbox() {
    const lightbox = document.getElementById('productLightbox');
    const mainImg = document.getElementById('lightboxMainImg');
    const thumbnails = document.getElementById('lightboxThumbs');
    const closeBtn = lightbox?.querySelector('.lightbox-close');
    const overlay = lightbox?.querySelector('.lightbox-overlay');
    const prevBtn = lightbox?.querySelector('.prev-btn');
    const nextBtn = lightbox?.querySelector('.next-btn');
    const addToCartBtn = document.getElementById('lt-add-to-cart');

    if (!lightbox) return;

    document.querySelectorAll('.product-gallery-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const id = trigger.dataset.albumId;
            const product = productData[id];
            if (!product) return;

            currentProductId = id;
            currentImageIndex = 0;

            document.getElementById('lt-title').innerText = product.title;
            document.getElementById('lt-price').innerText = product.price;
            document.getElementById('lt-desc').innerText = product.desc;

            updateLightboxContent();
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    const close = () => {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', close);
    overlay?.addEventListener('click', close);

    prevBtn?.addEventListener('click', () => {
        const product = productData[currentProductId];
        currentImageIndex = (currentImageIndex - 1 + product.imgs.length) % product.imgs.length;
        updateLightboxContent();
    });

    nextBtn?.addEventListener('click', () => {
        const product = productData[currentProductId];
        currentImageIndex = (currentImageIndex + 1) % product.imgs.length;
        updateLightboxContent();
    });

    addToCartBtn?.addEventListener('click', () => {
        if (currentProductId) {
            handleAddToCart(currentProductId);
        }
    });
}

function updateLightboxContent() {
    const product = productData[currentProductId];
    const mainImg = document.getElementById('lightboxMainImg');
    const thumbnails = document.getElementById('lightboxThumbs');

    if (mainImg) mainImg.src = product.imgs[currentImageIndex];

    if (thumbnails) {
        thumbnails.innerHTML = product.imgs.map((img, idx) => `
            <div class="thumb-item ${idx === currentImageIndex ? 'active' : ''}" onclick="setLightboxImage(${idx})">
                <img src="${img}">
            </div>
        `).join('');
    }
}

window.setLightboxImage = (idx) => {
    currentImageIndex = idx;
    updateLightboxContent();
};

window.changeQty = (amt) => {
    const qtyInput = document.getElementById('lt-qty');
    if (qtyInput) {
        let val = parseInt(qtyInput.value) + amt;
        if (val < 1) val = 1;
        qtyInput.value = val;
    }
};

// Notification
function showNotification(msg, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${msg}</span>
    `;
    Object.assign(toast.style, {
        position: 'fixed', top: '30px', right: '30px', padding: '15px 25px',
        borderRadius: '10px', background: type === 'success' ? '#10B981' : '#EF4444',
        color: 'white', zIndex: '10001', display: 'flex', alignItems: 'center',
        gap: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        animation: 'slideIn 0.4s ease forwards'
    });
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Keyframes for toast
if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.innerHTML = `
        @keyframes slideIn { from { transform: translateX(120%); } to { transform: translateX(0); } }
        @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(120%); } }
    `;
    document.head.appendChild(style);
}

// Announcement Bar
(function initAnnouncementBar() {
    const annBar = document.getElementById('announcementBar');
    const annClose = document.getElementById('annClose');
    if (!annBar) return;

    document.body.classList.add('has-ann-bar');

    if (annClose) {
        annClose.addEventListener('click', () => {
            annBar.style.transition = 'height 0.35s ease, opacity 0.35s ease';
            annBar.style.opacity = '0';
            annBar.style.height = '0';
            document.body.classList.remove('has-ann-bar');
            const navbar = document.getElementById('navbar');
            if (navbar) navbar.style.top = '0';
            setTimeout(() => annBar.remove(), 380);
        });
    }

    const navbar = document.getElementById('navbar');
    if (navbar) navbar.style.top = '40px';

    window.addEventListener('scroll', () => {
        if (!navbar || !annBar) return;
        navbar.style.top = window.pageYOffset > 10 ? '0' : (annBar.offsetHeight || 0) + 'px';
    }, { passive: true });
})();
