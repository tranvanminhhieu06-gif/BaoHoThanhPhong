# Trang quản lý sản phẩm - Thành Phong Bảo Hộ Lao Động

Công cụ thêm / sửa / xóa sản phẩm cho website, thay vì phải sửa tay file
`js/products.js`.

Trang này chạy được ở **2 chế độ**:

| | Chế độ máy cá nhân | Chế độ online |
|---|---|---|
| Ai vào được | Chỉ mình bạn | Ai có đường link + mật khẩu |
| Máy bạn có phải bật không | Có | Không |
| Lưu thay đổi | Vào file trên máy, bấm nút "Đồng bộ" để đẩy lên GitHub | Tự động lưu thẳng lên GitHub |

---

## A. Chạy trên máy cá nhân

1. Cài Node.js nếu chưa có: https://nodejs.org (bản LTS).
2. Mở Terminal / Command Prompt, vào thư mục `admin`:
   ```
   cd đường-dẫn-tới\BaoHoThanhPhong\admin
   ```
3. Cài thư viện (chỉ cần làm 1 lần):
   ```
   npm install
   ```
4. Chạy:
   ```
   npm start
   ```
5. Mở trình duyệt: **http://localhost:3000**

Tắt server: quay lại cửa sổ Terminal, nhấn `Ctrl + C`.

---

## B. Đưa lên mạng để người khác cùng vào (chế độ online)

Website `baohothanhphong.vn` đang chạy trên GitHub Pages — nơi đó chỉ chứa
file tĩnh, **không chạy được server**. Nên trang quản lý cần được đặt ở một
dịch vụ khác. Hướng dẫn dưới đây dùng **Render** (có gói miễn phí).

### Bước 1 — Tạo GitHub Token (để trang quản lý có quyền sửa website)

1. Vào https://github.com/settings/personal-access-tokens/new
2. Điền:
   - **Token name**: `thanh-phong-admin`
   - **Expiration**: chọn thời hạn (ví dụ 1 năm)
   - **Repository access**: chọn `Only select repositories` → chọn
     `BaoHoThanhPhong`
   - **Permissions** → mục **Repository permissions** → tìm dòng
     **Contents** → đổi thành **Read and write**
3. Bấm **Generate token**, rồi **copy chuỗi token** (dạng `github_pat_...`).
   Chuỗi này chỉ hiện 1 lần, hãy lưu tạm ở đâu đó.

> Token này giống chìa khóa vào website của bạn — không đưa cho người ngoài,
> không đăng lên mạng.

### Bước 2 — Tạo dịch vụ trên Render

1. Vào https://render.com → đăng ký / đăng nhập bằng tài khoản GitHub.
2. Bấm **New +** → **Web Service**.
3. Chọn kho `BaoHoThanhPhong`. Nếu chưa thấy, bấm **Configure account** để
   cho phép Render truy cập kho này.
4. Điền cấu hình:
   - **Name**: `thanhphong-admin` (tên này sẽ nằm trong đường link)
   - **Region**: Singapore (gần Việt Nam nhất)
   - **Branch**: `main`
   - **Root Directory**: `admin`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### Bước 3 — Đặt các biến môi trường

Vẫn ở màn hình tạo dịch vụ, kéo xuống mục **Environment Variables**, thêm
4 dòng sau:

| Key | Value |
|---|---|
| `ADMIN_PASSWORD` | Mật khẩu bạn tự đặt để vào trang quản lý |
| `SESSION_SECRET` | Một chuỗi ngẫu nhiên dài bất kỳ (gõ đại ~40 ký tự) |
| `GITHUB_TOKEN` | Token đã copy ở Bước 1 |
| `GITHUB_REPO` | `tranvanminhhieu06-gif/BaoHoThanhPhong` |

Nếu muốn dùng nút "Tự động điền" bằng AI, thêm 1 dòng nữa (xem mục C):

| Key | Value |
|---|---|
| `ANTHROPIC_API_KEY` | API key lấy ở console.anthropic.com |

Sau đó bấm **Create Web Service** và chờ vài phút.

### Bước 4 — Lấy đường link

Khi Render báo **Live**, đường link sẽ nằm ở đầu trang, dạng:

```
https://thanhphong-admin.onrender.com
```

Gửi link này + mật khẩu cho người bạn muốn cho vào quản lý sản phẩm.

---

## C. Bật tính năng "Tự động điền" bằng AI (không bắt buộc)

Nút **"Tự động điền"** nằm cạnh ô Mô tả. Bấm vào, máy sẽ đọc đoạn mô tả rồi
tự điền: **Tên sản phẩm**, **Ứng Dụng Thực Tế**, **Ưu Điểm Nổi Bật**,
**Cam Kết Từ Thành Phong**.

Nút này hoạt động theo 2 bước:

1. **Tách theo tiêu đề (miễn phí, luôn có sẵn).** Nếu trong đoạn mô tả bạn dán
   vào đã có sẵn các tiêu đề, máy sẽ tự chia ra. Ví dụ đoạn này sẽ tách đúng
   mà không cần AI:

   ```
   Áo phản quang lưới 3M cao cấp

   Ứng dụng:
   - Công nhân công trình xây dựng.
   - Nhân viên điều tiết giao thông.

   Ưu điểm:
   - Vải lưới thoáng mát, nhẹ.
   - Dải phản quang 3M sáng rõ ban đêm.

   Cam kết:
   - Hàng đúng mẫu, đổi trả trong 7 ngày.
   ```

   Máy nhận diện được các tiêu đề như: `Ứng dụng`, `Áp dụng`, `Phù hợp`,
   `Đối tượng`, `Ưu điểm`, `Đặc điểm`, `Tính năng`, `Chất liệu`, `Cam kết`,
   `Bảo hành`, `Chính sách`, `Hỗ trợ`.

