const products = [
  {
    "id": "aogilekysuao1",
    "title": "Áo Gile Kỹ Sư - 001",
    "cat": "cat1",
    "catLabel": "ÁO GILE KỸ SƯ – ÁO GILE CÔNG TRÌNH",
    "subcat": "cat1_s1",
    "subcatLabel": "ÁO GILE KỸ SƯ – ÁO GILE CÔNG TRÌNH",
    "img": "../images/ÁO GILE KỸ SƯ – ÁO GILE CÔNG TRÌNH/ÁO GILE KỸ SƯ – ÁO GILE CÔNG TRÌNH/bia-ao-ghile.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "aophanquangk2",
    "title": "Áo Phản Quang Kiểu 3m Cao Cấp - 001",
    "cat": "cat2",
    "catLabel": "ÁO PHẢN QUANG",
    "subcat": "cat2_s1",
    "subcatLabel": "Áo Phản Quang Kiểu 3M Cao Cấp – Thiết Kế Hiện Đại An Toàn Khi Làm Việc",
    "img": "../images/ÁO PHẢN QUANG/Áo Phản Quang Kiểu 3M Cao Cấp – Thiết Kế Hiện Đại An Toàn Khi Làm Việc/bia-ao-phan-quang-kieu-3m.png",
    "desc": "Áo vàng Class 2 EN ISO 20471, 2 dải ngang thân + dải vai. Vải polyester 120gsm, dải phản quang 50mm RA≥330 cd/lux/m²."
  },
  {
    "id": "aophanquangl3",
    "title": "Áo Phản Quang Lưới Thun 2 Bên Cao Cấp - 001",
    "cat": "cat2",
    "catLabel": "ÁO PHẢN QUANG",
    "subcat": "cat2_s2",
    "subcatLabel": "Áo Phản Quang Lưới Thun 2 Bên Cao Cấp – Thoáng Mát, Nhẹ, An Toàn",
    "img": "../images/ÁO PHẢN QUANG/Áo Phản Quang Lưới Thun 2 Bên Cao Cấp – Thoáng Mát, Nhẹ, An Toàn/bia-ao-phan-quang-thun-2-ben.png",
    "desc": "Áo vàng Class 2 EN ISO 20471, 2 dải ngang thân + dải vai. Vải polyester 120gsm, dải phản quang 50mm RA≥330 cd/lux/m²."
  },
  {
    "id": "aophanquangp4",
    "title": "Áo Phản Quang Palize Cao Cấp - 001",
    "cat": "cat2",
    "catLabel": "ÁO PHẢN QUANG",
    "subcat": "cat2_s3",
    "subcatLabel": "Áo Phản Quang Palize Cao Cấp – An Toàn, Thoáng Mát, May Theo Yêu Cầu",
    "img": "../images/ÁO PHẢN QUANG/Áo Phản Quang Palize Cao Cấp – An Toàn, Thoáng Mát, May Theo Yêu Cầu/bia-ao-phan-quang-palize.png",
    "desc": "Áo vàng Class 2 EN ISO 20471, 2 dải ngang thân + dải vai. Vải polyester 120gsm, dải phản quang 50mm RA≥330 cd/lux/m²."
  },
  {
    "id": "aophanquangt5",
    "title": "Áo Phản Quang Túi Lưới Cao Cấp - 001",
    "cat": "cat2",
    "catLabel": "ÁO PHẢN QUANG",
    "subcat": "cat2_s4",
    "subcatLabel": "Áo Phản Quang Túi Lưới Cao Cấp – Thoáng Mát, Nhiều Ngăn Tiện Lợi",
    "img": "../images/ÁO PHẢN QUANG/Áo Phản Quang Túi Lưới Cao Cấp – Thoáng Mát, Nhiều Ngăn Tiện Lợi/bia-ao-phan-quang-tui-luoi.png",
    "desc": "Áo vàng Class 2 EN ISO 20471, 2 dải ngang thân + dải vai. Vải polyester 120gsm, dải phản quang 50mm RA≥330 cd/lux/m²."
  },
  {
    "id": "aothuncongnh6",
    "title": "Áo Thun Công Nhân Bền Đẹp - 001",
    "cat": "cat3",
    "catLabel": "ÁO THUN",
    "subcat": "cat3_s1",
    "subcatLabel": "ÁO THUN CÔNG NHÂN BỀN ĐẸP – THOÁNG MÁT, PHÙ HỢP MỌI MÔI TRƯỜNG LÀM VIỆC",
    "img": "../images/ÁO THUN/ÁO THUN CÔNG NHÂN BỀN ĐẸP – THOÁNG MÁT, PHÙ HỢP MỌI MÔI TRƯỜNG LÀM VIỆC/bia-ao-thun-cong-nhan.png",
    "desc": "Cotton Pique 220gsm, thêu logo bảo vệ trước ngực, cổ bẻ vải dệt kim. Co giãn nhẹ, thoáng khí, mặc làm việc cả ngày thoải mái."
  },
  {
    "id": "aothunthetha7",
    "title": "Áo Thun Thể Thao Cao Cấp - 001",
    "cat": "cat3",
    "catLabel": "ÁO THUN",
    "subcat": "cat3_s2",
    "subcatLabel": "ÁO THUN THỂ THAO CAO CẤP – CO GIÃN TỐT, THOÁNG KHÍ VƯỢT TRỘI",
    "img": "../images/ÁO THUN/ÁO THUN THỂ THAO CAO CẤP – CO GIÃN TỐT, THOÁNG KHÍ VƯỢT TRỘI/bia-ao-thun-the-thao.png",
    "desc": "Cotton Pique 220gsm, thêu logo bảo vệ trước ngực, cổ bẻ vải dệt kim. Co giãn nhẹ, thoáng khí, mặc làm việc cả ngày thoải mái."
  },
  {
    "id": "aothunvanpho8",
    "title": "Áo Thun Văn Phòng Cao Cấp - 001",
    "cat": "cat3",
    "catLabel": "ÁO THUN",
    "subcat": "cat3_s3",
    "subcatLabel": "ÁO THUN VĂN PHÒNG CAO CẤP – THOẢI MÁI, CHUYÊN NGHIỆP CHO DOANH NGHIỆP",
    "img": "../images/ÁO THUN/ÁO THUN VĂN PHÒNG CAO CẤP – THOẢI MÁI, CHUYÊN NGHIỆP CHO DOANH NGHIỆP/bia-ao-thun-van-phong.png",
    "desc": "Cotton Pique 220gsm, thêu logo bảo vệ trước ngực, cổ bẻ vải dệt kim. Co giãn nhẹ, thoáng khí, mặc làm việc cả ngày thoải mái."
  },
  {
    "id": "aosomicongso9",
    "title": "Áo Sơ Mi Công Sở Cao Cấp - 001",
    "cat": "cat4",
    "catLabel": "ĐỒNG PHỤC CÔNG SỞ",
    "subcat": "cat4_s1",
    "subcatLabel": "ÁO SƠ MI CÔNG SỞ CAO CẤP – THANH LỊCH, CHUYÊN NGHIỆP CHO DOANH NGHIỆP",
    "img": "../images/ĐỒNG PHỤC CÔNG SỞ/ÁO SƠ MI CÔNG SỞ CAO CẤP – THANH LỊCH, CHUYÊN NGHIỆP CHO DOANH NGHIỆP/bia-ao-so-mi.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "chanvaycongs10",
    "title": "Chân Váy Công Sở Cao Cấp - 001",
    "cat": "cat4",
    "catLabel": "ĐỒNG PHỤC CÔNG SỞ",
    "subcat": "cat4_s2",
    "subcatLabel": "CHÂN VÁY CÔNG SỞ CAO CẤP – THANH LỊCH, TÔN DÁNG CHO NỮ NHÂN VIÊN",
    "img": "../images/ĐỒNG PHỤC CÔNG SỞ/CHÂN VÁY CÔNG SỞ CAO CẤP – THANH LỊCH, TÔN DÁNG CHO NỮ NHÂN VIÊN/bia-chan-vay-cong-so.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "quantaycongs11",
    "title": "Quần Tây Công Sở Cao Cấp - 001",
    "cat": "cat4",
    "catLabel": "ĐỒNG PHỤC CÔNG SỞ",
    "subcat": "cat4_s3",
    "subcatLabel": "QUẦN TÂY CÔNG SỞ CAO CẤP – LỊCH SỰ, SANG TRỌNG VÀ BỀN ĐẸP",
    "img": "../images/ĐỒNG PHỤC CÔNG SỞ/QUẦN TÂY CÔNG SỞ CAO CẤP – LỊCH SỰ, SANG TRỌNG VÀ BỀN ĐẸP/bia-quan-tay.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "aobaovetayda12",
    "title": "Áo Bảo Vệ Tay Dài - 001",
    "cat": "cat5",
    "catLabel": "ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ",
    "subcat": "cat5_s1",
    "subcatLabel": "ÁO BẢO VỆ TAY DÀI",
    "img": "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ÁO BẢO VỆ TAY DÀI/bia-ao-bao-ve-tay-dai.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "aobaovetayng13",
    "title": "Áo Bảo Vệ Tay Ngắn - 001",
    "cat": "cat5",
    "catLabel": "ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ",
    "subcat": "cat5_s2",
    "subcatLabel": "ÁO BẢO VỆ TAY NGẮN",
    "img": "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ÁO BẢO VỆ TAY NGẮN/bia-ao-bao-ve-tay-ngan.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "phukienbaove14",
    "title": "Phụ Kiện Bảo Vệ Chuyên Nghiệp - 001",
    "cat": "cat5",
    "catLabel": "ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ",
    "subcat": "cat5_s3",
    "subcatLabel": "PHỤ KIỆN BẢO VỆ CHUYÊN NGHIỆP – ĐẦY ĐỦ TRANG BỊ CHO LỰC LƯỢNG BẢO VỆ",
    "img": "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ CHUYÊN NGHIỆP – ĐẦY ĐỦ TRANG BỊ CHO LỰC LƯỢNG BẢO VỆ/bia-phu-kien-bao-ve.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "gangtaycachd15",
    "title": "Găng Tay Cách Điện Chính Hãng - 001",
    "cat": "cat6",
    "catLabel": "GĂNG TAY BẢO HỘ LAO ĐỘNG",
    "subcat": "cat6_s1",
    "subcatLabel": "GĂNG TAY CÁCH ĐIỆN CHÍNH HÃNG – THIẾT BỊ AN TOÀN CHO NGÀNH ĐIỆN",
    "img": "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CÁCH ĐIỆN CHÍNH HÃNG – THIẾT BỊ AN TOÀN CHO NGÀNH ĐIỆN/bia-gang-tay-cach-dien.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "gangtaycaosu16",
    "title": "Găng Tay Cao Su Bảo Hộ - 001",
    "cat": "cat6",
    "catLabel": "GĂNG TAY BẢO HỘ LAO ĐỘNG",
    "subcat": "cat6_s2",
    "subcatLabel": "GĂNG TAY CAO SU BẢO HỘ – CHỐNG THẤM, CHỐNG HÓA CHẤT HIỆU QUẢ",
    "img": "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU BẢO HỘ – CHỐNG THẤM, CHỐNG HÓA CHẤT HIỆU QUẢ/bia-gang-tay-cao-su.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "gangtaydahan17",
    "title": "Găng Tay Da Hàn Chịu Nhiệt - 001",
    "cat": "cat6",
    "catLabel": "GĂNG TAY BẢO HỘ LAO ĐỘNG",
    "subcat": "cat6_s3",
    "subcatLabel": "GĂNG TAY DA HÀN CHỊU NHIỆT – BẢO VỆ TỐI ƯU CHO THỢ HÀN",
    "img": "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN CHỊU NHIỆT – BẢO VỆ TỐI ƯU CHO THỢ HÀN/bia-gang-tay-da-han.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "gangtaylenba18",
    "title": "Găng Tay Len Bảo Hộ - 001",
    "cat": "cat6",
    "catLabel": "GĂNG TAY BẢO HỘ LAO ĐỘNG",
    "subcat": "cat6_s4",
    "subcatLabel": "GĂNG TAY LEN BẢO HỘ – GIẢI PHÁP BẢO VỆ TAY HIỆU QUẢ TRONG LAO ĐỘNG",
    "img": "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN BẢO HỘ – GIẢI PHÁP BẢO VỆ TAY HIỆU QUẢ TRONG LAO ĐỘNG/bia-gang-tay-len.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "quanaocongnh19",
    "title": "Quần Áo Công Nhân Chất Lượng Cao - 001",
    "cat": "cat7",
    "catLabel": "QUẦN ÁO CÔNG NHÂN",
    "subcat": "cat7_s1",
    "subcatLabel": "QUẦN ÁO CÔNG NHÂN CHẤT LƯỢNG CAO – BỀN ĐẸP, THOẢI MÁI KHI LÀM VIỆC",
    "img": "../images/QUẦN ÁO CÔNG NHÂN/QUẦN ÁO CÔNG NHÂN CHẤT LƯỢNG CAO – BỀN ĐẸP, THOẢI MÁI KHI LÀM VIỆC/bia-quan-ao-cong-nhan.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "quanaokysuch20",
    "title": "Quần Áo Kỹ Sư Chuyên Nghiệp - 001",
    "cat": "cat8",
    "catLabel": "QUẦN ÁO KỸ SƯ",
    "subcat": "cat8_s1",
    "subcatLabel": "QUẦN ÁO KỸ SƯ CHUYÊN NGHIỆP – HIỆN ĐẠI, NÂNG CAO HÌNH ẢNH DOANH NGHIỆP",
    "img": "../images/QUẦN ÁO KỸ SƯ/QUẦN ÁO KỸ SƯ CHUYÊN NGHIỆP – HIỆN ĐẠI, NÂNG CAO HÌNH ẢNH DOANH NGHIỆP/bia-quan-ao-ky-su.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "aomuacanhdoi21",
    "title": "Áo Mưa Cánh Dơi Chất Lượng Cao - 001",
    "cat": "cat9",
    "catLabel": "QUẦN ÁO MƯA – ÁO PHAO",
    "subcat": "cat9_s1",
    "subcatLabel": "ÁO MƯA CÁNH DƠI CHẤT LƯỢNG CAO – RỘNG RÃI, TIỆN LỢI KHI DI CHUYỂN",
    "img": "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO MƯA CÁNH DƠI CHẤT LƯỢNG CAO – RỘNG RÃI, TIỆN LỢI KHI DI CHUYỂN/bia-ao-mua-canh-doi.png",
    "desc": "Bộ PVC 2 mảnh áo+quần, dày 0.2mm, dải phản quang bạc. Dùng công trường ngoài trời, mưa to không thấm, khóa kéo bền, size S-3XL."
  },
  {
    "id": "aophaocaocap22",
    "title": "Áo Phao Cao Cấp - 001",
    "cat": "cat9",
    "catLabel": "QUẦN ÁO MƯA – ÁO PHAO",
    "subcat": "cat9_s2",
    "subcatLabel": "ÁO PHAO CAO CẤP – GIỮ ẤM HIỆU QUẢ, THIẾT KẾ HIỆN ĐẠI",
    "img": "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO CAO CẤP – GIỮ ẤM HIỆU QUẢ, THIẾT KẾ HIỆN ĐẠI/bia-ao-phao.png",
    "desc": "Bộ PVC 2 mảnh áo+quần, dày 0.2mm, dải phản quang bạc. Dùng công trường ngoài trời, mưa to không thấm, khóa kéo bền, size S-3XL."
  },
  {
    "id": "quanaomuaboc23",
    "title": "Quần Áo Mưa Bộ Cao Cấp - 001",
    "cat": "cat9",
    "catLabel": "QUẦN ÁO MƯA – ÁO PHAO",
    "subcat": "cat9_s3",
    "subcatLabel": "QUẦN ÁO MƯA BỘ CAO CẤP – CHỐNG THẤM HIỆU QUẢ, BỀN ĐẸP MỌI THỜI TIẾT",
    "img": "../images/QUẦN ÁO MƯA – ÁO PHAO/QUẦN ÁO MƯA BỘ CAO CẤP – CHỐNG THẤM HIỆU QUẢ, BỀN ĐẸP MỌI THỜI TIẾT/quan-ao-mua-bo-cao-cap.png",
    "desc": "Bộ PVC 2 mảnh áo+quần, dày 0.2mm, dải phản quang bạc. Dùng công trường ngoài trời, mưa to không thấm, khóa kéo bền, size S-3XL."
  },
  {
    "id": "dayantoancho24",
    "title": "Dây An Toàn Chống Rơi Ngã - 001",
    "cat": "cat11",
    "catLabel": "THIẾT BỊ AN TOÀN TRÊN CAO",
    "subcat": "cat11_s1",
    "subcatLabel": "DÂY AN TOÀN CHỐNG RƠI NGÃ – THIẾT BỊ BẢO HỘ LÀM VIỆC TRÊN CAO CHUYÊN DỤNG",
    "img": "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN CHỐNG RƠI NGÃ – THIẾT BỊ BẢO HỘ LÀM VIỆC TRÊN CAO CHUYÊN DỤNG/bia-day-an-toan.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "daythungcuus25",
    "title": "Dây Thừng Cứu Sinh Chịu Lực Cao - 001",
    "cat": "cat11",
    "catLabel": "THIẾT BỊ AN TOÀN TRÊN CAO",
    "subcat": "cat11_s2",
    "subcatLabel": "DÂY THỪNG CỨU SINH CHỊU LỰC CAO – GIẢI PHÁP AN TOÀN CHO CÔNG TRÌNH VÀ CỨU HỘ",
    "img": "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY THỪNG CỨU SINH CHỊU LỰC CAO – GIẢI PHÁP AN TOÀN CHO CÔNG TRÌNH VÀ CỨU HỘ/bia-day-thung-cuu-sinh.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "luoicongtrin26",
    "title": "Lưới Công Trình Chất Lượng Cao - 001",
    "cat": "cat11",
    "catLabel": "THIẾT BỊ AN TOÀN TRÊN CAO",
    "subcat": "cat11_s3",
    "subcatLabel": "LƯỚI CÔNG TRÌNH CHẤT LƯỢNG CAO – ĐẢM BẢO AN TOÀN THI CÔNG HIỆU QUẢ",
    "img": "../images/THIẾT BỊ AN TOÀN TRÊN CAO/LƯỚI CÔNG TRÌNH CHẤT LƯỢNG CAO – ĐẢM BẢO AN TOÀN THI CÔNG HIỆU QUẢ/bia-luoi-cong-trinh.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "thangday27",
    "title": "Thang Dây - 001",
    "cat": "cat11",
    "catLabel": "THIẾT BỊ AN TOÀN TRÊN CAO",
    "subcat": "cat11_s4",
    "subcatLabel": "THANG DÂY",
    "img": "../images/THIẾT BỊ AN TOÀN TRÊN CAO/THANG DÂY/bia-thang-day-thoat-hiem.png",
    "desc": "Thang xích thép mạ kẽm, bậc sắt Ø20mm, dài 6m (2 tầng). Chịu tải 150kg, gấp gọn 30x15x10cm, móc treo cửa sổ chắc chắn."
  },
  {
    "id": "depnhualaodo28",
    "title": "Dép Nhựa Lao Động - 001",
    "cat": "cat12",
    "catLabel": "THIẾT BỊ BẢO VỆ CHÂN",
    "subcat": "cat12_s1",
    "subcatLabel": "DÉP NHỰA LAO ĐỘNG – BỀN ĐẸP, CHỐNG TRƠN TRƯỢT HIỆU QUẢ",
    "img": "../images/THIẾT BỊ BẢO VỆ CHÂN/DÉP NHỰA LAO ĐỘNG – BỀN ĐẸP, CHỐNG TRƠN TRƯỢT HIỆU QUẢ/bia-dep-nhua.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "depphongsach29",
    "title": "Dép Phòng Sạch Chống Tĩnh Điện - 001",
    "cat": "cat12",
    "catLabel": "THIẾT BỊ BẢO VỆ CHÂN",
    "subcat": "cat12_s2",
    "subcatLabel": "DÉP PHÒNG SẠCH CHỐNG TĨNH ĐIỆN – GIẢI PHÁP AN TOÀN CHO MÔI TRƯỜNG SẢN XUẤT",
    "img": "../images/THIẾT BỊ BẢO VỆ CHÂN/DÉP PHÒNG SẠCH CHỐNG TĨNH ĐIỆN – GIẢI PHÁP AN TOÀN CHO MÔI TRƯỜNG SẢN XUẤT/bia-dep-phong-sach.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "giaybaoholao30",
    "title": "Giày Bảo Hộ Lao Động Chính Hãng - 001",
    "cat": "cat12",
    "catLabel": "THIẾT BỊ BẢO VỆ CHÂN",
    "subcat": "cat12_s3",
    "subcatLabel": "GIÀY BẢO HỘ LAO ĐỘNG CHÍNH HÃNG – AN TOÀN, BỀN BỈ CHO MỌI MÔI TRƯỜNG LÀM VIỆC",
    "img": "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ LAO ĐỘNG CHÍNH HÃNG – AN TOÀN, BỀN BỈ CHO MỌI MÔI TRƯỜNG LÀM VIỆC/bia-day-bao-ho.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "ungbaoholaod31",
    "title": "Ủng Bảo Hộ Lao Động Chất Lượng Cao - 001",
    "cat": "cat12",
    "catLabel": "THIẾT BỊ BẢO VỆ CHÂN",
    "subcat": "cat12_s4",
    "subcatLabel": "ỦNG BẢO HỘ LAO ĐỘNG CHẤT LƯỢNG CAO – BẢO VỆ TOÀN DIỆN CHO ĐÔI CHÂN",
    "img": "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ LAO ĐỘNG CHẤT LƯỢNG CAO – BẢO VỆ TOÀN DIỆN CHO ĐÔI CHÂN/bia-ung-bao-ho.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "nonbaoholaod32",
    "title": "Nón Bảo Hộ Lao Động - 001",
    "cat": "cat13",
    "catLabel": "THIẾT BỊ BẢO VỆ ĐẦU",
    "subcat": "cat13_s1",
    "subcatLabel": "NÓN BẢO HỘ LAO ĐỘNG – NÓN CÔNG NHÂN CHÍNH HÃNG, AN TOÀN CHO MỌI CÔNG TRÌNH",
    "img": "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ LAO ĐỘNG – NÓN CÔNG NHÂN CHÍNH HÃNG, AN TOÀN CHO MỌI CÔNG TRÌNH/bia-non-bao-ho-non-cong-nhan.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "nonvaicongnh33",
    "title": "Nón Vải Công Nhân Chất Lượng Cao - 001",
    "cat": "cat13",
    "catLabel": "THIẾT BỊ BẢO VỆ ĐẦU",
    "subcat": "cat13_s2",
    "subcatLabel": "NÓN VẢI CÔNG NHÂN CHẤT LƯỢNG CAO – THOẢI MÁI, CHUYÊN NGHIỆP CHO NGƯỜI LAO ĐỘNG",
    "img": "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI CÔNG NHÂN CHẤT LƯỢNG CAO – THOẢI MÁI, CHUYÊN NGHIỆP CHO NGƯỜI LAO ĐỘNG/bia-non-vai.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "khautrangbao34",
    "title": "Khẩu Trang Bảo Hộ Lao Động Chất Lượng Cao - 001",
    "cat": "cat14",
    "catLabel": "THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP",
    "subcat": "cat14_s1",
    "subcatLabel": "KHẨU TRANG BẢO HỘ LAO ĐỘNG CHẤT LƯỢNG CAO – BẢO VỆ HỆ HÔ HẤP HIỆU QUẢ",
    "img": "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/KHẨU TRANG BẢO HỘ LAO ĐỘNG CHẤT LƯỢNG CAO – BẢO VỆ HỆ HÔ HẤP HIỆU QUẢ/bia-khau-trang-bao-ho-lao-dong.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "matnabaohola35",
    "title": "Mặt Nạ Bảo Hộ Lao Động - 001",
    "cat": "cat14",
    "catLabel": "THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP",
    "subcat": "cat14_s2",
    "subcatLabel": "MẶT NẠ BẢO HỘ LAO ĐỘNG – MẶT NẠ PHÒNG ĐỘC CHÍNH HÃNG, BẢO VỆ HỆ HÔ HẤP HIỆU QUẢ",
    "img": "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ BẢO HỘ LAO ĐỘNG – MẶT NẠ PHÒNG ĐỘC CHÍNH HÃNG, BẢO VỆ HỆ HÔ HẤP HIỆU QUẢ/bia-mat-na-phong-doc.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "kinhbaoholao36",
    "title": "Kính Bảo Hộ Lao Động Chính Hãng - 001",
    "cat": "cat15",
    "catLabel": "THIẾT BỊ BẢO VỆ MẮT - KÍNH BẢO HỘ LAO ĐỘNG",
    "subcat": "cat15_s1",
    "subcatLabel": "KÍNH BẢO HỘ LAO ĐỘNG CHÍNH HÃNG – BẢO VỆ ĐÔI MẮT AN TOÀN TRONG MỌI MÔI TRƯỜNG LÀM VIỆC",
    "img": "../images/THIẾT BỊ BẢO VỆ MẮT - KÍNH BẢO HỘ LAO ĐỘNG/KÍNH BẢO HỘ LAO ĐỘNG CHÍNH HÃNG – BẢO VỆ ĐÔI MẮT AN TOÀN TRONG MỌI MÔI TRƯỜNG LÀM VIỆC/bia-thiet-bi-bao-ve-mat.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "thungracchat37",
    "title": "Thùng Rác Chất Lượng Cao - 001",
    "cat": "cat16",
    "catLabel": "THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP",
    "subcat": "cat16_s1",
    "subcatLabel": "THÙNG RÁC CHẤT LƯỢNG CAO – GIẢI PHÁP THU GOM RÁC THẢI HIỆU QUẢ CHO MỌI KHÔNG GIAN",
    "img": "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/THÙNG RÁC CHẤT LƯỢNG CAO – GIẢI PHÁP THU GOM RÁC THẢI HIỆU QUẢ CHO MỌI KHÔNG GIAN/bia-thung-rac-cong-nghiep.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "nuttaichongo38",
    "title": "Nút Tai Chống Ồn Chất Lượng Cao - 001",
    "cat": "cat17",
    "catLabel": "THIẾT BỊ BẢO VỆ TAI - NÚT TAI CHỐNG ỒN",
    "subcat": "cat17_s1",
    "subcatLabel": "NÚT TAI CHỐNG ỒN CHẤT LƯỢNG CAO – BẢO VỆ THÍNH GIÁC HIỆU QUẢ TRONG MÔI TRƯỜNG LÀM VIỆC",
    "img": "../images/THIẾT BỊ BẢO VỆ TAI - NÚT TAI CHỐNG ỒN/NÚT TAI CHỐNG ỒN CHẤT LƯỢNG CAO – BẢO VỆ THÍNH GIÁC HIỆU QUẢ TRONG MÔI TRƯỜNG LÀM VIỆC/bia-thiet-bi-bao-ve-tai.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "bangcanhbaoa39",
    "title": "Bảng Cảnh Báo An Toàn Chất Lượng Cao - 001",
    "cat": "cat18",
    "catLabel": "THIẾT BỊ CẢNH BÁO AN TOÀN",
    "subcat": "cat18_s1",
    "subcatLabel": "BẢNG CẢNH BÁO AN TOÀN CHẤT LƯỢNG CAO – GIẢI PHÁP NHẮC NHỞ VÀ PHÒNG NGỪA RỦI RO HIỆU QUẢ",
    "img": "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN CHẤT LƯỢNG CAO – GIẢI PHÁP NHẮC NHỞ VÀ PHÒNG NGỪA RỦI RO HIỆU QUẢ/bia-ban-canh-bao-an-toan.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "cocgiaothong40",
    "title": "Cọc Giao Thông Chất Lượng Cao - 001",
    "cat": "cat18",
    "catLabel": "THIẾT BỊ CẢNH BÁO AN TOÀN",
    "subcat": "cat18_s2",
    "subcatLabel": "CỌC GIAO THÔNG CHẤT LƯỢNG CAO – GIẢI PHÁP PHÂN LUỒNG VÀ CẢNH BÁO HIỆU QUẢ",
    "img": "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG CHẤT LƯỢNG CAO – GIẢI PHÁP PHÂN LUỒNG VÀ CẢNH BÁO HIỆU QUẢ/bia-coc-giao-thong.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "cuonraocongt41",
    "title": "Cuộn Rào Công Trình Chất Lượng Cao - 001",
    "cat": "cat18",
    "catLabel": "THIẾT BỊ CẢNH BÁO AN TOÀN",
    "subcat": "cat18_s3",
    "subcatLabel": "CUỘN RÀO CÔNG TRÌNH CHẤT LƯỢNG CAO – GIẢI PHÁP KHOANH VÙNG VÀ CẢNH BÁO HIỆU QUẢ",
    "img": "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CUỘN RÀO CÔNG TRÌNH CHẤT LƯỢNG CAO – GIẢI PHÁP KHOANH VÙNG VÀ CẢNH BÁO HIỆU QUẢ/bia-cuon-rao-cong-trinh.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "dayphanquang42",
    "title": "Dây Phản Quang Cảnh Báo - 001",
    "cat": "cat18",
    "catLabel": "THIẾT BỊ CẢNH BÁO AN TOÀN",
    "subcat": "cat18_s4",
    "subcatLabel": "DÂY PHẢN QUANG CẢNH BÁO – GIẢI PHÁP KHOANH VÙNG AN TOÀN HIỆU QUẢ",
    "img": "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG CẢNH BÁO – GIẢI PHÁP KHOANH VÙNG AN TOÀN HIỆU QUẢ/bia-day-phan-quang.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "dennhapnhayc43",
    "title": "Đèn Nhấp Nháy Cảnh Báo Giao Thông - 001",
    "cat": "cat18",
    "catLabel": "THIẾT BỊ CẢNH BÁO AN TOÀN",
    "subcat": "cat18_s5",
    "subcatLabel": "ĐÈN NHẤP NHÁY CẢNH BÁO GIAO THÔNG – TĂNG KHẢ NĂNG NHẬN DIỆN VÀ AN TOÀN",
    "img": "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN NHẤP NHÁY CẢNH BÁO GIAO THÔNG – TĂNG KHẢ NĂNG NHẬN DIỆN VÀ AN TOÀN/bia-den-canh-bao-thoat-hiem.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Bền đẹp, độ bền vượt trội trong nhiều môi trường làm việc. Liên hệ để được tư vấn và báo giá tốt nhất."
  },
  {
    "id": "noiquy44",
    "title": "Nội Quy - 001",
    "cat": "cat18",
    "catLabel": "THIẾT BỊ CẢNH BÁO AN TOÀN",
    "subcat": "cat18_s6",
    "subcatLabel": "NỘI QUY",
    "img": "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg",
    "desc": "Biển nhựa PVC 3mm, in offset 4 màu nội quy 10 điểm chữ đậm. Kích thước A2 (42x59cm), lỗ treo 4 góc, ép film bóng chống ẩm."
  },
  {
    "id": "binhcuuhoabi45",
    "title": "Bình Cứu Hỏa - 001",
    "cat": "cat19",
    "catLabel": "THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY",
    "subcat": "cat19_s1",
    "subcatLabel": "Bình Cứu Hỏa - Bình Chữa Cháy Chính Hãng, Đạt Chuẩn An Toàn",
    "img": "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Bình Cứu Hỏa - Bình Chữa Cháy Chính Hãng, Đạt Chuẩn An Toàn/bia-binh-cuu-hoa-binh-chua-chay.png",
    "desc": "Đầu báo khói quang học địa chỉ, phát hiện khói tán xạ mật độ >3%/m. Địa chỉ 1-127 trên vòng lặp, LED chỉ thị đỏ, cắm cơ sở rút được."
  },
  {
    "id": "botieulenhph46",
    "title": "Bộ Tiêu Lệnh Phòng Cháy Chữa Cháy Chính Hãng - 001",
    "cat": "cat19",
    "catLabel": "THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY",
    "subcat": "cat19_s2",
    "subcatLabel": "Bộ Tiêu Lệnh Phòng Cháy Chữa Cháy Chính Hãng – Đáp Ứng Quy Định PCCC",
    "img": "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Bộ Tiêu Lệnh Phòng Cháy Chữa Cháy Chính Hãng – Đáp Ứng Quy Định PCCC/bia-bo-tieu-lenh-phong-chay-chua-chay.png",
    "desc": "Đầu báo khói quang học địa chỉ, phát hiện khói tán xạ mật độ >3%/m. Địa chỉ 1-127 trên vòng lặp, LED chỉ thị đỏ, cắm cơ sở rút được."
  },
  {
    "id": "kedungbinhch47",
    "title": "Kệ Đựng Bình Chữa Cháy Chính Hãng - 001",
    "cat": "cat19",
    "catLabel": "THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY",
    "subcat": "cat19_s3",
    "subcatLabel": "Kệ Đựng Bình Chữa Cháy Chính Hãng – Giải Pháp Bảo Quản Thiết Bị PCCC An Toàn",
    "img": "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Kệ Đựng Bình Chữa Cháy Chính Hãng – Giải Pháp Bảo Quản Thiết Bị PCCC An Toàn/bia-ke-dung-binh-chua-chay.png",
    "desc": "Đầu báo khói quang học địa chỉ, phát hiện khói tán xạ mật độ >3%/m. Địa chỉ 1-127 trên vòng lặp, LED chỉ thị đỏ, cắm cơ sở rút được."
  },
  {
    "id": "quanaophongc48",
    "title": "Quần Áo Phòng Cháy Chữa Cháy Chính Hãng - 001",
    "cat": "cat19",
    "catLabel": "THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY",
    "subcat": "cat19_s4",
    "subcatLabel": "Quần Áo Phòng Cháy Chữa Cháy Chính Hãng – Bảo Vệ An Toàn Trong Môi Trường Nhiệt Độ Cao",
    "img": "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/Quần Áo Phòng Cháy Chữa Cháy Chính Hãng – Bảo Vệ An Toàn Trong Môi Trường Nhiệt Độ Cao/bia-quan-ao-phong-chay-chua-chay.png",
    "desc": "Đầu báo khói quang học địa chỉ, phát hiện khói tán xạ mật độ >3%/m. Địa chỉ 1-127 trên vòng lặp, LED chỉ thị đỏ, cắm cơ sở rút được."
  }
];

