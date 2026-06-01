const fs = require('fs');

const catPrefixes = {
  'Bảng cảnh báo': 'Biển Báo An Toàn BLC-',
  'Cuộn rào công trình': 'Rào Chắn Công Trình BLC-',
  'Cà Vạt, Ve Bảo Vệ': 'Phụ Kiện Đồng Phục BLC-',
  'Cầu Vai Bảo Vệ': 'Cầu Vai Phân Cấp BLC-',
  'Cọc giao thông-cột chia làn đường': 'Cọc Tiêu Giao Thông BLC-',
  'Dây an toàn': 'Dây Đai An Toàn BLC-',
  'Dây An Toàn Toàn Thân': 'Dây Đai Toàn Thân BLC-',
  'Dây thắt lưng bảo vệ Security': 'Thắt Lưng Chuyên Dụng BLC-',
  'Gang tay bảo hộ': 'Găng Tay Bảo Hộ BLC-',
  'Giày bảo hộ lao động': 'Giày An Toàn BLC-',
  'Giày da bảo vệ - Có buộc dây': 'Giày Da Đồng Phục BLC-',
  'Giày da bảo vệ - Không buộc dây': 'Giày Lười Đồng Phục BLC-',
  'Gậy cao su - Dùi cui bảo vệ': 'Gậy Tuần Tra BLC-',
  'Gậy giao thông': 'Gậy Chỉ Huy Giao Thông BLC-',
  'Hệ Thống Báo Cháy': 'Thiết Bị PCCC BLC-',
  'Kính bảo hộ & Khẩu trang': 'Thiết Bị Bảo Vệ Mặt BLC-',
  'Mũ bảo hộ lao động': 'Mũ Cứng Bảo Hộ BLC-',
  'Mặt nạ hàn bảo hộ lao động': 'Mặt Nạ Hàn BLC-',
  'Mặt Nạ Phòng Độc': 'Mặt Nạ Lọc Khí BLC-',
  'Nón , Sao Bảo Vệ': 'Nón và Cấp Hiệu BLC-',
  'Nón vải lưới trùm': 'Nón Lưới Bảo Vệ BLC-',
  'Nút chống ồn': 'Nút Tai Giảm Ồn BLC-',
  'Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc': 'Biển Nội Quy BLC-',
  'Thang Thoát Hiểm Cuốn': 'Thang Thoát Hiểm BLC-',
  'Thiết bị PCCC & An toàn': 'Trang Bị Chữa Cháy BLC-',
  'Thùng đựng rác': 'Thùng Rác Vệ Sinh BLC-',
  'Áo cá sấu mè cao cấp nhiều': 'Áo Thun Phản Quang BLC-',
  'Áo Phản Quang': 'Áo Gile Phản Quang BLC-',
  'Đồ bảo hộ PCCC': 'Trang Phục Cứu Hỏa BLC-',
  'Đồ đi mưa - áo phao': 'Áo Mưa/Phao Cứu Sinh BLC-',
  'Đồng Phục Bảo Vệ': 'Đồng Phục An Ninh BLC-',
  'Đồng Phục Bảo Vệ NEW': 'Đồng Phục Thế Hệ Mới BLC-',
  'Ủng bảo hộ lao động': 'Ủng Chống Nước/Hóa Chất BLC-'
};

