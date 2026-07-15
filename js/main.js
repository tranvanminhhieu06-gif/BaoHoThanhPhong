// ============================================
// THÀNH PHONG - BẢO HỘ LAO ĐỘNG
// Main JavaScript - Upgraded Version
// ============================================

// 1. Cấu trúc dữ liệu chi tiết sản phẩm
const productData = {
    "Bảngcảnhbáo": {
        "title": "Bảng cảnh báo",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN CHẤT LƯỢNG CAO – GIẢI PHÁP NHẮC NHỞ VÀ PHÒNG NGỪA RỦI RO HIỆU QUẢ/bia-ban-canh-bao-an-toan.png"
        ]
    },
    "Cuộnràocôngtrình": {
        "title": "Cuộn rào công trình",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CUỘN RÀO CÔNG TRÌNH CHẤT LƯỢNG CAO – GIẢI PHÁP KHOANH VÙNG VÀ CẢNH BÁO HIỆU QUẢ/bia-cuon-rao-cong-trinh.png"
        ]
    },
    "CàVạtVeBảoVệ": {
        "title": "Cà Vạt, Ve Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ CHUYÊN NGHIỆP – ĐẦY ĐỦ TRANG BỊ CHO LỰC LƯỢNG BẢO VỆ/bia-phu-kien-bao-ve.png"
        ]
    },
    "CầuVaiBảoVệ": {
        "title": "Cầu Vai Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ CHUYÊN NGHIỆP – ĐẦY ĐỦ TRANG BỊ CHO LỰC LƯỢNG BẢO VỆ/bia-phu-kien-bao-ve.png"
        ]
    },
    "Cọcgiaothôngcộtchialànđường": {
        "title": "Cọc giao thông-cột chia làn đường",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG CHẤT LƯỢNG CAO – GIẢI PHÁP PHÂN LUỒNG VÀ CẢNH BÁO HIỆU QUẢ/bia-coc-giao-thong.png"
        ]
    },
    "Dâyantoàn": {
        "title": "Dây an toàn",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN CHỐNG RƠI NGÃ – THIẾT BỊ BẢO HỘ LÀM VIỆC TRÊN CAO CHUYÊN DỤNG/bia-day-an-toan.png"
        ]
    },
    "DâyAnToànToànThân": {
        "title": "Dây An Toàn Toàn Thân",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN CHỐNG RƠI NGÃ – THIẾT BỊ BẢO HỘ LÀM VIỆC TRÊN CAO CHUYÊN DỤNG/bia-day-an-toan.png"
        ]
    },
    "DâythắtlưngbảovệSecurity": {
        "title": "Dây thắt lưng bảo vệ Security",
        "cat": "accessories",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ CHUYÊN NGHIỆP – ĐẦY ĐỦ TRANG BỊ CHO LỰC LƯỢNG BẢO VỆ/bia-phu-kien-bao-ve.png"
        ]
    },
    "Gangtaybảohộ": {
        "title": "Gang tay bảo hộ",
        "cat": "safety",
        "imgs": [
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CÁCH ĐIỆN CHÍNH HÃNG – THIẾT BỊ AN TOÀN CHO NGÀNH ĐIỆN/bia-gang-tay-cach-dien.png",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU BẢO HỘ – CHỐNG THẤM, CHỐNG HÓA CHẤT HIỆU QUẢ/bia-gang-tay-cao-su.png",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN CHỊU NHIỆT – BẢO VỆ TỐI ƯU CHO THỢ HÀN/bia-gang-tay-da-han.png",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN BẢO HỘ – GIẢI PHÁP BẢO VỆ TAY HIỆU QUẢ TRONG LAO ĐỘNG/bia-gang-tay-len.png"
        ]
    },
    "Giàybảohộlaođộng": {
        "title": "Giày bảo hộ lao động",
        "cat": "shoes",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ LAO ĐỘNG CHÍNH HÃNG – AN TOÀN, BỀN BỈ CHO MỌI MÔI TRƯỜNG LÀM VIỆC/bia-day-bao-ho.png"
        ]
    },
    "GiàydabảovệCóbuộcdây": {
        "title": "Giày da bảo vệ - Có buộc dây",
        "cat": "shoes",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ LAO ĐỘNG CHÍNH HÃNG – AN TOÀN, BỀN BỈ CHO MỌI MÔI TRƯỜNG LÀM VIỆC/bia-day-bao-ho.png"
        ]
    },
    "GiàydabảovệKhôngbuộcdây": {
        "title": "Giày da bảo vệ - Không buộc dây",
        "cat": "shoes",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ LAO ĐỘNG CHÍNH HÃNG – AN TOÀN, BỀN BỈ CHO MỌI MÔI TRƯỜNG LÀM VIỆC/bia-day-bao-ho.png"
        ]
    },
    "GậycaosuDùicuibảovệ": {
        "title": "Gậy cao su - Dùi cui bảo vệ",
        "cat": "tools",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ CHUYÊN NGHIỆP – ĐẦY ĐỦ TRANG BỊ CHO LỰC LƯỢNG BẢO VỆ/bia-phu-kien-bao-ve.png"
        ]
    },
    "Gậygiaothông": {
        "title": "Gậy giao thông",
        "cat": "tools",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN CHẤT LƯỢNG CAO – GIẢI PHÁP NHẮC NHỞ VÀ PHÒNG NGỪA RỦI RO HIỆU QUẢ/bia-ban-canh-bao-an-toan.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG CHẤT LƯỢNG CAO – GIẢI PHÁP PHÂN LUỒNG VÀ CẢNH BÁO HIỆU QUẢ/bia-coc-giao-thong.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CUỘN RÀO CÔNG TRÌNH CHẤT LƯỢNG CAO – GIẢI PHÁP KHOANH VÙNG VÀ CẢNH BÁO HIỆU QUẢ/bia-cuon-rao-cong-trinh.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG CẢNH BÁO – GIẢI PHÁP KHOANH VÙNG AN TOÀN HIỆU QUẢ/bia-day-phan-quang.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN NHẤP NHÁY CẢNH BÁO GIAO THÔNG – TĂNG KHẢ NĂNG NHẬN DIỆN VÀ AN TOÀN/bia-den-canh-bao-thoat-hiem.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg"
        ]
    },
    "HệThốngBáoCháy": {
        "title": "Hệ Thống Báo Cháy",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Bình Cứu Hỏa - Bình Chữa Cháy Chính Hãng, Đạt Chuẩn An Toàn/bia-binh-cuu-hoa-binh-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Bộ Tiêu Lệnh Phòng Cháy Chữa Cháy Chính Hãng – Đáp Ứng Quy Định PCCC/bia-bo-tieu-lenh-phong-chay-chua-chay.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Kệ Đựng Bình Chữa Cháy Chính Hãng – Giải Pháp Bảo Quản Thiết Bị PCCC An Toàn/bia-ke-dung-binh-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Quần Áo Phòng Cháy Chữa Cháy Chính Hãng – Bảo Vệ An Toàn Trong Môi Trường Nhiệt Độ Cao/bia-quan-ao-phong-chay-chua-chay.png"
        ]
    },
    "Kínhbảohộ&Khẩutrang": {
        "title": "Kính bảo hộ & Khẩu trang",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ MẮT - KÍNH BẢO HỘ LAO ĐỘNG/KÍNH BẢO HỘ LAO ĐỘNG CHÍNH HÃNG – BẢO VỆ ĐÔI MẮT AN TOÀN TRONG MỌI MÔI TRƯỜNG LÀM VIỆC/bia-thiet-bi-bao-ve-mat.png"
        ]
    },
    "Mũbảohộlaođộng": {
        "title": "Mũ bảo hộ lao động",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ LAO ĐỘNG – NÓN CÔNG NHÂN CHÍNH HÃNG, AN TOÀN CHO MỌI CÔNG TRÌNH/bia-non-bao-ho-non-cong-nhan.png"
        ]
    },
    "Mặtnạhànbảohộlaođộng": {
        "title": "Mặt nạ hàn bảo hộ lao động",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ BẢO HỘ LAO ĐỘNG – MẶT NẠ PHÒNG ĐỘC CHÍNH HÃNG, BẢO VỆ HỆ HÔ HẤP HIỆU QUẢ/bia-mat-na-phong-doc.png"
        ]
    },
    "MặtNạPhòngĐộc": {
        "title": "Mặt Nạ Phòng Độc",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ BẢO HỘ LAO ĐỘNG – MẶT NẠ PHÒNG ĐỘC CHÍNH HÃNG, BẢO VỆ HỆ HÔ HẤP HIỆU QUẢ/bia-mat-na-phong-doc.png"
        ]
    },
    "NónSaoBảoVệ": {
        "title": "Nón , Sao Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ CHUYÊN NGHIỆP – ĐẦY ĐỦ TRANG BỊ CHO LỰC LƯỢNG BẢO VỆ/bia-phu-kien-bao-ve.png"
        ]
    },
    "Nónvảilướitrùm": {
        "title": "Nón vải lưới trùm",
        "cat": "accessories",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI CÔNG NHÂN CHẤT LƯỢNG CAO – THOẢI MÁI, CHUYÊN NGHIỆP CHO NGƯỜI LAO ĐỘNG/bia-non-vai.png"
        ]
    },
    "Nútchốngồn": {
        "title": "Nút chống ồn",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ TAI - NÚT TAI CHỐNG ỒN/NÚT TAI CHỐNG ỒN CHẤT LƯỢNG CAO – BẢO VỆ THÍNH GIÁC HIỆU QUẢ TRONG MÔI TRƯỜNG LÀM VIỆC/bia-thiet-bi-bao-ve-tai.png"
        ]
    },
    "NộiquyTiêuđềCấmlửaCấmhútthuốc": {
        "title": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg"
        ]
    },
    "ThangThoátHiểmCuốn": {
        "title": "Thang Thoát Hiểm Cuốn",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/THANG DÂY/bia-thang-day-thoat-hiem.png"
        ]
    },
    "ThiếtbịPCCC&Antoàn": {
        "title": "Thiết bị PCCC & An toàn",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Bình Cứu Hỏa - Bình Chữa Cháy Chính Hãng, Đạt Chuẩn An Toàn/bia-binh-cuu-hoa-binh-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Bộ Tiêu Lệnh Phòng Cháy Chữa Cháy Chính Hãng – Đáp Ứng Quy Định PCCC/bia-bo-tieu-lenh-phong-chay-chua-chay.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Kệ Đựng Bình Chữa Cháy Chính Hãng – Giải Pháp Bảo Quản Thiết Bị PCCC An Toàn/bia-ke-dung-binh-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Quần Áo Phòng Cháy Chữa Cháy Chính Hãng – Bảo Vệ An Toàn Trong Môi Trường Nhiệt Độ Cao/bia-quan-ao-phong-chay-chua-chay.png"
        ]
    },
    "Thùngđựngrác": {
        "title": "Thùng đựng rác",
        "cat": "tools",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/THÙNG RÁC CHẤT LƯỢNG CAO – GIẢI PHÁP THU GOM RÁC THẢI HIỆU QUẢ CHO MỌI KHÔNG GIAN/bia-thung-rac-cong-nghiep.png"
        ]
    },
    "Áocásấumècaocấpnhiều": {
        "title": "Áo cá sấu mè cao cấp nhiều",
        "cat": "uniform",
        "imgs": [
            "../images/ÁO THUN/ÁO THUN CÔNG NHÂN BỀN ĐẸP – THOÁNG MÁT, PHÙ HỢP MỌI MÔI TRƯỜNG LÀM VIỆC/bia-ao-thun-cong-nhan.png",
            "../images/ÁO THUN/ÁO THUN THỂ THAO CAO CẤP – CO GIÃN TỐT, THOÁNG KHÍ VƯỢT TRỘI/bia-ao-thun-the-thao.png",
            "../images/ÁO THUN/ÁO THUN VĂN PHÒNG CAO CẤP – THOẢI MÁI, CHUYÊN NGHIỆP CHO DOANH NGHIỆP/bia-ao-thun-van-phong.png"
        ]
    },
    "ÁoPhảnQuang": {
        "title": "Áo Phản Quang",
        "cat": "uniform",
        "imgs": [
            "../images/ÁO PHẢN QUANG/Áo Phản Quang Kiểu 3M Cao Cấp – Thiết Kế Hiện Đại An Toàn Khi Làm Việc/bia-ao-phan-quang-kieu-3m.png",
            "../images/ÁO PHẢN QUANG/Áo Phản Quang Palize Cao Cấp – An Toàn, Thoáng Mát, May Theo Yêu Cầu/bia-ao-phan-quang-palize.png",
            "../images/ÁO PHẢN QUANG/Áo Phản Quang Túi Lưới Cao Cấp – Thoáng Mát, Nhiều Ngăn Tiện Lợi/bia-ao-phan-quang-tui-luoi.png",
            "../images/ÁO PHẢN QUANG/Áo Phản Quang Lưới Thun 2 Bên Cao Cấp – Thoáng Mát, Nhẹ, An Toàn/bia-ao-phan-quang-thun-2-ben.png"
        ]
    },
    "ĐồbảohộPCCC": {
        "title": "Đồ bảo hộ PCCC",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Quần Áo Phòng Cháy Chữa Cháy Chính Hãng – Bảo Vệ An Toàn Trong Môi Trường Nhiệt Độ Cao/bia-quan-ao-phong-chay-chua-chay.png"
        ]
    },
    "Đồđimưaáophao": {
        "title": "Đồ đi mưa - áo phao",
        "cat": "uniform",
        "imgs": [
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO MƯA CÁNH DƠI CHẤT LƯỢNG CAO – RỘNG RÃI, TIỆN LỢI KHI DI CHUYỂN/bia-ao-mua-canh-doi.png",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO CAO CẤP – GIỮ ẤM HIỆU QUẢ, THIẾT KẾ HIỆN ĐẠI/bia-ao-phao.png"
        ]
    },
    "ĐồngPhụcBảoVệ": {
        "title": "Đồng Phục Bảo Vệ",
        "cat": "uniform",
        "imgs": [
            "../images/BÌA/bia-đong-phuc-bao-ve.png"
        ]
    },
    "ĐồngPhụcBảoVệNEW": {
        "title": "Đồng Phục Bảo Vệ NEW",
        "cat": "uniform",
        "imgs": [
            "../images/BÌA/bia-đong-phuc-bao-ve.png"
        ]
    },
    "Ủngbảohộlaođộng": {
        "title": "Ủng bảo hộ lao động",
        "cat": "shoes",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ LAO ĐỘNG CHẤT LƯỢNG CAO – BẢO VỆ TOÀN DIỆN CHO ĐÔI CHÂN/bia-ung-bao-ho.png"
        ]
    }
};

