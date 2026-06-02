const products = [
  {
    "id": "bngcnhbo6809",
    "title": "Biển Báo An Toàn BLC-001",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "../images/Bảng cảnh báo/bang-bao-cao (1).png",
    "desc": "Biển báo an toàn phản quang cao cấp, chữ in sắc nét chống phai màu. Cảnh báo nguy hiểm hiệu quả tại công trường."
  },
  {
    "id": "bngcnhbo3366",
    "title": "Biển Báo An Toàn BLC-002",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "../images/Bảng cảnh báo/bang-bao-cao (2).png",
    "desc": "Bảng cảnh báo theo tiêu chuẩn an toàn lao động, chất liệu bền bỉ chịu được thời tiết khắc nghiệt ngoài trời."
  },
  {
    "id": "bngcnhbo1842",
    "title": "Biển Báo An Toàn BLC-003",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "../images/Bảng cảnh báo/bang-bao-cao (3).png",
    "desc": "Thiết kế bắt mắt, dễ dàng nhận diện từ xa giúp đảm bảo an toàn tối đa cho khu vực thi công và nhà máy."
  },
  {
    "id": "bngcnhbo3497",
    "title": "Biển Báo An Toàn BLC-004",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "../images/Bảng cảnh báo/bang-bao-cao (4).png",
    "desc": "Biển báo an toàn phản quang cao cấp, chữ in sắc nét chống phai màu. Cảnh báo nguy hiểm hiệu quả tại công trường."
  },
  {
    "id": "bngcnhbo5002",
    "title": "Biển Báo An Toàn BLC-005",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "../images/Bảng cảnh báo/bang-bao-cao (5).png",
    "desc": "Bảng cảnh báo theo tiêu chuẩn an toàn lao động, chất liệu bền bỉ chịu được thời tiết khắc nghiệt ngoài trời."
  },
  {
    "id": "bngcnhbo7627",
    "title": "Biển Báo An Toàn BLC-006",
    "cat": "cat1",
    "catLabel": "Bảng cảnh báo",
    "img": "../images/Bảng cảnh báo/bang-bao-cao (6).png",
    "desc": "Thiết kế bắt mắt, dễ dàng nhận diện từ xa giúp đảm bảo an toàn tối đa cho khu vực thi công và nhà máy."
  },
  {
    "id": "cunrocngtrnh5820",
    "title": "Rào Chắn Công Trình BLC-001",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "../images/Cuộn rào công trình/cuon-chia-lan-duong (1).png",
    "desc": "Rào chắn công trình chất lượng cao, màu sắc nổi bật dễ nhận biết. Dùng để khoanh vùng và cách ly khu vực nguy hiểm."
  },
  {
    "id": "cunrocngtrnh7028",
    "title": "Rào Chắn Công Trình BLC-002",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "../images/Cuộn rào công trình/cuon-chia-lan-duong (2).png",
    "desc": "Sản phẩm chịu lực tốt, dễ dàng triển khai và thu gọn. Đảm bảo an toàn tuyệt đối cho người đi đường và công nhân."
  },
  {
    "id": "cunrocngtrnh275",
    "title": "Rào Chắn Công Trình BLC-003",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "../images/Cuộn rào công trình/cuon-chia-lan-duong (3).png",
    "desc": "Chất liệu siêu bền, chống rách hiệu quả. Sử dụng rộng rãi trong các dự án xây dựng và sửa chữa đô thị."
  },
  {
    "id": "cunrocngtrnh4110",
    "title": "Rào Chắn Công Trình BLC-004",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "../images/Cuộn rào công trình/cuon-chia-lan-duong (4).png",
    "desc": "Rào chắn công trình chất lượng cao, màu sắc nổi bật dễ nhận biết. Dùng để khoanh vùng và cách ly khu vực nguy hiểm."
  },
  {
    "id": "cunrocngtrnh1969",
    "title": "Rào Chắn Công Trình BLC-005",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "../images/Cuộn rào công trình/cuon-chia-lan-duong (5).png",
    "desc": "Sản phẩm chịu lực tốt, dễ dàng triển khai và thu gọn. Đảm bảo an toàn tuyệt đối cho người đi đường và công nhân."
  },
  {
    "id": "cunrocngtrnh4348",
    "title": "Rào Chắn Công Trình BLC-006",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "../images/Cuộn rào công trình/cuon-chia-lan-duong (6).png",
    "desc": "Chất liệu siêu bền, chống rách hiệu quả. Sử dụng rộng rãi trong các dự án xây dựng và sửa chữa đô thị."
  },
  {
    "id": "cunrocngtrnh8701",
    "title": "Rào Chắn Công Trình BLC-007",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "../images/Cuộn rào công trình/cuon-chia-lan-duong (7).png",
    "desc": "Rào chắn công trình chất lượng cao, màu sắc nổi bật dễ nhận biết. Dùng để khoanh vùng và cách ly khu vực nguy hiểm."
  },
  {
    "id": "cunrocngtrnh510",
    "title": "Rào Chắn Công Trình BLC-008",
    "cat": "cat2",
    "catLabel": "Cuộn rào công trình",
    "img": "../images/Cuộn rào công trình/cuon-chia-lan-duong (8).png",
    "desc": "Sản phẩm chịu lực tốt, dễ dàng triển khai và thu gọn. Đảm bảo an toàn tuyệt đối cho người đi đường và công nhân."
  },
  {
    "id": "cvtvebov3196",
    "title": "Phụ Kiện Đồng Phục BLC-001",
    "cat": "cat3",
    "catLabel": "Cà Vạt, Ve Bảo Vệ",
    "img": "../images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "cvtvebov5344",
    "title": "Phụ Kiện Đồng Phục BLC-002",
    "cat": "cat3",
    "catLabel": "Cà Vạt, Ve Bảo Vệ",
    "img": "../images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "cvtvebov2060",
    "title": "Phụ Kiện Đồng Phục BLC-003",
    "cat": "cat3",
    "catLabel": "Cà Vạt, Ve Bảo Vệ",
    "img": "../images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "cvtvebov7190",
    "title": "Phụ Kiện Đồng Phục BLC-004",
    "cat": "cat3",
    "catLabel": "Cà Vạt, Ve Bảo Vệ",
    "img": "../images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "cuvaibov5763",
    "title": "Cầu Vai Phân Cấp BLC-001",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "../images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "cuvaibov519",
    "title": "Cầu Vai Phân Cấp BLC-002",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "../images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "cuvaibov6314",
    "title": "Cầu Vai Phân Cấp BLC-003",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "../images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "cuvaibov2009",
    "title": "Cầu Vai Phân Cấp BLC-004",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "../images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "cuvaibov3788",
    "title": "Cầu Vai Phân Cấp BLC-005",
    "cat": "cat4",
    "catLabel": "Cầu Vai Bảo Vệ",
    "img": "../images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (5).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ccgiaothngctchialnng1261",
    "title": "Cọc Tiêu Giao Thông BLC-001",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (1).png",
    "desc": "Cọc tiêu giao thông có dán màng phản quang cao cấp, giúp phân làn và điều tiết giao thông an toàn cả ngày lẫn đêm."
  },
  {
    "id": "ccgiaothngctchialnng9397",
    "title": "Cọc Tiêu Giao Thông BLC-002",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (10).png",
    "desc": "Thiết kế chắc chắn, chịu va đập tốt và dễ dàng xếp chồng để bảo quản hoặc di chuyển."
  },
  {
    "id": "ccgiaothngctchialnng1008",
    "title": "Cọc Tiêu Giao Thông BLC-003",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (11).png",
    "desc": "Sản phẩm phổ biến dùng tại các công trình, bãi đỗ xe và tuyến đường, tăng cường khả năng cảnh báo chướng ngại vật."
  },
  {
    "id": "ccgiaothngctchialnng1361",
    "title": "Cọc Tiêu Giao Thông BLC-004",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (12).png",
    "desc": "Cọc tiêu giao thông có dán màng phản quang cao cấp, giúp phân làn và điều tiết giao thông an toàn cả ngày lẫn đêm."
  },
  {
    "id": "ccgiaothngctchialnng5383",
    "title": "Cọc Tiêu Giao Thông BLC-005",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (13).png",
    "desc": "Thiết kế chắc chắn, chịu va đập tốt và dễ dàng xếp chồng để bảo quản hoặc di chuyển."
  },
  {
    "id": "ccgiaothngctchialnng2549",
    "title": "Cọc Tiêu Giao Thông BLC-006",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (14).png",
    "desc": "Sản phẩm phổ biến dùng tại các công trình, bãi đỗ xe và tuyến đường, tăng cường khả năng cảnh báo chướng ngại vật."
  },
  {
    "id": "ccgiaothngctchialnng5968",
    "title": "Cọc Tiêu Giao Thông BLC-007",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (15).png",
    "desc": "Cọc tiêu giao thông có dán màng phản quang cao cấp, giúp phân làn và điều tiết giao thông an toàn cả ngày lẫn đêm."
  },
  {
    "id": "ccgiaothngctchialnng1005",
    "title": "Cọc Tiêu Giao Thông BLC-008",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (2).png",
    "desc": "Thiết kế chắc chắn, chịu va đập tốt và dễ dàng xếp chồng để bảo quản hoặc di chuyển."
  },
  {
    "id": "ccgiaothngctchialnng4081",
    "title": "Cọc Tiêu Giao Thông BLC-009",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (3).png",
    "desc": "Sản phẩm phổ biến dùng tại các công trình, bãi đỗ xe và tuyến đường, tăng cường khả năng cảnh báo chướng ngại vật."
  },
  {
    "id": "ccgiaothngctchialnng3023",
    "title": "Cọc Tiêu Giao Thông BLC-010",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (4).png",
    "desc": "Cọc tiêu giao thông có dán màng phản quang cao cấp, giúp phân làn và điều tiết giao thông an toàn cả ngày lẫn đêm."
  },
  {
    "id": "ccgiaothngctchialnng3909",
    "title": "Cọc Tiêu Giao Thông BLC-011",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (5).png",
    "desc": "Thiết kế chắc chắn, chịu va đập tốt và dễ dàng xếp chồng để bảo quản hoặc di chuyển."
  },
  {
    "id": "ccgiaothngctchialnng6099",
    "title": "Cọc Tiêu Giao Thông BLC-012",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (6).png",
    "desc": "Sản phẩm phổ biến dùng tại các công trình, bãi đỗ xe và tuyến đường, tăng cường khả năng cảnh báo chướng ngại vật."
  },
  {
    "id": "ccgiaothngctchialnng2464",
    "title": "Cọc Tiêu Giao Thông BLC-013",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (7).png",
    "desc": "Cọc tiêu giao thông có dán màng phản quang cao cấp, giúp phân làn và điều tiết giao thông an toàn cả ngày lẫn đêm."
  },
  {
    "id": "ccgiaothngctchialnng6661",
    "title": "Cọc Tiêu Giao Thông BLC-014",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (8).png",
    "desc": "Thiết kế chắc chắn, chịu va đập tốt và dễ dàng xếp chồng để bảo quản hoặc di chuyển."
  },
  {
    "id": "ccgiaothngctchialnng4759",
    "title": "Cọc Tiêu Giao Thông BLC-015",
    "cat": "cat5",
    "catLabel": "Cọc giao thông-cột chia làn đường",
    "img": "../images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (9).png",
    "desc": "Sản phẩm phổ biến dùng tại các công trình, bãi đỗ xe và tuyến đường, tăng cường khả năng cảnh báo chướng ngại vật."
  },
  {
    "id": "dyanton8939",
    "title": "Dây Đai An Toàn BLC-001",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyanton8986",
    "title": "Dây Đai An Toàn BLC-002",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (10).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyanton2354",
    "title": "Dây Đai An Toàn BLC-003",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (11).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyanton3150",
    "title": "Dây Đai An Toàn BLC-004",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (12).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyanton2286",
    "title": "Dây Đai An Toàn BLC-005",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (13).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyanton6933",
    "title": "Dây Đai An Toàn BLC-006",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (14).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyanton9548",
    "title": "Dây Đai An Toàn BLC-007",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (15).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyanton1107",
    "title": "Dây Đai An Toàn BLC-008",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (16).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyanton2134",
    "title": "Dây Đai An Toàn BLC-009",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (17).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyanton4288",
    "title": "Dây Đai An Toàn BLC-010",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (18).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyanton6422",
    "title": "Dây Đai An Toàn BLC-011",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (19).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyanton2623",
    "title": "Dây Đai An Toàn BLC-012",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (2).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyanton762",
    "title": "Dây Đai An Toàn BLC-013",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (20).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyanton766",
    "title": "Dây Đai An Toàn BLC-014",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (21).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyanton4210",
    "title": "Dây Đai An Toàn BLC-015",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (22).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyanton925",
    "title": "Dây Đai An Toàn BLC-016",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (23).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyanton9902",
    "title": "Dây Đai An Toàn BLC-017",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (24).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyanton8682",
    "title": "Dây Đai An Toàn BLC-018",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyanton5641",
    "title": "Dây Đai An Toàn BLC-019",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyanton3523",
    "title": "Dây Đai An Toàn BLC-020",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (5).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyanton4976",
    "title": "Dây Đai An Toàn BLC-021",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (6).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyanton947",
    "title": "Dây Đai An Toàn BLC-022",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (7).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyanton6108",
    "title": "Dây Đai An Toàn BLC-023",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (8).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyanton6750",
    "title": "Dây Đai An Toàn BLC-024",
    "cat": "cat6",
    "catLabel": "Dây an toàn",
    "img": "../images/Dây an toàn/dN-n-toN (9).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyantontonthn9522",
    "title": "Dây Đai Toàn Thân BLC-001",
    "cat": "cat7",
    "catLabel": "Dây An Toàn Toàn Thân",
    "img": "../images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dyantontonthn5467",
    "title": "Dây Đai Toàn Thân BLC-002",
    "cat": "cat7",
    "catLabel": "Dây An Toàn Toàn Thân",
    "img": "../images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "dyantontonthn4269",
    "title": "Dây Đai Toàn Thân BLC-003",
    "cat": "cat7",
    "catLabel": "Dây An Toàn Toàn Thân",
    "img": "../images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "dyantontonthn4762",
    "title": "Dây Đai Toàn Thân BLC-004",
    "cat": "cat7",
    "catLabel": "Dây An Toàn Toàn Thân",
    "img": "../images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "dythtlngbovsecurity9488",
    "title": "Thắt Lưng Chuyên Dụng BLC-001",
    "cat": "cat8",
    "catLabel": "Dây thắt lưng bảo vệ Security",
    "img": "../images/Dây thắt lưng bảo vệ Security/day-that-llung.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "gangtayboh4846",
    "title": "Găng Tay Bảo Hộ BLC-001",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (1).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh3301",
    "title": "Găng Tay Bảo Hộ BLC-002",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (10).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh1923",
    "title": "Găng Tay Bảo Hộ BLC-003",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (11).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "gangtayboh4999",
    "title": "Găng Tay Bảo Hộ BLC-004",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (12).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh3383",
    "title": "Găng Tay Bảo Hộ BLC-005",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (13).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh9547",
    "title": "Găng Tay Bảo Hộ BLC-006",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (14).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "gangtayboh765",
    "title": "Găng Tay Bảo Hộ BLC-007",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (15).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh5084",
    "title": "Găng Tay Bảo Hộ BLC-008",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (16).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh3016",
    "title": "Găng Tay Bảo Hộ BLC-009",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (17).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "gangtayboh7094",
    "title": "Găng Tay Bảo Hộ BLC-010",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (18).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh3785",
    "title": "Găng Tay Bảo Hộ BLC-011",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (19).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh4339",
    "title": "Găng Tay Bảo Hộ BLC-012",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (2).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "gangtayboh8693",
    "title": "Găng Tay Bảo Hộ BLC-013",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (20).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh5665",
    "title": "Găng Tay Bảo Hộ BLC-014",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (21).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh4268",
    "title": "Găng Tay Bảo Hộ BLC-015",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (22).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "gangtayboh4156",
    "title": "Găng Tay Bảo Hộ BLC-016",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (23).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh4862",
    "title": "Găng Tay Bảo Hộ BLC-017",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (24).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh3862",
    "title": "Găng Tay Bảo Hộ BLC-018",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (25).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "gangtayboh9255",
    "title": "Găng Tay Bảo Hộ BLC-019",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (26).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh5531",
    "title": "Găng Tay Bảo Hộ BLC-020",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (27).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh5229",
    "title": "Găng Tay Bảo Hộ BLC-021",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (3).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "gangtayboh1915",
    "title": "Găng Tay Bảo Hộ BLC-022",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (4).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh6867",
    "title": "Găng Tay Bảo Hộ BLC-023",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (5).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh473",
    "title": "Găng Tay Bảo Hộ BLC-024",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (6).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "gangtayboh2068",
    "title": "Găng Tay Bảo Hộ BLC-025",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (7).png",
    "desc": "Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn."
  },
  {
    "id": "gangtayboh366",
    "title": "Găng Tay Bảo Hộ BLC-026",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (8).png",
    "desc": "Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết."
  },
  {
    "id": "gangtayboh7592",
    "title": "Găng Tay Bảo Hộ BLC-027",
    "cat": "cat9",
    "catLabel": "Gang tay bảo hộ",
    "img": "../images/Gang tay bảo hộ/gang-tay-bao-ho (9).png",
    "desc": "Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động."
  },
  {
    "id": "giybohlaong4042",
    "title": "Giày An Toàn BLC-001",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (1).png",
    "desc": "Giày bảo hộ chuyên dụng, thiết kế ôm chân, thoải mái khi làm việc lâu."
  },
  {
    "id": "giybohlaong3768",
    "title": "Giày An Toàn BLC-002",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (10).png",
    "desc": "Đế chống trơn trượt hiệu quả trong môi trường dầu mỡ hoặc ẩm ướt. Đảm bảo tiêu chuẩn an toàn lao động khắt khe."
  },
  {
    "id": "giybohlaong3283",
    "title": "Giày An Toàn BLC-003",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (11).png",
    "desc": "Sản phẩm bền bỉ, thoáng khí và bảo vệ tối đa đôi chân người lao động khỏi các rủi ro tại công trường, nhà xưởng."
  },
  {
    "id": "giybohlaong173",
    "title": "Giày An Toàn BLC-004",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (12).png",
    "desc": "Giày bảo hộ chuyên dụng, thiết kế ôm chân, thoải mái khi làm việc lâu."
  },
  {
    "id": "giybohlaong3124",
    "title": "Giày An Toàn BLC-005",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (13).png",
    "desc": "Đế chống trơn trượt hiệu quả trong môi trường dầu mỡ hoặc ẩm ướt. Đảm bảo tiêu chuẩn an toàn lao động khắt khe."
  },
  {
    "id": "giybohlaong4836",
    "title": "Giày An Toàn BLC-006",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (14).png",
    "desc": "Sản phẩm bền bỉ, thoáng khí và bảo vệ tối đa đôi chân người lao động khỏi các rủi ro tại công trường, nhà xưởng."
  },
  {
    "id": "giybohlaong3251",
    "title": "Giày An Toàn BLC-007",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (2).png",
    "desc": "Giày bảo hộ chuyên dụng, thiết kế ôm chân, thoải mái khi làm việc lâu."
  },
  {
    "id": "giybohlaong7142",
    "title": "Giày An Toàn BLC-008",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (3).png",
    "desc": "Đế chống trơn trượt hiệu quả trong môi trường dầu mỡ hoặc ẩm ướt. Đảm bảo tiêu chuẩn an toàn lao động khắt khe."
  },
  {
    "id": "giybohlaong6251",
    "title": "Giày An Toàn BLC-009",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (4).png",
    "desc": "Sản phẩm bền bỉ, thoáng khí và bảo vệ tối đa đôi chân người lao động khỏi các rủi ro tại công trường, nhà xưởng."
  },
  {
    "id": "giybohlaong7077",
    "title": "Giày An Toàn BLC-010",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (5).png",
    "desc": "Giày bảo hộ chuyên dụng, thiết kế ôm chân, thoải mái khi làm việc lâu."
  },
  {
    "id": "giybohlaong4745",
    "title": "Giày An Toàn BLC-011",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (6).png",
    "desc": "Đế chống trơn trượt hiệu quả trong môi trường dầu mỡ hoặc ẩm ướt. Đảm bảo tiêu chuẩn an toàn lao động khắt khe."
  },
  {
    "id": "giybohlaong9094",
    "title": "Giày An Toàn BLC-012",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (7).png",
    "desc": "Sản phẩm bền bỉ, thoáng khí và bảo vệ tối đa đôi chân người lao động khỏi các rủi ro tại công trường, nhà xưởng."
  },
  {
    "id": "giybohlaong985",
    "title": "Giày An Toàn BLC-013",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (8).png",
    "desc": "Giày bảo hộ chuyên dụng, thiết kế ôm chân, thoải mái khi làm việc lâu."
  },
  {
    "id": "giybohlaong7580",
    "title": "Giày An Toàn BLC-014",
    "cat": "cat10",
    "catLabel": "Giày bảo hộ lao động",
    "img": "../images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (9).png",
    "desc": "Đế chống trơn trượt hiệu quả trong môi trường dầu mỡ hoặc ẩm ướt. Đảm bảo tiêu chuẩn an toàn lao động khắt khe."
  },
  {
    "id": "giydabovcbucdy7767",
    "title": "Giày Da Đồng Phục BLC-001",
    "cat": "cat11",
    "catLabel": "Giày da bảo vệ - Có buộc dây",
    "img": "../images/Giày da bảo vệ - Có buộc dây/day-bao-ve (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "giydabovcbucdy2337",
    "title": "Giày Da Đồng Phục BLC-002",
    "cat": "cat11",
    "catLabel": "Giày da bảo vệ - Có buộc dây",
    "img": "../images/Giày da bảo vệ - Có buộc dây/day-bao-ve (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "giydabovcbucdy4593",
    "title": "Giày Da Đồng Phục BLC-003",
    "cat": "cat11",
    "catLabel": "Giày da bảo vệ - Có buộc dây",
    "img": "../images/Giày da bảo vệ - Có buộc dây/day-bao-ve (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "giydabovcbucdy5295",
    "title": "Giày Da Đồng Phục BLC-004",
    "cat": "cat11",
    "catLabel": "Giày da bảo vệ - Có buộc dây",
    "img": "../images/Giày da bảo vệ - Có buộc dây/day-bao-ve (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "giydabovkhngbucdy1875",
    "title": "Giày Lười Đồng Phục BLC-001",
    "cat": "cat12",
    "catLabel": "Giày da bảo vệ - Không buộc dây",
    "img": "../images/Giày da bảo vệ - Không buộc dây/day-bao-ve.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "gycaosudicuibov5634",
    "title": "Gậy Tuần Tra BLC-001",
    "cat": "cat13",
    "catLabel": "Gậy cao su - Dùi cui bảo vệ",
    "img": "../images/Gậy cao su - Dùi cui bảo vệ/dui-cui-bao-ve.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "gygiaothng2324",
    "title": "Gậy Chỉ Huy Giao Thông BLC-001",
    "cat": "cat14",
    "catLabel": "Gậy giao thông",
    "img": "../images/Gậy giao thông/gay-giao-thong.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "hthngbochy7451",
    "title": "Thiết Bị PCCC BLC-001",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "hthngbochy4340",
    "title": "Thiết Bị PCCC BLC-002",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (10).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "hthngbochy3840",
    "title": "Thiết Bị PCCC BLC-003",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (11).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "hthngbochy7642",
    "title": "Thiết Bị PCCC BLC-004",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (12).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "hthngbochy2281",
    "title": "Thiết Bị PCCC BLC-005",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (13).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "hthngbochy8096",
    "title": "Thiết Bị PCCC BLC-006",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (14).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "hthngbochy2460",
    "title": "Thiết Bị PCCC BLC-007",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (2).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "hthngbochy487",
    "title": "Thiết Bị PCCC BLC-008",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (3).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "hthngbochy4402",
    "title": "Thiết Bị PCCC BLC-009",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (4).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "hthngbochy9647",
    "title": "Thiết Bị PCCC BLC-010",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (5).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "hthngbochy3844",
    "title": "Thiết Bị PCCC BLC-011",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (6).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "hthngbochy315",
    "title": "Thiết Bị PCCC BLC-012",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (7).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "hthngbochy4808",
    "title": "Thiết Bị PCCC BLC-013",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (8).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "hthngbochy2269",
    "title": "Thiết Bị PCCC BLC-014",
    "cat": "cat15",
    "catLabel": "Hệ Thống Báo Cháy",
    "img": "../images/Hệ Thống Báo Cháy/he-thong-bao-chay (9).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "knhbohkhutrang5660",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-001",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "knhbohkhutrang7245",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-002",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (10).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "knhbohkhutrang1383",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-003",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (11).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "knhbohkhutrang4856",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-004",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (12).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "knhbohkhutrang2461",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-005",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (13).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "knhbohkhutrang4499",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-006",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (14).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "knhbohkhutrang8011",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-007",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (15).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "knhbohkhutrang4996",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-008",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (16).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "knhbohkhutrang2566",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-009",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (17).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "knhbohkhutrang7139",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-010",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (18).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "knhbohkhutrang3711",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-011",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (19).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "knhbohkhutrang3886",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-012",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (2).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "knhbohkhutrang2009",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-013",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (20).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "knhbohkhutrang4442",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-014",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (3).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "knhbohkhutrang2334",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-015",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (4).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "knhbohkhutrang5538",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-016",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (5).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "knhbohkhutrang2670",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-017",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (6).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "knhbohkhutrang5944",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-018",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (7).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "knhbohkhutrang7938",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-019",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (8).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "knhbohkhutrang5980",
    "title": "Thiết Bị Bảo Vệ Mặt BLC-020",
    "cat": "cat16",
    "catLabel": "Kính bảo hộ & Khẩu trang",
    "img": "../images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (9).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mbohlaong5304",
    "title": "Mũ Cứng Bảo Hộ BLC-001",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (1).png",
    "desc": "Mũ bảo hộ bằng nhựa cứng chịu lực va đập, thiết kế an toàn giúp làm việc ngoài trời."
  },
  {
    "id": "mbohlaong5555",
    "title": "Mũ Cứng Bảo Hộ BLC-002",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (10).png",
    "desc": "Quai đeo chắc chắn, hệ thống treo bên trong có thể điều chỉnh để vừa vặn với kích cỡ đầu của người sử dụng."
  },
  {
    "id": "mbohlaong8622",
    "title": "Mũ Cứng Bảo Hộ BLC-003",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (11).png",
    "desc": "Sản phẩm đạt tiêu chuẩn an toàn, bảo vệ phần đầu hiệu quả khỏi các vật rơi từ trên cao tại công trường."
  },
  {
    "id": "mbohlaong7624",
    "title": "Mũ Cứng Bảo Hộ BLC-004",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (12).png",
    "desc": "Mũ bảo hộ bằng nhựa cứng chịu lực va đập, thiết kế an toàn giúp làm việc ngoài trời."
  },
  {
    "id": "mbohlaong6143",
    "title": "Mũ Cứng Bảo Hộ BLC-005",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (2).png",
    "desc": "Quai đeo chắc chắn, hệ thống treo bên trong có thể điều chỉnh để vừa vặn với kích cỡ đầu của người sử dụng."
  },
  {
    "id": "mbohlaong2475",
    "title": "Mũ Cứng Bảo Hộ BLC-006",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (3).png",
    "desc": "Sản phẩm đạt tiêu chuẩn an toàn, bảo vệ phần đầu hiệu quả khỏi các vật rơi từ trên cao tại công trường."
  },
  {
    "id": "mbohlaong3769",
    "title": "Mũ Cứng Bảo Hộ BLC-007",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (4).png",
    "desc": "Mũ bảo hộ bằng nhựa cứng chịu lực va đập, thiết kế an toàn giúp làm việc ngoài trời."
  },
  {
    "id": "mbohlaong3762",
    "title": "Mũ Cứng Bảo Hộ BLC-008",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (5).png",
    "desc": "Quai đeo chắc chắn, hệ thống treo bên trong có thể điều chỉnh để vừa vặn với kích cỡ đầu của người sử dụng."
  },
  {
    "id": "mbohlaong6723",
    "title": "Mũ Cứng Bảo Hộ BLC-009",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (6).png",
    "desc": "Sản phẩm đạt tiêu chuẩn an toàn, bảo vệ phần đầu hiệu quả khỏi các vật rơi từ trên cao tại công trường."
  },
  {
    "id": "mbohlaong416",
    "title": "Mũ Cứng Bảo Hộ BLC-010",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (7).png",
    "desc": "Mũ bảo hộ bằng nhựa cứng chịu lực va đập, thiết kế an toàn giúp làm việc ngoài trời."
  },
  {
    "id": "mbohlaong2026",
    "title": "Mũ Cứng Bảo Hộ BLC-011",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (8).png",
    "desc": "Quai đeo chắc chắn, hệ thống treo bên trong có thể điều chỉnh để vừa vặn với kích cỡ đầu của người sử dụng."
  },
  {
    "id": "mbohlaong1943",
    "title": "Mũ Cứng Bảo Hộ BLC-012",
    "cat": "cat17",
    "catLabel": "Mũ bảo hộ lao động",
    "img": "../images/Mũ bảo hộ lao động/mu-bao-ho (9).png",
    "desc": "Sản phẩm đạt tiêu chuẩn an toàn, bảo vệ phần đầu hiệu quả khỏi các vật rơi từ trên cao tại công trường."
  },
  {
    "id": "mtnhnbohlaong5257",
    "title": "Mặt Nạ Hàn BLC-001",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "../images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "mtnhnbohlaong3334",
    "title": "Mặt Nạ Hàn BLC-002",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "../images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mtnhnbohlaong2484",
    "title": "Mặt Nạ Hàn BLC-003",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "../images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "mtnhnbohlaong1342",
    "title": "Mặt Nạ Hàn BLC-004",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "../images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "mtnhnbohlaong3290",
    "title": "Mặt Nạ Hàn BLC-005",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "../images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (5).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mtnhnbohlaong8985",
    "title": "Mặt Nạ Hàn BLC-006",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "../images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (6).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "mtnhnbohlaong8632",
    "title": "Mặt Nạ Hàn BLC-007",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "../images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (7).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "mtnhnbohlaong3080",
    "title": "Mặt Nạ Hàn BLC-008",
    "cat": "cat18",
    "catLabel": "Mặt nạ hàn bảo hộ lao động",
    "img": "../images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (8).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mtnphngc4937",
    "title": "Mặt Nạ Lọc Khí BLC-001",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "mtnphngc2119",
    "title": "Mặt Nạ Lọc Khí BLC-002",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (10).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mtnphngc7873",
    "title": "Mặt Nạ Lọc Khí BLC-003",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (11).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "mtnphngc1066",
    "title": "Mặt Nạ Lọc Khí BLC-004",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (12).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "mtnphngc9016",
    "title": "Mặt Nạ Lọc Khí BLC-005",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (13).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mtnphngc839",
    "title": "Mặt Nạ Lọc Khí BLC-006",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (14).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "mtnphngc1977",
    "title": "Mặt Nạ Lọc Khí BLC-007",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (15).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "mtnphngc2755",
    "title": "Mặt Nạ Lọc Khí BLC-008",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mtnphngc1287",
    "title": "Mặt Nạ Lọc Khí BLC-009",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "mtnphngc7364",
    "title": "Mặt Nạ Lọc Khí BLC-010",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "mtnphngc3658",
    "title": "Mặt Nạ Lọc Khí BLC-011",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (5).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mtnphngc2044",
    "title": "Mặt Nạ Lọc Khí BLC-012",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (6).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "mtnphngc4119",
    "title": "Mặt Nạ Lọc Khí BLC-013",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (7).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "mtnphngc613",
    "title": "Mặt Nạ Lọc Khí BLC-014",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (8).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "mtnphngc4948",
    "title": "Mặt Nạ Lọc Khí BLC-015",
    "cat": "cat19",
    "catLabel": "Mặt Nạ Phòng Độc",
    "img": "../images/Mặt Nạ Phòng Độc/mat-na-chong-doc (9).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "nnsaobov4990",
    "title": "Nón và Cấp Hiệu BLC-001",
    "cat": "cat20",
    "catLabel": "Nón , Sao Bảo Vệ",
    "img": "../images/Nón , Sao Bảo Vệ/non-bao-ve-2.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "nnsaobov331",
    "title": "Nón và Cấp Hiệu BLC-002",
    "cat": "cat20",
    "catLabel": "Nón , Sao Bảo Vệ",
    "img": "../images/Nón , Sao Bảo Vệ/non-bao-ve.png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "nnvilitrm2864",
    "title": "Nón Lưới Bảo Vệ BLC-001",
    "cat": "cat21",
    "catLabel": "Nón vải lưới trùm",
    "img": "../images/Nón vải lưới trùm/non-vai-luoi-trum (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "nnvilitrm6608",
    "title": "Nón Lưới Bảo Vệ BLC-002",
    "cat": "cat21",
    "catLabel": "Nón vải lưới trùm",
    "img": "../images/Nón vải lưới trùm/non-vai-luoi-trum (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "nnvilitrm325",
    "title": "Nón Lưới Bảo Vệ BLC-003",
    "cat": "cat21",
    "catLabel": "Nón vải lưới trùm",
    "img": "../images/Nón vải lưới trùm/non-vai-luoi-trum (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "nnvilitrm1773",
    "title": "Nón Lưới Bảo Vệ BLC-004",
    "cat": "cat21",
    "catLabel": "Nón vải lưới trùm",
    "img": "../images/Nón vải lưới trùm/non-vai-luoi-trum (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ntchngn5111",
    "title": "Nút Tai Giảm Ồn BLC-001",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "../images/Nút chống ồn/nut-lao-dong (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ntchngn7832",
    "title": "Nút Tai Giảm Ồn BLC-002",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "../images/Nút chống ồn/nut-lao-dong (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ntchngn226",
    "title": "Nút Tai Giảm Ồn BLC-003",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "../images/Nút chống ồn/nut-lao-dong (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ntchngn1493",
    "title": "Nút Tai Giảm Ồn BLC-004",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "../images/Nút chống ồn/nut-lao-dong (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ntchngn6673",
    "title": "Nút Tai Giảm Ồn BLC-005",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "../images/Nút chống ồn/nut-lao-dong (5).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ntchngn4032",
    "title": "Nút Tai Giảm Ồn BLC-006",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "../images/Nút chống ồn/nut-lao-dong (6).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ntchngn1504",
    "title": "Nút Tai Giảm Ồn BLC-007",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "../images/Nút chống ồn/nut-lao-dong (7).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ntchngn8538",
    "title": "Nút Tai Giảm Ồn BLC-008",
    "cat": "cat22",
    "catLabel": "Nút chống ồn",
    "img": "../images/Nút chống ồn/nut-lao-dong (8).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "niquytiucmlacmhtthuc7139",
    "title": "Biển Nội Quy BLC-001",
    "cat": "cat23",
    "catLabel": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
    "img": "../images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "niquytiucmlacmhtthuc8413",
    "title": "Biển Nội Quy BLC-002",
    "cat": "cat23",
    "catLabel": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
    "img": "../images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "niquytiucmlacmhtthuc8811",
    "title": "Biển Nội Quy BLC-003",
    "cat": "cat23",
    "catLabel": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
    "img": "../images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "niquytiucmlacmhtthuc1652",
    "title": "Biển Nội Quy BLC-004",
    "cat": "cat23",
    "catLabel": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
    "img": "../images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thangthothimcun3123",
    "title": "Thang Thoát Hiểm BLC-001",
    "cat": "cat24",
    "catLabel": "Thang Thoát Hiểm Cuốn",
    "img": "../images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thangthothimcun4229",
    "title": "Thang Thoát Hiểm BLC-002",
    "cat": "cat24",
    "catLabel": "Thang Thoát Hiểm Cuốn",
    "img": "../images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thangthothimcun6602",
    "title": "Thang Thoát Hiểm BLC-003",
    "cat": "cat24",
    "catLabel": "Thang Thoát Hiểm Cuốn",
    "img": "../images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thitbpcccanton5502",
    "title": "Trang Bị Chữa Cháy BLC-001",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thitbpcccanton9083",
    "title": "Trang Bị Chữa Cháy BLC-002",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (10).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thitbpcccanton5268",
    "title": "Trang Bị Chữa Cháy BLC-003",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (11).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thitbpcccanton3740",
    "title": "Trang Bị Chữa Cháy BLC-004",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (12).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thitbpcccanton5093",
    "title": "Trang Bị Chữa Cháy BLC-005",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (13).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thitbpcccanton5203",
    "title": "Trang Bị Chữa Cháy BLC-006",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (14).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thitbpcccanton9614",
    "title": "Trang Bị Chữa Cháy BLC-007",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (15).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thitbpcccanton402",
    "title": "Trang Bị Chữa Cháy BLC-008",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (16).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thitbpcccanton8803",
    "title": "Trang Bị Chữa Cháy BLC-009",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (2).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thitbpcccanton7584",
    "title": "Trang Bị Chữa Cháy BLC-010",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (3).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thitbpcccanton8532",
    "title": "Trang Bị Chữa Cháy BLC-011",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (4).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thitbpcccanton4068",
    "title": "Trang Bị Chữa Cháy BLC-012",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (5).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thitbpcccanton5977",
    "title": "Trang Bị Chữa Cháy BLC-013",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (6).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thitbpcccanton7374",
    "title": "Trang Bị Chữa Cháy BLC-014",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (7).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thitbpcccanton6689",
    "title": "Trang Bị Chữa Cháy BLC-015",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (8).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thitbpcccanton2138",
    "title": "Trang Bị Chữa Cháy BLC-016",
    "cat": "cat25",
    "catLabel": "Thiết bị PCCC & An toàn",
    "img": "../images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (9).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thngngrc3693",
    "title": "Thùng Rác Vệ Sinh BLC-001",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thngngrc9252",
    "title": "Thùng Rác Vệ Sinh BLC-002",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (10).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thngngrc9028",
    "title": "Thùng Rác Vệ Sinh BLC-003",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (11).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thngngrc7418",
    "title": "Thùng Rác Vệ Sinh BLC-004",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (12).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thngngrc2066",
    "title": "Thùng Rác Vệ Sinh BLC-005",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thngngrc3983",
    "title": "Thùng Rác Vệ Sinh BLC-006",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thngngrc3967",
    "title": "Thùng Rác Vệ Sinh BLC-007",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thngngrc4270",
    "title": "Thùng Rác Vệ Sinh BLC-008",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (5).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thngngrc709",
    "title": "Thùng Rác Vệ Sinh BLC-009",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (6).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "thngngrc6821",
    "title": "Thùng Rác Vệ Sinh BLC-010",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (7).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "thngngrc1143",
    "title": "Thùng Rác Vệ Sinh BLC-011",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (8).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "thngngrc3479",
    "title": "Thùng Rác Vệ Sinh BLC-012",
    "cat": "cat26",
    "catLabel": "Thùng đựng rác",
    "img": "../images/Thùng đựng rác/thung-dung-rac (9).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ocsumcaocpnhiu1612",
    "title": "Áo Thun Phản Quang BLC-001",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "../images/Áo cá sấu mè cao cấp nhiều/do.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ocsumcaocpnhiu2699",
    "title": "Áo Thun Phản Quang BLC-002",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "../images/Áo cá sấu mè cao cấp nhiều/luc-lam.png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ocsumcaocpnhiu323",
    "title": "Áo Thun Phản Quang BLC-003",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "../images/Áo cá sấu mè cao cấp nhiều/trang.png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ocsumcaocpnhiu5652",
    "title": "Áo Thun Phản Quang BLC-004",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "../images/Áo cá sấu mè cao cấp nhiều/vang-nhat.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ocsumcaocpnhiu3957",
    "title": "Áo Thun Phản Quang BLC-005",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "../images/Áo cá sấu mè cao cấp nhiều/vang.png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ocsumcaocpnhiu7682",
    "title": "Áo Thun Phản Quang BLC-006",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "../images/Áo cá sấu mè cao cấp nhiều/xang-duong.png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ocsumcaocpnhiu6834",
    "title": "Áo Thun Phản Quang BLC-007",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "../images/Áo cá sấu mè cao cấp nhiều/xanh-luc.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ocsumcaocpnhiu8232",
    "title": "Áo Thun Phản Quang BLC-008",
    "cat": "cat27",
    "catLabel": "Áo cá sấu mè cao cấp nhiều",
    "img": "../images/Áo cá sấu mè cao cấp nhiều/xanh.png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ophnquang3311",
    "title": "Áo Gile Phản Quang BLC-001",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (1).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang4237",
    "title": "Áo Gile Phản Quang BLC-002",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (10).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang9501",
    "title": "Áo Gile Phản Quang BLC-003",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (11).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang698",
    "title": "Áo Gile Phản Quang BLC-004",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (12).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang1276",
    "title": "Áo Gile Phản Quang BLC-005",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (13).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang6993",
    "title": "Áo Gile Phản Quang BLC-006",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (14).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang5577",
    "title": "Áo Gile Phản Quang BLC-007",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (15).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang2570",
    "title": "Áo Gile Phản Quang BLC-008",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (16).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang9583",
    "title": "Áo Gile Phản Quang BLC-009",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (17).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang7972",
    "title": "Áo Gile Phản Quang BLC-010",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (18).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang7841",
    "title": "Áo Gile Phản Quang BLC-011",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (19).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang8533",
    "title": "Áo Gile Phản Quang BLC-012",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (2).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang8159",
    "title": "Áo Gile Phản Quang BLC-013",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (20).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang9153",
    "title": "Áo Gile Phản Quang BLC-014",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (21).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang3436",
    "title": "Áo Gile Phản Quang BLC-015",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (22).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang6369",
    "title": "Áo Gile Phản Quang BLC-016",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (23).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang6527",
    "title": "Áo Gile Phản Quang BLC-017",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (24).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang1249",
    "title": "Áo Gile Phản Quang BLC-018",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (25).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang3413",
    "title": "Áo Gile Phản Quang BLC-019",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (26).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang5264",
    "title": "Áo Gile Phản Quang BLC-020",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (27).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang711",
    "title": "Áo Gile Phản Quang BLC-021",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (28).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang2696",
    "title": "Áo Gile Phản Quang BLC-022",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (29).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang3320",
    "title": "Áo Gile Phản Quang BLC-023",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (3).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang5428",
    "title": "Áo Gile Phản Quang BLC-024",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (30).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang2225",
    "title": "Áo Gile Phản Quang BLC-025",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (31).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang3209",
    "title": "Áo Gile Phản Quang BLC-026",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (32).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang2369",
    "title": "Áo Gile Phản Quang BLC-027",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (33).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang1694",
    "title": "Áo Gile Phản Quang BLC-028",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (34).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang6882",
    "title": "Áo Gile Phản Quang BLC-029",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (35).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang6095",
    "title": "Áo Gile Phản Quang BLC-030",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (36).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang7405",
    "title": "Áo Gile Phản Quang BLC-031",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (37).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang871",
    "title": "Áo Gile Phản Quang BLC-032",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (38).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang6830",
    "title": "Áo Gile Phản Quang BLC-033",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (39).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang7047",
    "title": "Áo Gile Phản Quang BLC-034",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (4).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang7934",
    "title": "Áo Gile Phản Quang BLC-035",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (40).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang5481",
    "title": "Áo Gile Phản Quang BLC-036",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (41).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang6883",
    "title": "Áo Gile Phản Quang BLC-037",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (42).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang6400",
    "title": "Áo Gile Phản Quang BLC-038",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (43).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang8155",
    "title": "Áo Gile Phản Quang BLC-039",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (44).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang2087",
    "title": "Áo Gile Phản Quang BLC-040",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (45).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang6950",
    "title": "Áo Gile Phản Quang BLC-041",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (46).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang7553",
    "title": "Áo Gile Phản Quang BLC-042",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (47).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang847",
    "title": "Áo Gile Phản Quang BLC-043",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (48).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang1842",
    "title": "Áo Gile Phản Quang BLC-044",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (49).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang9332",
    "title": "Áo Gile Phản Quang BLC-045",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (5).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang4604",
    "title": "Áo Gile Phản Quang BLC-046",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (50).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang7581",
    "title": "Áo Gile Phản Quang BLC-047",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (51).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang7819",
    "title": "Áo Gile Phản Quang BLC-048",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (52).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang9280",
    "title": "Áo Gile Phản Quang BLC-049",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (53).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang9500",
    "title": "Áo Gile Phản Quang BLC-050",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (54).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang2667",
    "title": "Áo Gile Phản Quang BLC-051",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (55).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang9445",
    "title": "Áo Gile Phản Quang BLC-052",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (56).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang7012",
    "title": "Áo Gile Phản Quang BLC-053",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (57).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang4998",
    "title": "Áo Gile Phản Quang BLC-054",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (58).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang5823",
    "title": "Áo Gile Phản Quang BLC-055",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (59).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang4945",
    "title": "Áo Gile Phản Quang BLC-056",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (6).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang9003",
    "title": "Áo Gile Phản Quang BLC-057",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (60).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang4497",
    "title": "Áo Gile Phản Quang BLC-058",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (61).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang2260",
    "title": "Áo Gile Phản Quang BLC-059",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (62).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang2782",
    "title": "Áo Gile Phản Quang BLC-060",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (63).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang7413",
    "title": "Áo Gile Phản Quang BLC-061",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (64).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "ophnquang4914",
    "title": "Áo Gile Phản Quang BLC-062",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (7).png",
    "desc": "Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động."
  },
  {
    "id": "ophnquang3873",
    "title": "Áo Gile Phản Quang BLC-063",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (8).png",
    "desc": "Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông."
  },
  {
    "id": "ophnquang5242",
    "title": "Áo Gile Phản Quang BLC-064",
    "cat": "cat28",
    "catLabel": "Áo Phản Quang",
    "img": "../images/Áo Phản Quang/ao-phan-quang (9).png",
    "desc": "Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng."
  },
  {
    "id": "bohpccc2473",
    "title": "Trang Phục Cứu Hỏa BLC-001",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "../images/Đồ bảo hộ PCCC/do-bao-ho-pccc (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "bohpccc4537",
    "title": "Trang Phục Cứu Hỏa BLC-002",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "../images/Đồ bảo hộ PCCC/do-bao-ho-pccc (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "bohpccc7043",
    "title": "Trang Phục Cứu Hỏa BLC-003",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "../images/Đồ bảo hộ PCCC/do-bao-ho-pccc (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "bohpccc1694",
    "title": "Trang Phục Cứu Hỏa BLC-004",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "../images/Đồ bảo hộ PCCC/do-bao-ho-pccc (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "bohpccc1571",
    "title": "Trang Phục Cứu Hỏa BLC-005",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "../images/Đồ bảo hộ PCCC/do-bao-ho-pccc (5).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "bohpccc3756",
    "title": "Trang Phục Cứu Hỏa BLC-006",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "../images/Đồ bảo hộ PCCC/do-bao-ho-pccc (6).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "bohpccc2892",
    "title": "Trang Phục Cứu Hỏa BLC-007",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "../images/Đồ bảo hộ PCCC/do-bao-ho-pccc (7).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "bohpccc3705",
    "title": "Trang Phục Cứu Hỏa BLC-008",
    "cat": "cat29",
    "catLabel": "Đồ bảo hộ PCCC",
    "img": "../images/Đồ bảo hộ PCCC/do-bao-ho-pccc (8).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "imaophao3250",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-001",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "imaophao3269",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-002",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (10).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "imaophao4265",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-003",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (11).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "imaophao849",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-004",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (12).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "imaophao334",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-005",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "imaophao3588",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-006",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "imaophao9168",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-007",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (4).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "imaophao619",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-008",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (5).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "imaophao1202",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-009",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (6).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "imaophao1620",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-010",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (7).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "imaophao1376",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-011",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (8).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "imaophao5174",
    "title": "Áo Mưa/Phao Cứu Sinh BLC-012",
    "cat": "cat30",
    "catLabel": "Đồ đi mưa - áo phao",
    "img": "../images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (9).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngphcbov3235",
    "title": "Đồng Phục An Ninh BLC-001",
    "cat": "cat31",
    "catLabel": "Đồng Phục Bảo Vệ",
    "img": "../images/Đồng Phục Bảo Vệ/ao-trang-bao-ve.png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngphcbov496",
    "title": "Đồng Phục An Ninh BLC-002",
    "cat": "cat31",
    "catLabel": "Đồng Phục Bảo Vệ",
    "img": "../images/Đồng Phục Bảo Vệ/ao-xanh-bao-ve.png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngphcbov9763",
    "title": "Đồng Phục An Ninh BLC-003",
    "cat": "cat31",
    "catLabel": "Đồng Phục Bảo Vệ",
    "img": "../images/Đồng Phục Bảo Vệ/ao-xanh-luc-bao-ve.png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngphcbovnew5572",
    "title": "Đồng Phục Thế Hệ Mới BLC-001",
    "cat": "cat32",
    "catLabel": "Đồng Phục Bảo Vệ NEW",
    "img": "../images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (1).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngphcbovnew4336",
    "title": "Đồng Phục Thế Hệ Mới BLC-002",
    "cat": "cat32",
    "catLabel": "Đồng Phục Bảo Vệ NEW",
    "img": "../images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (2).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngphcbovnew1999",
    "title": "Đồng Phục Thế Hệ Mới BLC-003",
    "cat": "cat32",
    "catLabel": "Đồng Phục Bảo Vệ NEW",
    "img": "../images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (3).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngbohlaong4449",
    "title": "Ủng Chống Nước/Hóa Chất BLC-001",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (10).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngbohlaong3718",
    "title": "Ủng Chống Nước/Hóa Chất BLC-002",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (11).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngbohlaong7981",
    "title": "Ủng Chống Nước/Hóa Chất BLC-003",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (12).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngbohlaong9783",
    "title": "Ủng Chống Nước/Hóa Chất BLC-004",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (13).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngbohlaong3705",
    "title": "Ủng Chống Nước/Hóa Chất BLC-005",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (14).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngbohlaong4922",
    "title": "Ủng Chống Nước/Hóa Chất BLC-006",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (15).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngbohlaong312",
    "title": "Ủng Chống Nước/Hóa Chất BLC-007",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (16).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngbohlaong4567",
    "title": "Ủng Chống Nước/Hóa Chất BLC-008",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (17).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngbohlaong2487",
    "title": "Ủng Chống Nước/Hóa Chất BLC-009",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (18).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngbohlaong5064",
    "title": "Ủng Chống Nước/Hóa Chất BLC-010",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (19).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngbohlaong8672",
    "title": "Ủng Chống Nước/Hóa Chất BLC-011",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (20).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngbohlaong3447",
    "title": "Ủng Chống Nước/Hóa Chất BLC-012",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (21).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngbohlaong4173",
    "title": "Ủng Chống Nước/Hóa Chất BLC-013",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-bao-ho (22).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngbohlaong6370",
    "title": "Ủng Chống Nước/Hóa Chất BLC-014",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (1).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngbohlaong374",
    "title": "Ủng Chống Nước/Hóa Chất BLC-015",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (2).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngbohlaong4247",
    "title": "Ủng Chống Nước/Hóa Chất BLC-016",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (3).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngbohlaong6945",
    "title": "Ủng Chống Nước/Hóa Chất BLC-017",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (4).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngbohlaong6900",
    "title": "Ủng Chống Nước/Hóa Chất BLC-018",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (5).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngbohlaong3837",
    "title": "Ủng Chống Nước/Hóa Chất BLC-019",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (6).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
  },
  {
    "id": "ngbohlaong343",
    "title": "Ủng Chống Nước/Hóa Chất BLC-020",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (7).png",
    "desc": "Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng."
  },
  {
    "id": "ngbohlaong900",
    "title": "Ủng Chống Nước/Hóa Chất BLC-021",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (8).png",
    "desc": "Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng."
  },
  {
    "id": "ngbohlaong8991",
    "title": "Ủng Chống Nước/Hóa Chất BLC-022",
    "cat": "cat33",
    "catLabel": "Ủng bảo hộ lao động",
    "img": "../images/Ủng bảo hộ lao động/ung-lao-dong (9).png",
    "desc": "Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường."
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
    
    grid.innerHTML = paginatedList.map(p => '<div class="product-card group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"><div class="relative aspect-[4/5] bg-gray-50 overflow-hidden cursor-pointer" onclick="openLightbox(' + JSON.stringify(p).replace(/"/g, '&quot;') + ')"><img alt="' + p.title + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="' + p.img + '" onerror="this.src=\'data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' width=\\\'200\\\' height=\\\'200\\\'%3E%3Crect fill=\\\'%23f1f5f9\\\' width=\\\'200\\\' height=\\\'200\\\'/%3E%3C/svg%3E\'"><div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 gap-4"><a href="tel:0931160818" onclick="event.stopPropagation()" class="w-full py-4 bg-[#1D5FA8] text-white text-xs font-bold rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:bg-[#164A85] transition-colors btn-press"><span class="material-symbols-outlined text-[18px]">chat_bubble</span> LIÊN HỆ VỚI CHÚNG TÔI</a><button onclick="event.stopPropagation(); openLightbox(' + JSON.stringify(p).replace(/"/g, '&quot;') + ')" class="w-full py-4 bg-white text-[#1A2744] text-xs font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E8A500] hover:text-white transition-colors btn-press"><span class="material-symbols-outlined text-[18px]">visibility</span> XEM CHI TIẾT</button></div></div><div class="p-6 text-center">' + (p.catLabel.length > 20 ? '<div class="product-title-wrapper is-long"><p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 product-title-marquee">' + p.catLabel + '</p></div>' : '<p class="text-[10px] font-extrabold text-[#1D5FA8] uppercase tracking-widest mb-1 truncate">' + p.catLabel + '</p>') + '' + (p.title.length > 20 ? '<div class="product-title-wrapper is-long"><h3 class="font-bold text-lg text-[#1A2744] group-hover:text-[#1D5FA8] transition-colors mb-2 product-title-marquee">' + p.title + '</h3></div>' : '<h3 class="font-bold text-lg text-[#1A2744] group-hover:text-[#1D5FA8] transition-colors mb-2 truncate">' + p.title + '</h3>') + '<p class="text-sm font-bold text-[#E8A500]">Liên hệ để biết giá</p></div></div>').join('');

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