const catDescs = {
  'Bảng cảnh báo': [
    'Biển báo an toàn phản quang cao cấp, chữ in sắc nét chống phai màu. Cảnh báo nguy hiểm hiệu quả tại công trường.',
    'Bảng cảnh báo theo tiêu chuẩn an toàn lao động, chất liệu bền bỉ chịu được thời tiết khắc nghiệt ngoài trời.',
    'Thiết kế bắt mắt, dễ dàng nhận diện từ xa giúp đảm bảo an toàn tối đa cho khu vực thi công và nhà máy.'
  ],
  'Cuộn rào công trình': [
    'Rào chắn công trình chất lượng cao, màu sắc nổi bật dễ nhận biết. Dùng để khoanh vùng và cách ly khu vực nguy hiểm.',
    'Sản phẩm chịu lực tốt, dễ dàng triển khai và thu gọn. Đảm bảo an toàn tuyệt đối cho người đi đường và công nhân.',
    'Chất liệu siêu bền, chống rách hiệu quả. Sử dụng rộng rãi trong các dự án xây dựng và sửa chữa đô thị.'
  ],
  'Cọc giao thông-cột chia làn đường': [
    'Cọc tiêu giao thông có dán màng phản quang cao cấp, giúp phân làn và điều tiết giao thông an toàn cả ngày lẫn đêm.',
    'Thiết kế chắc chắn, chịu va đập tốt và dễ dàng xếp chồng để bảo quản hoặc di chuyển.',
    'Sản phẩm phổ biến dùng tại các công trình, bãi đỗ xe và tuyến đường, tăng cường khả năng cảnh báo chướng ngại vật.'
  ],
  'Giày bảo hộ lao động': [
    'Giày bảo hộ chuyên dụng, thiết kế ôm chân, thoải mái khi làm việc lâu.',
    'Đế chống trơn trượt hiệu quả trong môi trường dầu mỡ hoặc ẩm ướt. Đảm bảo tiêu chuẩn an toàn lao động khắt khe.',
    'Sản phẩm bền bỉ, thoáng khí và bảo vệ tối đa đôi chân người lao động khỏi các rủi ro tại công trường, nhà xưởng.'
  ],
  'Áo Phản Quang': [
    'Áo phản quang cao cấp với các dải băng sáng rõ nét, giúp tăng cường sự hiện diện của người mặc trong điều kiện thiếu sáng.',
    'Chất liệu thoáng mát, trọng lượng nhẹ, tạo cảm giác thoải mái tối đa cho người lao động.',
    'Đường may chắc chắn, thiết kế tiện dụng. Phù hợp cho công nhân xây dựng, kỹ sư và nhân viên giao thông.'
  ],
  'Mũ bảo hộ lao động': [
    'Mũ bảo hộ bằng nhựa cứng chịu lực va đập, thiết kế an toàn giúp làm việc ngoài trời.',
    'Quai đeo chắc chắn, hệ thống treo bên trong có thể điều chỉnh để vừa vặn với kích cỡ đầu của người sử dụng.',
    'Sản phẩm đạt tiêu chuẩn an toàn, bảo vệ phần đầu hiệu quả khỏi các vật rơi từ trên cao tại công trường.'
  ],
  'Gang tay bảo hộ': [
    'Găng tay bảo hộ ôm sát, tạo độ bám dính cao khi cầm nắm vật dụng. Bảo vệ bàn tay an toàn.',
    'Chất liệu thấm hút mồ hôi tốt, độ co giãn cao giúp linh hoạt trong từng thao tác kỹ thuật chi tiết.',
    'Sử dụng rộng rãi trong cơ khí, xây dựng và sản xuất công nghiệp, đảm bảo an toàn và vệ sinh cho người lao động.'
  ]
};

const defaultDesc = [
  'Sản phẩm bảo hộ lao động chất lượng cao, đạt tiêu chuẩn an toàn quốc gia. Độ bền vượt trội trong nhiều môi trường.',
  'Thiết kế tối ưu, mang lại sự thoải mái và tiện dụng. Đảm bảo sự bảo vệ tốt nhất cho người sử dụng.',
  'Sản phẩm được gia công tỉ mỉ, chất liệu cao cấp đáp ứng yêu cầu khắt khe của ngành công nghiệp và xây dựng.'
];

let code = fs.readFileSync('js/products.js', 'utf8');

// Use a regex that matches until the last '];' before window.openLightbox
const regex = /const products = \[([\s\S]*?)\];/;
const match = code.match(regex);

if (match) {
    let productsArrayStr = '[' + match[1] + ']';
    let products;
    try {
        products = JSON.parse(productsArrayStr);
    } catch (e) {
        console.error('Failed to parse products JSON', e);
        process.exit(1);
    }

    const catCounters = {};

    const updatedProducts = products.map((p, idx) => {
        const cat = p.catLabel;
        if (!catCounters[cat]) catCounters[cat] = 0;
        const counter = catCounters[cat]++;

        const prefix = catPrefixes[cat] || 'Sản Phẩm BHLĐ BLC-';
        const name = prefix + (counter + 1).toString().padStart(3, '0');
        
        const descs = catDescs[cat] || defaultDesc;
        const desc = descs[counter % descs.length];

        return { ...p, title: name, desc: desc };
    });

    const newCode = code.replace(
        regex,
        `const products = ${JSON.stringify(updatedProducts, null, 2)};`
    );

    fs.writeFileSync('js/products.js', newCode, 'utf8');
    console.log(`Updated ${updatedProducts.length} products with safe, generic data.`);
} else {
    console.log('Regex match failed.');
}