let currentFilter = 'all';
let currentSort = 'default';
let currentPage = 1;
const itemsPerPage = 12;
let currentShuffledList = null;
let currentCatOrder = null;

const catBiaImages = {
  "cat1": "../images/BÌA/bia-ao-ghile.png",
  "cat2": "../images/BÌA/bia-ao-phan-quang-kieu-3m.png",
  "cat3": "../images/BÌA/bia-ao-thun-cong-nhan.png",
  "cat4": "../images/BÌA/bia-quan-tay.png",
  "cat5": "../images/BÌA/bia-đong-phuc-bao-ve.png",
  "cat6": "../images/BÌA/bia-gang-tay-da-han.png",
  "cat7": "../images/BÌA/bia-quan-ao-cong-nhan.png",
  "cat8": "../images/BÌA/bia-quan-ao-ky-su.png",
  "cat9": "../images/BÌA/bia-ao-mua-canh-doi.png",
  "cat10": "../images/BÌA/bia-dep-phong-sach.png",
  "cat11": "../images/BÌA/bia-day-an-toan.png",
  "cat12": "../images/BÌA/bia-day-bao-ho.png",
  "cat13": "../images/BÌA/bia-non-bao-ho-non-cong-nhan.png",
  "cat14": "../images/BÌA/bia-mat-na-phong-doc.png",
  "cat15": "../images/BÌA/bia-thiet-bi-bao-ve-mat.png",
  "cat16": "../images/BÌA/bia-thung-rac-cong-nghiep.png",
  "cat17": "../images/BÌA/bia-thiet-bi-bao-ve-tai.png",
  "cat18": "../images/BÌA/bia-coc-giao-thong.png",
  "cat19": "../images/BÌA/bia-binh-cuu-hoa-binh-chua-chay.png"
};

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function countByFilter(f) {
  if (f === 'all') return products.length;
  if (f.includes('_s')) return products.filter(p => p.subcat === f).length;
  return products.filter(p => p.cat === f).length;
}

