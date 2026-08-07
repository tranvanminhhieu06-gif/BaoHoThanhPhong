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

## D. Nạp nội dung hàng loạt từ file Word (noidung.md)

Dùng khi bạn có sẵn một file nội dung dài chứa mô tả của nhiều sản phẩm và
muốn đưa hết vào website, thay vì gõ tay từng danh mục.

### Bước 1 — Chuẩn bị

Chép file `noidung.md` vào thư mục **BaoHoThanhPhong** (cùng chỗ với
`index.html`).

> Sau khi chép file này vào, trang quản lý sẽ tự có thêm **danh sách thả
> xuống** để chọn nội dung có sẵn — xem mục E bên dưới. Nếu muốn dùng cả trên
> bản online thì nhớ commit/push file `noidung.md` lên GitHub.

### Bước 2 — Tạo bản xem trước

Mở Command Prompt tại thư mục `BaoHoThanhPhong`, chạy:

```
node scripts/import-noidung.js noidung.md
```

Lệnh này **không sửa gì trên website**. Nó chỉ đọc file, tách nội dung và in
ra bảng kết quả, ví dụ:

```
Đã đọc 18 bảng trong file.

Ghép được   : 42 bài vào danh mục
Chưa ghép   : 3 bài

  [OK] cat2_s1      <- ÁO PHẢN QUANG PALIZE  (5 khung)
  [OK] cat7_s1      <- QUẦN ÁO CÔNG NHÂN     (6 khung)
  [??] PHỤ KIỆN BẢO VỆ  (4 khung)
```

- `[OK]` = đã tìm được danh mục tương ứng trong website.
- `[??]` = chưa tìm được, bài này sẽ bị bỏ qua khi áp dụng.

### Bước 3 — Xem demo

Mở file **`admin/preview/demo.html`** bằng trình duyệt (nhấp đúp vào file).

Trang demo hiển thị đúng như trang chi tiết sản phẩm thật: tiêu đề, đoạn giới
thiệu, các ô đặc điểm và **toàn bộ khung nội dung được tạo tự động** từ file.
Chọn từng bài ở cột trái để xem.

Script tự tạo khung cho **mọi mục** có trong file, kể cả những mục website
chưa từng có như *Chính Sách Bảo Hành*, *Chất liệu*, *Thiết kế*, *Đặc điểm
nổi bật* — mỗi mục được gán biểu tượng và màu phù hợp.

### Bước 4 — Áp dụng vào website

Khi đã ưng ý, chạy lại kèm `--apply`:

```
node scripts/import-noidung.js noidung.md --apply
```

Nội dung sẽ được ghi vào `js/category_content.js`. Bản cũ được sao lưu tại
`js/category_content.js.bak`.

Sau đó vào trang quản lý bấm **Đồng bộ lên GitHub** (chế độ máy cá nhân), hoặc
commit/push như bình thường, để đưa lên website thật.

### Lưu ý

- Chỉ những danh mục **có trong file** mới bị ghi đè. Danh mục không có trong
  file giữ nguyên nội dung cũ.
- Việc ghép tên là **tự động theo tên gần đúng**. Hãy xem kỹ cột trái của
  trang demo — nếu một bài bị ghép nhầm danh mục, bạn có thể sửa lại thủ công
  qua trang **Khối nội dung** sau khi áp dụng.
- Một tên chung trong file (ví dụ "ÁO BẢO VỆ") có thể khớp với nhiều danh mục
  con (Áo Bảo Vệ Tay Dài / Tay Ngắn). Khi đó script chọn một mục, phần còn lại
  bạn tự bổ sung qua trang Khối nội dung.
- Ba ô đặc điểm ở đầu trang không có trong file nên được giữ nguyên như cũ.

---

## E. Danh sách thả xuống — chọn nội dung thay vì gõ tay

Khi trong thư mục website có file `noidung.md`, trang quản lý sẽ tự hiện thêm
danh sách thả xuống. Không cần chạy lệnh gì cả.

### Trong form thêm / sửa sản phẩm

Ngay đầu form có ô **"Chọn nội dung có sẵn"** liệt kê toàn bộ sản phẩm trong
file, kèm số khung nội dung của từng bài. Chọn một mục là hệ thống tự điền:

- Tên sản phẩm
- Mô tả
- Ứng Dụng Thực Tế / Ưu Điểm Nổi Bật / Cam Kết Từ Thành Phong

Nếu bài đó có thêm khung ngoài 3 ô trên (ví dụ *Chính Sách Bảo Hành*, *Thông
số kỹ thuật*, *Hướng dẫn bảo quản*), hệ thống báo ngay dưới ô chọn và sẽ tự
thêm các khung đó khi bạn bấm **Lưu sản phẩm**.

Mọi ô đều sửa lại được sau khi điền — chọn từ danh sách chỉ là để khỏi gõ tay.

### Trong trang Khối nội dung

Có ô **"Nạp nội dung có sẵn"**. Chọn một bài để nạp toàn bộ khung của bài đó
vào trình soạn, rồi bạn sửa nội dung, đổi biểu tượng/màu, kéo sắp xếp lại thứ
tự, xóa khung thừa — xong mới bấm **Lưu thay đổi**. Chưa bấm Lưu thì website
chưa đổi gì.

