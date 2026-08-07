/**
 * Cấu hình chung của website
 * --------------------------
 *
 * reviewApi: địa chỉ trang quản lý (server admin) dùng để NHẬN phản hồi
 *            khách gửi từ website.
 *
 *   - Để trống  -> nút "Gửi Phản Hồi" sẽ chuyển khách sang Zalo kèm sẵn
 *                  nội dung họ vừa nhập.
 *   - Điền vào  -> phản hồi được gửi thẳng về trang quản lý, nằm ở mục
 *                  "Chờ duyệt". Bạn duyệt xong nó mới hiện lên website.
 *
 * Sau khi deploy trang quản lý lên Render (xem admin/README.md mục B), copy
 * đường dẫn dạng https://ten-cua-ban.onrender.com và dán vào dưới đây.
 * Nhớ KHÔNG có dấu "/" ở cuối.
 */
const SITE_CONFIG = {
  reviewApi: '',
  zaloPhone: '0931160818'
};