function updateCounts() {
  const ids = ["all","cat1","cat1_s1","cat2","cat2_s1","cat2_s2","cat2_s3","cat2_s4","cat3","cat3_s1","cat3_s2","cat3_s3","cat4","cat4_s1","cat4_s2","cat4_s3","cat5","cat5_s1","cat5_s2","cat5_s3","cat6","cat6_s1","cat6_s2","cat6_s3","cat6_s4","cat7","cat7_s1","cat8","cat8_s1","cat9","cat9_s1","cat9_s2","cat9_s3","cat10","cat11","cat11_s1","cat11_s2","cat11_s3","cat11_s4","cat12","cat12_s1","cat12_s2","cat12_s3","cat12_s4","cat13","cat13_s1","cat13_s2","cat14","cat14_s1","cat14_s2","cat15","cat15_s1","cat16","cat16_s1","cat17","cat17_s1","cat18","cat18_s1","cat18_s2","cat18_s3","cat18_s4","cat18_s5","cat18_s6","cat19","cat19_s1","cat19_s2","cat19_s3","cat19_s4"];
  ids.forEach(id => {
    const el = document.getElementById('cnt-' + id);
    if (el) {
      const count = countByFilter(id);
      if (count > 0) {
        el.textContent = count;
        el.style.display = '';
      } else {
        el.textContent = '';
        el.style.display = 'none';
      }
    }
  });
}

