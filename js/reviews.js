// Đánh giá / hỏi đáp của khách về sản phẩm.
// File này được trang quản lý (admin) đọc và ghi tự động — hạn chế sửa tay.
//
// Mỗi mục gồm:
//   id        : mã không đổi
//   productId : mã sản phẩm được đánh giá (khớp với id trong js/products.js)
//               ĐỂ TRỐNG "" nghĩa là ĐÁNH GIÁ CHUNG về công ty — loại này
//               hiện ở mục "Khách hàng nói gì" trên trang chủ và ở tab
//               Hỏi đáp của mọi sản phẩm.
//   rating    : số sao 1-5
//   title     : tiêu đề ngắn
//   author    : tên người gửi
//   role      : chức danh / công ty (chỉ dùng cho đánh giá chung)
//   content   : nội dung đánh giá / câu hỏi
//   date      : ngày gửi dạng YYYY-MM-DD
//   reply     : câu trả lời của Thành Phong (để trống nếu chưa trả lời)
//   approved  : true = đã duyệt và hiển thị trên website
//               false = đang chờ duyệt, KHÔNG hiển thị cho khách

const reviews = [
  {
    "id": "r1",
    "productId": "",
    "rating": 5,
    "title": "Chất lượng vải tốt, giao hàng đúng hẹn",
    "author": "Anh Minh Tuấn",
    "role": "Giám đốc Cty TNHH Dịch vụ Bảo vệ Hoàng Long",
    "content": "Chúng tôi đã đặt may đồng phục bảo vệ cho toàn bộ nhân viên tại Thành Phong. Chất lượng vải tốt, đường may chắc chắn, giao hàng đúng hẹn. Rất hài lòng!",
    "date": "2026-02-18",
    "reply": "",
    "approved": true
  },
  {
    "id": "r2",
    "productId": "",
    "rating": 5,
    "title": "Sản phẩm phong phú, tư vấn nhiệt tình",
    "author": "Chị Thanh Hương",
    "role": "Phòng Mua hàng – Cty XD Thái Bình Dương",
    "content": "Mua đồ bảo hộ lao động ở Thành Phong nhiều năm rồi. Sản phẩm phong phú, giá hợp lý. Đặc biệt nhân viên tư vấn rất nhiệt tình và chuyên nghiệp.",
    "date": "2026-01-22",
    "reply": "",
    "approved": true
  },
  {
    "id": "r3",
    "productId": "",
    "rating": 4,
    "title": "Giày bền, đế chống trượt tốt",
    "author": "Anh Văn Hùng",
    "role": "Quản lý nhà máy – KCN Tân Bình",
    "content": "Giày bảo hộ mua ở đây rất bền, đế chống trượt tốt. Giá cả cạnh tranh hơn nhiều nơi khác. Sẽ tiếp tục ủng hộ Thành Phong!",
    "date": "2025-11-30",
    "reply": "",
    "approved": true
  },
  {
    "id": "r4",
    "productId": "aobaovetayda12",
    "rating": 5,
    "title": "Đồng phục đẹp, đúng mẫu",
    "author": "Khuê",
    "role": "",
    "content": "Đồng phục đẹp, giá tốt. Vải mặc mát, đường may chắc chắn.",
    "date": "2026-03-07",
    "reply": "",
    "approved": true
  },
  {
    "id": "r5",
    "productId": "aobaovetayda12",
    "rating": 5,
    "title": "Giao hàng rất nhanh chóng",
    "author": "Tùng Hương",
    "role": "",
    "content": "Chúng tôi đặt hàng với số lượng lớn tại đây nhưng giao hàng rất đúng hạn. Chất lượng sản phẩm đúng với yêu cầu, chúng tôi rất hài lòng.",
    "date": "2025-09-16",
    "reply": "Cảm ơn anh/chị đã tin tưởng Thành Phong. Rất mong được tiếp tục phục vụ quý công ty.",
    "approved": true
  }
];