// Translations
const translations = {
    'vi': {
        'nav-home': 'Trang chủ',
        'nav-about': 'Giới thiệu',
        'nav-products': 'Sản phẩm',
        'nav-why': 'Tại sao chọn chúng tôi',
        'nav-testimonials': 'Đánh giá',
        'nav-news': 'Tin tức',
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
        'contact-price': 'Liên hệ báo giá',
        'qty': 'Số lượng',
        'products-title': 'Sản Phẩm <span class="highlight">Nổi Bật</span>',
        'why-title': 'Tại Sao Chọn <span class="highlight">Thành Phong</span>?',
        'testimonials-title': 'Khách Hàng Nói Gì Về <span class="highlight">Chúng Tôi</span>?',
        'diary-title': 'Nhật Ký <span class="highlight">Thành Phong</span>',
        'news-title': 'Tin Tức <span class="highlight">Mới Nhất</span>',
        'contact-title': 'Liên Hệ <span class="highlight">Với Chúng Tôi</span>'
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-products': 'Products',
        'nav-why': 'Why Us',
        'nav-testimonials': 'Reviews',
        'nav-news': 'News',
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
        'contact-price': 'Contact for Quote',
        'qty': 'Quantity',
        'products-title': 'Featured <span class="highlight">Products</span>',
        'why-title': 'Why Choose <span class="highlight">Thanh Phong</span>?',
        'testimonials-title': 'What Customers Say <span class="highlight">About Us</span>?',
        'diary-title': 'Thanh Phong <span class="highlight">Diary</span>',
        'news-title': 'Latest <span class="highlight">News</span>',
        'contact-title': 'Contact <span class="highlight">With Us</span>'
    }
};