### Khi cập nhật lại file noidung.md

Server đọc file 1 lần rồi ghi nhớ để chạy cho nhanh. Sau khi sửa file, khởi
động lại server (`Ctrl + C` rồi `npm start`) để nạp nội dung mới.

---

## F. Viết bài cho website

Bấm nút **Bài viết** trên thanh đầu trang quản lý.

### Viết bài mới

1. Bấm **"Viết bài mới"** ở cột trái.
2. Nhập **tiêu đề**, **tóm tắt ngắn** (đoạn hiện ở thẻ tin ngoài trang chủ),
   chọn **chủ đề**, **nhãn**, **ngày đăng** và **ảnh bìa**.
3. Soạn nội dung ở khung bên dưới. Thanh công cụ có:
   - In đậm / nghiêng / gạch chân
   - Tiêu đề lớn (H2), tiêu đề nhỏ (H3), đoạn văn thường
   - Danh sách gạch đầu dòng, danh sách đánh số, trích dẫn
   - Chèn liên kết, **chèn ảnh vào giữa bài**
4. Bấm **Lưu bài**.

Tick **"Đặt làm bài nổi bật"** nếu muốn bài đó hiện ở ô lớn trên trang chủ.

Nếu là tin dẫn lại từ báo khác, điền **Link bài gốc** — cuối bài sẽ tự hiện
dòng "Nguồn bài viết".

### Bài viết hiện ở đâu trên website

- **Trang chủ** — mục Tin tức hiện 3 bài mới nhất (bài nổi bật lên đầu), kèm
  nút "Xem tất cả tin tức".
- **Trang danh sách** `html/tintuc.html` — liệt kê toàn bộ bài, lọc theo chủ đề,
  có phân trang 9 bài mỗi trang.
- **Trang chi tiết** `tintuc/index.html?bai=<đường-dẫn-bài>` — trang riêng cho
  từng bài, có phần liên hệ và gợi ý bài khác ở cuối.

### Lưu ý

- Ảnh bài viết được lưu vào `images/TIN TỨC/`.
- Nội dung bài lưu trong `js/posts.js`. Ở chế độ máy cá nhân có bản sao lưu
  `js/posts.js.bak`.
- Khi dán nội dung từ Word hoặc web khác, hệ thống **chỉ lấy phần chữ** để
  tránh mang theo định dạng rác. Bạn định dạng lại bằng thanh công cụ.
- Nút **"Xem trên web"** mở bài trên baohothanhphong.vn — chỉ xem được sau khi
  đã đồng bộ/đăng lên GitHub.

---

## Cách dùng

- **Danh mục** (cột trái): bấm để lọc sản phẩm theo danh mục.
- **Thêm sản phẩm**: bấm "Thêm sản phẩm", thêm ảnh, nhập tên, chọn danh mục
  (hoặc "➕ Danh mục mới..." để tạo danh mục chưa có).
- **Thư viện ảnh**: mỗi sản phẩm thêm được nhiều ảnh. Bấm "Thêm ảnh" hoặc kéo
  thả nhiều ảnh cùng lúc. Trong lưới ảnh:
  - Ảnh **đầu tiên** là ảnh bìa (hiện ở lưới sản phẩm và trang chủ).
  - **Kéo ảnh** để đổi thứ tự.
  - Bấm **⭐** để đưa một ảnh lên làm ảnh bìa.
  - Bấm **✕** để xóa ảnh khỏi thư viện.

  Trên website, trang chi tiết sản phẩm sẽ hiện dãy ảnh nhỏ dưới ảnh chính;
  khách bấm vào ảnh chính để xem phóng to, chuyển ảnh bằng nút mũi tên hoặc
  phím ←/→. Sản phẩm chỉ có 1 ảnh thì hiển thị như cũ, không có dãy ảnh nhỏ.
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

### Nút "Xem trước" — kiểm tra trước khi đồng bộ

Bấm **Xem trước** trên thanh đầu trang để mở website ngay trên máy bạn, ở địa
chỉ `http://localhost:3000/preview/`.

Đây là **website thật với toàn bộ thay đổi bạn vừa làm**, nhưng chưa hề được
đẩy lên GitHub. Khách vào baohothanhphong.vn vẫn thấy bản cũ. Nhờ vậy bạn kiểm
tra thoải mái, sai thì sửa lại, ưng rồi mới bấm **Đồng bộ lên GitHub**.

Trang xem trước có 2 điểm nhận biết:

- Góc dưới bên trái luôn có nhãn **"BẢN XEM TRƯỚC — chưa đồng bộ lên website thật"**.
- Mỗi khi bạn lưu sản phẩm, bài viết hay khối nội dung, **trang tự động tải lại**
  để hiện kết quả mới, không cần bấm F5.

Cách dùng thuận tiện: mở trang quản lý ở một tab, bản xem trước ở tab bên cạnh.
Sửa bên này, liếc sang tab kia là thấy ngay.

> Ở bản online (Render), nút Xem trước vẫn mở được nhưng hiển thị theo file tại
> thời điểm triển khai và **không tự tải lại**. Muốn xem chính xác, dùng ở chế
> độ máy cá nhân.

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