2. **Nhờ AI viết (có tính phí).** Nếu đoạn mô tả chỉ là một đoạn văn xuôi
   không có tiêu đề, máy sẽ gửi cho AI đọc và tự viết ra 4 mục.

### Cách lấy API key

1. Vào https://console.anthropic.com → đăng ký / đăng nhập.
2. Nạp tiền vào tài khoản (mục **Billing**, tối thiểu 5 USD).
3. Vào mục **API Keys** → **Create Key** → copy chuỗi key (dạng `sk-ant-...`).
4. Thêm vào Render: dịch vụ của bạn → **Environment** → thêm biến
   `ANTHROPIC_API_KEY` = chuỗi vừa copy → **Save changes**.

Nếu chạy trên máy cá nhân, đặt biến trước khi chạy:

```
set ANTHROPIC_API_KEY=sk-ant-...
npm start
```

> Không cài API key cũng không sao — nút "Tự động điền" vẫn dùng được ở bước 1
> (tách theo tiêu đề), chỉ là không tự viết nội dung mới được.

**Lưu ý:** AI có thể viết chưa chính xác. Luôn đọc lại và chỉnh sửa trước khi
bấm "Lưu sản phẩm".

---

## Cách dùng

- **Danh mục** (cột trái): bấm để lọc sản phẩm theo danh mục.
- **Thêm sản phẩm**: bấm "Thêm sản phẩm", chọn ảnh, nhập tên, chọn danh mục
  (hoặc "➕ Danh mục mới..." để tạo danh mục chưa có).
- **Sửa / Xóa**: mỗi thẻ sản phẩm có 2 nút tương ứng.
- **Tự động điền**: dán mô tả vào ô Mô tả rồi bấm nút này để máy tự điền tên
  sản phẩm và 3 mục nội dung (xem mục C ở trên).

### Trang "Khối nội dung"

Bấm nút **Khối nội dung** trên thanh đầu trang để mở trang quản lý các khung
hiển thị trên **trang chi tiết sản phẩm**:

- **Ô đặc điểm** — các ô nhỏ nằm cạnh ảnh sản phẩm (VD: "Chất lượng cao, đạt
  tiêu chuẩn an toàn").
- **Cột nội dung** — các khung lớn phía dưới (Ứng Dụng Thực Tế, Ưu Điểm Nổi
  Bật, Cam Kết Từ Thành Phong...).

Ở mỗi khối bạn có thể: đổi tiêu đề, đổi biểu tượng và màu, sửa nội dung,
**kéo biểu tượng ⠿ để đổi thứ tự**, bấm 🗑 để xóa, hoặc bấm "Thêm ô" /
"Thêm cột" để tạo khối mới (không giới hạn 3 khối như trước).

Chấm tròn cạnh tên danh mục cho biết mục đó đã có nội dung riêng (xanh) hay
chưa (xám). Nhớ bấm **Lưu thay đổi** sau khi chỉnh.

> **Lưu ý về 3 ô ở trang Sản phẩm.** Ba ô "Ứng Dụng Thực Tế / Ưu Điểm Nổi Bật /
> Cam Kết Từ Thành Phong" trong form thêm–sửa sản phẩm nhận diện cột theo
> **tên cột**. Nếu bạn đổi tên một cột ở trang Khối nội dung (ví dụ đổi
> "Ứng Dụng Thực Tế" thành "Phạm Vi Sử Dụng") thì ô tương ứng bên trang Sản
> phẩm sẽ không còn khớp với cột đó nữa. Muốn giữ liên kết, hãy giữ nguyên tên
> 3 cột này và chỉ đổi tên/thêm mới với các cột khác.
- **3 ô nội dung** (Ứng Dụng Thực Tế / Ưu Điểm Nổi Bật / Cam Kết Từ Thành
  Phong): áp dụng cho cả **danh mục con** đang chọn — mọi sản phẩm cùng danh
  mục con sẽ hiển thị chung nội dung này. Mỗi dòng là 1 gạch đầu dòng.
- **Đồng bộ lên GitHub**: chỉ hiện ở chế độ máy cá nhân. Ở chế độ online,
  mọi thay đổi được lưu tự động.

Sau khi lưu, website thật cần khoảng **1-2 phút** để GitHub Pages cập nhật.

---

## Lưu ý

- Ở chế độ máy cá nhân, mỗi lần lưu sẽ tạo bản sao lưu `js/products.js.bak`
  và `js/category_content.js.bak` phòng khi cần khôi phục.
- Ảnh sản phẩm được lưu vào `images/<Tên danh mục>/<Tên danh mục con>/`.
- Khi tạo **danh mục hoàn toàn mới**, danh mục đó sẽ xuất hiện ở mục "Tất cả
  sản phẩm" và trang chủ, nhưng **chưa có trong menu lọc bên trái** của trang
  `sanpham.html` (menu đó đang được viết cứng trong HTML). Nếu cần, phải sửa
  thêm phần đó.
- Gói miễn phí của Render sẽ "ngủ" khi không ai dùng — lần vào đầu tiên sau
  một thời gian dài có thể mất ~30 giây để khởi động. Đây là hiện tượng bình
  thường, không phải lỗi.
- Nếu đổi mật khẩu: vào Render → dịch vụ của bạn → **Environment** → sửa
  `ADMIN_PASSWORD` → **Save changes**.
