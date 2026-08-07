// Dữ liệu bài viết / tin tức của website.
// File này được trang quản lý (admin) đọc và ghi tự động — hạn chế sửa tay.
//
// Mỗi bài gồm:
//   id        : mã không đổi, dùng nội bộ
//   slug      : phần đuôi đường dẫn, ví dụ tintuc/index.html?bai=slug
//   title     : tiêu đề bài
//   excerpt   : tóm tắt ngắn hiện ở thẻ tin
//   cover     : ảnh bìa (đường dẫn tính từ thư mục html/ hoặc tintuc/)
//   tag       : nhãn phân loại hiện trên ảnh
//   category  : chủ đề hiện ở dòng thông tin
//   date      : ngày đăng dạng YYYY-MM-DD
//   author    : người viết
//   sourceUrl : link bài gốc (nếu là tin dẫn lại), có thể để rỗng
//   featured  : true nếu là bài nổi bật (hiện ô lớn trên trang chủ)
//   contentHtml : nội dung bài, dạng HTML

const posts = [
  {
    "id": "p1",
    "slug": "thang-hanh-dong-an-toan-ve-sinh-lao-dong-2026",
    "title": "TP.HCM phát động Tháng hành động An toàn Vệ sinh Lao động năm 2026",
    "excerpt": "TP. Hồ Chí Minh chính thức phát động Tháng hành động về an toàn, vệ sinh lao động năm 2026, nhấn mạnh tăng trưởng kinh tế chỉ thực sự trọn vẹn khi đi đôi với bảo vệ tính mạng và sức khỏe người lao động.",
    "cover": "../images/TIN TỨC/Screenshot 2026-06-11 112727.png",
    "tag": "Nổi bật",
    "category": "An toàn lao động",
    "date": "2026-05-01",
    "author": "Thành Phong",
    "sourceUrl": "https://baophapluat.vn/tp-ho-chi-minh-phat-dong-thang-hanh-dong-ve-an-toan-ve-sinh-lao-dong-nam-2026.html",
    "featured": true,
    "contentHtml": "<p>TP. Hồ Chí Minh chính thức phát động Tháng hành động về an toàn, vệ sinh lao động năm 2026. Sự kiện nhấn mạnh thông điệp: tăng trưởng kinh tế chỉ thực sự trọn vẹn khi đi đôi với bảo vệ tính mạng và sức khỏe người lao động.</p><h3>Trọng tâm của Tháng hành động</h3><ul><li>Tăng cường kiểm tra, giám sát công tác an toàn tại các công trình xây dựng và nhà máy.</li><li>Đẩy mạnh huấn luyện an toàn lao động cho người sử dụng lao động và người lao động.</li><li>Yêu cầu trang bị đầy đủ phương tiện bảo vệ cá nhân cho người lao động.</li></ul><h3>Doanh nghiệp cần chuẩn bị gì?</h3><p>Doanh nghiệp nên rà soát lại toàn bộ trang thiết bị bảo hộ đang sử dụng, thay thế những sản phẩm đã cũ hoặc không còn đạt chuẩn, đồng thời bổ sung đầy đủ cho người lao động mới.</p>"
  },
  {
    "id": "p2",
    "slug": "tai-nan-lao-dong-nam-2025",
    "title": "Tai nạn lao động năm 2025: Giảm số vụ nhưng vẫn tiềm ẩn rủi ro",
    "excerpt": "Cả nước ghi nhận 7.004 vụ tai nạn lao động trong năm 2025, làm 658 người tử vong. Nguyên nhân chủ yếu do vi phạm quy trình an toàn và không sử dụng phương tiện bảo vệ cá nhân.",
    "cover": "../images/TIN TỨC/Screenshot 2026-06-11 112832.png",
    "tag": "Thống kê",
    "category": "Báo cáo",
    "date": "2026-04-10",
    "author": "Thành Phong",
    "sourceUrl": "https://tcnnld.vn/news/detail/71676/Tinh-hinh-tai-nan-lao-dong-nam-2025-Giam-ve-so-vu-nhung-van-tiem-an-nhieu-rui-ro.html",
    "featured": false,
    "contentHtml": "<p>Theo báo cáo, cả nước ghi nhận 7.004 vụ tai nạn lao động trong năm 2025, làm 658 người tử vong. Số vụ có giảm so với năm trước nhưng mức độ rủi ro vẫn còn cao.</p><h3>Nguyên nhân chính</h3><ul><li>Vi phạm quy trình, biện pháp làm việc an toàn.</li><li>Không sử dụng hoặc sử dụng sai phương tiện bảo vệ cá nhân.</li><li>Thiếu huấn luyện an toàn cho người lao động mới.</li></ul><p>Việc trang bị đầy đủ và đúng chủng loại thiết bị bảo hộ là biện pháp phòng ngừa đơn giản nhưng hiệu quả nhất.</p>"
  },
  {
    "id": "p3",
    "slug": "luat-an-toan-lao-dong-2025",
    "title": "Luật An Toàn Lao Động 2025: Doanh nghiệp bắt buộc trang bị bảo hộ từ ngày đầu làm việc",
    "excerpt": "Theo quy định mới, doanh nghiệp phải trang bị đầy đủ thiết bị bảo hộ từ ngày đầu tiên người lao động đi làm. Vi phạm có thể bị phạt lên đến 75 triệu đồng.",
    "cover": "../images/TIN TỨC/Screenshot 2026-06-11 112912.png",
    "tag": "Pháp luật",
    "category": "Quy định mới",
    "date": "2025-12-15",
    "author": "Thành Phong",
    "sourceUrl": "https://honeywell-safety.vn/luat-an-toan-lao-dong-2025-ve-trang-bi-bao-ho",
    "featured": false,
    "contentHtml": "<p>Theo quy định mới, doanh nghiệp phải trang bị đầy đủ thiết bị bảo hộ cho người lao động ngay từ ngày đầu tiên đi làm, không được trì hoãn với bất kỳ lý do nào.</p><h3>Mức xử phạt</h3><p>Hành vi không trang bị đầy đủ phương tiện bảo vệ cá nhân có thể bị phạt lên đến 75 triệu đồng, tùy theo số lượng người lao động bị ảnh hưởng.</p><h3>Doanh nghiệp nên làm gì</h3><ul><li>Lập danh mục phương tiện bảo vệ cá nhân theo từng vị trí công việc.</li><li>Cấp phát và ghi nhận đầy đủ bằng biên bản.</li><li>Kiểm tra, thay thế định kỳ khi thiết bị hết hạn sử dụng.</li></ul>"
  }
];
