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
    renderHomeNews();
    renderTestimonials();
    initLanguage();
    initStatsCounter();
    initContactForm();
    initProductGalleryLightbox();

    // AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }
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

// 5. Language Switcher
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


// Render mục "Khách hàng nói gì" trên trang chủ (dữ liệu từ js/reviews.js).
// Chỉ lấy các đánh giá CHUNG về công ty (không gắn sản phẩm cụ thể) và đã duyệt.
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid || typeof reviews === 'undefined' || !Array.isArray(reviews)) return;

    const escHtml = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

    // Vẽ 5 ngôi sao, có hỗ trợ nửa sao
    const starsHtml = (n) => {
        const v = Math.max(0, Math.min(5, Number(n) || 0));
        let out = '';
        for (let i = 1; i <= 5; i++) {
            if (v >= i) out += '<i class="fas fa-star"></i>';
            else if (v >= i - 0.5) out += '<i class="fas fa-star-half-alt"></i>';
            else out += '<i class="far fa-star"></i>';
        }
        return out;
    };

    const list = reviews
        .filter((r) => r && r.approved && !r.productId)
        .sort((a, b) => String(b.date).localeCompare(String(a.date)))
        .slice(0, 3);

    if (!list.length) { grid.innerHTML = ''; return; }

    grid.innerHTML = list.map((r, i) =>
        '<div class="testimonial-card" data-aos="fade-up" data-aos-delay="' + (100 + i * 100) + '">' +
        '<div class="testimonial-stars">' + starsHtml(r.rating) + '</div>' +
        '<p class="testimonial-text">"' + escHtml(r.content) + '"</p>' +
        '<div class="testimonial-author">' +
        '<div class="author-avatar"><i class="fas fa-user-circle"></i></div>' +
        '<div><strong>' + escHtml(r.author) + '</strong>' +
        (r.role ? '<span>' + escHtml(r.role) + '</span>' : '') +
        '</div></div></div>'
    ).join('');
}

// Render 3 bài viết mới nhất ở mục Tin tức trên trang chủ (dữ liệu từ js/posts.js)
function renderHomeNews() {
    const grid = document.getElementById('newsGrid');
    if (!grid || typeof posts === 'undefined' || !posts.length) return;

    const escHtml = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

    const formatDate = (iso) => {
        const p = String(iso || '').split('-');
        return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : (iso || '');
    };

    // Cho phép in đậm / nghiêng / gạch chân trong tóm tắt soạn từ trang quản lý
    const inlineHtml = (s) => escHtml(s).replace(/&lt;(\/?)(b|strong|i|em|u)&gt;/gi, '<$1$2>');

    // Bài nổi bật lên đầu, còn lại sắp theo ngày mới nhất
    const sorted = posts.slice().sort((a, b) => {
        if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
        return String(b.date).localeCompare(String(a.date));
    });

    grid.innerHTML = sorted.slice(0, 3).map((p, idx) => {
        const url = '../tintuc/index.html?bai=' + encodeURIComponent(p.slug);
        const cardCls = 'news-card' + (idx === 0 ? ' featured' : '');
        const tagCls = 'news-tag' + (idx === 0 ? ' hot' : '');
        return '<div class="' + cardCls + '" data-aos="fade-up" data-aos-delay="' + (100 + idx * 50) + '">' +
            '<div class="news-image">' +
            '<img src="' + escHtml(p.cover) + '" alt="' + escHtml(p.title) + '" class="news-img-placeholder" ' +
            'style="object-fit: cover; background: none;" loading="lazy">' +
            (p.tag ? '<span class="' + tagCls + '">' + escHtml(p.tag) + '</span>' : '') +
            '</div>' +
            '<div class="news-content">' +
            '<div class="news-meta">' +
            '<span><i class="fas fa-calendar-alt"></i> ' + escHtml(formatDate(p.date)) + '</span>' +
            '<span><i class="fas fa-tag"></i> ' + escHtml(p.category || 'Tin tức') + '</span>' +
            '</div>' +
            '<h3>' + escHtml(p.title) + '</h3>' +
            '<p>' + inlineHtml(p.excerpt || '') + '</p>' +
            '<a href="' + url + '" class="news-link">Đọc thêm <i class="fas fa-arrow-right"></i></a>' +
            '</div></div>';
    }).join('');
}

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
