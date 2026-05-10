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
            "images/Bảng cảnh báo/bang-bao-cao (1).png",
            "images/Bảng cảnh báo/bang-bao-cao (2).png",
            "images/Bảng cảnh báo/bang-bao-cao (3).png",
            "images/Bảng cảnh báo/bang-bao-cao (4).png",
            "images/Bảng cảnh báo/bang-bao-cao (5).png",
            "images/Bảng cảnh báo/bang-bao-cao (6).png"
        ]
    },
    "Cuộnràocôngtrình": {
        "title": "Cuộn rào công trình",
        "cat": "safety",
        "imgs": [
            "images/Cuộn rào công trình/cuon-chia-lan-duong (1).png",
            "images/Cuộn rào công trình/cuon-chia-lan-duong (2).png",
            "images/Cuộn rào công trình/cuon-chia-lan-duong (3).png",
            "images/Cuộn rào công trình/cuon-chia-lan-duong (4).png",
            "images/Cuộn rào công trình/cuon-chia-lan-duong (5).png",
            "images/Cuộn rào công trình/cuon-chia-lan-duong (6).png",
            "images/Cuộn rào công trình/cuon-chia-lan-duong (7).png",
            "images/Cuộn rào công trình/cuon-chia-lan-duong (8).png"
        ]
    },
    "CàVạtVeBảoVệ": {
        "title": "Cà Vạt, Ve Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (1).png",
            "images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (2).png",
            "images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (3).png",
            "images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (4).png"
        ]
    },
    "CầuVaiBảoVệ": {
        "title": "Cầu Vai Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (1).png",
            "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (2).png",
            "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (3).png",
            "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (4).png",
            "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (5).png"
        ]
    },
    "Cọcgiaothôngcộtchialànđường": {
        "title": "Cọc giao thông-cột chia làn đường",
        "cat": "safety",
        "imgs": [
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (1).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (10).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (11).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (12).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (13).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (14).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (15).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (2).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (3).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (4).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (5).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (6).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (7).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (8).png",
            "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (9).png"
        ]
    },
    "Dâyantoàn": {
        "title": "Dây an toàn",
        "cat": "safety",
        "imgs": [
            "images/Dây an toàn/dN-n-toN (1).png",
            "images/Dây an toàn/dN-n-toN (10).png",
            "images/Dây an toàn/dN-n-toN (11).png",
            "images/Dây an toàn/dN-n-toN (12).png",
            "images/Dây an toàn/dN-n-toN (13).png",
            "images/Dây an toàn/dN-n-toN (14).png",
            "images/Dây an toàn/dN-n-toN (15).png",
            "images/Dây an toàn/dN-n-toN (16).png",
            "images/Dây an toàn/dN-n-toN (17).png",
            "images/Dây an toàn/dN-n-toN (18).png",
            "images/Dây an toàn/dN-n-toN (19).png",
            "images/Dây an toàn/dN-n-toN (2).png",
            "images/Dây an toàn/dN-n-toN (20).png",
            "images/Dây an toàn/dN-n-toN (21).png",
            "images/Dây an toàn/dN-n-toN (22).png",
            "images/Dây an toàn/dN-n-toN (23).png",
            "images/Dây an toàn/dN-n-toN (24).png",
            "images/Dây an toàn/dN-n-toN (3).png",
            "images/Dây an toàn/dN-n-toN (4).png",
            "images/Dây an toàn/dN-n-toN (5).png",
            "images/Dây an toàn/dN-n-toN (6).png",
            "images/Dây an toàn/dN-n-toN (7).png",
            "images/Dây an toàn/dN-n-toN (8).png",
            "images/Dây an toàn/dN-n-toN (9).png"
        ]
    },
    "DâyAnToànToànThân": {
        "title": "Dây An Toàn Toàn Thân",
        "cat": "safety",
        "imgs": [
            "images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (1).png",
            "images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (2).png",
            "images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (3).png",
            "images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (4).png"
        ]
    },
    "DâythắtlưngbảovệSecurity": {
        "title": "Dây thắt lưng bảo vệ Security",
        "cat": "accessories",
        "imgs": [
            "images/Dây thắt lưng bảo vệ Security/day-that-llung.png"
        ]
    },
    "Gangtaybảohộ": {
        "title": "Gang tay bảo hộ",
        "cat": "safety",
        "imgs": [
            "images/Gang tay bảo hộ/gang-tay-bao-ho (1).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (10).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (11).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (12).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (13).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (14).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (15).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (16).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (17).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (18).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (19).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (2).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (20).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (21).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (22).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (23).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (24).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (25).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (26).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (27).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (3).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (4).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (5).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (6).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (7).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (8).png",
            "images/Gang tay bảo hộ/gang-tay-bao-ho (9).png"
        ]
    },
    "Giàybảohộlaođộng": {
        "title": "Giày bảo hộ lao động",
        "cat": "shoes",
        "imgs": [
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (1).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (10).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (11).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (12).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (13).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (14).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (2).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (3).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (4).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (5).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (6).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (7).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (8).png",
            "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (9).png"
        ]
    },
    "GiàydabảovệCóbuộcdây": {
        "title": "Giày da bảo vệ - Có buộc dây",
        "cat": "shoes",
        "imgs": [
            "images/Giày da bảo vệ - Có buộc dây/day-bao-ve (1).png",
            "images/Giày da bảo vệ - Có buộc dây/day-bao-ve (2).png",
            "images/Giày da bảo vệ - Có buộc dây/day-bao-ve (3).png",
            "images/Giày da bảo vệ - Có buộc dây/day-bao-ve (4).png"
        ]
    },
    "GiàydabảovệKhôngbuộcdây": {
        "title": "Giày da bảo vệ - Không buộc dây",
        "cat": "shoes",
        "imgs": [
            "images/Giày da bảo vệ - Không buộc dây/day-bao-ve.png"
        ]
    },
    "GậycaosuDùicuibảovệ": {
        "title": "Gậy cao su - Dùi cui bảo vệ",
        "cat": "tools",
        "imgs": [
            "images/Gậy cao su - Dùi cui bảo vệ/dui-cui-bao-ve.png"
        ]
    },
    "Gậygiaothông": {
        "title": "Gậy giao thông",
        "cat": "tools",
        "imgs": [
            "images/Gậy giao thông/gay-giao-thong.png"
        ]
    },
    "HệThốngBáoCháy": {
        "title": "Hệ Thống Báo Cháy",
        "cat": "safety",
        "imgs": [
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (1).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (10).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (11).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (12).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (13).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (14).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (2).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (3).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (4).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (5).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (6).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (7).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (8).png",
            "images/Hệ Thống Báo Cháy/he-thong-bao-chay (9).png"
        ]
    },
    "Kínhbảohộ&Khẩutrang": {
        "title": "Kính bảo hộ & Khẩu trang",
        "cat": "safety",
        "imgs": [
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (1).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (10).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (11).png",
            "images/Kính bảo hộ & Khẩutrang/kinh-bao-ho-va-khau-trang (12).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (13).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (14).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (15).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (16).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (17).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (18).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (19).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (2).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (20).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (3).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (4).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (5).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (6).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (7).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (8).png",
            "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (9).png"
        ]
    },
    "Mũbảohộlaođộng": {
        "title": "Mũ bảo hộ lao động",
        "cat": "safety",
        "imgs": [
            "images/Mũ bảo hộ lao động/mu-bao-ho (1).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (10).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (11).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (12).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (2).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (3).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (4).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (5).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (6).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (7).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (8).png",
            "images/Mũ bảo hộ lao động/mu-bao-ho (9).png"
        ]
    },
    "Mặtnạhànbảohộlaođộng": {
        "title": "Mặt nạ hàn bảo hộ lao động",
        "cat": "safety",
        "imgs": [
            "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (1).png",
            "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (2).png",
            "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (3).png",
            "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (4).png",
            "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (5).png",
            "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (6).png",
            "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (7).png",
            "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (8).png"
        ]
    },
    "MặtNạPhòngĐộc": {
        "title": "Mặt Nạ Phòng Độc",
        "cat": "safety",
        "imgs": [
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (1).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (10).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (11).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (12).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (13).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (14).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (15).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (2).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (3).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (4).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (5).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (6).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (7).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (8).png",
            "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (9).png"
        ]
    },
    "NónSaoBảoVệ": {
        "title": "Nón , Sao Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "images/Nón , Sao Bảo Vệ/non-bao-ve-2.png",
            "images/Nón , Sao Bảo Vệ/non-bao-ve.png"
        ]
    },
    "Nónvảilướitrùm": {
        "title": "Nón vải lưới trùm",
        "cat": "accessories",
        "imgs": [
            "images/Nón vải lưới trùm/non-vai-luoi-trum (1).png",
            "images/Nón vải lưới trùm/non-vai-luoi-trum (2).png",
            "images/Nón vải lưới trùm/non-vai-luoi-trum (3).png",
            "images/Nón vải lưới trùm/non-vai-luoi-trum (4).png"
        ]
    },
    "Nútchốngồn": {
        "title": "Nút chống ồn",
        "cat": "safety",
        "imgs": [
            "images/Nút chống ồn/nut-lao-dong (1).png",
            "images/Nút chống ồn/nut-lao-dong (2).png",
            "images/Nút chống ồn/nut-lao-dong (3).png",
            "images/Nút chống ồn/nut-lao-dong (4).png",
            "images/Nút chống ồn/nut-lao-dong (5).png",
            "images/Nút chống ồn/nut-lao-dong (6).png",
            "images/Nút chống ồn/nut-lao-dong (7).png",
            "images/Nút chống ồn/nut-lao-dong (8).png"
        ]
    },
    "NộiquyTiêuđềCấmlửaCấmhútthuốc": {
        "title": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
        "cat": "safety",
        "imgs": [
            "images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (1).png",
            "images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (2).png",
            "images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (3).png",
            "images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (4).png"
        ]
    },
    "ThangThoátHiểmCuốn": {
        "title": "Thang Thoát Hiểm Cuốn",
        "cat": "safety",
        "imgs": [
            "images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (1).png",
            "images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (2).png",
            "images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (3).png"
        ]
    },
    "ThiếtbịPCCC&Antoàn": {
        "title": "Thiết bị PCCC & An toàn",
        "cat": "safety",
        "imgs": [
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (1).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (10).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (11).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (12).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (13).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (14).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (15).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (16).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (2).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (3).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (4).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (5).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (6).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (7).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (8).png",
            "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (9).png"
        ]
    },
    "Thùngđựngrác": {
        "title": "Thùng đựng rác",
        "cat": "tools",
        "imgs": [
            "images/Thùng đựng rác/thung-dung-rac (1).png",
            "images/Thùng đựng rác/thung-dung-rac (10).png",
            "images/Thùng đựng rác/thung-dung-rac (11).png",
            "images/Thùng đựng rác/thung-dung-rac (12).png",
            "images/Thùng đựng rác/thung-dung-rac (2).png",
            "images/Thùng đựng rác/thung-dung-rac (3).png",
            "images/Thùng đựng rác/thung-dung-rac (4).png",
            "images/Thùng đựng rác/thung-dung-rac (5).png",
            "images/Thùng đựng rác/thung-dung-rac (6).png",
            "images/Thùng đựng rác/thung-dung-rac (7).png",
            "images/Thùng đựng rác/thung-dung-rac (8).png",
            "images/Thùng đựng rác/thung-dung-rac (9).png"
        ]
    },
    "Áocásấumècaocấpnhiều": {
        "title": "Áo cá sấu mè cao cấp nhiều",
        "cat": "uniform",
        "imgs": [
            "images/Áo cá sấu mè cao cấp nhiều/do.png",
            "images/Áo cá sấu mè cao cấp nhiều/luc-lam.png",
            "images/Áo cá sấu mè cao cấp nhiều/trang.png",
            "images/Áo cá sấu mè cao cấp nhiều/vang-nhat.png",
            "images/Áo cá sấu mè cao cấp nhiều/vang.png",
            "images/Áo cá sấu mè cao cấp nhiều/xang-duong.png",
            "images/Áo cá sấu mè cao cấp nhiều/xanh-luc.png",
            "images/Áo cá sấu mè cao cấp nhiều/xanh.png"
        ]
    },
    "ÁoPhảnQuang": {
        "title": "Áo Phản Quang",
        "cat": "uniform",
        "imgs": []
    },
    "ĐồbảohộPCCC": {
        "title": "Đồ bảo hộ PCCC",
        "cat": "safety",
        "imgs": [
            "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (1).png",
            "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (2).png",
            "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (3).png",
            "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (4).png",
            "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (5).png",
            "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (6).png",
            "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (7).png",
            "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (8).png"
        ]
    },
    "Đồđimưaáophao": {
        "title": "Đồ đi mưa - áo phao",
        "cat": "uniform",
        "imgs": [
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (1).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (10).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (11).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (12).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (2).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (3).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (4).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (5).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (6).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (7).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (8).png",
            "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (9).png"
        ]
    },
    "ĐồngPhụcBảoVệ": {
        "title": "Đồng Phục Bảo Vệ",
        "cat": "uniform",
        "imgs": [
            "images/Đồng Phục Bảo Vệ/ao-trang-bao-ve.png",
            "images/Đồng Phục Bảo Vệ/ao-xanh-bao-ve.png",
            "images/Đồng Phục Bảo Vệ/ao-xanh-luc-bao-ve.png"
        ]
    },
    "ĐồngPhụcBảoVệNEW": {
        "title": "Đồng Phục Bảo Vệ NEW",
        "cat": "uniform",
        "imgs": [
            "images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (1).png",
            "images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (2).png",
            "images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (3).png"
        ]
    },
    "Ủngbảohộlaođộng": {
        "title": "Ủng bảo hộ lao động",
        "cat": "shoes",
        "imgs": [
            "images/Ủng bảo hộ lao động/ung-bao-ho (10).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (11).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (12).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (13).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (14).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (15).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (16).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (17).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (18).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (19).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (20).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (21).png",
            "images/Ủng bảo hộ lao động/ung-bao-ho (22).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (1).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (2).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (3).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (4).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (5).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (6).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (7).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (8).png",
            "images/Ủng bảo hộ lao động/ung-lao-dong (9).png"
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
    // 1. Initialize Features
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

// 9. Scroll To Top
function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
