
const products = [
  {id:'ĐồngPhụcBảoVệ',title:'Đồng Phục Bảo Vệ',cat:'uniform',catLabel:'Đồng phục bảo vệ',img:'images/Đồng Phục Bảo Vệ/ao-trang-bao-ve.png'},
  {id:'ĐồngPhụcBảoVệNEW',title:'Đồng Phục Bảo Vệ NEW',cat:'uniform',catLabel:'Đồng phục bảo vệ',img:'images/Đồng Phục Bảo Vệ NEW/dong-phuc-bao-ve (1).png'},
  {id:'NónSaoBảoVệ',title:'Nón, Sao Bảo Vệ',cat:'accessories',catLabel:'Phụ kiện bảo vệ',img:'images/Nón , Sao Bảo Vệ/non-bao-ve-2.png'},
  {id:'CầuVaiBảoVệ',title:'Cầu Vai Bảo Vệ',cat:'accessories',catLabel:'Phụ kiện bảo vệ',img:'images/Cầu Vai Bảo Vệ/cau-vai-bao-ve (1).png'},
  {id:'Nónvảilướitrùm',title:'Nón Vải Lưới Trùm',cat:'accessories',catLabel:'Phụ kiện bảo vệ',img:'images/Nón vải lưới trùm/non-vai-luoi-trum (1).png'},
  {id:'Mũbảohộlaođộng',title:'Mũ Bảo Hộ Lao Động',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Mũ bảo hộ lao động/mu-bao-ho (1).png'},
  {id:'CàVạtVeBảoVệ',title:'Cà Vạt, Ve Bảo Vệ',cat:'accessories',catLabel:'Phụ kiện bảo vệ',img:'images/Cà Vạt, Ve Bảo Vệ/ca-vat-vai-bao-ve (1).png'},
  {id:'DâythắtlưngbảovệSecurity',title:'Dây Thắt Lưng Bảo Vệ',cat:'accessories',catLabel:'Phụ kiện bảo vệ',img:'images/Dây thắt lưng bảo vệ Security/day-that-llung.png'},
  {id:'Áocásấumècaocấpnhiều',title:'Áo Cá Sấu Mè Cao Cấp',cat:'uniform',catLabel:'Đồng phục bảo vệ',img:'images/Áo cá sấu mè cao cấp nhiều/do.png'},
  {id:'Đồđimưaáophao',title:'Đồ Đi Mưa - Áo Phao',cat:'uniform',catLabel:'Đồng phục bảo vệ',img:'images/Đồ đi mưa - áo phao/do-di-mua-ao-phao (1).png'},
  {id:'Gangtaybảohộ',title:'Gang Tay Bảo Hộ',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Gang tay bảo hộ/gang-tay-bao-ho (1).png'},
  {id:'Dâyantoàn',title:'Dây An Toàn',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Dây an toàn/dN-n-toN (1).png'},
  {id:'DâyAnToànToànThân',title:'Dây An Toàn Toàn Thân',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Dây An Toàn Toàn Thân/day-an-toan-toan-than (1).png'},
  {id:'Kínhbảohộ&Khẩutrang',title:'Kính Bảo Hộ & Khẩu Trang',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Kính bảo hộ & Khẩu trang/kinh-bao-ho-va-khau-trang (1).png'},
  {id:'MặtNạPhòngĐộc',title:'Mặt Nạ Phòng Độc',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Mặt Nạ Phòng Độc/mat-na-chong-doc (1).png'},
  {id:'Mặtnạhànbảohộlaođộng',title:'Mặt Nạ Hàn Bảo Hộ',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Mặt nạ hàn bảo hộ lao động/mat-na-bao-ho (1).png'},
  {id:'Nútchốngồn',title:'Nút Chống Ồn',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Nút chống ồn/nut-lao-dong (1).png'},
  {id:'ĐồbảohộPCCC',title:'Đồ Bảo Hộ PCCC',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Đồ bảo hộ PCCC/do-bao-ho-pccc (1).png'},
  {id:'ThiếtbịPCCC&Antoàn',title:'Thiết Bị PCCC & An Toàn',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Thiết bị PCCC & An toàn/thiet-bi-pccc-va-an-toan (1).png'},
  {id:'HệThốngBáoCháy',title:'Hệ Thống Báo Cháy',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Hệ Thống Báo Cháy/he-thong-bao-chay (1).png'},
  {id:'ThangThoátHiểmCuốn',title:'Thang Thoát Hiểm Cuốn',cat:'safety',catLabel:'Bảo hộ lao động',img:'images/Thang Thoát Hiểm Cuốn/thang-thoat-hiem-cuon (1).png'},
  {id:'Giàybảohộlaođộng',title:'Giày Bảo Hộ Lao Động',cat:'shoes',catLabel:'Giày bảo hộ',img:'images/Giày bảo hộ lao động/giay-bao-ho-lao-dong (1).png'},
  {id:'GiàydabảovệCóbuộcdây',title:'Giày Da Bảo Vệ (Buộc Dây)',cat:'shoes',catLabel:'Giày bảo hộ',img:'images/Giày da bảo vệ - Có buộc dây/day-bao-ve (1).png'},
  {id:'GiàydabảovệKhôngbuộcdây',title:'Giày Da Bảo Vệ (Không Buộc Dây)',cat:'shoes',catLabel:'Giày bảo hộ',img:'images/Giày da bảo vệ - Không buộc dây/day-bao-ve.png'},
  {id:'Ủngbảohộlaođộng',title:'Ủng Bảo Hộ Lao Động',cat:'shoes',catLabel:'Giày bảo hộ',img:'images/Ủng bảo hộ lao động/ung-bao-ho (10).png'},
  {id:'GậycaosuDùicuibảovệ',title:'Gậy Cao Su - Dùi Cui',cat:'tools',catLabel:'Dụng cụ & Thiết bị',img:'images/Gậy cao su - Dùi cui bảo vệ/dui-cui-bao-ve.png'},
  {id:'Gậygiaothông',title:'Gậy Giao Thông',cat:'tools',catLabel:'Dụng cụ & Thiết bị',img:'images/Gậy giao thông/gay-giao-thong.png'},
  {id:'Thùngđựngrác',title:'Thùng Đựng Rác',cat:'tools',catLabel:'Dụng cụ & Thiết bị',img:'images/Thùng đựng rác/thung-dung-rac (1).png'},
  {id:'Bảngcảnhbáo',title:'Bảng Cảnh Báo',cat:'tools',catLabel:'Dụng cụ & Thiết bị',img:'images/Bảng cảnh báo/bang-bao-cao (1).png'},
  {id:'Cọcgiaothôngcộtchialànđường',title:'Cọc Giao Thông',cat:'tools',catLabel:'Dụng cụ & Thiết bị',img:'images/Cọc giao thông-cột chia làn đường/coc-giao-thong-cot-chia-lan-duong (1).png'},
  {id:'Cuộnràocôngtrình',title:'Cuộn Rào Công Trình',cat:'tools',catLabel:'Dụng cụ & Thiết bị',img:'images/Cuộn rào công trình/cuon-chia-lan-duong (1).png'},
  {id:'NộiquyTiêuđềCấmlửaCấmhútthuốc',title:'Nội Quy & Biển Cấm',cat:'tools',catLabel:'Dụng cụ & Thiết bị',img:'images/Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc/noi-quy (1).png'},
];

let currentCat='all', currentSort='default';

function countByCat(cat){return cat==='all'?products.length:products.filter(p=>p.cat===cat).length;}
function updateCounts(){
  ['all','uniform','accessories','safety','shoes','tools'].forEach(c=>{
    const el=document.getElementById('cnt-'+c);
    if(el)el.textContent=countByCat(c);
  });
}

function getFiltered(){
  let list=currentCat==='all'?[...products]:products.filter(p=>p.cat===currentCat);
  if(currentSort==='az')list.sort((a,b)=>a.title.localeCompare(b.title,'vi'));
  else if(currentSort==='za')list.sort((a,b)=>b.title.localeCompare(a.title,'vi'));
  return list;
}

function renderGrid(){
  const list=getFiltered();
  const grid=document.getElementById('productsGrid');
  document.getElementById('results-count').textContent=list.length+' sản phẩm';
  grid.innerHTML=list.map(p=>`
    <div class="product-card" onclick="openLightbox(${JSON.stringify(p).replace(/"/g,'&quot;')})">
      <div class="img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\'%3E%3Crect fill=\\'%23f1f5f9\\' width=\\'200\\' height=\\'200\\'/%3E%3C/svg%3E'">
        <div class="overlay"><span><i class="fas fa-search-plus"></i> Xem chi tiết</span></div>
      </div>
      <div class="card-body">
        <span class="cat-tag">${p.catLabel}</span>
        <h3>${p.title}</h3>
        <div class="price-row">
          <span class="price">Liên hệ báo giá</span>
          <a href="index.html#contact" class="contact-btn" onclick="event.stopPropagation()">Hỏi giá</a>
        </div>
      </div>
    </div>`).join('');
}

function openLightbox(p){
  document.getElementById('lbImg').src=p.img;
  document.getElementById('lbTitle').textContent=p.title;
  document.getElementById('lbCat').textContent=p.catLabel;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('lbClose').onclick=closeLightbox;
document.getElementById('lightbox').onclick=function(e){if(e.target===this)closeLightbox();};

// Category filter
document.querySelectorAll('.cat-list a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelectorAll('.cat-list a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
    currentCat=a.dataset.cat;
    renderGrid();
  });
});

// Sort
document.querySelectorAll('.sort-btn').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.sort-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    currentSort=b.dataset.sort;
    renderGrid();
  });
});

updateCounts();
renderGrid();
