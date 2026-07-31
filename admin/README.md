# Trang quản lý sản phẩm - Thành Phong Bảo Hộ Lao Động

Công cụ nhỏ chạy trên máy tính của bạn để thêm / sửa / xóa sản phẩm cho website,
thay vì phải tự sửa tay file `js/products.js`.

## Cách chạy

1. Cài Node.js nếu máy chưa có: https://nodejs.org (bản LTS).
2. Mở Terminal / Command Prompt, di chuyển vào thư mục `admin`:
   ```
   cd đường-dẫn-tới\BaoHoThanhPhong\admin
   ```
3. Cài thư viện cần thiết (chỉ cần làm 1 lần):
   ```
   npm install
   ```
4. Chạy server:
   ```
   npm start
   ```
5. Mở trình duyệt vào địa chỉ: **http://localhost:3000**

Muốn tắt thì quay lại cửa sổ Terminal và nhấn `Ctrl + C`.

## Cách dùng

- **Danh mục** (cột trái): bấm vào để lọc sản phẩm theo danh mục.
- **Thêm sản phẩm**: bấm nút "Thêm sản phẩm", chọn ảnh, nhập tên, chọn danh mục
  (hoặc chọn "➕ Danh mục mới..." để tạo danh mục chưa có), có thể thêm danh mục
  con tương tự.
- **Sửa / Xóa**: mỗi thẻ sản phẩm có 2 nút tương ứng.
- **Đồng bộ lên GitHub**: sau khi chỉnh sửa xong, bấm nút "Đồng bộ lên GitHub"
  ở góc trên bên phải để tự động `git add` + `git commit` + `git push`, đưa
  thay đổi lên GitHub Pages. Máy cần đã đăng nhập git (đã từng push được repo
  này trước đó) thì nút này mới hoạt động.

## Lưu ý quan trọng

- Công cụ này chỉnh sửa trực tiếp file `js/products.js` (dữ liệu sản phẩm thật
  của website). Mỗi lần lưu, một bản sao lưu được tạo tại `js/products.js.bak`
  để phòng khi cần khôi phục.
- Ảnh sản phẩm được lưu vào thư mục `images/<Tên danh mục>/<Tên danh mục con>/`.
- Khi tạo **danh mục hoàn toàn mới**, danh mục đó sẽ xuất hiện trong mục
  "Tất cả sản phẩm" trên trang `sanpham.html` và trên trang chủ, nhưng sẽ
  **chưa có mục riêng trong menu lọc bên trái** của trang `sanpham.html` (menu
  đó hiện đang được viết cứng trong HTML). Nếu muốn danh mục mới cũng hiện
  trong menu lọc bên trái, cần nhờ người chỉnh code cập nhật thêm phần đó.
- Trang quản lý này chỉ nên chạy trên máy cá nhân (không public ra internet)
  vì không có đăng nhập / mật khẩu bảo vệ.