function getFiltered() {
  let list;
  if (currentFilter === 'all') {
    list = [...products];
  } else if (currentFilter.includes('_s')) {
    list = products.filter(p => p.subcat === currentFilter);
  } else {
    list = products.filter(p => p.cat === currentFilter);
  }
  if (currentSort === 'az') list.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
  else if (currentSort === 'za') list.sort((a, b) => b.title.localeCompare(a.title, 'vi'));
  return list;
}

function buildPagination(paginationEl, totalPages) {
  if (!paginationEl) return;
  if (totalPages > 1) {
    let html = '<div class="flex items-center justify-center gap-2 mt-12">';
    const prevCls = currentPage === 1 ? 'text-gray-300 cursor-not-allowed border border-gray-100' : 'text-gray-600 border border-gray-200 hover:bg-[#1D5FA8] hover:text-white hover:border-[#1D5FA8] btn-press';
    html += '<button onclick="window.changePage(' + (currentPage - 1) + ')" class="w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ' + prevCls + '"><span class="material-symbols-outlined text-[18px]">chevron_left</span></button>';
    let start = currentPage, end = Math.min(totalPages, currentPage + 2);
    if (currentPage + 2 > totalPages) { start = Math.max(1, totalPages - 2); end = totalPages; }
    for (let i = start; i <= end; i++) {
      const cls = currentPage === i ? 'bg-[#1D5FA8] text-white shadow-lg border border-[#1D5FA8]' : 'text-gray-600 border border-gray-200 hover:bg-[#1D5FA8] hover:text-white hover:border-[#1D5FA8] btn-press';
      html += '<button onclick="window.changePage(' + i + ')" class="w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ' + cls + '">' + i + '</button>';
    }
    if (end < totalPages - 1) html += '<span class="text-gray-400 font-bold px-1">...</span>';
    if (end < totalPages) html += '<button onclick="window.changePage(' + totalPages + ')" class="w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all text-gray-600 border border-gray-200 hover:bg-[#1D5FA8] hover:text-white hover:border-[#1D5FA8] btn-press">' + totalPages + '</button>';
    const nextCls = currentPage === totalPages ? 'text-gray-300 cursor-not-allowed border border-gray-100' : 'text-gray-600 border border-gray-200 hover:bg-[#1D5FA8] hover:text-white hover:border-[#1D5FA8] btn-press';
    html += '<button onclick="window.changePage(' + (currentPage + 1) + ')" class="w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ' + nextCls + '"><span class="material-symbols-outlined text-[18px]">chevron_right</span></button>';
    html += '</div>';
    paginationEl.innerHTML = html;
  } else {
    paginationEl.innerHTML = '';
  }
}