// Global State
let cart = JSON.parse(localStorage.getItem('tp_cart')) || [];
let currentLang = localStorage.getItem('tp_lang') || 'vi';

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    shuffleHomepageBanners();
    renderHomepageProducts();
    initHeroCarousel();
    initSmoothScroll();
    initNavbarEffects();
    initProductFilters();
    initSearch();
    initCart();
    initLanguage();
    initStatsCounter();
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
    const checkoutZaloBtn = document.getElementById('zaloOrderBtn');
    
    // Full Cart View Elements
    const viewFullCartBtn = document.getElementById('viewFullCartBtn');
    const fullCartPage = document.getElementById('fullCartPage');
    const fullCartClose = document.getElementById('fullCartClose');
    const fullCartCheckoutBtn = document.getElementById('fullCartCheckoutBtn');
    const cartEmptyBuyNow = document.getElementById('cartEmptyBuyNow');

    const toggleSidebar = () => {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('open');
        document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
    };

    const openFullCart = () => {
        fullCartPage.classList.add('active');
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'hidden';
        renderCart();
    };

    const closeFullCart = () => {
        fullCartPage.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (cartTrigger) cartTrigger.addEventListener('click', toggleSidebar);
    if (cartClose) cartClose.addEventListener('click', toggleSidebar);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleSidebar);
    if (viewFullCartBtn) viewFullCartBtn.addEventListener('click', openFullCart);
    if (fullCartClose) fullCartClose.addEventListener('click', closeFullCart);
    if (cartEmptyBuyNow) cartEmptyBuyNow.addEventListener('click', () => {
        toggleSidebar();
    });

    const handleZaloOrder = () => {
        if (cart.length === 0) {
            showNotification('Giỏ hàng của bạn đang trống!', 'error');
            return;
        }

        let message = 'Xin chào Bảo Hộ Thành Phong, tôi muốn đặt các sản phẩm sau:\n\n';
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.title} (SL: ${item.qty})\n`;
        });
        message += '\nTổng cộng: Liên hệ báo giá\n\nVui lòng tư vấn cho tôi!';

        const encodedMsg = encodeURIComponent(message);
        const zaloUrl = `https://zalo.me/0349781300?text=${encodedMsg}`;
        window.open(zaloUrl, '_blank');
    };

    if (checkoutZaloBtn) checkoutZaloBtn.addEventListener('click', handleZaloOrder);
    if (fullCartCheckoutBtn) fullCartCheckoutBtn.addEventListener('click', handleZaloOrder);

    // Select All Logic for Full Cart
    const selectAllHeader = document.getElementById('selectAllItems');
    const selectAllFooter = document.getElementById('selectAllItemsFooter');
    
    if (selectAllHeader) {
        selectAllHeader.addEventListener('change', (e) => {
            const checked = e.target.checked;
            if (selectAllFooter) selectAllFooter.checked = checked;
            document.querySelectorAll('.cart-item-check').forEach(cb => cb.checked = checked);
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
    
    // Open sidebar automatically
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartSidebar && !cartSidebar.classList.contains('open')) {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
    }
    
    showNotification(`Đã thêm "${product.title}" vào giỏ hàng!`);
};

function saveCart() {
    localStorage.setItem('tp_cart', JSON.stringify(cart));
}

function renderCart() {
    // 1. Render Sidebar
    const sidebarList = document.getElementById('cartItems');
    const sidebarTotal = document.getElementById('cartTotal');
    
    if (sidebarList) {
        if (cart.length === 0) {
            sidebarList.innerHTML = `
                <div class="cart-empty-state">
                    <div class="empty-icon-box"><i class="fas fa-shopping-basket"></i></div>
                    <p>Giỏ hàng của bạn đang trống</p>
                    <a href="#products" class="btn btn-cart-buy-now" onclick="document.getElementById('cartClose').click()">Mua ngay</a>
                </div>
            `;
        } else {
            sidebarList.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.img}" class="cart-item-img" alt="${item.title}">
                    <div class="cart-item-info">
                        <h4>${item.title}</h4>
                        <p class="cart-item-price">Liên hệ báo giá</p>
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
    }

    // 2. Render Full Cart
    const fullCartList = document.getElementById('fullCartItems');
    const fullCartTotal = document.getElementById('fullCartTotal');
    
    if (fullCartList) {
        if (cart.length === 0) {
            fullCartList.innerHTML = `
                <div class="cart-empty-state" style="background: #fff; border-radius: 8px; margin-top: 20px;">
                    <div class="empty-icon-box"><i class="fas fa-shopping-basket"></i></div>
                    <p>Giỏ hàng của bạn đang trống. Hãy quay lại chọn sản phẩm nhé!</p>
                    <button class="btn btn-primary" onclick="document.getElementById('fullCartClose').click()">Tiếp tục mua sắm</button>
                </div>
            `;
        } else {
            fullCartList.innerHTML = cart.map(item => `
                <div class="cart-item-row">
                    <div class="check-col"><input type="checkbox" class="cart-item-check" checked></div>
                    <div class="prod-col">
                        <div class="cart-item-product">
                            <img src="${item.img}" alt="${item.title}">
                            <div class="cart-item-name">
                                <h4>${item.title}</h4>
                                <p>Phân loại: Sản phẩm bảo hộ</p>
                            </div>
                        </div>
                    </div>
                    <div class="price-col">Liên hệ</div>
                    <div class="qty-col">
                        <div class="quantity-control" style="margin: 0;">
                            <button onclick="updateQty('${item.id}', -1)">-</button>
                            <input type="text" value="${item.qty}" readonly>
                            <button onclick="updateQty('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <div class="total-col cart-item-subtotal">Báo giá</div>
                    <div class="action-col">
                        <span class="cart-item-action" onclick="removeFromCart('${item.id}')">Xóa</span>
                    </div>
                </div>
            `).join('');
        }
    }
}

window.updateQty = (id, amt) => {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += amt;
        if (item.qty < 1) {
            removeFromCart(id);
        } else {
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
    
    // Navbar links
    const navItems = ['home', 'about', 'products', 'why', 'testimonials', 'news', 'contact'];
    navItems.forEach(item => {
        const el = document.getElementById(`trans-nav-${item}`);
        if (el) el.innerText = dict[`nav-${item}`];
    });
    
    // Hero
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
    
    // Cart
    const cartTitle = document.querySelector('.cart-header h3');
    if (cartTitle) cartTitle.innerText = dict['cart-title'];
    
    const checkoutBtn = document.getElementById('checkoutZalo');
    if (checkoutBtn) checkoutBtn.innerHTML = `<i class="fab fa-whatsapp"></i> ${dict['cart-checkout']}`;
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = dict['search-placeholder'];

    // Update repeating elements
    document.querySelectorAll('.trans-view-detail').forEach(el => el.innerText = dict['view-detail']);
    document.querySelectorAll('.trans-contact-price').forEach(el => el.innerText = dict['contact-price']);

    // Section Titles
    const sections = ['products', 'why', 'testimonials', 'diary', 'news', 'contact'];
    sections.forEach(s => {
        const el = document.getElementById(`trans-${s}-title`);
        if (el) el.innerHTML = dict[`${s}-title`];
    });
    
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
            document.getElementById('lt-price').innerText = product.price || 'Liên hệ báo giá';
            document.getElementById('lt-desc').innerText = product.desc || 'Chất lượng cao, đạt chuẩn an toàn. Liên hệ để biết thêm chi tiết.';

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

// Preloader Removal on window load
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }
}

window.addEventListener('load', hidePreloader);

// Safety timeout: Hide preloader after 3 seconds regardless of load state
setTimeout(hidePreloader, 3000);


// Helper: Shuffle homepage hero slides (ảnh bìa banner)
function shuffleHomepageBanners() {
    const swiperWrapper = document.querySelector('.hero-slider .swiper-wrapper');
    if (!swiperWrapper) return;
    const slides = Array.from(swiperWrapper.children);
    
    // Fisher-Yates Shuffle
    for (let i = slides.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [slides[i], slides[j]] = [slides[j], slides[i]];
    }
    
    swiperWrapper.innerHTML = '';
    slides.forEach(slide => swiperWrapper.appendChild(slide));
}

// Helper: Shuffle homepage product cards (các ảnh bìa danh mục)
// Render homepage category cards dynamically and shuffle them
function renderHomepageProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid || typeof products === 'undefined' || typeof catBiaImages === 'undefined') return;
    
    // Shuffle category keys
    const catKeys = Object.keys(catBiaImages);
    for (let i = catKeys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [catKeys[i], catKeys[j]] = [catKeys[j], catKeys[i]];
    }
    
    // Map to HTML
    grid.innerHTML = catKeys.map((catId, index) => {
        const catProducts = products.filter(p => p.cat === catId);
        const catLabel = catProducts.length > 0 ? catProducts[0].catLabel : catId;
        const count = catProducts.length;
        const biaImg = catBiaImages[catId];
        const safeLabel = catLabel.replace(/"/g, '&quot;');
        const delay = index * 50;
        
        return '<div class="product-card" data-aos="fade-up" data-aos-delay="' + delay + '" onclick="window.location.href=\'sanpham.html?cat=' + catId + '\'">' +
            '<div class="product-image">' +
            '<a href="sanpham.html?cat=' + catId + '">' +
            '<img src="' + biaImg + '" alt="' + safeLabel + '" loading="lazy" onerror="this.parentElement.style.background=\'#f1f5f9\'">' +
            '<div class="zoom-overlay">' +
            '<i class="fas fa-search-plus"></i>' +
            '<span class="trans-view-detail">Xem chi tiết</span>' +
            '</div>' +
            '</a>' +
            '</div>' +
            '<div class="product-info">' +
            '<span class="product-category-tag">' + count + ' sản phẩm</span>' +
            '<h3 class="product-title">' + catLabel + '</h3>' +
            '<p class="product-desc">Cung cấp trang thiết bị bảo hộ đạt chuẩn, chất lượng cao.</p>' +
            '<div class="product-action-row">' +
            '<a href="sanpham.html?cat=' + catId + '" class="product-link">' +
            '<span class="trans-contact-price">Xem chi tiết</span> ' +
            '<i class="fas fa-arrow-right"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}
