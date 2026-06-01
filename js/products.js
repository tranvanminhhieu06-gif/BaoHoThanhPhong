const products = [
  {
    "id": "bngcnhbo6809",
    "title": "Biển Cảnh Báo Nguy Hiểm Điện Áp Cao",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "images/Bảng cảnh báo/bang-bao-cao (1).png",
    "desc": "Biển cảnh báo nhựa PVC cao cấp, chữ in sắc nét, chống UV và thời tiết. Đạt tiêu chuẩn ISO 3864 về ký hiệu an toàn lao động."
  },
  {
    "id": "bngcnhbo3366",
    "title": "Bảng Cấm Vào Khu Vực Nguy Hiểm",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "images/Bảng cảnh báo/bang-bao-cao (2).png",
    "desc": "Bảng nhôm dày 1.2mm, in sơn phản quang ban đêm. Kích thước 30x40cm, lỗ treo sẵn, chịu được nhiệt độ -20°C đến 80°C."
  },
  {
    "id": "bngcnhbo1842",
    "title": "Biển Báo An Toàn Lao Động Phản Quang",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "images/Bảng cảnh báo/bang-bao-cao (3).png",
    "desc": "Biển báo composite hai lớp, mặt nhám chống chói, màu sắc tiêu chuẩn QCVN AT-HĐ:2012 của Bộ Lao Động."
  },
  {
    "id": "bngcnhbo3497",
    "title": "Bảng Nội Quy Công Trình Inox 304",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "images/Bảng cảnh báo/bang-bao-cao (4).png",
    "desc": "Bảng inox 304 đánh bóng, laser khắc chữ sâu 0.3mm, không phai màu. Chịu ăn mòn hóa chất, phù hợp môi trường nhà máy."
  },
  {
    "id": "bngcnhbo5002",
    "title": "Biển Cảnh Báo Phóng Điện - Nguy Hiểm Chết Người",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "images/Bảng cảnh báo/bang-bao-cao (5).png",
    "desc": "Biển cảnh báo phản quang loại 3M, nhìn rõ từ 100m kể cả ban đêm. Gắn cột hoặc tường bằng vít inox đi kèm."
  },
  {
    "id": "bngcnhbo7627",
    "title": "Bảng Cảnh Báo Hóa Chất Độc Hại ISO",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "images/Bảng cảnh báo/bang-bao-cao (6).png",
    "desc": "Bảng cảnh báo hóa chất theo tiêu chuẩn GHS/CLP, in màu bền, không ố vàng sau 5 năm ngoài trời."
  },
  {
    "id": "cunrocngtrnh5820",
    "title": "Lưới Rào Chắn Công Trình Màu Cam Loại Dày",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "images/Cuộn rào công trình/cuon-chia-lan-duong (1).png",
    "desc": "Lưới HDPE nguyên sinh màu cam, độ dày 1.5mm, chịu kéo 800N/5cm. Cuộn 50m, chiều cao 1.2m, có lỗ buộc dây dễ dàng."
  },
  {
    "id": "cunrocngtrnh7028",
    "title": "Cuộn Lưới Báo Hiệu Ngăn Cách HDPE",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "images/Cuộn rào công trình/cuon-chia-lan-duong (2).png",
    "desc": "Dây polyethylene tái chế cao cấp, màu vàng đen xen kẽ, in chữ NGUY HIỂM liên tục. Cuộn 200m, chịu được mưa nắng 2 năm."
  },
  {
    "id": "cunrocngtrnh275",
    "title": "Rào Chắn Công Trình Dạng Cuộn 50m Chuyên Nghiệp",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "images/Cuộn rào công trình/cuon-chia-lan-duong (3).png",
    "desc": "Lưới rào chắn PE đan mắt 5x5cm, kéo dài không đứt, màu cam phản quang. Dùng tại công trường, khu vực nguy hiểm hạn chế người vào."
  },
  {
    "id": "cunrocngtrnh4110",
    "title": "Dây Cảnh Báo Nguy Hiểm Loại Dây Quanh Vùng Nguy Hiểm",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "images/Cuộn rào công trình/cuon-chia-lan-duong (4).png",
    "desc": "Dây cảnh báo 2 màu vàng-đen, đường kính 6mm, cuộn 500m. Dễ dàng kéo dài, buộc cọc hoặc cọc nhựa bán kèm."
  },
  {
    "id": "cunrocngtrnh1969",
    "title": "Lưới Bảo Vệ Thi Công Chống Người Lọt Xuống Hố",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "images/Cuộn rào công trình/cuon-chia-lan-duong (5).png",
    "desc": "Lưới bảo vệ hố đào PE màu đỏ, chịu tải 120kg/m², kích thước mắt lưới 3x3cm. Giúp ngăn ngã xuống hố đào."
  },
  {
    "id": "cunrocngtrnh4348",
    "title": "Rào Cách Ly Thi Công Màu Vàng Đen PE Cao Cấp",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "images/Cuộn rào công trình/cuon-chia-lan-duong (6).png",
    "desc": "Rào cách ly màu vàng đen 1.0m x 25m, trọng lượng nhẹ, gấp gọn bảo quản dễ. Thường dùng ngăn cách khu vực vệ sinh đường."
  },
  {
    "id": "cunrocngtrnh8701",
    "title": "Lưới Che Chắn Bụi Công Trình Dạng Cuộn 100m",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "images/Cuộn rào công trình/cuon-chia-lan-duong (7).png",
    "desc": "Lưới che bụi xây dựng màu xanh HDPE, kích thước mắt 1.5mm, chặn 90% bụi. Chiều cao 2m, cuộn 100m, bền 3-5 năm."
  },
  {
    "id": "cunrocngtrnh510",
    "title": "Cuộn Lưới Polyethylene Phản Quang Công Trình Đô Thị",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "images/Cuộn rào công trình/cuon-chia-lan-duong (8).png",
    "desc": "Cuộn lưới PE phản quang hai lớp, tích hợp sợi phản quang 3M, quan sát được ban đêm từ 50m. Tiêu chuẩn công trình đô thị."
  },
  {
    "id": "cvtvebov3196",
    "title": "Cà Vạt Bảo Vệ Màu Đen Bóng Cao Cấp",
    "cat": "cat3",
    "catLabel": "Cà Vạt, Ve Bảo Vệ",
    "img": "images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (1).png",
    "desc": "Cà vạt polyester cao cấp, bề mặt bóng mịn, màu đen thuần. Độ dài 145cm, khóa nam châm tiện lợi, không cần buộc nút thắt."
  },
  {
    "id": "cvtvebov5344",
    "title": "Ve Cổ Áo Bảo Vệ Inox Mạ Vàng",
    "cat": "cat3",
    "catLabel": "Cà Vạt, Ve Bảo Vệ",
    "img": "images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (2).png",
    "desc": "Ve cổ áo bảo vệ hợp kim kẽm mạ vàng, logo khắc nổi, ghim cài chắc chắn. Kích thước 4x2.5cm, bộ 2 cái."
  },
  {
    "id": "cvtvebov2060",
    "title": "Cà Vạt Đồng Phục Bảo Vệ Sọc Xanh Đen",
    "cat": "cat3",
    "catLabel": "Cà Vạt, Ve Bảo Vệ",
    "img": "images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (3).png",
    "desc": "Cà vạt sọc xanh đen polyester chống nhăn, chống bám bụi. Có kẹp cà vạt inox đi kèm, phù hợp đồng phục bảo vệ chuyên nghiệp."
  },
  {
    "id": "cvtvebov7190",
    "title": "Phù Hiệu Ve Cổ Áo Bảo Vệ Đúc Kim Loại",
    "cat": "cat3",
    "catLabel": "Cà Vạt, Ve Bảo Vệ",
    "img": "images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (4).png",
    "desc": "Phù hiệu ve cổ đồng mạ chrome, in chìm SECURITY/BẢO VỆ. Đính kèm ghim an toàn chắc chắn, không rỉ sét."
  },
  {
    "id": "cuvaibov5763",
    "title": "Cầu Vai Bảo Vệ Loại Ngôi Sao Vàng 3 Cánh",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (1).png",
    "desc": "Cầu vai ngôi sao 3 cánh mạ vàng 24K, hợp kim kẽm cao cấp. Đi kèm clip gắn vai, tương thích áo bảo vệ loại cầu vai dán/kẹp."
  },
  {
    "id": "cuvaibov519",
    "title": "Phù Hiệu Cầu Vai Bảo Vệ Mạ Vàng Cao Cấp",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (2).png",
    "desc": "Phù hiệu vai bảo vệ đồng thau mạ vàng, khắc nổi cấp hiệu rõ ràng. Kích thước 10x4cm, ghim chắc, không phai màu 3 năm."
  },
  {
    "id": "cuvaibov6314",
    "title": "Cầu Vai Đồng Phục Bảo Vệ Sọc Vàng 2 Vạch",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (3).png",
    "desc": "Cầu vai sọc vàng trên nền đen 2 vạch, chất liệu polyester với chỉ vàng dệt. Bộ 2 chiếc, vá may hoặc dán lên áo."
  },
  {
    "id": "cuvaibov2009",
    "title": "Phù Hiệu Vai Áo Bảo Vệ Chuyên Nghiệp Inox",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (4).png",
    "desc": "Phù hiệu vai inox 316 đánh bóng, laser khắc logo, không gỉ sét trong môi trường ẩm. Kích thước 8x3.5cm, gắn epaulette chuẩn."
  },
  {
    "id": "cuvaibov3788",
    "title": "Cầu Vai Trang Trí Áo Bảo Vệ Vải Dệt Kim Loại",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (5).png",
    "desc": "Cầu vai trang trí dệt chỉ vàng bạc, bề dày 5mm. Đính sẵn 2 cúc đồng, có thể gắn thêm phù hiệu ngôi sao."
  },
  {
    "id": "ccgiaothngctchialnng1261",
    "title": "Cọc Tiêu Giao Thông Nhựa PE Màu Cam 75cm",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (1).png",
    "desc": "Cọc tiêu nhựa PE nguyên sinh màu cam sáng, cao 75cm, đường kính 8cm. Phản quang cấp độ 2 (RA≥250 cd/lux/m²), nhìn rõ 200m ban đêm."
  },
  {
    "id": "ccgiaothngctchialnng9397",
    "title": "Cột Phân Làn Đường Cao Su Đặc Chống Va Đập",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (10).png",
    "desc": "Cột phân làn cao su đặc tự nhiên, cao 1m, đường kính 10cm. Chịu va đập xe hạng nặng, bật lại hình dạng ban đầu trong 2 giây."
  },
  {
    "id": "ccgiaothngctchialnng1008",
    "title": "Cọc Barricade Nhựa Màu Đỏ Trắng Phản Quang",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (11).png",
    "desc": "Cọc barricade đỏ trắng xen kẽ 5cm mỗi dải, nhựa ABS cứng. Phản quang 3M loại 1, nhìn rõ 150m đêm có đèn pha xe."
  },
  {
    "id": "ccgiaothngctchialnng1361",
    "title": "Cột Chia Làn Đường Cao Su 1m Chân Đế Nặng",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (12).png",
    "desc": "Cột chia làn cao su đặc 1m, chân đế 30x30cm nặng 8kg chống ngã. Có lỗ xâu dây hoặc gắn thanh ngang liên kết cọc."
  },
  {
    "id": "ccgiaothngctchialnng5383",
    "title": "Cọc Tiêu Phản Quang Loại Dẹt Gắn Lề Đường",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (13).png",
    "desc": "Cọc tiêu dẹt dài 400mm, gắn mép lề đường bằng đinh thép inox. Phản quang hai mặt, chịu được bánh xe cán qua không vỡ."
  },
  {
    "id": "ccgiaothngctchialnng2549",
    "title": "Cọc Nhựa Phân Làn Đường Loại Cứng ABS 100cm",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (14).png",
    "desc": "Cọc nhựa ABS cứng 100cm, màu cam, thân tròn đường kính 7.5cm. Khoan lỗ gắn bu-lông xuống mặt đường hoặc chân rời tháo lắp."
  },
  {
    "id": "ccgiaothngctchialnng5968",
    "title": "Cột Phân Làn Cao Su Đàn Hồi Chống Gãy 500mm",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (15).png",
    "desc": "Cột cao su đàn hồi 500mm, khi xe cán sẽ nằm xuống rồi bật lại. Ứng dụng làn dừng xe buýt, bãi giữ xe, khu vực đông người."
  },
  {
    "id": "ccgiaothngctchialnng1005",
    "title": "Cọc Hướng Dẫn Giao Thông Nhựa PE Phản Quang",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (2).png",
    "desc": "Cọc hướng dẫn giao thông PE 80cm, in vạch phản quang đen-trắng-cam. Thường dùng phân làn thi công đường hoặc sự cố giao thông."
  },
  {
    "id": "ccgiaothngctchialnng4081",
    "title": "Cột Chia Tuyến Đường Bộ Dạng Con Thuyền",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (3).png",
    "desc": "Cột phân cách dạng con thuyền nhựa HDPE, dài 1m, cao 45cm. Có thể liên kết thành hàng dài bằng khớp nối nhựa đi kèm."
  },
  {
    "id": "ccgiaothngctchialnng3023",
    "title": "Cọc Tiêu Phân Cách Làn Đường Nhựa HDPE 80cm",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (4).png",
    "desc": "Cọc tiêu phân cách 80cm, nhựa HDPE tái chế cao cấp, không phai màu. Phản quang 3 mặt, góc nhìn 180°, tiêu chuẩn Bộ GTVT."
  },
  {
    "id": "ccgiaothngctchialnng3909",
    "title": "Cột Phân Cách Đường Đôi Cao Su Đặc 70cm",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (5).png",
    "desc": "Cột đôi phân cách đường bộ, cao su đặc 70cm, nặng 3.5kg. Ổn định không nghiêng ngả khi có gió mạnh hoặc xe đi qua gần."
  },
  {
    "id": "ccgiaothngctchialnng6099",
    "title": "Cột Nhựa Phân Làn Đường Tốc Độ Cao Dạng Ống",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (6).png",
    "desc": "Cột ống nhựa phân làn đường cao tốc, PVC dày 5mm, cao 1.2m. Phần đầu cột gắn phản quang bi 40x40cm thay thế được."
  },
  {
    "id": "ccgiaothngctchialnng2464",
    "title": "Cọc Báo Hiệu Lề Đường Phản Quang Cát Đinh",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (7).png",
    "desc": "Cọc báo hiệu lề đường kèm cát đinh thép phản quang, cắm thẳng vào đất. Cao 60cm, đầu cọc có đèn LED solar option."
  },
  {
    "id": "ccgiaothngctchialnng6661",
    "title": "Cọc Tiêu Biên Giới Đường Nhựa Cứng 1.2m",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (8).png",
    "desc": "Cọc tiêu biên giới nhựa cứng 1.2m, dùng đánh dấu ranh giới đường. Thân màu trắng, vạch phản quang đỏ-cam, đế cắm đất sâu 30cm."
  },
  {
    "id": "ccgiaothngctchialnng4759",
    "title": "Cột Phân Làn Uốn Đàn Hồi Nhựa EVA 80cm",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (9).png",
    "desc": "Cột phân làn EVA đàn hồi 80cm, siêu nhẹ 600g, bật lại hoàn toàn khi bị xe cán. Màu vàng huỳnh quang, dùng ban ngày lẫn đêm."
  },
  {
    "id": "dyanton8939",
    "title": "Dây An Toàn Đơn Khóa Móc Inox 316 Tải 1500kg",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (1).png",
    "desc": "Dây đơn polyester dệt thoi 16mm, dài 1.8m, móc inox 316 tải 1500kg. Hấp thụ lực giảm chấn khi ngã, đạt EN354/EN355."
  },
  {
    "id": "dyanton8986",
    "title": "Bộ Dây An Toàn Kép Hấp Thụ Lực EN354",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (10).png",
    "desc": "Bộ dây kép chữ Y, mỗi nhánh 1m, hộp giảm chấn 200J. Tải 500kg mỗi nhánh, móc khóa tự động thép mạ chrome, đạt EN354."
  },
  {
    "id": "dyanton2354",
    "title": "Dây Giữ Thăng Bằng Lanyard Dệt Polyester 2m",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (11).png",
    "desc": "Lanyard dệt polyester 25mm, dài 2m, không giảm chấn. Dùng định vị - không dùng ngã tự do. Móc snaphook thép 25kN."
  },
  {
    "id": "dyanton3150",
    "title": "Dây An Toàn Có Hộp Thu Tự Động 3m",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (12).png",
    "desc": "Dây cuộn thu tự động lò xo 3m, vỏ nhựa ABS chịu lực. Ra dây tự do, khi ngã khóa tức thì trong 0.1s. Tải 150kg."
  },
  {
    "id": "dyanton2286",
    "title": "Dây Bảo Hiểm Cơ Thể Nối Đai An Toàn",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (13).png",
    "desc": "Dây bảo hiểm thân kết nối điểm neo trên đai ngực và đai vai. Polyester 2 lớp, dài 0.5m, móc inox 40kN hai hướng."
  },
  {
    "id": "dyanton6933",
    "title": "Dây Chống Ngã Có Lò Xo Hấp Thụ Lực",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (14).png",
    "desc": "Dây chống ngã lò xo hấp thụ lực, dạng accordion, co giãn 0.5-1.5m. Nổ hộp giảm chấn khi lực vượt 4kN, bảo vệ cột sống."
  },
  {
    "id": "dyanton9548",
    "title": "Dây An Toàn Thoát Hiểm Khẩn Cấp 10m",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (15).png",
    "desc": "Dây thoát hiểm 10m, polyamide 11mm, cuộn dạng tám hãm. Dùng cho nhân viên thoát khẩn cấp từ tòa nhà, tốc độ kiểm soát."
  },
  {
    "id": "dyanton1107",
    "title": "Dây Lanyard Cứu Hộ Kép Móc Snaphook Thép",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (16).png",
    "desc": "Dây lanyard kép móc snaphook thép mạ kẽm 23kN, dài 1+1m chữ Y. Vỏ bảo vệ hộp giảm chấn dứt dây tại 4-5kN."
  },
  {
    "id": "dyanton2134",
    "title": "Dây Bảo Hộ Leo Cao Chuyên Nghiệp Petzl",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (17).png",
    "desc": "Dây leo cao Petzl Grillon 1.9m, polyamide/Dyneema, trọng lượng 195g. Khóa trượt 2 chiều, tự điều chỉnh theo vị trí làm việc."
  },
  {
    "id": "dyanton4288",
    "title": "Dây Gắn Móc Inox Tải 2200kg Tiêu Chuẩn CE",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (18).png",
    "desc": "Dây gắn móc inox 304, đường kính 12mm, dài 1m, tải tĩnh 2200kg. Cáp thép lõi 6x7, bọc nhựa PVC bảo vệ, CE/ISO 9001."
  },
  {
    "id": "dyanton6422",
    "title": "Dây An Toàn Polyamide 11mm Cho Công Nhân Xây Dựng",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (19).png",
    "desc": "Dây polyamide 11mm loại B dành cho xây dựng, cuộn 50m. Độ dãn <5% tại 2kN, chịu mài mòn và tia UV tốt."
  },
  {
    "id": "dyanton2623",
    "title": "Dây An Toàn 1.5m Móc Khóa Xoay 360° Thép",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (2).png",
    "desc": "Dây 1.5m gắn móc khóa xoay 360° thép 23kN. Tránh xoắn dây khi làm việc, tăng an toàn di chuyển vòng quanh điểm neo."
  },
  {
    "id": "dyanton762",
    "title": "Dây Cứu Hộ Dệt Polyester Lõi Thép 3m",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (20).png",
    "desc": "Dây cứu hộ dệt polyester lõi thép 3m, chịu tải 5000kg. Dùng trong cứu hỏa, tìm kiếm cứu nạn, leo núi công nghiệp."
  },
  {
    "id": "dyanton766",
    "title": "Dây An Toàn Đôi Thứ Cấp Dự Phòng 2x1m",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (21).png",
    "desc": "Dây đôi thứ cấp 2x1m chữ Y, nhánh phụ dự phòng. Khi neo chính gặp sự cố, dây dự phòng đảm bảo an toàn liên tục."
  },
  {
    "id": "dyanton4210",
    "title": "Dây Bảo Hiểm Giảm Chấn Nefab Tiêu Chuẩn ANSI",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (22).png",
    "desc": "Dây giảm chấn Nefab, dài 1.75m, hấp thụ lực đến 400J theo ANSI Z359.13. Phù hợp công trình Mỹ/Canada có yêu cầu OSHA."
  },
  {
    "id": "dyanton925",
    "title": "Dây An Toàn Điều Chỉnh Độ Dài 1-1.8m",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (23).png",
    "desc": "Dây điều chỉnh dài 1-1.8m bằng khóa trượt trên thân dây. Tiện lợi khi cần thay đổi khoảng cách làm việc, tải 100kg."
  },
  {
    "id": "dyanton9902",
    "title": "Dây Cầm Tay Bảo Hiểm Ngắn 30cm Móc Inox",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (24).png",
    "desc": "Dây cầm tay ngắn 30cm, polyester 20mm, móc inox hai đầu. Dùng giữ thăng bằng tạm thời, không phải dây chống ngã."
  },
  {
    "id": "dyanton8682",
    "title": "Dây Chống Ngã Loại Dệt Thoi Polyester 16mm",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (3).png",
    "desc": "Dây dệt thoi polyester 16mm bản rộng, dài 1.8m, mềm dẻo. Không cứng đơ trong thời tiết lạnh, dễ thao tác 2 tay."
  },
  {
    "id": "dyanton5641",
    "title": "Dây An Toàn Hấp Thụ Lực 1.75m Chuẩn EN355",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (4).png",
    "desc": "Dây hấp thụ lực 1.75m theo EN355, hộp giảm chấn loại túi xếp. Nổ hộp khi lực >6kN, giảm lực xuống còn <6kN tác động cơ thể."
  },
  {
    "id": "dyanton3523",
    "title": "Dây Bảo Hiểm Loại Cuộn Tự Thu 2m Nhựa Vỏ",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (5).png",
    "desc": "Dây cuộn tự thu 2m vỏ nhựa ABS nhỏ gọn 0.5kg. Ra dây khi di chuyển, thu tự động, khóa tức thì khi ngã nhanh."
  },
  {
    "id": "dyanton4976",
    "title": "Dây Bảo Hộ Mái Nhà Kép Cơ Cấu Giảm Xóc",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (6).png",
    "desc": "Dây mái nhà kép chữ Y có hộp giảm chấn mỗi nhánh. Dành cho công việc trên mái nhà, tháp truyền hình, silo."
  },
  {
    "id": "dyanton947",
    "title": "Dây An Toàn Chữ Y Kép 1.2m Móc Thép Mạ",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (7).png",
    "desc": "Dây chữ Y kép 1.2m mỗi nhánh, móc thép mạ kẽm 25kN. Tổng chiều dài khi mở 2.7m kể hộp giảm chấn. CE/PPE Cat.III."
  },
  {
    "id": "dyanton6108",
    "title": "Dây Bảo Hiểm Cấu Trúc Thép Lõi Polyester",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (8).png",
    "desc": "Dây cấu trúc thép lõi polyester bọc vỏ PVC 1m, tải 3000kg. Dùng trong ngành xây dựng cầu đường, lắp máy công nghiệp."
  },
  {
    "id": "dyanton6750",
    "title": "Dây Thoát Hiểm Cuộn Tự Động Sàn Cao Tầng",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "images/Dây an toàn/dN-n-toN (9).png",
    "desc": "Dây thoát hiểm cuộn tự động cho sàn cao tầng, cuộn 25m. Bộ hãm ly tâm giới hạn tốc độ 1.5m/s, không cần thao tác tay."
  },
  {
    "id": "dyantontonthn9522",
    "title": "Đai An Toàn Toàn Thân 5 Điểm Neo EN361",
    "cat": "cat7",
    "catLabel": "Dây An Toàn Toàn Thân",
    "img": "images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (1).png",
    "desc": "Đai toàn thân 5 điểm: 2 vai, 2 đùi, 1 ngực. Vải dệt polyester 45mm, khóa nhanh nhựa Acetal cao cấp. Điểm neo lưng 2 móc, tải 150kg, EN361."
  },
  {
    "id": "dyantontonthn5467",
    "title": "Bộ Đai Bảo Hộ Toàn Thân Điểm Neo Lưng-Ngực",
    "cat": "cat7",
    "catLabel": "Dây An Toàn Toàn Thân",
    "img": "images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (2).png",
    "desc": "Đai toàn thân với 2 điểm neo lưng và ngực độc lập. Polyester 50mm chịu mài mòn, đệm xốp vai-đùi giảm áp. Size S đến XXL."
  },
  {
    "id": "dyantontonthn4269",
    "title": "Harness Toàn Thân Chuyên Leo Cao MSA Evotech",
    "cat": "cat7",
    "catLabel": "Dây An Toàn Toàn Thân",
    "img": "images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (3).png",
    "desc": "Harness MSA Evotech Pro điều chỉnh 6 điểm, kết nối dây lưng/ngực. Nhẹ 1.2kg, thông gió lưng và vai, dùng leo ăng-ten, tháp cao."
  },
  {
    "id": "dyantontonthn4762",
    "title": "Đai An Toàn Toàn Thân Cao Su Điều Chỉnh XL",
    "cat": "cat7",
    "catLabel": "Dây An Toàn Toàn Thân",
    "img": "images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (4).png",
    "desc": "Đai toàn thân dây polyester 45mm, điều chỉnh vô cấp tất cả các đoạn. Phù hợp vòng eo 75-135cm, 5 điểm neo, kèm túi đựng."
  },
  {
    "id": "dythtlngbovsecurity9488",
    "title": "Thắt Lưng Bảo Vệ Da Bò Khóa Bản Rộng 4cm",
    "cat": "cat8",
    "catLabel": "Dây thắt lưng bảo vệ Security",
    "img": "images/Dây thắt lưng bảo vệ Security/day-that-llung.png",
    "desc": "Thắt lưng da bò cao cấp dày 4mm, rộng 4cm. Khóa hợp kim kẽm mạ bạc bền đẹp, có thể gắn thêm pouche đựng dụng cụ bảo vệ."
  },
  {
    "id": "gangtayboh4846",
    "title": "Găng Tay Sợi Len Chấm Cao Su Chống Trượt 10 Gauge",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (1).png",
    "desc": "Găng tay len 10 gauge đan dày, lòng bàn tay chấm cao su tự nhiên 0.5mm. Chống trượt khi cầm nắm ướt, thoáng khí, phù hợp cơ khí nhẹ."
  },
  {
    "id": "gangtayboh3301",
    "title": "Găng Tay Cao Su Chống Hóa Chất Dày 0.5mm Màu Vàng",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (10).png",
    "desc": "Găng cao su vàng dày 0.5mm, chịu acid HCl 30%, NaOH 50%, dầu mỡ. Dài 30cm bảo vệ cổ tay, bên trong có talc chống dính."
  },
  {
    "id": "gangtayboh1923",
    "title": "Găng Tay Da Hàn Dài 35cm Chịu Nhiệt 800°C",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (11).png",
    "desc": "Găng hàn da bò tự nhiên dày 2mm, lòng bàn tay đôi lớp. Dài 35cm bảo vệ cổ tay khỏi tia lửa hàn, chịu nhiệt bức xạ 800°C."
  },
  {
    "id": "gangtayboh4999",
    "title": "Găng Tay Nitrile Dùng Một Lần Không Bột 100 Cái",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (12).png",
    "desc": "Găng tay Nitrile 4 mil không bột, 100 chiếc/hộp. Không gây dị ứng latex, chống hóa chất nhẹ, dùng trong y tế và công nghiệp sạch."
  },
  {
    "id": "gangtayboh3383",
    "title": "Găng Tay Cơ Học Chống Cắt Cấp Độ 5 Spandex",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (13).png",
    "desc": "Găng cơ học cấp độ chống cắt 5 (EN388), Spandex 4 chiều co giãn. Mỏng 0.6mm, cảm giác chạm tốt, lắp ráp chi tiết nhỏ."
  },
  {
    "id": "gangtayboh9547",
    "title": "Găng Tay Bảo Hộ Vải Canvas Lòng Bàn Tay Da Beo",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (14).png",
    "desc": "Găng canvas thô lòng da beo phân mảnh, ôm khít bàn tay. Thoáng khí, thấm mồ hôi, phù hợp làm vườn, xây dựng nhẹ."
  },
  {
    "id": "gangtayboh765",
    "title": "Găng Tay Chịu Nhiệt Silicat Lò Nung 500°C",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (15).png",
    "desc": "Găng silicat amiăng không 500°C, dày 8mm, dài 30cm. Dùng bốc vật nóng từ lò nung, đúc kim loại, chịu tia lửa trực tiếp."
  },
  {
    "id": "gangtayboh5084",
    "title": "Găng Tay PVC Tráng Nhúng Toàn Bộ Lòng Bàn Tay",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (16).png",
    "desc": "Găng PVC nhúng lòng bàn tay toàn bộ màu xanh, nền vải dệt cotton. Chống dầu, nhớt, chất lỏng thông thường, grip tốt khi ướt."
  },
  {
    "id": "gangtayboh3016",
    "title": "Găng Tay Chống Điện 1000V Latex Đỏ Chuẩn IEC",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (17).png",
    "desc": "Găng chống điện latex đỏ 1000V AC / 1500V DC, đạt IEC 60903 Class 0. Kiểm tra hàng năm bắt buộc, bảo quản trong túi vải đen."
  },
  {
    "id": "gangtayboh7094",
    "title": "Găng Tay Chống Rung Bàn Tay Gel Silicon Xe Máy",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (18).png",
    "desc": "Găng chống rung gel silicon lòng và ngón tay, co giãn 4 chiều. Dùng vận hành máy khoan, búa khí nén, giảm chấn rung 80%."
  },
  {
    "id": "gangtayboh3785",
    "title": "Găng Tay Sợi Thủy Tinh Bảo Vệ Thợ Hàn Nhiệt",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (19).png",
    "desc": "Găng sợi thủy tinh bện 3 lớp, dày 4mm, chịu nhiệt 250°C liên tục. Không cháy, không dẫn điện, dùng lò hơi, đúc thủy tinh."
  },
  {
    "id": "gangtayboh4339",
    "title": "Găng Tay Latex Mỏng Dùng Phòng Sạch ISO 5",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (2).png",
    "desc": "Găng latex siêu mỏng 0.1mm ESD, phòng sạch ISO 5-7. Chống tĩnh điện <1x10⁸ Ω, bề mặt nhẵn không để lại dấu vân tay."
  },
  {
    "id": "gangtayboh8693",
    "title": "Găng Tay Vải Terry Lòng Bàn Da Đôi Lớp Hàn Xì",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (20).png",
    "desc": "Găng terry vải vòng lòng da đôi lớp, hàn xì MIG/TIG. Hấp thụ nhiệt tốt, bảo vệ khớp ngón, cổ tay. Kích cỡ M/L/XL."
  },
  {
    "id": "gangtayboh5665",
    "title": "Găng Tay Chống Cắt HPPE Cấp F Chuẩn EN388",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (21).png",
    "desc": "Găng HPPE cấp độ chống cắt F (EN388 4X43F), dày 1.2mm. Kết hợp sợi thủy tinh và polyester, mỏng nhẹ phù hợp thao tác nhanh."
  },
  {
    "id": "gangtayboh4268",
    "title": "Găng Tay Neoprene Dài 45cm Chống Dầu Acid",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (22).png",
    "desc": "Găng Neoprene dài 45cm, dày 0.8mm. Chống acid H₂SO₄ 50%, dầu động cơ, dung môi. Tấm lót cotton thoáng khí bên trong."
  },
  {
    "id": "gangtayboh4156",
    "title": "Găng Tay Polyurethane PU Mỏng Nhẹ Lắp Ráp Điện Tử",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (23).png",
    "desc": "Găng PU mỏng 0.4mm, nền Nylon 13 gauge, cổ tay co giãn thun. Lắp ráp điện tử, kiểm tra linh kiện, thao tác chính xác cao."
  },
  {
    "id": "gangtayboh4862",
    "title": "Găng Tay Cổ Tay Thun Dệt Kim Chấm Nhựa Bao Tay",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (24).png",
    "desc": "Găng dệt kim cổ tay thun co dãn, bề mặt chấm nhựa PU nhỏ. Chống trượt khi cầm hộp, bê đồ, phù hợp kho vận logistics."
  },
  {
    "id": "gangtayboh3862",
    "title": "Găng Tay Da Hươu Cao Cổ Thợ Sắt Rèn",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (25).png",
    "desc": "Găng da hươu cổ tay cao 15cm, thợ rèn sắt thép. Da mềm mịn, chịu nhiệt bức xạ, thoáng khí, bảo vệ cổ tay khỏi tàn tro."
  },
  {
    "id": "gangtayboh9255",
    "title": "Găng Tay Nhựa Tổng Hợp Vải 2 Mặt Thợ Cơ Khí",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (26).png",
    "desc": "Găng vải 2 mặt: mặt trên canvas, mặt dưới da tổng hợp. Cơ khí, sửa xe, xây dựng, lòng bàn tay ôm chặt chi tiết máy."
  },
  {
    "id": "gangtayboh5531",
    "title": "Găng Tay Chống Nước Có Lót Flannel Giữ Ấm",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (27).png",
    "desc": "Găng chống nước neoprene bên ngoài, lót flannel giữ ấm bên trong. Dùng mùa đông, rửa xe ngoài trời, -20°C đến 40°C."
  },
  {
    "id": "gangtayboh5229",
    "title": "Găng Tay Kevlar Chống Cắt Cấp E Mỏng Nhẹ",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (3).png",
    "desc": "Găng Kevlar 13 gauge cấp cắt E mỏng 0.8mm. Siêu nhẹ 40g/đôi, cảm ứng màn hình cảm ứng điện dung được. EN388 4X44E."
  },
  {
    "id": "gangtayboh1915",
    "title": "Găng Tay Thông Minh Cảm Ứng Màn Hình An Toàn",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (4).png",
    "desc": "Găng bảo hộ ngón đặc biệt tương thích màn hình cảm ứng. Neoprene + Spandex, cổ tay thun, dùng trong kho vận dùng máy tính bảng."
  },
  {
    "id": "gangtayboh6867",
    "title": "Găng Tay Da Tổng Hợp Kỹ Thuật Số Lắp Ráp Nhẹ",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (5).png",
    "desc": "Găng da tổng hợp nhẹ 80g/đôi, mặt lưng lỗ thoáng khí. Đường may ngoài không tạo áp điểm, phù hợp kiểm soát chất lượng."
  },
  {
    "id": "gangtayboh473",
    "title": "Găng Tay Sợi Tre Kháng Khuẩn Chịu Nhiệt Nhẹ",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (6).png",
    "desc": "Găng sợi tre 60%, polyester 40%, kháng khuẩn tự nhiên. Hút ẩm tốt, mùa hè thoáng mát, dùng làm vườn, phân loại rác."
  },
  {
    "id": "gangtayboh2068",
    "title": "Găng Tay Latex Dày 0.4mm Gia Dụng Phòng Bếp",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (7).png",
    "desc": "Găng latex gia dụng 0.4mm màu hồng/vàng, dài 30cm. Dùng rửa chén, dọn vệ sinh, bảo vệ da tay khỏi hóa chất tẩy rửa."
  },
  {
    "id": "gangtayboh366",
    "title": "Găng Tay Bảo Hộ Vải Nhiều Lớp Hàn Xì MIG TIG",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (8).png",
    "desc": "Găng hàn xì MIG/TIG da bò dày 2.5mm, nhiều lớp. Kết nối đường may inox chịu tia lửa, bảo vệ đến cổ tay 20cm."
  },
  {
    "id": "gangtayboh7592",
    "title": "Găng Tay Nylon Tráng Latex Lòng Bàn Tay Full",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "images/Gang tay bảo hộ/gang-tay-bao-ho (9).png",
    "desc": "Găng Nylon 13 gauge tráng latex lòng toàn bộ màu cam. Cân bằng giữa khéo léo và bảo vệ, sắp xếp hàng hóa trong kho."
  },
  {
    "id": "giybohlaong4042",
    "title": "Giày Bảo Hộ Mũi Thép Đế PVC Chống Đâm Xuyên",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (1).png",
    "desc": "Giày da bò mũi thép đúc liền, đế PVC chống đâm xuyên lót thép. Chịu lực va 200J, nén 15kN. EN ISO 20345:2011 S1P. Size 38-46."
  },
  {
    "id": "giybohlaong3768",
    "title": "Giày Safety Jogger Bestrun S3 Mũi Composite",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (10).png",
    "desc": "Safety Jogger Bestrun S3 composite toe 200J, không kim loại. Lót thép SRC chống trơn dầu/nước, lót chân ESD, Gore-Tex không thấm nước."
  },
  {
    "id": "giybohlaong3283",
    "title": "Giày Công Trường Da Bò Mũi Thép Chuẩn EN ISO 20345",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (11).png",
    "desc": "Da bò full grain tự nhiên mũi thép 200J va chạm. Đế PU/cao su chống trơn dầu cấp độ SRA+SRB, chịu nhiệt 300°C 1 phút."
  },
  {
    "id": "giybohlaong173",
    "title": "Giày Chống Tĩnh Điện ESD Mũi Thép Cho Phòng Sạch",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (12).png",
    "desc": "Giày ESD mũi thép, điện trở 100kΩ-100MΩ. Chống tĩnh điện trong phòng sạch, vùng nổ. Kèm kết quả kiểm tra điện trở từng đôi."
  },
  {
    "id": "giybohlaong3124",
    "title": "Giày Chống Thấm Nước Gore-Tex Mũi Thép Rừng Núi",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (13).png",
    "desc": "Mũi thép 200J, màng Gore-Tex chống thấm tuyệt đối, thoáng hơi. Đế Vibram chống bùn-đá-dốc, phù hợp lâm nghiệp, khảo sát địa hình."
  },
  {
    "id": "giybohlaong4836",
    "title": "Giày Bảo Hộ Cổ Cao Chống Trơn Trượt Dầu Nhớt",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (14).png",
    "desc": "Cổ cao 15cm chống xoắn cổ chân, da nubuck chống nước. Đế Rubber SRC chống dầu-nước, chông không trơn trên sàn kho ướt."
  },
  {
    "id": "giybohlaong3251",
    "title": "Giày Hàn Cổ Cao Chịu Nhiệt Phản Xạ Mũi Thép",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (2).png",
    "desc": "Cổ cao hàn xì, mũi thép 200J, mặt da chịu tia lửa phản xạ. Đế cao su chịu nhiệt 300°C, không nứt gần hồ quang hàn."
  },
  {
    "id": "giybohlaong7142",
    "title": "Giày Da Bảo Hộ Nhẹ Nylon Composite Toe SRC",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (3).png",
    "desc": "Da nubuck kết hợp lưới Nylon nhẹ, mũi Composite không kim loại. Siêu nhẹ 700g/đôi, phù hợp sân bay, khu vực MRI bệnh viện."
  },
  {
    "id": "giybohlaong6251",
    "title": "Giày Safety Siêu Nhẹ EVA Foam Composite Toe",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (4).png",
    "desc": "Đế giữa EVA siêu nhẹ, mũi Composite 200J, tổng trọng lượng 500g/đôi. Amortized lót chân Memory Foam giảm mệt khi đứng 8h."
  },
  {
    "id": "giybohlaong7077",
    "title": "Giày Công Nghiệp Chống Hóa Chất PU/PVC Mũi Thép",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (5).png",
    "desc": "PU bề mặt chống hóa chất acid-kiềm loãng, mũi thép 200J. Đế PVC dày chống đâm xuyên, thường dùng phòng lab, xưởng mạ."
  },
  {
    "id": "giybohlaong4745",
    "title": "Giày Bảo Hộ Cổ Thấp Lót Thép S1P Chống Xuyên",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (6).png",
    "desc": "Cổ thấp S1P không yêu cầu môi trường ướt, nhưng mũi thép 200J + lót thép. Đế PU nhẹ, đường may ngoài chịu mài mòn."
  },
  {
    "id": "giybohlaong9094",
    "title": "Giày Sneaker Bảo Hộ Mũi Composite Trẻ Trung",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (7).png",
    "desc": "Kiểu dáng Sneaker hiện đại, mũi composite trong suốt không thấy. Đế cao su ngoài, SRA, chống trơn dầu ăn, phù hợp nhà hàng, bếp."
  },
  {
    "id": "giybohlaong985",
    "title": "Giày Bảo Hộ Chống Nước Rubber Mũi Thép Xây Dựng",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (8).png",
    "desc": "Vải Rubber phủ toàn bộ ngoài chống mưa, mũi thép 200J. Đế cao su chẹn sâu chống trơn bùn đất, phù hợp công trình ngoài trời."
  },
  {
    "id": "giybohlaong7580",
    "title": "Giày An Toàn Chống Điện 20kV Lớp Bảo Vệ Điện",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (9).png",
    "desc": "Da bò toàn phần, mũi thép 200J, đế cách điện 20kV theo IEC 60745. Màu vàng cảnh báo điện, dùng thợ điện hạ thế."
  },
  {
    "id": "giydabovcbucdy7767",
    "title": "Giày Da Đen Bóng Buộc Dây Bảo Vệ Oxford",
    "cat": "cat11",
    "catLabel": "Giày da bảo vệ - Có buộc dây",
    "img": "images/Giày da bảo vệ - Có buộc dây/day-bao-ve (1).png",
    "desc": "Giày Oxford da bò thật đánh bóng, mũi tròn, đế cao su chống trơn. Đường may chỉ nâu thanh lịch, phù hợp đồng phục bảo vệ, nghi lễ."
  },
  {
    "id": "giydabovcbucdy2337",
    "title": "Giày Lính Bảo Vệ Da Tổng Hợp Buộc Dây Cao Cổ",
    "cat": "cat11",
    "catLabel": "Giày da bảo vệ - Có buộc dây",
    "img": "images/Giày da bảo vệ - Có buộc dây/day-bao-ve (2).png",
    "desc": "Giày cao cổ 15cm lính/bảo vệ, da tổng hợp PU chống nước. Buộc dây 8 mắt, đế lính cao su chống mài mòn, phù hợp tuần tra ngoài trời."
  },
  {
    "id": "giydabovcbucdy4593",
    "title": "Giày Da Thật Bảo Vệ Buộc Dây Cổ Thấp Formal",
    "cat": "cat11",
    "catLabel": "Giày da bảo vệ - Có buộc dây",
    "img": "images/Giày da bảo vệ - Có buộc dây/day-bao-ve (3).png",
    "desc": "Giày cổ thấp da thật 1.8mm, mũi vuông formal, đế PU siêu nhẹ. Buộc dây 5 mắt, dành cho bảo vệ văn phòng, tòa nhà, ngân hàng."
  },
  {
    "id": "giydabovcbucdy5295",
    "title": "Giày Tuần Tra Bảo Vệ Da Bò Lót Mềm Buộc Dây",
    "cat": "cat11",
    "catLabel": "Giày da bảo vệ - Có buộc dây",
    "img": "images/Giày da bảo vệ - Có buộc dây/day-bao-ve (4).png",
    "desc": "Giày tuần tra da bò full grain 2mm, lót da êm chân. Buộc dây 7 mắt, đế cao su Goodyear welt bền lâu, có thể đóng đế lại."
  },
  {
    "id": "giydabovkhngbucdy1875",
    "title": "Giày Da Lười Slip-On Bảo Vệ Khóa Velcro",
    "cat": "cat12",
    "catLabel": "Giày da bảo vệ - Không buộc dây",
    "img": "images/Giày da bảo vệ - Không buộc dây/day-bao-ve.png",
    "desc": "Giày da lười không dây, khóa Velcro 2 quai cho bảo vệ cao tuổi. Da tổng hợp mềm, đế cao su chống trơn, dễ mang tháo nhanh."
  },
  {
    "id": "gycaosudicuibov5634",
    "title": "Dùi Cui Cao Su Đặc Chống Bạo Loạn 60cm",
    "cat": "cat13",
    "catLabel": "Gậy cao su - Dùi cui bảo vệ",
    "img": "images/Gậy cao su - Dùi cui bảo vệ/dui-cui-bao-ve.png",
    "desc": "Dùi cui cao su lưu hóa cứng đặc 60cm, đường kính 3.5cm. Cán thép lõi chịu lực, vỏ cao su bao ngoài an toàn. Dùng trong bảo vệ chuyên nghiệp."
  },
  {
    "id": "gygiaothng2324",
    "title": "Gậy Đèn LED Chỉ Hướng Giao Thông Đỏ-Xanh",
    "cat": "cat14",
    "catLabel": "Gậy giao thông",
    "img": "images/Gậy giao thông/gay-giao-thong.png",
    "desc": "Gậy chỉ hướng 2 màu LED đỏ-xanh, đường kính 6cm, dài 50cm. Pin AA 3 cái, hoạt động 20h, nhìn rõ 200m, dùng điều phối giao thông ban đêm."
  },
  {
    "id": "hthngbochy7451",
    "title": "Đầu Báo Khói Quang Học Địa Chỉ Hóa Phân Tán",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (1).png",
    "desc": "Đầu báo khói quang học địa chỉ, phát hiện khói tán xạ mật độ >3%/m. Địa chỉ 1-127 trên vòng lặp, LED chỉ thị đỏ, cắm cơ sở rút được."
  },
  {
    "id": "hthngbochy4340",
    "title": "Đầu Báo Nhiệt Tốc Độ Tăng Nhật Nhiệt 68°C",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (10).png",
    "desc": "Đầu báo nhiệt nhật nhiệt 68°C và tốc độ tăng >9°C/phút. Địa chỉ vòng lặp, thân trắng, đế tháo lắp nhanh, EN 54-5 Class A1R."
  },
  {
    "id": "hthngbochy3840",
    "title": "Tủ Trung Tâm Báo Cháy 4 Zone Addressable",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (11).png",
    "desc": "Tủ trung tâm 4 zone thông thường hoặc 4 vòng lặp địa chỉ. Màn hình LCD tiếng Việt, 2 nguồn AC+DC dự phòng 24h, cổng RS232/485."
  },
  {
    "id": "hthngbochy7642",
    "title": "Còi-Đèn Báo Cháy Kết Hợp Âm Lượng 110dB",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (12).png",
    "desc": "Còi đèn 2 trong 1, âm lượng 110dB tại 1m, đèn Strobe 15Hz. Vỏ nhựa ABS chống bụi IP65, 24VDC, dùng ngoài trời và trong nhà."
  },
  {
    "id": "hthngbochy2281",
    "title": "Nút Ấn Khẩn Cấp Báo Cháy Bằng Tay Phá Kính",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (13).png",
    "desc": "Nút ấn khẩn phá kính màu đỏ, kính nhựa dễ vỡ. Cầu tự động sau khi phá, đặt lại bằng chìa riêng. Gắn tường, dây 2x1.5mm²."
  },
  {
    "id": "hthngbochy8096",
    "title": "Module Giám Sát Đường Dây Phòng Cháy 24VDC",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (14).png",
    "desc": "Module 1 input-1 output giám sát thiết bị bên ngoài. Địa chỉ vòng lặp, nguồn 24VDC, phát hiện đứt/ngắn mạch, LED chỉ thị vàng."
  },
  {
    "id": "hthngbochy2460",
    "title": "Đầu Báo Lửa Hồng Ngoại UV Phát Hiện Ngọn Lửa",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (2).png",
    "desc": "Đầu báo lửa UV+IR đôi phổ, phát hiện ngọn lửa trong 0.5s. Góc nhìn 90°, khoảng 30m, phù hợp nhà máy sơn, kho xăng dầu."
  },
  {
    "id": "hthngbochy487",
    "title": "Pin Backup 12V 7Ah Hệ Thống Báo Cháy Dự Phòng",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (3).png",
    "desc": "Pin chì-axit khô 12V 7Ah không tràn, nạp 10-14h đầy. Backup tủ báo cháy 12-24h khi mất điện lưới theo TCVN 3890:2009."
  },
  {
    "id": "hthngbochy4402",
    "title": "Cáp Chống Cháy Fire Rated LSZH 2x1.5mm² Đỏ",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (4).png",
    "desc": "Cáp LSZH 2x1.5mm² màu đỏ nhận biết PCCC. Chịu nhiệt 750°C/3h (FE180), vỏ Zero Halogen, tiêu chuẩn IEC 60331."
  },
  {
    "id": "hthngbochy9647",
    "title": "Đầu Phun Sprinkler Xuống Dọng Zincaloy 68°C",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (5).png",
    "desc": "Đầu phun sprinkler xuống dọng Zincaloy 68°C, K-factor 80. Độ che phủ 9m², chịu áp 1.2-12 bar, đầu phun ra tán hình nón."
  },
  {
    "id": "hthngbochy3844",
    "title": "Bơm Chữa Cháy Ly Tâm Inox 3HP Hệ Áp Lực",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (6).png",
    "desc": "Bơm chữa cháy inox 3HP, lưu lượng 500L/phút tại 4 bar. Động cơ điện 3 pha 380V, chống nước IP55, đi kèm khớp nối hút và đẩy."
  },
  {
    "id": "hthngbochy315",
    "title": "Van Báo Động Nước Sprinkler Alarm Check Valve",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (7).png",
    "desc": "Van báo động check valve 4\" DN100, cánh van inox, phao báo áp. Kết nối chuông/còi thủy lực khi có nước chảy qua van."
  },
  {
    "id": "hthngbochy4808",
    "title": "Đồng Hồ Đo Áp Suất Hệ Thống PCCC 0-16 Bar",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (8).png",
    "desc": "Đồng hồ đo áp suất 0-16 bar, mặt kính 100mm, vỏ inox 316. Chính xác 1.6%, glycerin giảm rung, kết nối 1/2\" NPT nam."
  },
  {
    "id": "hthngbochy2269",
    "title": "Bình Khí CO2 MT5 Chữa Cháy 5kg Chuẩn TCVN",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "images/Hệ Thống Báo Cháy/he-thong-bao-chay (9).png",
    "desc": "Bình CO2 MT5 5kg vỏ thép sơn đỏ, van đồng. Áp suất làm việc 60 bar, kiểm định 5 năm/lần theo QCVN 4:2009/BLĐTBXH."
  },
  {
    "id": "knhbohkhutrang5660",
    "title": "Kính Bảo Hộ Phủ Chống Sương Mờ Anti-Fog UV400",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (1).png",
    "desc": "Polycarbonate trong suốt, phủ Anti-Fog cả trong ngoài, UV400. Gọng nhựa dẻo ôm mặt, thoáng khí cạnh, lọc 99.9% UV. ANSI Z87.1."
  },
  {
    "id": "knhbohkhutrang7245",
    "title": "Kính Che Mặt Toàn Phần Poly-carbon Chống Va Đập",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (10).png",
    "desc": "Tấm che polycarbonate 1.5mm full-face, lưỡi trai điều chỉnh cao-thấp. Chống va đập 120J, chống hóa chất bắn. EN 166:2002 4BT."
  },
  {
    "id": "knhbohkhutrang1383",
    "title": "Khẩu Trang N95 FFP2 Chống Bụi Mịn PM2.5",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (11).png",
    "desc": "Khẩu trang N95/FFP2, lọc ≥95% hạt 0.3µm, thở dễ. Van thở 1 chiều giảm nhiệt ẩm, dây đeo đôi chéo sau đầu. CE/FDA."
  },
  {
    "id": "knhbohkhutrang4856",
    "title": "Kính Phòng Lab Chống Hóa Chất Bắn Vào Mắt",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (12).png",
    "desc": "Kính goggles 4 bên kín, polycarbonate 2mm chịu axit loãng. Thông gió gián tiếp chống mờ, dây đàn hồi đeo dưới cằm."
  },
  {
    "id": "knhbohkhutrang2461",
    "title": "Khẩu Trang Silicone Tái Sử Dụng Bộ Lọc P100",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (13).png",
    "desc": "Mặt nạ silicone nửa mặt, bộ lọc P100 lọc 99.97% hạt. Dây kép chỉnh được, van thở 2 bên, tái dùng 200h, bộ lọc thay riêng."
  },
  {
    "id": "knhbohkhutrang4499",
    "title": "Kính Hàn Tối Kính Lọc DIN 11 Chống Tia Hồ Quang",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (14).png",
    "desc": "Kính hàn tối màu DIN 11 lọc tia hồ quang điện. Polycarbonate 2mm, đế nâu xanh chống chói, đơn hoặc cài vào mũ hàn."
  },
  {
    "id": "knhbohkhutrang8011",
    "title": "Khẩu Trang Vải 3 Lớp Kháng Khuẩn Ag+ Nano Silver",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (15).png",
    "desc": "Khẩu trang 3 lớp: ngoài polyester, giữa Ag+ nano diệt khuẩn, trong cotton mềm. Rửa được 50 lần, dây tai co giãn. Size M/L."
  },
  {
    "id": "knhbohkhutrang4996",
    "title": "Kính Chống Tia UV Laser Bảo Vệ Mắt Thợ Cắt Laser",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (16).png",
    "desc": "Kính lọc laser bước sóng 800-1100nm, OD≥5, khung titan nhẹ. Dùng máy cắt laser fiber/CO2, bảo vệ võng mạc khỏi tia laser."
  },
  {
    "id": "knhbohkhutrang2566",
    "title": "Khẩu Trang Nửa Mặt Rubber Bộ Lọc Hữu Cơ A1",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (17).png",
    "desc": "Mặt nạ nửa mặt rubber dẻo, 2 bộ lọc hữu cơ A1 loại I. Lọc hơi sơn, dung môi, đến nồng độ 1000ppm. Bộ lọc thay sau 40h."
  },
  {
    "id": "knhbohkhutrang7139",
    "title": "Kính Bảo Hộ Gắn Đầu Dạng Kính Hiển Vi Zoom 3x",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (18).png",
    "desc": "Kính đeo đầu dạng loupe 3x, trường nhìn 90mm, tầm xa điều chỉnh 35-45cm. Phẫu thuật, điện tử, đồng hồ, thêu bướm, nữ trang."
  },
  {
    "id": "knhbohkhutrang3711",
    "title": "Khẩu Trang Giấy KN95 Dây Đeo Có Kẹp Mũi",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (19).png",
    "desc": "KN95 dây đeo cong ôm cằm, kẹp mũi nhôm điều chỉnh. 5 lớp melt-blown, lọc ≥95% hạt NaCl 0.075µm. GB 2626-2019."
  },
  {
    "id": "knhbohkhutrang3886",
    "title": "Kính Cài Mũ Bảo Hiểm Trong Suốt Công Trường",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (2).png",
    "desc": "Kính cài vành mũ bảo hiểm trắng, gọng inox, kinh polycarbonate 2mm. Lật lên lật xuống dễ dàng, dùng công trường, mài kim loại."
  },
  {
    "id": "knhbohkhutrang2009",
    "title": "Khẩu Trang Hơi Clo Bộ Lọc Kép E2P3 Đầy Mặt",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (20).png",
    "desc": "Mặt nạ toàn mặt silicone với bộ lọc kép E2P3 (hơi clo+bụi). Lọc khí Cl₂ đến 2000ppm, P3 lọc 99.97% hạt. EN 136:1998."
  },
  {
    "id": "knhbohkhutrang4442",
    "title": "Kính Bảo Hộ Vàng Kỳ Chống Chói Phẫu Thuật Laser",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (3).png",
    "desc": "Kính laser vàng OD5+ bước sóng 190-540nm, UV+xanh lục. Khung nhẹ 28g, polycarbonate tráng phủ, dùng phòng phẫu thuật laser."
  },
  {
    "id": "knhbohkhutrang2334",
    "title": "Khẩu Trang Vải Kháng Khuẩn Hoạt Tính Than Bamboo",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (4).png",
    "desc": "Khẩu trang than hoạt tính tre, 4 lớp, lọc khí độc nhẹ và bụi. Có túi than ở giữa thay được, kháng khuẩn tự nhiên, thoáng khí."
  },
  {
    "id": "knhbohkhutrang5538",
    "title": "Kính Bảo Hộ Kiểu Thể Thao Bảo Vệ Bên Hông",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (5).png",
    "desc": "Kính thể thao ôm mặt, che chắn 3 mặt bên. Polycarbonate 2mm ANSI Z87.1, tia UV400, mắt kính thay được. Phù hợp công trình ngoài trời."
  },
  {
    "id": "knhbohkhutrang2670",
    "title": "Khẩu Trang PAPR Máy Thổi Khí Sạch Mũ Trùm Đầu",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (6).png",
    "desc": "Mặt nạ PAPR gắn pin, quạt thổi 170L/phút qua bộ lọc HE. Mũ trùm đầu vô trùng dùng môi trường hạt phóng xạ, bệnh viện cách ly."
  },
  {
    "id": "knhbohkhutrang5944",
    "title": "Kính Bảo Hộ Tối Màu Chống Cường Độ Sáng UV+IR",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (7).png",
    "desc": "Kính tối màu amber DIN 5, lọc 85% UV+IR. Dùng cắt plasma, hàn oxy-axetylene nhẹ, mài đá nhân tạo. ANSI Z87.1 kèm chứng chỉ."
  },
  {
    "id": "knhbohkhutrang7938",
    "title": "Khẩu Trang Nước Xây Dựng KN100 Bộ Lọc P3",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (8).png",
    "desc": "Mặt nạ nước half-face cao su, bộ lọc P3 loại III. Lọc xi-măng, bột đá cẩm thạch, silic >99.97%. Dùng thợ bê tông, mài đá."
  },
  {
    "id": "knhbohkhutrang5980",
    "title": "Khẩu Trang Silicone Toàn Mặt Hai Bộ Lọc A2B2P3",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (9).png",
    "desc": "Mặt nạ silicone toàn mặt đôi bộ lọc A2B2P3 kiểu cột sơn. Lọc hơi hữu cơ, vô cơ, bụi PM0.3. Dùng phòng sơn công nghiệp."
  },
  {
    "id": "mbohlaong5304",
    "title": "Mũ Bảo Hộ ABS Kiểu Châu Âu Có Rãnh Thông Gió",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (1).png",
    "desc": "Mũ ABS nhựa kỹ thuật kiểu châu Âu, 8 rãnh thông gió nóc. Vành 30mm bảo vệ mưa nắng, dây đeo 4 điểm nylon, kèm dây cằm."
  },
  {
    "id": "mbohlaong5555",
    "title": "Mũ Cứng Công Trường PE Điều Chỉnh Nhanh 6 Điểm",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (10).png",
    "desc": "Mũ PE cứng, khóa nhanh xoay bánh răng ±5 cỡ đầu 52-62cm. Dây treo 6 điểm thoáng khí, lót mồ hôi tháo giặt được. EN 397."
  },
  {
    "id": "mbohlaong8622",
    "title": "Mũ Bảo Hộ Điện 20kV Cách Điện HDPE",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (11).png",
    "desc": "Mũ HDPE cách điện 20kV AC theo EN 50365. Màu vàng/đỏ, vành 30mm bảo vệ mưa, không chứa kim loại, thợ điện hạ thế."
  },
  {
    "id": "mbohlaong7624",
    "title": "Mũ Bảo Hộ Vành Rộng Chống Mưa Nắng Kho Lạnh",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (12).png",
    "desc": "Vành rộng 70mm xung quanh che mưa nắng, phù hợp làm ngoài trời. PE cứng, dây treo 4 điểm, dùng kho lạnh -20°C đến +50°C."
  },
  {
    "id": "mbohlaong6143",
    "title": "Mũ Cứng ABS Tích Hợp Kính Che Mặt Và Che Tai",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (2).png",
    "desc": "Hệ 3 trong 1: mũ cứng + kính che mặt polycarbonate + nút tai chống ồn. Kính lật lên xuống, tai lật ra vào, EN 397+EN 1731."
  },
  {
    "id": "mbohlaong2475",
    "title": "Mũ Bảo Hộ LED Tích Hợp Đèn Trán Sạc USB",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (3).png",
    "desc": "Mũ ABS tích hợp đèn LED trán sạc USB Type-C, pin 1200mAh. Sáng 3 chế độ 80-200 lux, dây đeo cao su đầu, tự tắt sau 2h."
  },
  {
    "id": "mbohlaong3769",
    "title": "Mũ Bảo Hộ Thông Gió Nón Phẫu Thuật Xây Dựng",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (4).png",
    "desc": "Nón thông gió 6 lỗ nóc + 2 bên, ABS nhẹ 350g. Dây treo thoáng, lót mồ hôi kháng khuẩn, phù hợp làm việc trong nhà nóng."
  },
  {
    "id": "mbohlaong3762",
    "title": "Mũ Cứng Màu Vàng Ratchet 4 Điểm Treo Lưới",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (5).png",
    "desc": "Mũ PE màu vàng, 4 điểm treo lưới PE thoáng khí. Khóa xoay nhanh 1 tay, vành trước 20mm, dây cằm V dễ điều chỉnh."
  },
  {
    "id": "mbohlaong6723",
    "title": "Mũ Bảo Hộ Chịu Nhiệt 150°C Môi Trường Nóng",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (6).png",
    "desc": "Mũ ABS chịu nhiệt 150°C ngắn hạn, 80°C liên tục. Dùng lò hơi, lò nung, sản xuất kính, nhà máy xi-măng. EN 397 HT."
  },
  {
    "id": "mbohlaong416",
    "title": "Mũ Bảo Hộ Leo Cao Hai Móc Thắng Kép Kiểu Kín",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (7).png",
    "desc": "Mũ kín kiểu leo núi/leo cao, 2 móc thắng kép bên tai. Bề mặt ABS nhám, cằm buộc chắc, kèm núm tai silicon giảm ồn."
  },
  {
    "id": "mbohlaong2026",
    "title": "Mũ Cứng Kiểu Nhật Có Vành Trước Bảo Vệ Gáy",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (8).png",
    "desc": "Kiểu mũ Nhật vành ngắn trước, rộng sau che gáy. ABS nhẹ, lỗ thông gió 4 bên, móc đèn trán tích hợp, dây 4 điểm."
  },
  {
    "id": "mbohlaong1943",
    "title": "Mũ Bảo Hộ ABS Khóa Xoay Bánh Răng Chống Trôi",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "images/Mũ bảo hộ lao động/mu-bao-ho (9).png",
    "desc": "Khóa xoay bánh răng chính xác, không trôi khi đập đầu vào vật. ABS cứng màu trắng, vành 25mm, dùng xây dựng và khai thác mỏ."
  },
  {
    "id": "mtnhnbohlaong5257",
    "title": "Mặt Nạ Hàn Tự Động Tối Màu Điện Tử Solar ADF",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (1).png",
    "desc": "Kính Solar+Lithium, tự tối trong 1/25000s, tự sáng 0.5s. DIN 9-13 điều chỉnh, nhạy sáng 1-4, độ trễ 0.1-1s. 4 cảm biến hồ quang."
  },
  {
    "id": "mtnhnbohlaong3334",
    "title": "Mặt Nạ Hàn Kính Tối DIN 11 Truyền Thống Nylon",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (2).png",
    "desc": "Mặt nạ nylon nhẹ, kính lọc thủy tinh tối DIN 11, kích thước 90x110mm. Vành đầu nhựa điều chỉnh 3 cỡ, chống tia UV/IR/hồ quang."
  },
  {
    "id": "mtnhnbohlaong2484",
    "title": "Mặt Nạ Hàn Vành Đầu Điều Chỉnh Kính Lọc Đổi",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (3).png",
    "desc": "Vành đầu ratchet 4 điểm, kính lọc thay được 90x110mm DIN 9-12. Bản lề lật tấm kính lên 90° khi không hàn, tấm trong bảo vệ."
  },
  {
    "id": "mtnhnbohlaong1342",
    "title": "Mặt Nạ Hàn Tự Động 4 Cảm Biến DIN 9-13 ANSI",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (4).png",
    "desc": "Mặt nạ 4 cảm biến quang điện, DIN 9-13 xoay số, nhạy sáng điều chỉnh. Màn Crystal View 97x40mm, pin solar+AA, ANSI Z87.1."
  },
  {
    "id": "mtnhnbohlaong3290",
    "title": "Mặt Nạ Hàn MIG/TIG/Cắt Plasma Kính Solar Large",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (5).png",
    "desc": "Kính che rộng 110x90mm cho MIG/TIG/cắt plasma, solar 2 pin. DIN 9-13 nút xoay ngoài, trả về DIN 4 ánh sáng thường, CE EN 379."
  },
  {
    "id": "mtnhnbohlaong8985",
    "title": "Kính Hàn Tay Cầm Polycarbonate Kính Tối DIN 12",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (6).png",
    "desc": "Kính hàn tay cầm nhựa, polycarbonate trong + tấm kính DIN 12 đặt vào. Dùng hàn điện hồ quang ngắn, tấm kính thay theo tiêu chuẩn."
  },
  {
    "id": "mtnhnbohlaong8632",
    "title": "Mặt Nạ Hàn Tự Tối LED Đa Chức Năng Cơ Sở Đầu",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (7).png",
    "desc": "Mặt nạ tự tối LED hỗ trợ nhìn rõ vũng hàn hơn. Solar+CR2032, DIN 5-13 điều chỉnh, mặt nhìn 98x43mm, ANSI Z87.1 tại Mỹ."
  },
  {
    "id": "mtnhnbohlaong3080",
    "title": "Mặt Nạ Hàn Nặng Chịu Lực Fiberglass Kính DIN 11",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (8).png",
    "desc": "Thân mặt nạ sợi thủy tinh cao cấp, chịu bắn kim loại nóng. Kính DIN 11 thủy tinh, kèm 2 tấm trong, bản lề dày 2mm không gỉ."
  },
  {
    "id": "mtnphngc4937",
    "title": "Mặt Nạ Phòng Độc Toàn Mặt Bộ Lọc ABEK1P3",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (1).png",
    "desc": "Mặt nạ silicon toàn mặt 2 bộ lọc ABEK1P3, chống hữu cơ, vô cơ, axit, NH3, bụi. Trọng lượng 700g, dây đeo 5 điểm, kính polycarbonate EN 136."
  },
  {
    "id": "mtnphngc2119",
    "title": "Mặt Nạ Nửa Mặt Cao Su Bộ Lọc Hữu Cơ A2B2",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (10).png",
    "desc": "Nửa mặt cao su neoprene, 1 bộ lọc A2B2 hữu cơ+vô cơ. Lọc dung môi, chlorine, SO₂. Dây cổ+đầu, van thở 1 chiều, EN 140."
  },
  {
    "id": "mtnphngc7873",
    "title": "Mặt Nạ Phòng Độc Khí Độc Hóa Học CBRN Quân Sự",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (11).png",
    "desc": "Mặt nạ quân sự M40/M50 chuẩn CBRN, lọc vũ khí hóa học thần kinh, nổ. Mặt kính toàn diện, bộ lọc NATO 40mm, tẩy độc bằng dung dịch DS2."
  },
  {
    "id": "mtnphngc1066",
    "title": "Bộ Lọc Thay Thế Mặt Nạ Phòng Độc A1B1E1K1P3",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (12).png",
    "desc": "Bộ lọc A1B1E1K1P3 chuyên dụng lọc hơi hữu cơ, vô cơ, axit, NH3. Kết nối 40mm chuẩn NATO, dùng được trên mọi mặt nạ 40mm phổ biến."
  },
  {
    "id": "mtnphngc9016",
    "title": "Mặt Nạ Phòng Độc Vô Cơ E1P2 Hơi Amoniac",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (13).png",
    "desc": "Bộ lọc E1P2 chuyên hơi SO₂, NO₂, amoniac nồng độ thấp. Dùng nhà máy hóa chất, phân bón, làm lạnh. Thay sau 40h hoặc có mùi."
  },
  {
    "id": "mtnphngc839",
    "title": "Mặt Nạ Hóa Chất Toàn Mặt Butyrate Rubber CSA",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (14).png",
    "desc": "Butyrate rubber chịu hóa chất mạnh hơn silicone. Toàn mặt, cổng 40mm, kính Lexan polycarbonate 3mm. CSA Z180.1, NIOSH phê duyệt."
  },
  {
    "id": "mtnphngc1977",
    "title": "Mặt Nạ Phòng Độc Silicone Toàn Mặt Lọc Kép",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (15).png",
    "desc": "Silicone toàn mặt với 2 bộ lọc đặt hai bên tăng tầm nhìn. Lọc ABEK2P3, dây 6 điểm siết chặt, kính 4 cạnh tầm nhìn rộng."
  },
  {
    "id": "mtnphngc2755",
    "title": "Mặt Nạ Phòng Thủ Hóa Học Với Ống Thở Thoát Hiểm",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (2).png",
    "desc": "Mặt nạ thoát hiểm có ống thở và bộ lọc phổ rộng, đeo nhanh 5 giây. Sử dụng 15-20 phút trong tình huống khẩn cấp lửa/khí độc."
  },
  {
    "id": "mtnphngc1287",
    "title": "Bộ Lọc Bụi P100 Mặt Nạ Phòng Độc 40mm",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (3).png",
    "desc": "Bộ lọc P100 40mm lọc 99.97% hạt bụi, mịn, sợi amiăng. Gắn mặt nạ 40mm chuẩn NATO, trọng lượng 100g, thay sau 200h."
  },
  {
    "id": "mtnphngc7364",
    "title": "Mặt Nạ Phòng Độc Khẩn Cấp Thoát Hiểm EEBD 15 Phút",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (4).png",
    "desc": "EEBD (Emergency Escape Breathing Device) 15 phút O2 áp. Đeo nhanh không cần đào tạo, dành cho nhân viên nhà máy, tàu biển, hầm lò."
  },
  {
    "id": "mtnphngc3658",
    "title": "Mặt Nạ Phòng Thủ Hơi Amoniac NH3 Nông Nghiệp",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (5).png",
    "desc": "Mặt nạ nửa mặt cao su, bộ lọc NH3/amoniac E2. Dùng nông nghiệp, chuồng trại, nhà máy đông lạnh làm lạnh amoniac, lưu giữ đến 1 năm."
  },
  {
    "id": "mtnphngc2044",
    "title": "Bộ Mặt Nạ Phòng Độc NBC Tích Hợp Kính Nhìn Rộng",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (6).png",
    "desc": "Mặt nạ toàn mặt NBC, kính nhìn rộng 180°, bộ lọc ABEK2P3. Chống vũ khí hóa học, sinh học, phóng xạ dạng hạt. Dây đeo 6 điểm kép."
  },
  {
    "id": "mtnphngc4119",
    "title": "Mặt Nạ Phòng Độc Hở Phần Mặt Chỉ Che Mũi-Miệng",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (7).png",
    "desc": "Mặt nạ nửa đơn giản chỉ che mũi-miệng, thoáng phần mắt. 2 bộ lọc nhỏ A1, dành cho công việc sơn, tiếp xúc dung môi nhẹ."
  },
  {
    "id": "mtnphngc613",
    "title": "Mặt Nạ Phòng Độc Sơn Bộ Lọc OV/P100 Nửa Mặt",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (8).png",
    "desc": "Nửa mặt cao su, bộ lọc OV/P100 kép lọc hơi hữu cơ+bụi sơn. Dùng phòng sơn ô tô, tàu thuyền. Thay bộ lọc sau 40h làm việc."
  },
  {
    "id": "mtnphngc4948",
    "title": "Bộ Lọc Phòng Độc Thủy Ngân Hơi Hg HgP3",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "images/Mặt Nạ Phòng Độc/mat-na-chong-doc (9).png",
    "desc": "Bộ lọc thủy ngân Hg chuyên biệt, kết hợp P3 lọc hạt. Dùng phòng thí nghiệm, nhà máy ắc quy, tái chế điện tử. Thay sau 8h tiếp xúc."
  },
  {
    "id": "nnsaobov4990",
    "title": "Nón Kết Bảo Vệ Vải Cao Cấp Logo Thêu Chính Hãng",
    "cat": "cat20",
    "catLabel": "Nón , Sao Bảo Vệ",
    "img": "images/Nón , Sao Bảo Vệ/non-bao-ve-2.png",
    "desc": "Nón kết vải polyester cao cấp, thêu logo an ninh/bảo vệ. Vành cứng, điều chỉnh sau đầu, size 55-60cm, dùng mưa nắng không phai màu."
  },
  {
    "id": "nnsaobov331",
    "title": "Sao Cấp Hiệu Bảo Vệ Inox Mạ Vàng 1-5 Sao",
    "cat": "cat20",
    "catLabel": "Nón , Sao Bảo Vệ",
    "img": "images/Nón , Sao Bảo Vệ/non-bao-ve.png",
    "desc": "Bộ sao cấp hiệu bảo vệ 1 đến 5 sao, hợp kim kẽm mạ vàng. Đường kính 2cm mỗi sao, kèm gắn nhọn, dễ gắn lên nón kết."
  },
  {
    "id": "nnvilitrm2864",
    "title": "Nón Vải Lưới Bảo Vệ Trùm Đầu Loại Xốp Kẹp",
    "cat": "cat21",
    "catLabel": "Nón vải lưới trùm",
    "img": "images/Nón vải lưới trùm/non-vai-luoi-trum (1).png",
    "desc": "Nón lưới vải PE loại xốp kẹp bên trong mũ bảo hộ cứng. Hút mồ hôi, chống nóng đầu, thay thế khi cũ dơ. Phù hợp hầu hết mũ bảo hộ cứng."
  },
  {
    "id": "nnvilitrm6608",
    "title": "Mũ Vải Lưới Thông Gió Nón Bảo Hộ Công Trường",
    "cat": "cat21",
    "catLabel": "Nón vải lưới trùm",
    "img": "images/Nón vải lưới trùm/non-vai-luoi-trum (2).png",
    "desc": "Mũ vải lưới đứng tháo rời từ mũ bảo hộ, thông gió 100%. Dây điều chỉnh, co giãn, chạm đầu mềm, màu trắng/vàng, giặt máy được."
  },
  {
    "id": "nnvilitrm325",
    "title": "Nón Lưới Trong Mũ Cứng Bảo Vệ Mặt Bụi Côn Trùng",
    "cat": "cat21",
    "catLabel": "Nón vải lưới trùm",
    "img": "images/Nón vải lưới trùm/non-vai-luoi-trum (3).png",
    "desc": "Lưới vải gắn vào vành mũ cứng che mặt, cổ tránh bụi và côn trùng. Polyester thoáng, nhìn xuyên được, bấm nhanh vào vành mũ."
  },
  {
    "id": "nnvilitrm1773",
    "title": "Mũ Lưới Trùm Thoáng Mát Mùa Hè Xây Dựng",
    "cat": "cat21",
    "catLabel": "Nón vải lưới trùm",
    "img": "images/Nón vải lưới trùm/non-vai-luoi-trum (4).png",
    "desc": "Mũ lưới mùa hè siêu thoáng có kèm vành che nắng rộng 5cm. Polyester lưới 3D, băng trán chống mồ hôi nhỏ vào mắt, co giãn 4 chiều."
  },
  {
    "id": "ntchngn5111",
    "title": "Nút Tai Silicone Mềm Chống Ồn SNR 37dB Tái Dùng",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "images/Nút chống ồn/nut-lao-dong (1).png",
    "desc": "Silicone y tế mềm dẻo, hình nón 3 tầng, SNR 37dB. Rửa xà phòng được, tái dùng 300 lần, phù hợp ống tai 6-14mm. CE EN 352-2."
  },
  {
    "id": "ntchngn7832",
    "title": "Nút Tai Mút Xốp Dùng Một Lần NRR 33dB Cam Vilagrip",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "images/Nút chống ồn/nut-lao-dong (2).png",
    "desc": "Mút PU tốc độ nở chậm, cuộn nhỏ nhét dễ, nở đầy ống tai 60s. SNR 33dB, 200 cặp/hộp, màu cam nhận biết, ANSI S3.19, EN 352-2."
  },
  {
    "id": "ntchngn226",
    "title": "Chụp Tai Chống Ồn Gắn Mũ SNR 28dB",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "images/Nút chống ồn/nut-lao-dong (3).png",
    "desc": "Chụp tai gắn ray mũ bảo hộ cứng, không cần đeo cả bộ khi chỉ cần thỉnh thoảng. SNR 28dB, gập vào mũ khi không dùng, CE EN 352-3."
  },
  {
    "id": "ntchngn1493",
    "title": "Nút Tai Có Dây Bọc Mút PU Xốp SNR 35dB",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "images/Nút chống ồn/nut-lao-dong (4).png",
    "desc": "Mút PU có dây nối 2 nút tai, không rơi mất. SNR 35dB, dây polyester 50cm, kẹp áo khi không dùng, OSHA 1910.95 khuyến dùng."
  },
  {
    "id": "ntchngn6673",
    "title": "Chụp Tai Chống Ồn Dạng Băng Đầu Foldable NRR 30dB",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "images/Nút chống ồn/nut-lao-dong (5).png",
    "desc": "Băng đầu dạng chữ C mềm, gấp được bỏ túi. Đệm tai PU êm, NRR 30dB, màu xanh, thép lò xo không gỉ, phù hợp đội-bỏ liên tục."
  },
  {
    "id": "ntchngn4032",
    "title": "Nút Tai Silicone Dạng Nón 3 Tầng SNR 36dB Dây Cổ",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "images/Nút chống ồn/nut-lao-dong (6).png",
    "desc": "Silicone 3 tầng có dây cổ dài 60cm chống mất. SNR 36dB, nhét tái dùng, vệ sinh dễ, kèm hộp tròn đựng, CE EN 352-2."
  },
  {
    "id": "ntchngn1504",
    "title": "Chụp Tai Hi-Fi Chuẩn Âm Nhạc Chặn 15dB Có Chọn Lọc",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "images/Nút chống ồn/nut-lao-dong (7).png",
    "desc": "Chụp tai Hi-Fi giảm đều tất cả tần số (không cắt âm bass). Giảm 15-20dB, nghe âm nhạc/nói chuyện vẫn rõ, dùng hòa nhạc, quán bar."
  },
  {
    "id": "ntchngn8538",
    "title": "Bộ Nút Tai Bảo Vệ Thính Giác Kèm Hộp Đựng 50 Cặp",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "images/Nút chống ồn/nut-lao-dong (8).png",
    "desc": "Bộ nút tai PU 50 cặp kèm hộp nhựa đựng chuyên nghiệp. SNR 33dB, màu xanh, đóng túi zip cặp đôi, dùng cho cả phân xưởng."
  },
  {
    "id": "niquytiucmlacmhtthuc7139",
    "title": "Biển Nội Quy An Toàn Lao Động 10 Điều Nhựa A2",
    "cat": "cat23",
    "catLabel": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
    "img": "images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (1).png",
    "desc": "Biển nhựa PVC 3mm, in offset 4 màu nội quy 10 điểm chữ đậm. Kích thước A2 (42x59cm), lỗ treo 4 góc, ép film bóng chống ẩm."
  },
  {
    "id": "niquytiucmlacmhtthuc8413",
    "title": "Biển Cấm Lửa-Không Hút Thuốc Kho Hóa Chất",
    "cat": "cat23",
    "catLabel": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
    "img": "images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (2).png",
    "desc": "Biển 2 trong 1 \"Cấm Lửa + Cấm Hút Thuốc\" theo TCVN 4878. Nhôm 1mm in sơn đốt lò nhiệt độ cao không phai, kèm khung treo."
  },
  {
    "id": "niquytiucmlacmhtthuc8811",
    "title": "Bảng Tiêu Đề Phòng Ban Alu Composite Màu In",
    "cat": "cat23",
    "catLabel": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
    "img": "images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (3).png",
    "desc": "Tấm Alu Composite 3mm khắc laser tên phòng ban, chữ nổi 3D. Màu sắc theo đặt hàng, kích thước 30x10cm, bắt vít hoặc băng keo 3M."
  },
  {
    "id": "niquytiucmlacmhtthuc1652",
    "title": "Biển Cấm Hút Thuốc Khu Vực Bệnh Viện Nhựa PVC",
    "cat": "cat23",
    "catLabel": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
    "img": "images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (4).png",
    "desc": "Biển \"Khu Vực Không Hút Thuốc\" nhựa PVC 5mm màu xanh-trắng. Kích thước 20x30cm, phản quang ban đêm, theo Nghị định 67/2013."
  },
  {
    "id": "thangthothimcun3123",
    "title": "Thang Thoát Hiểm Cuộn Xích Thép Nhà Cao Tầng 6m",
    "cat": "cat24",
    "catLabel": "Thang Thoát Hiểm Cuốn",
    "img": "images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (1).png",
    "desc": "Thang xích thép mạ kẽm, bậc sắt Ø20mm, dài 6m (2 tầng). Chịu tải 150kg, gấp gọn 30x15x10cm, móc treo cửa sổ chắc chắn."
  },
  {
    "id": "thangthothimcun4229",
    "title": "Thang Thoát Hiểm Dây Thừng Chống Cháy 10m",
    "cat": "cat24",
    "catLabel": "Thang Thoát Hiểm Cuốn",
    "img": "images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (2).png",
    "desc": "Thang dây nylon chống cháy 10m, bậc nhựa chống trượt rộng 25cm. Nhẹ 2.5kg, cuộn gọn trong túi vải. Chịu tải 120kg, dùng 1-3 tầng."
  },
  {
    "id": "thangthothimcun6602",
    "title": "Thang Cuộn Inox Thoát Hiểm Chung Cư Gắn Tường 15m",
    "cat": "cat24",
    "catLabel": "Thang Thoát Hiểm Cuốn",
    "img": "images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (3).png",
    "desc": "Thang inox 304 cuộn gắn tường, dài 15m, bậc inox 25mm tráng nhựa. Cơ cấu xả tự động khi giật tay cầm, tốc độ xuống an toàn 1m/s."
  },
  {
    "id": "thitbpcccanton5502",
    "title": "Bình Chữa Cháy Bột ABC MFZ 4kg Van Đồng",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (1).png",
    "desc": "Bình bột ABC 4kg, áp xuất nạp 14 bar, van đồng chịu nhiệt. Dập tắt đám cháy loại A (rắn), B (lỏng), C (khí), E (điện). QCVN 4:2009."
  },
  {
    "id": "thitbpcccanton9083",
    "title": "Bình Chữa Cháy CO2 MT3 3kg Chai Thép",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (10).png",
    "desc": "Bình CO2 3kg chai thép, áp nạp 60 bar, van đồng. Không để lại cặn, dùng dập tắt cháy điện, trang thiết bị điện tử. Kiểm định 5 năm/lần."
  },
  {
    "id": "thitbpcccanton5268",
    "title": "Hộp Đựng Bình Chữa Cháy Thép Sơn Đỏ Khóa Kính",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (11).png",
    "desc": "Hộp thép sơn đỏ epoxy, kính phá khẩn, khóa tam giác chuẩn. Kích thước phù hợp bình 4-8kg, gắn tường bằng 4 bu-lông inox."
  },
  {
    "id": "thitbpcccanton3740",
    "title": "Búa Phá Cửa Kính Thoát Hiểm 2 Trong 1 Cắt Dây",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (12).png",
    "desc": "Búa phá cửa kính đầu thép cứng, cán cao su chống trượt. Tích hợp lưỡi dao cắt dây an toàn. Nhỏ gọn 15cm, móc bảng điều khiển xe."
  },
  {
    "id": "thitbpcccanton5093",
    "title": "Đèn Thoát Hiểm Exit LED Sự Cố 1 Tiếng",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (13).png",
    "desc": "Đèn LED xanh EXIT/LỐI THOÁT, tự sáng khi mất điện. Pin Lithium sạc từ nguồn AC, sáng ≥1h sự cố, tiêu chuẩn TCVN 3890:2009."
  },
  {
    "id": "thitbpcccanton5203",
    "title": "Mặt Nạ Thoát Hiểm Khói Lửa 15 Phút Khẩn Cấp",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (14).png",
    "desc": "Mặt nạ hood thoát khói 15 phút, bộ lọc hạt+CO loại TH100. Đội nhanh 5 giây, bộ lọc dự phòng kèm theo, dùng cho khách sạn, văn phòng."
  },
  {
    "id": "thitbpcccanton9614",
    "title": "Dây Cứu Hỏa Cao Su Đàn Hồi 20m Vòi Phun",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (15).png",
    "desc": "Vòi cao su đàn hồi 20m Ø25mm, áp làm việc 12 bar, kết nối khớp nối B65 tiêu chuẩn. Dùng cho hệ thống hydrant tường/cột."
  },
  {
    "id": "thitbpcccanton402",
    "title": "Bộ Dụng Cụ Cứu Hỏa Phá Dỡ Chuyên Nghiệp 6 Món",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (16).png",
    "desc": "Bộ cứu hỏa 6 món: rìu phá cửa, câu liêm, gậy chọc, xà beng, xẻng, búa. Thép C45 cao cấp, cán gỗ sồi, trọng lượng bộ 8kg."
  },
  {
    "id": "thitbpcccanton8803",
    "title": "Thùng Cát Chữa Cháy Nhựa Màu Đỏ 100 Lít Có Nắp",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (2).png",
    "desc": "Thùng nhựa HDPE đỏ 100L có nắp đậy và tay xách. Đựng cát vô cơ dập tắt đám cháy loại D (kim loại), kèm xẻng gắn nắp."
  },
  {
    "id": "thitbpcccanton7584",
    "title": "Bảng Hướng Dẫn Thoát Hiểm Phát Sáng Dạ Quang",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (3).png",
    "desc": "Bảng dạ quang phát sáng 8h sau khi hấp sáng 30 phút. Không cần điện, nhìn rõ 15m trong bóng tối hoàn toàn. Kích thước 15x40cm."
  },
  {
    "id": "thitbpcccanton8532",
    "title": "Đèn Pin Thoát Hiểm Sạc Tự Động Từ Điện Lưới",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (4).png",
    "desc": "Đèn pin tự sạc từ điện lưới 220V, rút ra dùng khi mất điện. Pin NiMH 1000mAh, sáng 1.5h liên tục, sạc đầy trong 8h tự ngắt."
  },
  {
    "id": "thitbpcccanton4068",
    "title": "Còi Thoát Hiểm Hơi Nén Cầm Tay 120dB Chống Nước",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (5).png",
    "desc": "Còi hơi nén 120dB, chống nước IP67, cầm tay gọn. Dùng gọi cứu nạn trong đám cháy, thoát hiểm, báo động khẩn cấp."
  },
  {
    "id": "thitbpcccanton5977",
    "title": "Bộ Dây Hạ Xuống Khẩn Cấp Tự Hãm Tốc Độ 20m",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (6).png",
    "desc": "Bộ hạ xuống khẩn cấp 20m, cơ cấu hãm tốc độ dưới 1.5m/s. Cuộn sẵn, mở ra đầu nối trong 10 giây, tải 100kg, không cần đào tạo."
  },
  {
    "id": "thitbpcccanton7374",
    "title": "Bộ Kit Sơ Cứu Y Tế Công Trường 50 Người OSHA",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (7).png",
    "desc": "Bộ sơ cứu 50 người gồm 140 vật tư theo danh sách OSHA. Hộp nhựa ABS cứng, kèm hướng dẫn tiếng Việt, treo tường đặt sẵn."
  },
  {
    "id": "thitbpcccanton6689",
    "title": "Tấm Chắn Lửa Sợi Thủy Tinh 120x180cm Kho",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (8).png",
    "desc": "Tấm chắn lửa sợi thủy tinh dệt 120x180cm, chịu 550°C liên tục. Bọc vật dễ cháy, dùng phòng sơn, gần lò hàn, kho. Viền inox."
  },
  {
    "id": "thitbpcccanton2138",
    "title": "Thước Cuộn 3m Có Gắn Đèn LED Soi Hộp Điện",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (9).png",
    "desc": "Thước cuộn 3m tích hợp đèn LED soi tối trong hộp điện. Pin CR2032, khóa chổng trả, lưỡi thép không gỉ, phù hợp thợ điện."
  },
  {
    "id": "thngngrc3693",
    "title": "Thùng Rác Nhựa HDPE 240L Có Nắp Đậy 2 Bánh",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (1).png",
    "desc": "Thùng HDPE 240L, nắp đậy kín tránh mùi, 2 bánh cao su 20cm. Tay cầm đôi để đổ vào xe gom rác, màu xanh/nâu/vàng phân loại."
  },
  {
    "id": "thngngrc9252",
    "title": "Thùng Rác Phân Loại 3 Ngăn Inox Mờ Công Cộng",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (10).png",
    "desc": "Thùng inox 304 3 ngăn phân loại: hữu cơ-vô cơ-tái chế. Mỗi ngăn 30L, pedal đạp chân, lỗ thoát khí bên hông, màu xám mờ hiện đại."
  },
  {
    "id": "thngngrc9028",
    "title": "Thùng Rác 120L Treo Xe Gom Rác Màu Vàng/Xanh",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (11).png",
    "desc": "Thùng nhựa 120L treo khung xe gom rác, lỗ xỏ khung tiêu chuẩn. Nắp liền thân, màu vàng (vô cơ)/xanh (tái chế) theo QCVN."
  },
  {
    "id": "thngngrc7418",
    "title": "Thùng Rác Đạp Chân Inox 30L Văn Phòng Cao Cấp",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (12).png",
    "desc": "Thùng inox 304 bóng 30L, đạp chân mở nắp, nắp giảm chấn êm. Đường kính 32cm cao 55cm, phù hợp văn phòng, khách sạn 4-5 sao."
  },
  {
    "id": "thngngrc2066",
    "title": "Thùng Rác Nhựa 60L Màu Cam Thoát Nước Đáy",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (2).png",
    "desc": "Thùng nhựa 60L màu cam, lỗ thoát nước đáy, tay xách 2 bên. Dùng ngoài trời, nhà bếp nhà hàng, có thể xếp chồng lên nhau."
  },
  {
    "id": "thngngrc3983",
    "title": "Thùng Đựng Rác Thải Nguy Hại 200L Biohazard",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (3).png",
    "desc": "Thùng 200L màu đỏ nhãn hiệu Biohazard/Chất Thải Y Tế. HDPE nguyên sinh, nắp bướm an toàn, lỗ túi chuyên dụng, bánh lăn, CE."
  },
  {
    "id": "thngngrc3967",
    "title": "Thùng Rác Phân Loại Tại Nguồn 3 Màu 30L/ngăn",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (4).png",
    "desc": "Bộ 3 thùng nhựa 30L/ngăn màu xanh-vàng-đỏ theo tiêu chuẩn phân loại 3 nhóm tại nguồn theo Nghị định 45/2022. Nắp liền, pedal."
  },
  {
    "id": "thngngrc4270",
    "title": "Thùng Rác Ngoài Trời Bê Tông Đúc Sẵn 60L Công Viên",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (5).png",
    "desc": "Thùng bê tông đúc sẵn 60L hình trụ, lõi thép chống vỡ. Bề mặt granito giả đá, không phai màu, dùng công viên, vỉa hè bền 20 năm."
  },
  {
    "id": "thngngrc709",
    "title": "Thùng Rác Nhựa 660L Container Rác Thị Trường",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (6).png",
    "desc": "Container rác nhựa 660L tiêu chuẩn châu Âu, 4 bánh cao su Ø200mm. 2 bánh khóa, tay cầm đẩy, nắp phẳng dễ lật, màu xanh/xám."
  },
  {
    "id": "thngngrc6821",
    "title": "Thùng Rác Cảm Biến Tự Mở Nắp Inox 20L USB",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (7).png",
    "desc": "Thùng inox cảm biến hồng ngoại tự mở nắp trong 0.5s. 20L, USB sạc pin lithium, nhận tay từ 25cm, im lặng mờ ban đêm."
  },
  {
    "id": "thngngrc1143",
    "title": "Thùng Rác Gỗ Tự Nhiên Lát Vân Sồi Đẹp Nội Thất",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (8).png",
    "desc": "Thùng gỗ tự nhiên ván ghép lát vân sồi, sơn PU chống ẩm. Lỗ bỏ rác tròn Ø20cm, lót nhựa trong, phù hợp nội thất cao cấp."
  },
  {
    "id": "thngngrc3479",
    "title": "Thùng Rác Khu Công Nghiệp 1100L 4 Bánh Màu Xám",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "images/Thùng đựng rác/thung-dung-rac (9).png",
    "desc": "Thùng nhựa 1100L màu xám 4 bánh cao su Ø250mm, 2 khóa. Dùng khu công nghiệp, chung cư lớn, giao diện xe rác cơ giới hóa."
  },
  {
    "id": "ocsumcaocpnhiu1612",
    "title": "Áo Thun Cá Sấu Bảo Vệ Cotton Pique Polo Ngắn Tay",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "images/Áo cá sấu mè cao cấp nhiều/do.png",
    "desc": "Cotton Pique 220gsm, thêu logo bảo vệ trước ngực, cổ bẻ vải dệt kim. Co giãn nhẹ, thoáng khí, mặc làm việc cả ngày thoải mái."
  },
  {
    "id": "ocsumcaocpnhiu2699",
    "title": "Áo Polo Bảo Vệ Phối Màu Xanh Đen Logo Thêu",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "images/Áo cá sấu mè cao cấp nhiều/luc-lam.png",
    "desc": "Áo polo 2 màu xanh đen phối đường viền tay, thêu chữ SECURITY bên tay. Cotton/Polyester 65/35, 180gsm, không bai giãn sau 50 lần giặt."
  },
  {
    "id": "ocsumcaocpnhiu323",
    "title": "Áo Cá Sấu Dài Tay Chuyên Nghiệp Cho Bảo Vệ",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "images/Áo cá sấu mè cao cấp nhiều/trang.png",
    "desc": "Dài tay giữ ấm mùa lạnh, cotton pique 200gsm, tay phối màu. Thêu logo đỉnh ngực phải, bo tay vải thun, kèm túi ngực trái."
  },
  {
    "id": "ocsumcaocpnhiu5652",
    "title": "Áo Polo Security Vải Cotton Mè 65/35 Phản Quang",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "images/Áo cá sấu mè cao cấp nhiều/vang-nhat.png",
    "desc": "Vải cotton mè 65/35, in dải phản quang bên hông và tay. Ban đêm nhìn rõ từ 80m, phù hợp bảo vệ tuần tra ngoài trời ban đêm."
  },
  {
    "id": "ocsumcaocpnhiu3957",
    "title": "Áo Thun Cá Sấu Thoáng Mát 4 Chiều Kháng Khuẩn",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "images/Áo cá sấu mè cao cấp nhiều/vang.png",
    "desc": "Vải poly 4 chiều co giãn kháng khuẩn Ag+, 160gsm nhẹ mát. Cổ bẻ 3 cúc, thoát ẩm tốt, màu navy/trắng/xanh rêu tùy chọn."
  },
  {
    "id": "ocsumcaocpnhiu7682",
    "title": "Áo Polo Đồng Phục Bảo Vệ Màu Trắng-Xanh Cao Cấp",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "images/Áo cá sấu mè cao cấp nhiều/xang-duong.png",
    "desc": "Cotton pique cao cấp 220gsm, 2 màu trắng-xanh đồng phục ngân hàng, khách sạn. Đường may kép bền chắc, thêu logo 2 màu."
  },
  {
    "id": "ocsumcaocpnhiu6834",
    "title": "Áo Cá Sấu Mè Cao Cấp Cúc Nhựa Sừng Nhiều Màu",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "images/Áo cá sấu mè cao cấp nhiều/xanh-luc.png",
    "desc": "Cúc nhựa sừng 3 cúc, không gỉ sét, áo mè lỗ thoáng mát. Cotton 100% 180gsm, nhiều màu sắc, tương thích đồng phục doanh nghiệp."
  },
  {
    "id": "ocsumcaocpnhiu8232",
    "title": "Áo Polo Bảo Vệ Phối Sọc Tay Logo In Nổi",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "images/Áo cá sấu mè cao cấp nhiều/xanh.png",
    "desc": "Sọc ngang tay áo 2cm, in logo nổi 3D trước ngực. Vải mè polyester cao cấp, nhẹ 150gsm, màu trắng sọc xanh/đỏ/vàng."
  },
  {
    "id": "ophnquang3311",
    "title": "Áo Phản Quang Vàng 3 Dải EN ISO 20471 Class 2",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (1).png",
    "desc": "Áo vàng Class 2 EN ISO 20471, 2 dải ngang thân + dải vai. Vải polyester 120gsm, dải phản quang 50mm RA≥330 cd/lux/m²."
  },
  {
    "id": "ophnquang4237",
    "title": "Áo Gile Phản Quang Cam Không Tay Cho Công Nhân",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (10).png",
    "desc": "Gile không tay, vải lưới 100% polyester thoáng khí, màu cam ANSI. 3 dải phản quang, khóa kéo trước, điều chỉnh hông bằng quai velcro."
  },
  {
    "id": "ophnquang9501",
    "title": "Áo Phản Quang Dài Tay Chống Mưa Lớp Ngoài",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (11).png",
    "desc": "Áo phản quang tay dài, lớp ngoài vải dù chống mưa nhẹ PU 1000mm. 4 dải phản quang, 2 túi hông zip, dây kéo YKK bền, EN 343."
  },
  {
    "id": "ophnquang698",
    "title": "Áo Bảo Hộ Phản Quang Nhiều Túi Class 3 Xây Dựng",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (12).png",
    "desc": "Class 3 full body, 7 dải phản quang: 2 thân + 2 tay + vai chéo. 5 túi: 2 ngực, 2 hông, 1 sau lưng, vải canvas 180gsm."
  },
  {
    "id": "ophnquang1276",
    "title": "Áo Phản Quang Nhẹ Mesh Lưới Công Trường Ngoài Trời",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (13).png",
    "desc": "Lưới mesh polyester 80gsm siêu nhẹ, thoáng 100%. 2 dải phản quang 50mm, khóa trước, điều chỉnh hông, gọn nhẹ trong ba lô."
  },
  {
    "id": "ophnquang6993",
    "title": "Áo Phản Quang Thoáng Khí Cool Wick Mùa Hè",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (14).png",
    "desc": "Vải Cool Wick thoát ẩm nhanh, nhẹ 90gsm. Dải phản quang bạc 3M 983 bền 50 lần giặt, màu vàng huỳnh quang sáng ngay ngày nhiều mây."
  },
  {
    "id": "ophnquang5577",
    "title": "Bộ Quần Áo Phản Quang Toàn Thân Class 2 Thợ Đường",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (15).png",
    "desc": "Bộ quần áo class 2: áo cam + quần vàng 2 dải hông-cổ chân. Đồng bộ màu phân biệt vai trò, đường may phòng lab chuyên nghiệp."
  },
  {
    "id": "ophnquang2570",
    "title": "Áo Phản Quang Cam Phối Dải Bạc 3M Scotchlite",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (16).png",
    "desc": "Vải polyester cam, dải 3M Scotchlite 983 bạc chính hãng. RA≥550 cd/lux/m² loại 3M, bền mài mòn, 100 lần giặt vẫn sáng."
  },
  {
    "id": "ophnquang9583",
    "title": "Áo Phản Quang Vải Dù Chống Xé Rách Cường Độ Cao",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (17).png",
    "desc": "Vải dù Oxford 600D chịu rách, xé không thủng, chống gió. 3 dải phản quang 50mm trên vải chắc, phù hợp công trường khắc nghiệt."
  },
  {
    "id": "ophnquang7972",
    "title": "Áo Gile Phản Quang Điều Chỉnh Kích Cỡ Dây Kéo",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (18).png",
    "desc": "Khóa kéo 2 bên hông điều chỉnh size S-XL cho 1 áo. Không cần mua nhiều size, tiết kiệm chi phí đặt hàng đồng phục nhóm."
  },
  {
    "id": "ophnquang7841",
    "title": "Áo Phản Quang Kẻ Sọc Dọc Vàng-Cam Nhiều Màu",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (19).png",
    "desc": "Kẻ sọc dọc vàng-cam 2.5cm xen kẽ, tạo hiệu ứng phản quang cả hai màu. Hiển thị tốt hơn khi nhìn ngang, phù hợp cảnh báo đường bộ."
  },
  {
    "id": "ophnquang8533",
    "title": "Áo Phản Quang Có Mũ Chống Mưa Kéo Khóa Toàn Bộ",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (2).png",
    "desc": "Mũ liền áo chống mưa, dây kéo từ cổ xuống đáy áo kín hoàn toàn. Class 2, 4 dải phản quang, vải dù PU 2000mm chống mưa vừa."
  },
  {
    "id": "ophnquang8159",
    "title": "Áo Phản Quang Siêu Nhẹ Thoáng Cho Chạy Bộ Ban Đêm",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (20).png",
    "desc": "Siêu nhẹ 100g/áo polyester nhẹ, gấp vào túi nhỏ 10x10cm. Dành cho người chạy bộ, đi xe đạp ban đêm, không cần bảo hộ cứng."
  },
  {
    "id": "ophnquang9153",
    "title": "Áo Phản Quang Nhân Viên Bảo Vệ Màu Xanh In Chữ",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (21).png",
    "desc": "Màu xanh navy với chữ SECURITY in phản quang sau lưng lớn. Class 1, 2 dải thân, vải polyester 150gsm, phù hợp bảo vệ phòng chức năng."
  },
  {
    "id": "ophnquang3436",
    "title": "Áo Gile Phản Quang 5 Túi Thợ Điện Trước-Sau",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (22).png",
    "desc": "Gile 5 túi: 2 ngực, 2 hông, 1 bên trên thợ điện. Dải phản quang vai+thân, nhiều ngăn đựng dụng cụ nhỏ, phù hợp thợ điện lắp đặt."
  },
  {
    "id": "ophnquang6369",
    "title": "Áo Phản Quang Cho Trẻ Em Đi Học Phản Quang Cao",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (23).png",
    "desc": "Áo trẻ em 4-14 tuổi, dải phản quang cao cấp RA≥1000 cd/lux/m². Màu vàng nổi bật, vải cotton mềm, an toàn học sinh đi bộ đến trường."
  },
  {
    "id": "ophnquang6527",
    "title": "Áo Phản Quang Thể Thao Chạy Đêm Vải Poly Nhẹ",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (24).png",
    "desc": "Thể thao chạy bộ polyester 85g/áo. Dải phản quang 360° cổ-vai-ngực-tay, nhìn rõ từ mọi hướng ban đêm, gọn nhẹ co giãn 4 chiều."
  },
  {
    "id": "ophnquang1249",
    "title": "Áo Phản Quang Cảnh Sát Giao Thông Xanh 3 Dải",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (25).png",
    "desc": "Xanh lá cảnh sát giao thông Class 3, 5 dải full body. Dải 3M chính hãng bạc, in chữ CẢNH SÁT GIAO THÔNG bên lưng theo yêu cầu."
  },
  {
    "id": "ophnquang3413",
    "title": "Áo Gile Bảo Hộ Phản Quang Thợ Hàn Đặc Biệt",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (26).png",
    "desc": "Gile vải dù chống tia lửa hàn, dải phản quang chịu nhiệt 150°C. Dùng thợ hàn trong điều kiện cần nhìn thấy + chống tia lửa bắn."
  },
  {
    "id": "ophnquang5264",
    "title": "Áo Phản Quang Kho Vận Logistics Class 2 Túi Ngực",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (27).png",
    "desc": "Logistics Class 2, túi ngực zip chứa điện thoại, bảng tên. Vải polyester 150gsm, in logo công ty lên lưng theo yêu cầu MOQ 10 áo."
  },
  {
    "id": "ophnquang711",
    "title": "Áo Phản Quang Tích Hợp Đèn LED Chạy Ban Đêm",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (28).png",
    "desc": "Tích hợp dải LED linh hoạt sạc USB, sáng ban đêm 3 chế độ. Ngoài dải phản quang thụ động còn có LED chủ động, an toàn gấp đôi."
  },
  {
    "id": "ophnquang2696",
    "title": "Áo Phản Quang Vàng Chanh Class 2 Thợ Xây Dựng",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (29).png",
    "desc": "Vàng chanh Class 2, sáng nhất trong ánh sáng tự nhiên ban ngày. Dải bạc 50mm, 2 vòng thân+vai, vải 120gsm, ANSI/ISEA 107-2020."
  },
  {
    "id": "ophnquang3320",
    "title": "Áo Phản Quang Toàn Thân Áo Liền Quần Cung Đường",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (3).png",
    "desc": "Áo liền quần (coverall) phản quang cam, Class 3 toàn thân. 7 dải: 2 cổ tay, 2 cổ chân, 2 thân, 1 vai. Kéo khóa trước từ cổ xuống."
  },
  {
    "id": "ophnquang5428",
    "title": "Bộ Áo Phản Quang Đồng Bộ 2 Màu Phân Biệt Vai Trò",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (30).png",
    "desc": "Bộ 2 màu: giám sát=cam, công nhân=vàng. Phân biệt vai trò ngay lập tức trên công trường, giảm nhầm lẫn chỉ đạo."
  },
  {
    "id": "ophnquang2225",
    "title": "Áo Phản Quang Mỏng Nhẹ Thoáng 100g Cực Kỳ Nhẹ",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (31).png",
    "desc": "Siêu nhẹ 100g, vải không dệt polyester 0.1mm. Dùng một lần hoặc một vài lần cho sự kiện, tham quan công trường, khách thăm."
  },
  {
    "id": "ophnquang3209",
    "title": "Áo Phản Quang Chữ In NHÂN VIÊN KỸ THUẬT Lưng",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (32).png",
    "desc": "Chữ in NHÂN VIÊN KỸ THUẬT sau lưng 15cm phản quang. Dải thân đôi Class 2, phân biệt kỹ thuật viên với công nhân phổ thông."
  },
  {
    "id": "ophnquang2369",
    "title": "Áo Phản Quang Gile Kéo Khóa Sườn Điều Chỉnh Co Giãn",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (33).png",
    "desc": "Kéo khóa 2 bên hông liên kết đai lưng co giãn. Điều chỉnh vòng eo 60-120cm mà không cần đặt nhiều size, tiết kiệm tồn kho."
  },
  {
    "id": "ophnquang1694",
    "title": "Áo Phản Quang Nữ Ôm Dáng Không Lỏng Kho Vận",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (34).png",
    "desc": "Cắt may ôm dáng nữ, không rộng thùng thình. Vải polyester 150gsm, dải phản quang đúng tiêu chuẩn EN ISO 20471 Class 2."
  },
  {
    "id": "ophnquang6882",
    "title": "Áo Phản Quang Nhiệt Hạch Màu Cam/Vàng Theo Yêu Cầu",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (35).png",
    "desc": "In logo, tên công ty, mã màu theo yêu cầu. Vải 120gsm, dải chuẩn Class 2, MOQ 20 áo, giao hàng 7-10 ngày làm việc."
  },
  {
    "id": "ophnquang6095",
    "title": "Áo Phản Quang Dây Kéo YKK Khóa Kim Loại Bền",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (36).png",
    "desc": "Dây kéo YKK Japan chính hãng, cụm khóa kim loại kẽm. Bền hơn 200% so với khóa nhựa thông thường, không kẹt sau 1000 lần kéo."
  },
  {
    "id": "ophnquang7405",
    "title": "Áo Phản Quang Thoáng Khí 3 Dải 5cm Mềm Không Cứng",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (37).png",
    "desc": "Dải phản quang mềm không cứng, uốn cong theo cơ thể. 3 dải 5cm trên vải 150gsm, thoáng không đổ mồ hôi, rửa tay thường xuyên."
  },
  {
    "id": "ophnquang871",
    "title": "Áo Gile Phản Quang Có Nút Trên Vai Thoáng Mát Nhất",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (38).png",
    "desc": "Nút chống vai thoáng mát nhất, không che kín toàn bộ vai. Phù hợp thời tiết nóng ẩm Việt Nam, thoáng gió từ vai xuống."
  },
  {
    "id": "ophnquang6830",
    "title": "Áo Phản Quang Bọc Ngực Chắc Chắn Vai Rộng",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (39).png",
    "desc": "Vai rộng 8cm bảo vệ khớp vai khỏi va đập nhẹ ngoài tác dụng phản quang. Dải ngực đôi ôm tốt, kích thước S/M/L/XL/XXL."
  },
  {
    "id": "ophnquang7047",
    "title": "Áo Phản Quang Đa Năng Kết Hợp Áo Khoác Gió",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (4).png",
    "desc": "Tháo ra là áo khoác gió thường, mặc vào có 3 dải phản quang. Đa năng cho người hay di chuyển giữa khu vực an toàn và nguy hiểm."
  },
  {
    "id": "ophnquang7934",
    "title": "Áo Phản Quang Màu Xanh Biển Navy Cho Bảo Vệ",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (40).png",
    "desc": "Màu xanh navy bảo vệ với dải phản quang bạc, chuyên nghiệp hơn cam/vàng. Class 1, phù hợp bảo vệ cơ sở chính phủ, trung tâm thương mại."
  },
  {
    "id": "ophnquang5481",
    "title": "Áo Phản Quang Cam Lớp Lưới Bên Trong Mát Hơn",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (41).png",
    "desc": "Lớp lưới bên trong tạo khe thoáng khí 5mm. Kết hợp cam và dải bạc, thêm lớp lưới vẫn đạt Class 2, mát hơn 30% theo đánh giá người dùng."
  },
  {
    "id": "ophnquang6883",
    "title": "Áo Phản Quang Cổ Bo Gile Không Tay Khóa Vải",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (42).png",
    "desc": "Cổ bẻ bo vải mềm thay vì cổ đứng cứng. Kết thúc gile bằng khóa vải velcro ôm cổ, không gió lọt vào cổ mùa lạnh."
  },
  {
    "id": "ophnquang6400",
    "title": "Áo Phản Quang Chữ In SECURITY Phân Biệt Ngay",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (43).png",
    "desc": "In phản quang chữ SECURITY sau lưng lớn 20x5cm. Phân biệt ngay lập tức bảo vệ với công nhân từ xa 50m kể cả ban đêm."
  },
  {
    "id": "ophnquang8155",
    "title": "Áo Gile Phản Quang Thêu Logo Công Ty Theo Yêu Cầu",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (44).png",
    "desc": "Thêu logo theo mẫu khách hàng, tối đa 5 màu chỉ. MOQ 10 áo, thời gian 7 ngày, màu logo không phai sau 100 lần giặt."
  },
  {
    "id": "ophnquang2087",
    "title": "Áo Phản Quang Class 3 Tay Dài Dải Vai-Hông-Tay",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (45).png",
    "desc": "Class 3 tay dài, 7 dải: 2 thân + 2 tay + 2 vai chéo + 1 hông. Tiêu chuẩn cao nhất EN ISO 20471:2013, phù hợp cảnh báo cấp cao."
  },
  {
    "id": "ophnquang6950",
    "title": "Áo Phản Quang Mùa Đông Lót Lông Ấm Bên Trong",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (46).png",
    "desc": "Lót lông nhân tạo Polar Fleece 200gsm bên trong áo dù. Ấm đến -10°C, dải phản quang Class 2 vẫn sáng, dây kéo kín cổ."
  },
  {
    "id": "ophnquang7553",
    "title": "Áo Phản Quang 4 Túi Zip Chuyên Nghiệp Kỹ Thuật",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (47).png",
    "desc": "4 túi zip: 2 ngực (điện thoại+máy đo) + 2 hông (dây cáp+đồng hồ). Thợ kỹ thuật mang đủ dụng cụ mà không cần ba lô."
  },
  {
    "id": "ophnquang847",
    "title": "Áo Phản Quang Cảnh Báo Khẩn Cam Sáng Cường Độ Cao",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (48).png",
    "desc": "Cam sáng nhất có thể (fluorescent orange ANSI), Class 2. Dải 3M bạc cường độ cao RA≥550, nhìn rõ 300m ban đêm có đèn pha."
  },
  {
    "id": "ophnquang1842",
    "title": "Áo Phản Quang Hữu Cơ Tái Chế Eco-Friendly RPET",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (49).png",
    "desc": "Vải RPET từ chai nhựa tái chế, giảm 50% carbon footprint. Dải phản quang 3M cũng từ polyester tái chế, EN ISO 20471 Class 2."
  },
  {
    "id": "ophnquang9332",
    "title": "Áo Phản Quang Dạng Yếm Hai Dải Bụng Kèm Lưng",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (5).png",
    "desc": "Yếm 2 dải bụng kết hợp 2 dải lưng, kiểu phổ biến châu Âu. Vải polyester nhẹ, buộc hông, không cần mặc áo phản quang toàn bộ."
  },
  {
    "id": "ophnquang4604",
    "title": "Áo Phản Quang Vải Dù Oxford 600D Chắc Bền",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (50).png",
    "desc": "Oxford 600D dệt hai lớp, chịu rách theo tiêu chuẩn EN 388 cấp 2. Phù hợp công trường bê tông, thép, môi trường mài mòn cao."
  },
  {
    "id": "ophnquang7581",
    "title": "Bộ Áo Phản Quang Cho Cả Nhóm 10 Áo Đồng Nhất",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (51).png",
    "desc": "Đặt theo nhóm 10 áo in logo, tên công ty đồng nhất. Màu vàng/cam class 2, giao đồng bộ, tiết kiệm 15% so với đặt lẻ."
  },
  {
    "id": "ophnquang7819",
    "title": "Áo Phản Quang Bền Hơn Dải 3M 983 Chống Mài Mòn",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (52).png",
    "desc": "Dải 3M 983 chống mài mòn, tẩy rửa mạnh vẫn sáng. Bền 100 lần giặt máy, 3 lần lăn sơn, vẫn đạt RA≥330 cd/lux/m². Bảo hành 1 năm."
  },
  {
    "id": "ophnquang9280",
    "title": "Áo Phản Quang Có Dải Phản Quang Vai-Ngực-Hông",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (53).png",
    "desc": "5 dải phản quang: 2 thân ngang + 2 vai chéo + 1 ngực dọc. Bao phủ 360° quan sát từ mọi góc độ, phù hợp làm đường, giao lộ."
  },
  {
    "id": "ophnquang9500",
    "title": "Áo Phản Quang Thêu Tên Cá Nhân Theo Yêu Cầu",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (54).png",
    "desc": "Thêu tên cá nhân, mã số nhân viên lên ngực phải. MOQ 1 áo, thêu máy công nghiệp không phai, màu chỉ theo yêu cầu."
  },
  {
    "id": "ophnquang2667",
    "title": "Áo Gile Phản Quang Ẩm Thực Nhà Hàng Nhân Viên Phục Vụ",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (55).png",
    "desc": "Áo gile nhà hàng-ẩm thực nhân viên phục vụ nhận biết. Màu xanh hoặc đen, dải phản quang 2.5cm mảnh, lịch sự không quá an toàn công nghiệp."
  },
  {
    "id": "ophnquang9445",
    "title": "Áo Phản Quang Công Ty In Logo Nhanh Chỉnh Sửa Được",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (56).png",
    "desc": "Thêu logo công ty trong 3 ngày, sửa mẫu tùy ý trước khi sản xuất. Vải 150gsm, Class 2, đặt tối thiểu 10 áo, giao 5-7 ngày."
  },
  {
    "id": "ophnquang7012",
    "title": "Áo Phản Quang Loại 1 Nhẹ Nhàng Chạy Xe Đạp",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (57).png",
    "desc": "Loại 1 Class 1 nhẹ nhất, dải phản quang tối thiểu theo tiêu chuẩn. Thoải mái cho xe đạp thể thao, chạy chậm, đi bộ ban đêm."
  },
  {
    "id": "ophnquang4998",
    "title": "Áo Phản Quang Nhân Viên Giao Hàng Tốc Hành",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (58).png",
    "desc": "Giao hàng: in hoặc thêu tên, mã đơn hàng. Màu cam Class 2, nhân viên shipper nhận biết ngay giữa dòng xe cộ đông đúc."
  },
  {
    "id": "ophnquang5823",
    "title": "Áo Phản Quang Nhân Viên Dọn Vệ Sinh Cam Đặc Biệt",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (59).png",
    "desc": "Màu cam đặc biệt phối dải phản quang cổ tay viền xanh lam. Phân biệt ngay nhân viên vệ sinh môi trường, đẹp và an toàn."
  },
  {
    "id": "ophnquang4945",
    "title": "Áo Gile Phản Quang Lý Tưởng Cho Nhân Viên Sân Bay",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (6).png",
    "desc": "Sân bay, cảng hàng không: màu vàng-cam nổi bật trên băng chuyền. 3 dải thân + 2 dải vai, phù hợp nhân viên điều hướng sân đỗ."
  },
  {
    "id": "ophnquang9003",
    "title": "Áo Phản Quang Đường Sắt Đô Thị MRT Xanh Lá",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (60).png",
    "desc": "Màu xanh lá MRT/đường sắt, in số hiệu tuyến sau lưng. Class 2, thợ bảo trì đường ray dễ nhận biết, bền dầu mỡ đường sắt."
  },
  {
    "id": "ophnquang4497",
    "title": "Áo Phản Quang Bảo Hộ Cảnh Báo Cho Lái Xe",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (61).png",
    "desc": "Áo phản quang dành cho lái xe: mặc khi xuống xe trên đường. Thiết kế gọn nhẹ gấp vào hộp cốp xe, bắt buộc theo nghị định giao thông."
  },
  {
    "id": "ophnquang2260",
    "title": "Áo Phản Quang Ngày-Đêm Cả Năm Mọi Thời Tiết",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (62).png",
    "desc": "Dùng cả ngày và đêm, trời nắng và mưa, mùa hè và mùa đông. Vải dù chống mưa nhẹ, dải phản quang bền thời tiết, Class 2."
  },
  {
    "id": "ophnquang2782",
    "title": "Áo Phản Quang Tay Ngắn Hãy Bắt Đầu An Toàn",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (63).png",
    "desc": "Tay ngắn phổ thông, Class 2, phù hợp mọi lứa tuổi công nhân. Giá tốt nhất phân khúc, mua số lượng lớn chiết khấu 20-30%."
  },
  {
    "id": "ophnquang7413",
    "title": "Áo Phản Quang Vải Thun Phối Dải Thêm Ấm Mùa Lạnh",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (64).png",
    "desc": "Vải thun phối dải phản quang 2.5cm, co giãn 4 chiều. Ấm hơn vải dù mùa lạnh, không bị gió lọt vào, phù hợp thời tiết Hà Nội."
  },
  {
    "id": "ophnquang4914",
    "title": "Áo Phản Quang Chuyên Dụng Cho Cẩu Tháp Xây Dựng",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (7).png",
    "desc": "Cẩu tháp cần hiển thị tốt ở độ cao 100m+. Class 3, 7 dải chuẩn, dải 3M chính hãng bạc nhìn rõ từ đất lên bằng mắt thường."
  },
  {
    "id": "ophnquang3873",
    "title": "Áo Phản Quang Áo Liền Quần Thùng Thầu Công Trình",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (8).png",
    "desc": "Áo liền quần toàn thân công trình, kéo khóa từ cổ xuống đáy. 5 dải phản quang, Class 3, vải dù chắc bền, nhiều túi đựng dụng cụ."
  },
  {
    "id": "ophnquang5242",
    "title": "Áo Phản Quang Gile Ngắn Tới Bụng Gọn Nhẹ",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "images/Áo Phản Quang/ao-phan-quang (9).png",
    "desc": "Gile ngắn đến eo, không che quần áo bên dưới. Nhẹ 120g, gấp nhỏ bằng nắm tay, phù hợp cất gọn trong xe tải/balo."
  },
  {
    "id": "bohpccc2473",
    "title": "Quần Áo Chữa Cháy Tiếp Cận Khu Vực Khói Lửa",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (1).png",
    "desc": "Quần áo 2 lớp: ngoài Nomex chịu lửa, trong cách nhiệt Kevlar. Tiêu chuẩn EN 469:2020, mức 2, dải phản quang bạc chịu nhiệt."
  },
  {
    "id": "bohpccc4537",
    "title": "Mũ Chống Nhiệt PCCC Nomex Vành Toàn Phần",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (2).png",
    "desc": "Mũ Nomex/Kevlar, vành che toàn mặt khi hạ xuống. Liner bên trong cách nhiệt, dây cằm co giãn, NFPA 1971 Structural."
  },
  {
    "id": "bohpccc7043",
    "title": "Giày Chữa Cháy Cao Cổ Mũi Thép Lót Chì",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (3).png",
    "desc": "Giày da bò cao 30cm mũi thép 200J, lót chì chống đâm xuyên đinh. Đế cao su chịu nhiệt 300°C, EN 345 SB+P+A+WR, phản quang."
  },
  {
    "id": "bohpccc1694",
    "title": "Găng Tay Chữa Cháy Nomex Cách Nhiệt 3 Lớp",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (4).png",
    "desc": "Găng 3 lớp: Nomex ngoài, Kevlar bọc, cotton hút ẩm trong. Chịu nhiệt tiếp xúc 100°C 10s, bức xạ 10kW/m², NFPA 1971."
  },
  {
    "id": "bohpccc1571",
    "title": "Đai Thắt Lưng PCCC Da Bò Kèm Móc Dụng Cụ",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (5).png",
    "desc": "Đai da bò 5cm, khóa nhanh, móc dụng cụ D-ring x4, vòng cho dây cứu hộ. Chịu lực 1500N, không bắt lửa, màu đen EN 340."
  },
  {
    "id": "bohpccc3756",
    "title": "Mặt Nạ Khói Lửa SCBA Bình Khí 30 Phút",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (6).png",
    "desc": "Mặt nạ khép kín toàn mặt + bình khí nén 30 phút 300 bar. SCBA tự cung cấp, trọng lượng 9kg, tự kiểm tra khi mở van."
  },
  {
    "id": "bohpccc2892",
    "title": "Bộ Quần Áo Chuyên Dụng Tiếp Cận Lửa Hóa Học",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (7).png",
    "desc": "Bộ đặc biệt tiếp cận lửa hóa học, lớp ngoài Zetex chịu 1000°C. Có mũ trùm, kính mặt, găng dài 45cm, giày phủ ngoài."
  },
  {
    "id": "bohpccc3705",
    "title": "Áo Chống Cháy Nomex FR Tiêu Chuẩn NFPA 1971",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "images/Đồ bảo hộ PCCC/do-bao-ho-pccc (8).png",
    "desc": "Áo Nomex III® FR dày 4.5oz chịu hồ quang 8cal/cm². NFPA 1971 Proximity, phản quang 3M, cài Velcro nhanh, dùng cứu hỏa cấu trúc."
  },
  {
    "id": "imaophao3250",
    "title": "Áo Mưa Bộ PVC 2 Mảnh Phản Quang Công Trường",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (1).png",
    "desc": "Bộ PVC 2 mảnh áo+quần, dày 0.2mm, dải phản quang bạc. Dùng công trường ngoài trời, mưa to không thấm, khóa kéo bền, size S-3XL."
  },
  {
    "id": "imaophao3269",
    "title": "Áo Phao Cứu Sinh Loại I CGA Inshore SOLAS",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (10).png",
    "desc": "Áo phao loại I CGA 150N tự phồng khi tiếp nước hoặc kéo tay. Cổ kéo dựng đầu, giữ mặt nổi mặt nước, SOLAS khuyến nghị tàu biển."
  },
  {
    "id": "imaophao4265",
    "title": "Áo Mưa Bộ EVA Nhẹ Gấp Gọn Đi Phượt Leo Núi",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (11).png",
    "desc": "EVA foam 8mm nhẹ 150g/bộ, gấp vào túi 15x10cm. Chống thấm PU 5000mm, dây mũ điều chỉnh, dùng đi xe máy, leo núi, phượt."
  },
  {
    "id": "imaophao849",
    "title": "Phao Bơi Ôm Vải Cam Cứu Hộ Hình Vành Khăn",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (12).png",
    "desc": "Phao ôm vành khăn foam EPE Ø66cm, vải cam cứu hộ phản quang. Nổi 180N, gắn dây 30m kèm túi lưới, dùng cứu hộ hồ bơi, bãi biển."
  },
  {
    "id": "imaophao334",
    "title": "Áo Mưa Có Mũ Liền Vải Dù Chống Thấm PU 3000mm",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (2).png",
    "desc": "Mũ liền thân áo kéo khóa, vải dù taffeta PU 3000mm. Nhẹ 300g, cất gọn túi hông, thoáng tay áo đàn hồi, màu xanh/đỏ/vàng."
  },
  {
    "id": "imaophao3588",
    "title": "Áo Phao Bơi Lội Trẻ Em Cánh Tay Phao Inflatable",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (3).png",
    "desc": "Phao bơi trẻ em 3-6 tuổi, 2 cánh tay phao inflatable. Màu cam/xanh, khóa an toàn không tự tháo, dùng hồ bơi, biển có giám sát."
  },
  {
    "id": "imaophao9168",
    "title": "Áo Mưa Bộ PEVA Không Mùi Hóa Chất Thân Thiện",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (4).png",
    "desc": "Vải PEVA không PVC không BPA không mùi. Nhẹ 200g/bộ, chống thấm tốt, thân thiện da nhạy cảm, tái chế được sau khi dùng."
  },
  {
    "id": "imaophao619",
    "title": "Áo Phao Thuyền Kayak Buoyancy Aid Class 50N",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (5).png",
    "desc": "Áo phao kayak Buoyancy Aid 50N, vải nylon nhẹ. Không phồng khi khô, ôm người tự do bơi, 6 móc điều chỉnh, khoang giữ foam."
  },
  {
    "id": "imaophao1202",
    "title": "Áo Mưa Siêu Nhẹ 100g Pocket Poncho Compact",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (6).png",
    "desc": "Poncho siêu nhẹ 100g, vải ripstop nhỏ gọn cất túi áo. Mặc nhanh 5 giây từ trên đầu xuống, dùng xem bóng đá, dã ngoại ngắn."
  },
  {
    "id": "imaophao1620",
    "title": "Áo Phao Bán Tự Động 150N SOLAS Thuyền Viên",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (7).png",
    "desc": "Áo phao 150N bán tự động: kéo chốt phồng trong 5s hoặc tự động khi ngâm nước 10s. SOLAS thuyền viên, đèn flash+còi+gương."
  },
  {
    "id": "imaophao1376",
    "title": "Bộ Áo Mưa Đi Làm Đồng Bộ Mũ-Áo-Quần Phản Quang",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (8).png",
    "desc": "Bộ đồng bộ mũ-áo-quần phản quang cho đi làm mưa. Vải PVC nhẹ 0.15mm, dải bạc nhìn rõ đêm mưa, kéo khóa mũ điều chỉnh."
  },
  {
    "id": "imaophao5174",
    "title": "Áo Phao Trẻ Em Có Tay Nổi Nước 25-40kg Học Bơi",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (9).png",
    "desc": "Áo phao trẻ em 25-40kg, tay nổi EVA bên sườn. Khóa 3 điểm cẩn thận không tháo được, cổ cao đỡ đầu trẻ, màu sặc sỡ dễ tìm."
  },
  {
    "id": "ngphcbov3235",
    "title": "Bộ Đồng Phục Bảo Vệ Nam Áo Sơ Mi Dài Tay Xanh Đen",
    "cat": "cat31",
    "catLabel": "Đồng Phục Bảo Vệ",
    "img": "images/Đồng Phục Bảo Vệ/ao-trang-bao-ve.png",
    "desc": "Áo sơ mi dài tay polyester 65/35, quần tây ống thẳng. Màu xanh đen, đường may kép chắc chắn, phù hợp bảo vệ tòa nhà văn phòng."
  },
  {
    "id": "ngphcbov496",
    "title": "Bộ Đồng Phục Bảo Vệ Nữ Áo Sơ Mi Váy Chuyên Nghiệp",
    "cat": "cat31",
    "catLabel": "Đồng Phục Bảo Vệ",
    "img": "images/Đồng Phục Bảo Vệ/ao-xanh-bao-ve.png",
    "desc": "Áo sơ mi nữ ôm dáng, váy đến đầu gối. Vải polyester mềm mại, màu xanh nhạt-trắng, đường may tinh tế, chuyên nghiệp dịch vụ."
  },
  {
    "id": "ngphcbov9763",
    "title": "Bộ Đồng Phục Bảo Vệ Mùa Hè Áo Ngắn Tay Quần Tây",
    "cat": "cat31",
    "catLabel": "Đồng Phục Bảo Vệ",
    "img": "images/Đồng Phục Bảo Vệ/ao-xanh-luc-bao-ve.png",
    "desc": "Áo ngắn tay cotton pique 65/35, quần tây nhẹ thoáng. Mùa hè dành riêng, màu xanh navy, dây đai da tổng hợp đi kèm."
  },
  {
    "id": "ngphcbovnew5572",
    "title": "Bộ Đồng Phục Bảo Vệ Mới Thiết Kế Phong Cách Hiện Đại",
    "cat": "cat32",
    "catLabel": "Đồng Phục Bảo Vệ NEW",
    "img": "images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (1).png",
    "desc": "Thiết kế 2025 phong cách hiện đại, phối màu navy-đen. Vải TR 65/35 cao cấp chống nhăn, dễ ủi, đường may nghiêng tạo cảm giác thon."
  },
  {
    "id": "ngphcbovnew4336",
    "title": "Đồng Phục Bảo Vệ NEW Kiểu Tactical Nhiều Túi",
    "cat": "cat32",
    "catLabel": "Đồng Phục Bảo Vệ NEW",
    "img": "images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (2).png",
    "desc": "Kiểu tactical nhiều túi hộp: 2 ngực, 2 hông, 2 đùi. Vải ripstop chống rách, co giãn nhẹ, phù hợp bảo vệ năng động, tuần tra nhiều."
  },
  {
    "id": "ngphcbovnew1999",
    "title": "Bộ Đồng Phục Bảo Vệ Cao Cấp Collection 2025 Mới",
    "cat": "cat32",
    "catLabel": "Đồng Phục Bảo Vệ NEW",
    "img": "images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (3).png",
    "desc": "Bộ cao cấp 2025 vải jacquard dệt tên công ty vào vải. Không cần thêu logo riêng, cúc inox, dây kéo YKK, lót vải mềm trong."
  },
  {
    "id": "ngbohlaong4449",
    "title": "Ủng Bảo Hộ PVC Mũi Thép Chống Hóa Chất Cao 35cm",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (10).png",
    "desc": "PVC nguyên sinh cổ cao 35cm, mũi thép 200J, lót thép chống đâm xuyên. Chống acid loãng, kiềm nhẹ, dầu mỡ. EN ISO 20345 S5."
  },
  {
    "id": "ngbohlaong3718",
    "title": "Ủng Cao Su Tự Nhiên Mũi Thép Chống Điện 1000V",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (11).png",
    "desc": "Cao su lưu hóa tự nhiên cổ cao 38cm, mũi thép 200J. Cách điện 1000V AC/1500V DC IEC 60745, dùng thợ điện đứng nước."
  },
  {
    "id": "ngbohlaong7981",
    "title": "Ủng Đi Mưa Thấp Cổ Cao Su Mỏng Phản Quang",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (12).png",
    "desc": "Cổ thấp 18cm cao su mỏng nhẹ, đế phẳng SRA chống trơn dầu ăn. Phản quang bên ngoài, đi mưa hoặc vệ sinh nhà máy thực phẩm."
  },
  {
    "id": "ngbohlaong9783",
    "title": "Ủng Bảo Hộ Cổ Cao 40cm Lót Thép Đi Nơi Ẩm Ướt",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (13).png",
    "desc": "Cổ cao 40cm che đùi, mũi thép 200J, lót thép. Dùng đi lội sình lầy nông nghiệp, công trường nước ngập, bảo tồn đất ướt."
  },
  {
    "id": "ngbohlaong3705",
    "title": "Ủng PVC Ngắn Cổ 20cm Chống Trơn SRA Nhà Máy",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (14).png",
    "desc": "Cổ ngắn 20cm PVC, đế xẻ rãnh sâu chống trơn SRA. Nhẹ 600g/đôi, phù hợp kho mát thực phẩm, nhà máy bia, xưởng rửa xe."
  },
  {
    "id": "ngbohlaong4922",
    "title": "Ủng Cao Su Đen Dày 4mm Mũi Thép Công Trường",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (15).png",
    "desc": "Cao su đen dày 4mm cổ cao 35cm, mũi thép đúc liền. Chịu lực va 200J, nén 15kN, không thấm nước, phù hợp công trường xây dựng."
  },
  {
    "id": "ngbohlaong312",
    "title": "Ủng Bảo Hộ Nhiệt Cách Nhiệt Đến -40°C Kho Lạnh",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (16).png",
    "desc": "Cách nhiệt lõi foam đặc biệt đến -40°C, cổ cao 38cm. Đế cao su không cứng giòn mùa đông, lót vải fleece giữ ấm, kho đông lạnh."
  },
  {
    "id": "ngbohlaong4567",
    "title": "Ủng Chống Axit Đặc Biệt PVC Vàng Kho Hóa Chất",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (17).png",
    "desc": "PVC màu vàng đặc biệt nhận biết khu vực hóa chất. Chống H₂SO₄ 20%, HCl 10%, NaOH 30%, dài 40cm bảo vệ đến bắp chân."
  },
  {
    "id": "ngbohlaong2487",
    "title": "Ủng Thể Thao Bảo Hộ Mũi Composite Nhẹ Nhà Máy",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (18).png",
    "desc": "Mũi composite không kim loại, nhẹ hơn mũi thép 30%. Nhựa ABS mũi, đế EVA+cao su nhẹ, phù hợp nhà máy cần không có từ tính."
  },
  {
    "id": "ngbohlaong5064",
    "title": "Ủng Cao Su Màu Xanh Lá Thực Phẩm Chứng Nhận HACCP",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (19).png",
    "desc": "Cao su xanh lá HACCP chứng nhận, mũi nhựa ABS không kim loại. Dùng chế biến thực phẩm, bếp nhà hàng, kho lạnh thực phẩm."
  },
  {
    "id": "ngbohlaong8672",
    "title": "Ủng Bảo Hộ Cứng ABS Chống Tĩnh Điện ESD Phòng Sạch",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (20).png",
    "desc": "ABS cứng ESD điện trở 10⁶-10⁹Ω, mũi nhựa không từ tính. Phòng sạch ISO, vùng nổ ATEX zone 1-2, dùng chip điện tử, dầu khí."
  },
  {
    "id": "ngbohlaong3447",
    "title": "Ủng Lội Suối Cao Su Nhẹ EVA Đánh Cá Ngoài Trời",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (21).png",
    "desc": "EVA nguyên khối siêu nhẹ 300g/đôi, không thấm nước. Dùng đánh cá, lội suối nhẹ, nông nghiệp, không có mũi bảo vệ."
  },
  {
    "id": "ngbohlaong4173",
    "title": "Ủng Bảo Hộ Lớp Lót Flannel Giữ Ấm Mùa Đông",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-bao-ho (22).png",
    "desc": "Lót flannel polyester 3mm giữ ấm đến 0°C. PVC cổ cao 30cm, mũi thép 200J, dùng kho lạnh thực phẩm không quá lạnh."
  },
  {
    "id": "ngbohlaong6370",
    "title": "Ủng PVC Phản Quang 3 Dải Công Trường Ban Đêm",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (1).png",
    "desc": "Dải phản quang 3 vòng 25mm bên ngoài ủng PVC. Nhìn rõ ban đêm từ 80m, công nhân công trường tối hoặc đêm muộn."
  },
  {
    "id": "ngbohlaong374",
    "title": "Ủng An Toàn Cao Su Khoản Cổ Điều Chỉnh Kéo Khóa",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (2).png",
    "desc": "Cao su cổ cao có khóa kéo bên sườn dễ mang-tháo nhanh. Điều chỉnh bắp chân qua khóa cài bằng kim loại inox, mũi thép 200J."
  },
  {
    "id": "ngbohlaong4247",
    "title": "Ủng Bảo Hộ Chống Đinh Lót Thép Mũi Thép SB+P",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (3).png",
    "desc": "Mũi thép 200J + lót thép chống đâm xuyên đinh. Tiêu chuẩn SB+P EN ISO 20345, cao su dày 4mm, cổ 32cm, không thấm nước."
  },
  {
    "id": "ngbohlaong6945",
    "title": "Ủng Chống Nước Thoáng Khí Gore-Tex Mũi Composite",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (4).png",
    "desc": "Màng Gore-Tex 3 lớp chống thấm tuyệt đối thoáng hơi. Mũi composite nhẹ 200J, đế cao su SRC chống trơn, phù hợp địa hình ướt-khô."
  },
  {
    "id": "ngbohlaong6900",
    "title": "Ủng Bảo Hộ Thời Trang PU Mũi Thép Thiết Kế Hiện Đại",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (5).png",
    "desc": "Thiết kế thời trang PU leather bóng, mũi thép ẩn không lộ. Đế cao su thời trang SRA, phù hợp nhân viên kho thương mại, showroom."
  },
  {
    "id": "ngbohlaong3837",
    "title": "Ủng Làm Ruộng Nông Nghiệp Cao Su Nhẹ Cổ Ngắn",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (6).png",
    "desc": "Cao su thiên nhiên mỏng nhẹ 400g cổ ngắn 20cm. Dùng ruộng lúa, đi vườn, thu hoạch rau củ, không cần bảo vệ mũi."
  },
  {
    "id": "ngbohlaong343",
    "title": "Ủng Bảo Hộ Cao Cấp Nhật Bản Mishima Mũi Thép JIS",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (7).png",
    "desc": "Nhật Bản Mishima JIS T8101, mũi thép 200J tiêu chuẩn Nhật. Cao su tự nhiên cổ cao 38cm, chất lượng xuất khẩu, bền 3-5 năm sử dụng."
  },
  {
    "id": "ngbohlaong900",
    "title": "Ủng Đi Biển Lội Sình Lầy EVA Đúc Nguyên Khối",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (8).png",
    "desc": "EVA đúc nguyên khối không đường may, không thấm nước tuyệt đối. Nhẹ 350g, lội sình lầy, ruộng, biển, dễ rửa sạch ngay vòi nước."
  },
  {
    "id": "ngbohlaong8991",
    "title": "Ủng Chống Trượt Bếp Nhà Hàng SRA Cao Su Phẳng",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "images/Ủng bảo hộ lao động/ung-lao-dong (9).png",
    "desc": "Cao su phẳng đế 5mm rãnh phẳng chống trơn sàn gạch bếp. SRA tiêu chuẩn, cổ thấp 15cm, không có mũi bảo vệ, gọn nhẹ bếp nhà hàng."
  }
];
let currentCat = 'all';
let currentSort = 'default';
let currentPage = 1;
const itemsPerPage = 12;