function renderGrid() {
  const grid = document.getElementById('productsGrid');
  const paginationEl = document.getElementById('paginationControls');
  const resultsCountEl = document.getElementById('results-count');
  if (!grid) return;

  // Toggle shuffle button visibility
  const shuffleBtn = document.getElementById('shuffleBtn');
  if (shuffleBtn) shuffleBtn.style.display = currentFilter === 'all' ? 'flex' : 'none';

  // ── "Tất cả" view: show category bìa cards ──────────────────────────────
  if (currentFilter === 'all') {
    if (!currentCatOrder) currentCatOrder = shuffleArray(Object.keys(catBiaImages));
    const catList = currentCatOrder.filter(catId => products.filter(p => p.cat === catId).length > 0);
    if (resultsCountEl) resultsCountEl.textContent = catList.length + ' danh mục sản phẩm';
    const totalPages = Math.ceil(catList.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;
    if (currentPage < 1) currentPage = 1;
    const paginatedCats = catList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    grid.innerHTML = paginatedCats.map(catId => {
      const catProducts = products.filter(p => p.cat === catId);
      const catLabel = catProducts.length > 0 ? catProducts[0].catLabel : catId;
      const count = catProducts.length;
      const biaImg = catBiaImages[catId];
      const safeLabel = catLabel.replace(/"/g, '&quot;');
      return '<div class="product-card group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm cursor-pointer" onclick="window.goCat(\'' + catId + '\')">' +
        '<div class="relative aspect-square bg-gray-50 overflow-hidden">' +
        '<img alt="' + safeLabel + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="' + biaImg + '" loading="lazy" onerror="this.parentElement.style.background=\'#f1f5f9\'">' +
        '<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6 gap-3">' +
        '<div class="text-center w-full"><h3 class="font-bold text-sm text-white mb-3 line-clamp-2">' + catLabel + '</h3></div>' +
        '<button class="w-full py-3 bg-white text-[#1A2744] text-xs font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E8A500] hover:text-white transition-colors btn-press"><span class="material-symbols-outlined text-[18px]">grid_view</span> XEM SẢN PHẨM</button>' +
        '</div></div>' +
        '<div class="p-4">' +
        '<p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 truncate">' + count + ' sản phẩm</p>' +
        '<h3 class="font-bold text-sm text-[#1A2744] truncate" title="' + safeLabel + '">' + catLabel + '</h3>' +
        '</div></div>';
    }).join('');

    buildPagination(paginationEl, totalPages);
    return;
  }

  // ── Category / subcat product view ───────────────────────────────────────
  const list = currentShuffledList || getFiltered();
  if (resultsCountEl) resultsCountEl.textContent = 'Hiển thị ' + list.length + ' sản phẩm';
  const totalPages = Math.ceil(list.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;
  if (currentPage < 1) currentPage = 1;
  const paginatedList = list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  grid.innerHTML = paginatedList.map(p => {
    const labelText = p.subcatLabel || p.catLabel;
    const detailUrl = '../product/index.html?id=' + p.id;
    const safeTitle = p.title.replace(/"/g, '&quot;');
    return '<div class="product-card group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm cursor-pointer" onclick="window.location.href=\'' + detailUrl + '\'">' +
      '<div class="relative aspect-square bg-gray-50 overflow-hidden">' +
      '<img alt="' + safeTitle + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="' + p.img + '" loading="lazy" onerror="this.parentElement.style.background=\'#f1f5f9\'">' +
      '<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6 gap-3">' +
      '<div class="text-center w-full">' +
      '<p class="text-[10px] font-extrabold text-[#E8A500] uppercase tracking-widest mb-1">' + labelText + '</p>' +
      '<h3 class="font-bold text-sm text-white mb-3 line-clamp-2">' + p.title + '</h3>' +
      '</div>' +
      '<a href="' + detailUrl + '" onclick="event.stopPropagation()" class="w-full py-3 bg-white text-[#1A2744] text-xs font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E8A500] hover:text-white transition-colors btn-press"><span class="material-symbols-outlined text-[18px]">visibility</span> XEM CHI TIẾT</a>' +
      '</div></div>' +
      '<div class="p-4">' +
      '<p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 truncate">' + labelText + '</p>' +
      '<h3 class="font-bold text-sm text-[#1A2744] truncate" title="' + safeTitle + '">' + p.title + '</h3>' +
      '</div>' +
      '</div>';
  }).join('');

  buildPagination(paginationEl, totalPages);
}

window.changePage = function (page) {
  const totalItems = currentFilter === 'all'
    ? Object.keys(catBiaImages).length
    : (currentShuffledList || getFiltered()).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    renderGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.goCat = function (catId) {
  currentShuffledList = shuffleArray(products.filter(p => p.cat === catId));
  currentCatOrder = null;
  currentFilter = catId;
  currentPage = 1;
  if (window._setActiveFilter) window._setActiveFilter(catId);
  const url = new URL(window.location);
  url.searchParams.set('cat', catId);
  url.searchParams.delete('subcat');
  window.history.pushState({}, '', url);
  renderGrid();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.shuffleCats = function () {
  currentCatOrder = shuffleArray(Object.keys(catBiaImages));
  currentPage = 1;
  renderGrid();
  const btn = document.getElementById('shuffleBtn');
  if (btn) {
    btn.classList.add('opacity-60');
    setTimeout(() => btn.classList.remove('opacity-60'), 300);
  }
};

window.openLightbox = function (p) {
  document.getElementById('lbImg').src = p.img;
  document.getElementById('lbTitle').textContent = p.title;
  document.getElementById('lbCat').textContent = p.subcatLabel || p.catLabel;
  const descEl = document.getElementById('lbDesc');
  if (descEl && p.desc) descEl.textContent = p.desc;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function () {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
};

document.addEventListener('DOMContentLoaded', () => {
  // URL param
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  const subcatParam = urlParams.get('subcat');
  if (subcatParam) currentFilter = subcatParam;
  else if (catParam) currentFilter = catParam;

  // Lightbox
  const lbClose = document.getElementById('lbClose');
  if (lbClose) lbClose.onclick = window.closeLightbox;
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.onclick = e => { if (e.target === lightbox) window.closeLightbox(); };

  function setActiveFilter(filter) {
    currentShuffledList = null;
    if (filter === 'all') currentCatOrder = null;
    currentFilter = filter;
    currentPage = 1;

    // Reset all buttons
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove(
        'bg-[#1D5FA8]', 'text-white', 'shadow-xl', 'shadow-blue-100',
        'active-parent', 'active-subcat'
      );
      b.classList.add('text-gray-600');
      const icon = b.querySelector('.cat-icon');
      if (icon) { icon.classList.remove('text-white'); icon.classList.add('text-gray-400', 'group-hover:text-[#1D5FA8]'); }
      const text = b.querySelector('.cat-text');
      if (text) { text.classList.remove('text-white'); text.classList.add('group-hover:text-[#1A2744]'); }
      const count = b.querySelector('.cat-count');
      if (count) { count.classList.remove('bg-white/20', 'text-white'); count.classList.add('text-gray-400'); }
    });

    if (filter === 'all') {
      // Highlight "all" button
      const allBtn = document.querySelector('.filter-btn[data-cat="all"]');
      if (allBtn) {
        allBtn.classList.remove('text-gray-600');
        allBtn.classList.add('bg-[#1D5FA8]', 'text-white', 'shadow-xl', 'shadow-blue-100');
        const icon = allBtn.querySelector('.cat-icon');
        if (icon) { icon.classList.remove('text-gray-400', 'group-hover:text-[#1D5FA8]'); icon.classList.add('text-white'); }
        const text = allBtn.querySelector('.cat-text');
        if (text) { text.classList.remove('group-hover:text-[#1A2744]'); text.classList.add('text-white'); }
        const count = allBtn.querySelector('.cat-count');
        if (count) { count.classList.remove('text-gray-400'); count.classList.add('bg-white/20', 'text-white'); }
      }
    } else if (filter.includes('_s')) {
      // Subcat selected: highlight subcat btn, style parent as active-parent
      const subcatBtn = document.querySelector('.subcat-btn[data-subcat="' + filter + '"]');
      if (subcatBtn) subcatBtn.classList.add('active-subcat');
      const catId = filter.split('_s')[0];
      const parentBtn = document.querySelector('.accordion-toggle[data-cat="' + catId + '"]');
      if (parentBtn) parentBtn.classList.add('active-parent');
    } else {
      // Cat selected: highlight parent button
      const catBtn = document.querySelector('.filter-btn[data-cat="' + filter + '"]');
      if (catBtn) {
        const isAccordion = catBtn.classList.contains('accordion-toggle');
        if (isAccordion) {
          catBtn.classList.add('active-parent');
        } else {
          catBtn.classList.remove('text-gray-600');
          catBtn.classList.add('bg-[#1D5FA8]', 'text-white', 'shadow-xl', 'shadow-blue-100');
          const icon = catBtn.querySelector('.cat-icon');
          if (icon) { icon.classList.remove('text-gray-400', 'group-hover:text-[#1D5FA8]'); icon.classList.add('text-white'); }
          const text = catBtn.querySelector('.cat-text');
          if (text) { text.classList.remove('group-hover:text-[#1A2744]'); text.classList.add('text-white'); }
          const count = catBtn.querySelector('.cat-count');
          if (count) { count.classList.remove('text-gray-400'); count.classList.add('bg-white/20', 'text-white'); }
        }
      }
    }
  }

  function openAccordion(catId) {
    const children = document.getElementById('children-' + catId);
    const btn = document.querySelector('.accordion-toggle[data-cat="' + catId + '"]');
    if (!children || !btn) return;
    children.classList.add('open');
    const chevron = btn.querySelector('.accordion-chevron');
    if (chevron) chevron.classList.add('rotated');
  }

  function closeAccordion(catId) {
    const children = document.getElementById('children-' + catId);
    const btn = document.querySelector('.accordion-toggle[data-cat="' + catId + '"]');
    if (!children || !btn) return;
    children.classList.remove('open');
    const chevron = btn.querySelector('.accordion-chevron');
    if (chevron) chevron.classList.remove('rotated');
  }

  function toggleAccordion(catId) {
    const children = document.getElementById('children-' + catId);
    if (!children) return;
    if (children.classList.contains('open')) closeAccordion(catId);
    else openAccordion(catId);
  }

  // Accordion toggle buttons (parent with children)
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const catId = btn.dataset.cat;
      toggleAccordion(catId);
      setActiveFilter(catId);
      const url = new URL(window.location);
      url.searchParams.set('cat', catId);
      url.searchParams.delete('subcat');
      window.history.pushState({}, '', url);
      renderGrid();
    });
  });

  // Simple category buttons (no children)
  document.querySelectorAll('.filter-btn:not(.accordion-toggle):not(.subcat-btn)').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const catId = btn.dataset.cat;
      setActiveFilter(catId);
      const url = new URL(window.location);
      if (catId === 'all') { url.searchParams.delete('cat'); url.searchParams.delete('subcat'); }
      else { url.searchParams.set('cat', catId); url.searchParams.delete('subcat'); }
      window.history.pushState({}, '', url);
      renderGrid();
    });
  });

  // Subcat buttons
  document.querySelectorAll('.subcat-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const subcatId = btn.dataset.subcat;
      const catId = btn.dataset.cat;
      setActiveFilter(subcatId);
      openAccordion(catId);
      const url = new URL(window.location);
      url.searchParams.set('cat', catId);
      url.searchParams.set('subcat', subcatId);
      window.history.pushState({}, '', url);
      renderGrid();
    });
  });

  window._setActiveFilter = setActiveFilter;

  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.addEventListener('change', e => { currentShuffledList = null; currentSort = e.target.value; currentPage = 1; renderGrid(); });

  // Scroll nav shadow
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) nav.classList.toggle('shadow-md', window.scrollY > 20);
  });

  // Init from URL
  if (currentFilter !== 'all') {
    setActiveFilter(currentFilter);
    if (currentFilter.includes('_s')) {
      openAccordion(currentFilter.split('_s')[0]);
    } else {
      const parentEl = document.getElementById('children-' + currentFilter);
      if (parentEl) openAccordion(currentFilter);
    }
  } else {
    setActiveFilter('all');
  }

  updateCounts();
  renderGrid();
});