function countByCat(cat){
    return cat === 'all' ? products.length : products.filter(p => p.cat === cat).length;
}

function updateCounts(){
    ['all', 'cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9', 'cat10', 'cat11', 'cat12', 'cat13', 'cat14', 'cat15', 'cat16', 'cat17', 'cat18', 'cat19', 'cat20', 'cat21', 'cat22', 'cat23', 'cat24', 'cat25', 'cat26', 'cat27', 'cat28', 'cat29', 'cat30', 'cat31', 'cat32', 'cat33'].forEach(c => {
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
    
    grid.innerHTML = paginatedList.map(p => '<div class="product-card group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"><div class="relative aspect-[4/5] bg-gray-50 overflow-hidden cursor-pointer" onclick="openLightbox(' + JSON.stringify(p).replace(/"/g, '&quot;') + ')"><img alt="' + p.title + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="' + p.img + '" onerror="this.src=\'data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' width=\\\'200\\\' height=\\\'200\\\'%3E%3Crect fill=\\\'%23f1f5f9\\\' width=\\\'200\\\' height=\\\'200\\\'/%3E%3C/svg%3E\'"><div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 gap-4"><a href="tel:0931160818" onclick="event.stopPropagation()" class="w-full py-4 bg-[#1D5FA8] text-white text-xs font-bold rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:bg-[#164A85] transition-colors btn-press"><span class="material-symbols-outlined text-[18px]">chat_bubble</span> LIÊN HỆ VỚI CHÚNG TÔI</a><button onclick="event.stopPropagation(); openLightbox(' + JSON.stringify(p).replace(/"/g, '&quot;') + ')" class="w-full py-4 bg-white text-[#1A2744] text-xs font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E8A500] hover:text-white transition-colors btn-press"><span class="material-symbols-outlined text-[18px]">visibility</span> XEM CHI TIẾT</button></div></div><div class="p-6 text-center"><p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 truncate">' + p.catLabel + '</p><h3 class="font-bold text-lg text-[#1A2744] group-hover:text-[#1D5FA8] transition-colors mb-2 truncate">' + p.title + '</h3><p class="text-sm font-bold text-[#E8A500]">Liên hệ để biết giá</p></div></div>').join('');

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
    var descEl = document.getElementById('lbDesc');
    if(descEl && p.desc) descEl.textContent = p.desc;
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
