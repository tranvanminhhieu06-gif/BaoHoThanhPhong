// ============================================
// THÀNH PHONG - BẢO HỘ LAO ĐỘNG
// Main JavaScript - Upgraded Version
// ============================================

// 1. Cấu trúc dữ liệu chi tiết sản phẩm
const productData = {
    "Bảngcảnhbáo": {
        "title": "Bảng cảnh báo",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/bia-ban-canh-bao-an-toan.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428959459_73cc22e71836be0e77b66b29f496cf86.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986899_db2713f530f402daecbf9c5058029fd3.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986901_efbf6eb76f66c917653b32e6ea13b653.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986904_70308fad26a8d9037701d9a009931a97.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986910_d441f93deb2a2fe2a0ca5229aa93cd1a.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986916_a2bd76674aca188af59565aec84d9141.jpg"
        ]
    },
    "Cuộnràocôngtrình": {
        "title": "Cuộn rào công trình",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CUỘN RÀO CÔNG TRÌNH/bia-cuon-rao-cong-trinh.png"
        ]
    },
    "CàVạtVeBảoVệ": {
        "title": "Cà Vạt, Ve Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/1 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/2 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3d2659c54600a25efb11.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/7e127423c7a53cfb65b4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/240a195be58500db5994.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3924b932a6f742a91be6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/bia-phu-kien-bao-ve.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ca-vat.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/caravat-bao-ve.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CẦU VAI 2GACH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/f5382d4c13faf5a4aceb.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/fad144385bfdbfa3e6ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/images.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁO ....jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁOAAA.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ve_ao_mat_than.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/vn-11134258-81ztc-momw6akl6v4ef3.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421871515_d3d5544a59c1d4f8c44c4212f00e365a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421880312_f9583dd3633c052e1f9fd3709502fb4b - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421899433_8c9b79a669d12dfae839f1bf5c7cdd54.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421902718_df70f5bb0a366f7f1fb7f06e4b4c91e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756923956_cb6dedaa7616e22118f8e5d84506561f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756926937_501836770c4f0b24f94bac841bef43bc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756938157_a7b42a1c58a52041bec5d48973a28c9d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756945528_93a0756627ca0d079d0f1c16e4adbf72.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756952571_deb4c024c3e61411ffb705284b5d094b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756957776_6c1572584e9b2a55d7ec8b9ddd904190.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523759453623_148f5adf349fb47d8f274fd77899c40c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523962818885_a542e961c989c80a1b8522da6acff1ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384757539_a367d9699fbb35bc0f0befdccd032c6f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384809372_c62c34355af0cc35c661d168c2b70647.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384890814_2f0055d5935810a0a17d67aea4220efc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384906589_5bb1404edaa6d95d8af57a8f375f837b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384923072_bd73ab8cee3723617cc07a89fba9bb3b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384940081_b6e0508a1e6601fa61d027bab53fa357.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384956833_a8057e9eb8c94dca817e3698b7fb2c95.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384972393_a637179579c910965794a9b014624e17.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384990798_97c94ce8e97671da2ac57dcd44ef35a6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385008463_35f54d9958adc0bf3f6bb106c531bfdc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385027011_fe26247a847fd1ada67e93846dc23275.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385042782_3ee1bf1d9ef3fdfe43a790c95644f801.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385061939_c242c319a993e209d1bec75f410fb060.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385080254_c17595093a445532c2e5924755b0e4c0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7455730420500_39a9261164980583a7771a13b7b146a5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061808567_57461fc5774bed9644528363fb58ea2b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061829569_220f9c5c634af883fbcdd0be797bc2f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061860302_3833547ddba226ebb0ffe553a440d5ea.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061879299_f81d1a33ca79433cfc3842577cc63b87.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099532330_58d11a7bf9932e193ac98feec2bc91b5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099538672_c46d9c228853f80e58e7dcc795f65700.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099544154_85af1f7b1949edf9c2ab2394970d401c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099561873_1ad2bad48d49b4ab80333385ba829a81.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099562205_f17538e0e854be9a9d1fa51ca6830f8c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099700210_195cdaa5a5b3ec70ece2553ec8463b19.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889107734168_99785674ca0255c95c9de31ce94fd8b9.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889238116988_7ae43a800c5f20774cf0f17daebd8752.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889240475661_6a459491aafe917e98505769b232bce8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889260706538_79f2f7e2cc9158c77cf17242e21baf42.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357508523_11d3b91e11f52003b6559086cfb60814.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357518702_fed21f53df0c67a6e0c746ebb6ac1894.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357525492_871c76c4f78ec94e068102345c4e2790.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458471696_3f86dc7dcdf0b7d174e1fc1b1d92f13e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458478567_6c0768cede37806dcbeb5ac805c5dfd5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458484787_b84864698ec8146ae6c27c44c390aaec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458498510_6b3897ec634cdc1fbeaf88169fcb259e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458505415_6fc4d516326798946c9967303917cb35.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458511590_19b0374643724410677d7d5e58176e98.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458518687_f26a874385c8a200eed26c35fa27f9f8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527629273_84313fdb2b8dfb41e21277becd8a14f7.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527637240_b4cd51d6db0578c44741aab69197d8b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527643153_c432edb8cce866c6487069bdf6e5b5cf.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527648008_3ca2757db2b44622d85326cb21b82dd3.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567345921_9740d6e35c0e0fdd1b14cbb324250bd0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567352194_484527f436abd62524858b117c3c47b6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567503105_17b31117caeac8a549553d0dc9fdc28d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567617886_bdd34c4f03d238dfcf0f90708ea53a48.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567779256_aa9aeef3935f320d844edb102d2440e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567917662_65e26df171df88755c213511f1280c38.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568208585_19f4ed2c6144da1a61d9c1ccfa1bd9b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568364267_d4ae841de0ddbc0f355237873beadadd.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308921_248cc5377bcc59a2d561b15fce68d872 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595309089_2d5e257f450964df3235fa9b3fc437c9 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595351652_ec688d8522c607575fa80e0580324200.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595388253_d51108ba07c7ac858b475d808debd7a2 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606405195_7b836f155f2ee5e9403bda0beca8c439.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448180_522d744b2a67bcf10d82c5abd6ae52ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448211_52d62a4de40fbc0daf0e36d1f3a3f504.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448430_fc86f526f331993faefb45f09e49bf8e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606493549_a2a22332ad1825ba374d8407da347f62.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606528785_5ccf2346fe1c7aeef3a48f2497edad4a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889717612214_913f6a264ef6e56114b1a839642b096a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889560_fe51f1201847fd8cd41912d238403bf4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889580_b9206d3ff2c35679b5adeaabec7f57f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948075_a7d53f9de1c3eeba02c750f63ef48401.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948152_96e3c83a26897c5c230c7bb4fe09649a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948207_9a8c0a567a0862758b11a57c0c90ea39.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890051127145_520a3782a66cdeee32ece6fcb22258ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890110425283_1ede85e069c141596b7c62fbcc8868b8.jpg"
        ]
    },
    "CầuVaiBảoVệ": {
        "title": "Cầu Vai Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/1 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/2 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3d2659c54600a25efb11.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/7e127423c7a53cfb65b4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/240a195be58500db5994.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3924b932a6f742a91be6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/bia-phu-kien-bao-ve.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ca-vat.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/caravat-bao-ve.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CẦU VAI 2GACH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/f5382d4c13faf5a4aceb.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/fad144385bfdbfa3e6ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/images.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁO ....jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁOAAA.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ve_ao_mat_than.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/vn-11134258-81ztc-momw6akl6v4ef3.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421871515_d3d5544a59c1d4f8c44c4212f00e365a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421880312_f9583dd3633c052e1f9fd3709502fb4b - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421899433_8c9b79a669d12dfae839f1bf5c7cdd54.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421902718_df70f5bb0a366f7f1fb7f06e4b4c91e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756923956_cb6dedaa7616e22118f8e5d84506561f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756926937_501836770c4f0b24f94bac841bef43bc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756938157_a7b42a1c58a52041bec5d48973a28c9d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756945528_93a0756627ca0d079d0f1c16e4adbf72.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756952571_deb4c024c3e61411ffb705284b5d094b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756957776_6c1572584e9b2a55d7ec8b9ddd904190.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523759453623_148f5adf349fb47d8f274fd77899c40c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523962818885_a542e961c989c80a1b8522da6acff1ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384757539_a367d9699fbb35bc0f0befdccd032c6f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384809372_c62c34355af0cc35c661d168c2b70647.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384890814_2f0055d5935810a0a17d67aea4220efc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384906589_5bb1404edaa6d95d8af57a8f375f837b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384923072_bd73ab8cee3723617cc07a89fba9bb3b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384940081_b6e0508a1e6601fa61d027bab53fa357.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384956833_a8057e9eb8c94dca817e3698b7fb2c95.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384972393_a637179579c910965794a9b014624e17.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384990798_97c94ce8e97671da2ac57dcd44ef35a6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385008463_35f54d9958adc0bf3f6bb106c531bfdc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385027011_fe26247a847fd1ada67e93846dc23275.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385042782_3ee1bf1d9ef3fdfe43a790c95644f801.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385061939_c242c319a993e209d1bec75f410fb060.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385080254_c17595093a445532c2e5924755b0e4c0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7455730420500_39a9261164980583a7771a13b7b146a5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061808567_57461fc5774bed9644528363fb58ea2b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061829569_220f9c5c634af883fbcdd0be797bc2f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061860302_3833547ddba226ebb0ffe553a440d5ea.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061879299_f81d1a33ca79433cfc3842577cc63b87.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099532330_58d11a7bf9932e193ac98feec2bc91b5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099538672_c46d9c228853f80e58e7dcc795f65700.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099544154_85af1f7b1949edf9c2ab2394970d401c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099561873_1ad2bad48d49b4ab80333385ba829a81.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099562205_f17538e0e854be9a9d1fa51ca6830f8c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099700210_195cdaa5a5b3ec70ece2553ec8463b19.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889107734168_99785674ca0255c95c9de31ce94fd8b9.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889238116988_7ae43a800c5f20774cf0f17daebd8752.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889240475661_6a459491aafe917e98505769b232bce8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889260706538_79f2f7e2cc9158c77cf17242e21baf42.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357508523_11d3b91e11f52003b6559086cfb60814.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357518702_fed21f53df0c67a6e0c746ebb6ac1894.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357525492_871c76c4f78ec94e068102345c4e2790.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458471696_3f86dc7dcdf0b7d174e1fc1b1d92f13e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458478567_6c0768cede37806dcbeb5ac805c5dfd5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458484787_b84864698ec8146ae6c27c44c390aaec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458498510_6b3897ec634cdc1fbeaf88169fcb259e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458505415_6fc4d516326798946c9967303917cb35.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458511590_19b0374643724410677d7d5e58176e98.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458518687_f26a874385c8a200eed26c35fa27f9f8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527629273_84313fdb2b8dfb41e21277becd8a14f7.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527637240_b4cd51d6db0578c44741aab69197d8b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527643153_c432edb8cce866c6487069bdf6e5b5cf.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527648008_3ca2757db2b44622d85326cb21b82dd3.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567345921_9740d6e35c0e0fdd1b14cbb324250bd0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567352194_484527f436abd62524858b117c3c47b6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567503105_17b31117caeac8a549553d0dc9fdc28d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567617886_bdd34c4f03d238dfcf0f90708ea53a48.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567779256_aa9aeef3935f320d844edb102d2440e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567917662_65e26df171df88755c213511f1280c38.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568208585_19f4ed2c6144da1a61d9c1ccfa1bd9b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568364267_d4ae841de0ddbc0f355237873beadadd.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308921_248cc5377bcc59a2d561b15fce68d872 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595309089_2d5e257f450964df3235fa9b3fc437c9 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595351652_ec688d8522c607575fa80e0580324200.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595388253_d51108ba07c7ac858b475d808debd7a2 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606405195_7b836f155f2ee5e9403bda0beca8c439.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448180_522d744b2a67bcf10d82c5abd6ae52ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448211_52d62a4de40fbc0daf0e36d1f3a3f504.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448430_fc86f526f331993faefb45f09e49bf8e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606493549_a2a22332ad1825ba374d8407da347f62.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606528785_5ccf2346fe1c7aeef3a48f2497edad4a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889717612214_913f6a264ef6e56114b1a839642b096a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889560_fe51f1201847fd8cd41912d238403bf4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889580_b9206d3ff2c35679b5adeaabec7f57f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948075_a7d53f9de1c3eeba02c750f63ef48401.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948152_96e3c83a26897c5c230c7bb4fe09649a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948207_9a8c0a567a0862758b11a57c0c90ea39.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890051127145_520a3782a66cdeee32ece6fcb22258ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890110425283_1ede85e069c141596b7c62fbcc8868b8.jpg"
        ]
    },
    "Cọcgiaothôngcộtchialànđường": {
        "title": "Cọc giao thông-cột chia làn đường",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/bia-coc-giao-thong.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 2 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 2.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 6 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 6.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 7 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 7.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT ĐƯƠNG 6 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT ĐƯƠNG 6.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHỐT ĐƯỜNG (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHỐT ĐƯỜNG.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/IMG_20240523_083609.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980509946_8f337cbdc3857a0b280e5b426d6d0aa9.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980530441_cc59ecc53f14e5a163a77a4a5a267f9a.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980546489_01d0d0d370bdd513e2c465f53082df88.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980553768_b78ef54e0a2efb7b77324787c46e4728.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980574499_e72f73e89c9c24e14a79cd2f26ab04bc.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980593010_605c769b7b010b5b5174cddbc1a4b5b0 (1).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980593010_605c769b7b010b5b5174cddbc1a4b5b0.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z7912493386697_0a1fb04c3cfd506c76ec8fcaec9a183e.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z7950420785218_4f27765a3b1b81e0e91ffcc1c235fb33.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z7950420785348_908d2e53e2f86b471a50534fa765414d.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z7950420785349_09902adff329ca42d740e6fb49853aac.jpg"
        ]
    },
    "Dâyantoàn": {
        "title": "Dây an toàn",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/AN TOÀN 14.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/bc8c0d3c977972272b68.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/bia-day-an-toan.png",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AN TOÀN 1.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT 2.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT 3.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT 4.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LON 4.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LON 7 (2).jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LON 7.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LỚN 6 (2).jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LỚN 6.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY PQ TOAN THAN 6.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DÂY AT XANH TẮNG (2).jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DÂY AT XANH TRẮNG (2).jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DÂY AT XANH TRẮNG.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DÂY PQ TOAN THAN 5.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240508_140234.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240508_140237.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240508_140241.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240509_085724.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080721.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080724.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080726.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080743.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080746.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080753.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080759.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080803.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080807.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080817.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081029.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081034.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081045.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081106.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081114.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2360444385901_382c44ee07511f140aa7eca6bd02e01b.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2360444393348_0973dd1ba1f85391e06544f8b54b01e8.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2360444400668_c6877f254e50d9945e2e583ec98e5c76.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2362777928517_c75ad830d887a8e11db384d874ca8353.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2362777955963_1a7cf3495843d7b87d93fbce43d3e263.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2362777972778_315b0dcd8ab3ccb2dcae2239251d493f.jpg"
        ]
    },
    "DâyAnToànToànThân": {
        "title": "Dây An Toàn Toàn Thân",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/AN TOÀN 14.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/bc8c0d3c977972272b68.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/bia-day-an-toan.png",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AN TOÀN 1.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT 2.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT 3.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT 4.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LON 4.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LON 7 (2).jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LON 7.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LỚN 6 (2).jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY AT LỚN 6.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DAY PQ TOAN THAN 6.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DÂY AT XANH TẮNG (2).jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DÂY AT XANH TRẮNG (2).jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DÂY AT XANH TRẮNG.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/DÂY PQ TOAN THAN 5.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240508_140234.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240508_140237.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240508_140241.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240509_085724.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080721.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080724.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080726.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080743.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080746.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080753.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080759.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080803.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080807.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_080817.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081029.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081034.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081045.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081106.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/IMG_20240515_081114.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2360444385901_382c44ee07511f140aa7eca6bd02e01b.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2360444393348_0973dd1ba1f85391e06544f8b54b01e8.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2360444400668_c6877f254e50d9945e2e583ec98e5c76.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2362777928517_c75ad830d887a8e11db384d874ca8353.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2362777955963_1a7cf3495843d7b87d93fbce43d3e263.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/DÂY AN TOÀN/z2362777972778_315b0dcd8ab3ccb2dcae2239251d493f.jpg"
        ]
    },
    "DâythắtlưngbảovệSecurity": {
        "title": "Dây thắt lưng bảo vệ Security",
        "cat": "accessories",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/1 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/2 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3d2659c54600a25efb11.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/7e127423c7a53cfb65b4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/240a195be58500db5994.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3924b932a6f742a91be6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/bia-phu-kien-bao-ve.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ca-vat.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/caravat-bao-ve.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CẦU VAI 2GACH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/f5382d4c13faf5a4aceb.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/fad144385bfdbfa3e6ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/images.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁO ....jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁOAAA.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ve_ao_mat_than.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/vn-11134258-81ztc-momw6akl6v4ef3.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421871515_d3d5544a59c1d4f8c44c4212f00e365a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421880312_f9583dd3633c052e1f9fd3709502fb4b - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421899433_8c9b79a669d12dfae839f1bf5c7cdd54.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421902718_df70f5bb0a366f7f1fb7f06e4b4c91e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756923956_cb6dedaa7616e22118f8e5d84506561f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756926937_501836770c4f0b24f94bac841bef43bc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756938157_a7b42a1c58a52041bec5d48973a28c9d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756945528_93a0756627ca0d079d0f1c16e4adbf72.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756952571_deb4c024c3e61411ffb705284b5d094b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756957776_6c1572584e9b2a55d7ec8b9ddd904190.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523759453623_148f5adf349fb47d8f274fd77899c40c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523962818885_a542e961c989c80a1b8522da6acff1ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384757539_a367d9699fbb35bc0f0befdccd032c6f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384809372_c62c34355af0cc35c661d168c2b70647.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384890814_2f0055d5935810a0a17d67aea4220efc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384906589_5bb1404edaa6d95d8af57a8f375f837b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384923072_bd73ab8cee3723617cc07a89fba9bb3b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384940081_b6e0508a1e6601fa61d027bab53fa357.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384956833_a8057e9eb8c94dca817e3698b7fb2c95.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384972393_a637179579c910965794a9b014624e17.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384990798_97c94ce8e97671da2ac57dcd44ef35a6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385008463_35f54d9958adc0bf3f6bb106c531bfdc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385027011_fe26247a847fd1ada67e93846dc23275.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385042782_3ee1bf1d9ef3fdfe43a790c95644f801.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385061939_c242c319a993e209d1bec75f410fb060.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385080254_c17595093a445532c2e5924755b0e4c0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7455730420500_39a9261164980583a7771a13b7b146a5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061808567_57461fc5774bed9644528363fb58ea2b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061829569_220f9c5c634af883fbcdd0be797bc2f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061860302_3833547ddba226ebb0ffe553a440d5ea.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061879299_f81d1a33ca79433cfc3842577cc63b87.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099532330_58d11a7bf9932e193ac98feec2bc91b5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099538672_c46d9c228853f80e58e7dcc795f65700.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099544154_85af1f7b1949edf9c2ab2394970d401c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099561873_1ad2bad48d49b4ab80333385ba829a81.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099562205_f17538e0e854be9a9d1fa51ca6830f8c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099700210_195cdaa5a5b3ec70ece2553ec8463b19.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889107734168_99785674ca0255c95c9de31ce94fd8b9.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889238116988_7ae43a800c5f20774cf0f17daebd8752.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889240475661_6a459491aafe917e98505769b232bce8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889260706538_79f2f7e2cc9158c77cf17242e21baf42.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357508523_11d3b91e11f52003b6559086cfb60814.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357518702_fed21f53df0c67a6e0c746ebb6ac1894.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357525492_871c76c4f78ec94e068102345c4e2790.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458471696_3f86dc7dcdf0b7d174e1fc1b1d92f13e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458478567_6c0768cede37806dcbeb5ac805c5dfd5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458484787_b84864698ec8146ae6c27c44c390aaec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458498510_6b3897ec634cdc1fbeaf88169fcb259e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458505415_6fc4d516326798946c9967303917cb35.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458511590_19b0374643724410677d7d5e58176e98.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458518687_f26a874385c8a200eed26c35fa27f9f8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527629273_84313fdb2b8dfb41e21277becd8a14f7.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527637240_b4cd51d6db0578c44741aab69197d8b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527643153_c432edb8cce866c6487069bdf6e5b5cf.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527648008_3ca2757db2b44622d85326cb21b82dd3.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567345921_9740d6e35c0e0fdd1b14cbb324250bd0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567352194_484527f436abd62524858b117c3c47b6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567503105_17b31117caeac8a549553d0dc9fdc28d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567617886_bdd34c4f03d238dfcf0f90708ea53a48.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567779256_aa9aeef3935f320d844edb102d2440e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567917662_65e26df171df88755c213511f1280c38.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568208585_19f4ed2c6144da1a61d9c1ccfa1bd9b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568364267_d4ae841de0ddbc0f355237873beadadd.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308921_248cc5377bcc59a2d561b15fce68d872 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595309089_2d5e257f450964df3235fa9b3fc437c9 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595351652_ec688d8522c607575fa80e0580324200.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595388253_d51108ba07c7ac858b475d808debd7a2 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606405195_7b836f155f2ee5e9403bda0beca8c439.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448180_522d744b2a67bcf10d82c5abd6ae52ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448211_52d62a4de40fbc0daf0e36d1f3a3f504.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448430_fc86f526f331993faefb45f09e49bf8e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606493549_a2a22332ad1825ba374d8407da347f62.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606528785_5ccf2346fe1c7aeef3a48f2497edad4a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889717612214_913f6a264ef6e56114b1a839642b096a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889560_fe51f1201847fd8cd41912d238403bf4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889580_b9206d3ff2c35679b5adeaabec7f57f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948075_a7d53f9de1c3eeba02c750f63ef48401.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948152_96e3c83a26897c5c230c7bb4fe09649a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948207_9a8c0a567a0862758b11a57c0c90ea39.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890051127145_520a3782a66cdeee32ece6fcb22258ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890110425283_1ede85e069c141596b7c62fbcc8868b8.jpg"
        ]
    },
    "Gangtaybảohộ": {
        "title": "Gang tay bảo hộ",
        "cat": "safety",
        "imgs": [
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/bia-gang-tay-cach-dien.png",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/gang-tay-cach-dien-400v__2__cc2cbdff21bd4c9d89ea9914591a61fc_1024x1024.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/gang-tay-cach-dien-400v__6__b53ab0771d0747b5a44e820291cb6528_1024x1024.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/gang-tay-cach-dien-400v-cx277_3786e278caa24328a9256a4699133c66_1024x1024.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20210625_082112.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240506_170433.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240506_170437.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_081855.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_081925.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_140507.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_140510.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_140512.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_140515.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_140525.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_142022.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_142025.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20240508_142127.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20241101_083620.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_20241101_083623.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_1715395246721_1715395803433.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_1718007518090_1718612749850.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_1718007518096_1718612751813.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GANG TAY CÁCH ĐIỆN/IMG_1718007518097_1718612752432.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/1b631880848763d93a96.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/53a596d1794b9e15c75a.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/60d056c8b9525e0c0743.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/66ec455baac14d9f14d0.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/98c6da3b463ca162f82d.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/49400cfce36604385d77.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/72100f1ee08407da5e95.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/41204296de9139cf6080.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/336382016d9b8ac5d38a.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/a6b799dc76469118c857.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/af778af216f5f1aba8e4.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/bdbb9e5b025ce502bc4d.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/bia-gang-tay-cao-su.png",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/d52b2db4b1b356ed0fa2.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/da85de4d424aa514fc5b.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/GANG TAY PHỦ SƠN1.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/GIANG TAY PHỦ SƠN.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240506_170244.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240506_170247.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240506_170453.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240508_135921.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240508_135933.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240508_135941.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240508_135958.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240508_140006.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240508_140009.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_20240513_154702.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_1715395246009_1715395800614.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_1715395246111_1715395801311.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/IMG_1715395246597_1715395802961.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY CAO SU/z7079873901333_0543bd91128ba94c6c55df6de1dba677.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/00.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/000.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/0000.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/00000.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/000o.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/0o.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/bia-gang-tay-da-han.png",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/GANG TAY DA XANH 1 - Copy.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/GANG TAY DA XANH 1.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/GIANG TAY DA XANH.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878513272_a188df7b730d6a5e1152118d86197bff.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878552768_b19532660d0f6cacaa500c73668eb3fd.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878590959_735e6cff549c102dc3f615ccc86edcac.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878614166_a7097b78c2bb7e1fd323743b372a9955.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878651397_5c954d7d98589024e0dedf6e30cb604c.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878699197_4992231a8baa8218dd826b6a7db247f0.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878743561_9ecc6411a2da2ddf720e8375f82c6286.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878799543_500b78c07c5aa8631089ced2771ac9fe.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878845225_4ce843d408ea9169651cc2189fbb7cc9.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878907135_66bf7252fdb079b8a1f9d8beb4271c6b.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY DA HÀN/z2083878950535_abf83864c5e8576d4bab93667de5d385.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/2b9c278cf1ed14b34dfc.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/3d7a92443f1ddb43820c.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/4f7d9b42361bd2458b0a.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/6fba8d092150c50e9c41.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/63a732a29ffb7ba522ea.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/3304fbae57f7b3a9eae6.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/05904d419a207f7e2631.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/64400f66d9073c596516.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/214453cffe961ac84387.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/aeeee3d435b5d0eb89a4.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/bf1f64ddb3bc56e20fad.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/bfb0c94f65168148d807.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/bia-gang-tay-len.png",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/cb657101dc5838066149.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/cd1897d240b3a5edfca2.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/GANG TAY CHẤM BI 1.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/GANG TAY LEN DÀY.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/GANG TAY LEN DAY1.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/GANG TAY LEN MỎNG 2.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/gang tay len mỏng....jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/GANG TAY VẢI TRẮNG.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/GIANG TAY CHẤM BI.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/GIANG TAY VẢI TRẮNG - Copy.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/GIANG TAY VẢI TRẮNG.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240506_170302.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240506_170517.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135507.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135521.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135524.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135527.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135530.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135535.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135539.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135549.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20240508_135552.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/IMG_20241029_104501.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/z2362777693589_4fad9def79870017d2077c0860f56485.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/z2362777708299_59ee311821b378c64892b7f61f625dbb.jpg",
            "../images/GĂNG TAY BẢO HỘ LAO ĐỘNG/GĂNG TAY LEN - GĂNG TAY VẢI SỢI/z2362777724832_4ba3fb590736ca56f798dfe0ca09a055.jpg"
        ]
    },
    "Giàybảohộlaođộng": {
        "title": "Giày bảo hộ lao động",
        "cat": "shoes",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/bia-day-bao-ho.png",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145518.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145522.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145524.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145527.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145543.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145546.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145549.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145552.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145607.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145642.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145645.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145648.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145652.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240427_092723.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082716.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082720.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082724.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083108.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083112.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083115.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074939.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074945.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074948.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075306.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075308.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075309.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075310.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075312.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075518.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075520.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075521.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075522.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075534.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080854.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080857.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080900.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095501.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095516.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095525.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095558.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240513_154617.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240513_154620.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20250402_140011.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20250402_140026.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 10.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 15.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 113.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 114.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 115.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644004937_4e66dd94a8385d9232672eb7773d827a.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644014720_44fa176f691e274be71fd20afd8a734c.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644018787_44d97409bf20a08a0c3427bcc61d6b77.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644020337_3ba35c51f6694e8d8c18e634839d240c.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644031964_e25e4f0fb0078b7f30f0cd770da5c524.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644044221_2e4fc0ae6d0d365f82933e794ea8e93d.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644150275_1e9cf4176cf0a48c4e1612a972e5e84d.jpg"
        ]
    },
    "GiàydabảovệCóbuộcdây": {
        "title": "Giày da bảo vệ - Có buộc dây",
        "cat": "shoes",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/bia-day-bao-ho.png",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145518.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145522.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145524.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145527.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145543.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145546.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145549.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145552.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145607.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145642.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145645.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145648.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145652.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240427_092723.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082716.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082720.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082724.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083108.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083112.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083115.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074939.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074945.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074948.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075306.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075308.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075309.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075310.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075312.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075518.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075520.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075521.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075522.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075534.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080854.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080857.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080900.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095501.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095516.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095525.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095558.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240513_154617.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240513_154620.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20250402_140011.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20250402_140026.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 10.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 15.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 113.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 114.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 115.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644004937_4e66dd94a8385d9232672eb7773d827a.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644014720_44fa176f691e274be71fd20afd8a734c.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644018787_44d97409bf20a08a0c3427bcc61d6b77.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644020337_3ba35c51f6694e8d8c18e634839d240c.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644031964_e25e4f0fb0078b7f30f0cd770da5c524.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644044221_2e4fc0ae6d0d365f82933e794ea8e93d.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644150275_1e9cf4176cf0a48c4e1612a972e5e84d.jpg"
        ]
    },
    "GiàydabảovệKhôngbuộcdây": {
        "title": "Giày da bảo vệ - Không buộc dây",
        "cat": "shoes",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/bia-day-bao-ho.png",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145518.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145522.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145524.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145527.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145543.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145546.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145549.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145552.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145607.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145642.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145645.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145648.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240425_145652.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240427_092723.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082716.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082720.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_082724.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083108.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083112.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240508_083115.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074939.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074945.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_074948.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075306.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075308.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075309.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075310.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075312.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075518.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075520.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075521.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075522.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_075534.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080854.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080857.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_080900.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095501.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095516.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095525.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240509_095558.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240513_154617.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20240513_154620.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20250402_140011.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/IMG_20250402_140026.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 10.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 15.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 113.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 114.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/JOGGER 115.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644004937_4e66dd94a8385d9232672eb7773d827a.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644014720_44fa176f691e274be71fd20afd8a734c.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644018787_44d97409bf20a08a0c3427bcc61d6b77.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644020337_3ba35c51f6694e8d8c18e634839d240c.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644031964_e25e4f0fb0078b7f30f0cd770da5c524.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644044221_2e4fc0ae6d0d365f82933e794ea8e93d.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/GIÀY BẢO HỘ/z2383644150275_1e9cf4176cf0a48c4e1612a972e5e84d.jpg"
        ]
    },
    "GậycaosuDùicuibảovệ": {
        "title": "Gậy cao su - Dùi cui bảo vệ",
        "cat": "tools",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/1 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/2 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3d2659c54600a25efb11.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/7e127423c7a53cfb65b4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/240a195be58500db5994.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3924b932a6f742a91be6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/bia-phu-kien-bao-ve.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ca-vat.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/caravat-bao-ve.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CẦU VAI 2GACH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/f5382d4c13faf5a4aceb.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/fad144385bfdbfa3e6ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/images.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁO ....jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁOAAA.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ve_ao_mat_than.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/vn-11134258-81ztc-momw6akl6v4ef3.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421871515_d3d5544a59c1d4f8c44c4212f00e365a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421880312_f9583dd3633c052e1f9fd3709502fb4b - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421899433_8c9b79a669d12dfae839f1bf5c7cdd54.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421902718_df70f5bb0a366f7f1fb7f06e4b4c91e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756923956_cb6dedaa7616e22118f8e5d84506561f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756926937_501836770c4f0b24f94bac841bef43bc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756938157_a7b42a1c58a52041bec5d48973a28c9d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756945528_93a0756627ca0d079d0f1c16e4adbf72.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756952571_deb4c024c3e61411ffb705284b5d094b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756957776_6c1572584e9b2a55d7ec8b9ddd904190.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523759453623_148f5adf349fb47d8f274fd77899c40c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523962818885_a542e961c989c80a1b8522da6acff1ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384757539_a367d9699fbb35bc0f0befdccd032c6f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384809372_c62c34355af0cc35c661d168c2b70647.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384890814_2f0055d5935810a0a17d67aea4220efc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384906589_5bb1404edaa6d95d8af57a8f375f837b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384923072_bd73ab8cee3723617cc07a89fba9bb3b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384940081_b6e0508a1e6601fa61d027bab53fa357.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384956833_a8057e9eb8c94dca817e3698b7fb2c95.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384972393_a637179579c910965794a9b014624e17.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384990798_97c94ce8e97671da2ac57dcd44ef35a6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385008463_35f54d9958adc0bf3f6bb106c531bfdc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385027011_fe26247a847fd1ada67e93846dc23275.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385042782_3ee1bf1d9ef3fdfe43a790c95644f801.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385061939_c242c319a993e209d1bec75f410fb060.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385080254_c17595093a445532c2e5924755b0e4c0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7455730420500_39a9261164980583a7771a13b7b146a5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061808567_57461fc5774bed9644528363fb58ea2b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061829569_220f9c5c634af883fbcdd0be797bc2f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061860302_3833547ddba226ebb0ffe553a440d5ea.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061879299_f81d1a33ca79433cfc3842577cc63b87.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099532330_58d11a7bf9932e193ac98feec2bc91b5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099538672_c46d9c228853f80e58e7dcc795f65700.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099544154_85af1f7b1949edf9c2ab2394970d401c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099561873_1ad2bad48d49b4ab80333385ba829a81.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099562205_f17538e0e854be9a9d1fa51ca6830f8c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099700210_195cdaa5a5b3ec70ece2553ec8463b19.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889107734168_99785674ca0255c95c9de31ce94fd8b9.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889238116988_7ae43a800c5f20774cf0f17daebd8752.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889240475661_6a459491aafe917e98505769b232bce8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889260706538_79f2f7e2cc9158c77cf17242e21baf42.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357508523_11d3b91e11f52003b6559086cfb60814.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357518702_fed21f53df0c67a6e0c746ebb6ac1894.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357525492_871c76c4f78ec94e068102345c4e2790.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458471696_3f86dc7dcdf0b7d174e1fc1b1d92f13e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458478567_6c0768cede37806dcbeb5ac805c5dfd5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458484787_b84864698ec8146ae6c27c44c390aaec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458498510_6b3897ec634cdc1fbeaf88169fcb259e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458505415_6fc4d516326798946c9967303917cb35.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458511590_19b0374643724410677d7d5e58176e98.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458518687_f26a874385c8a200eed26c35fa27f9f8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527629273_84313fdb2b8dfb41e21277becd8a14f7.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527637240_b4cd51d6db0578c44741aab69197d8b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527643153_c432edb8cce866c6487069bdf6e5b5cf.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527648008_3ca2757db2b44622d85326cb21b82dd3.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567345921_9740d6e35c0e0fdd1b14cbb324250bd0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567352194_484527f436abd62524858b117c3c47b6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567503105_17b31117caeac8a549553d0dc9fdc28d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567617886_bdd34c4f03d238dfcf0f90708ea53a48.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567779256_aa9aeef3935f320d844edb102d2440e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567917662_65e26df171df88755c213511f1280c38.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568208585_19f4ed2c6144da1a61d9c1ccfa1bd9b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568364267_d4ae841de0ddbc0f355237873beadadd.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308921_248cc5377bcc59a2d561b15fce68d872 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595309089_2d5e257f450964df3235fa9b3fc437c9 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595351652_ec688d8522c607575fa80e0580324200.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595388253_d51108ba07c7ac858b475d808debd7a2 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606405195_7b836f155f2ee5e9403bda0beca8c439.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448180_522d744b2a67bcf10d82c5abd6ae52ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448211_52d62a4de40fbc0daf0e36d1f3a3f504.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448430_fc86f526f331993faefb45f09e49bf8e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606493549_a2a22332ad1825ba374d8407da347f62.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606528785_5ccf2346fe1c7aeef3a48f2497edad4a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889717612214_913f6a264ef6e56114b1a839642b096a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889560_fe51f1201847fd8cd41912d238403bf4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889580_b9206d3ff2c35679b5adeaabec7f57f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948075_a7d53f9de1c3eeba02c750f63ef48401.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948152_96e3c83a26897c5c230c7bb4fe09649a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948207_9a8c0a567a0862758b11a57c0c90ea39.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890051127145_520a3782a66cdeee32ece6fcb22258ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890110425283_1ede85e069c141596b7c62fbcc8868b8.jpg"
        ]
    },
    "Gậygiaothông": {
        "title": "Gậy giao thông",
        "cat": "tools",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/bia-ban-canh-bao-an-toan.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428959459_73cc22e71836be0e77b66b29f496cf86.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986899_db2713f530f402daecbf9c5058029fd3.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986901_efbf6eb76f66c917653b32e6ea13b653.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986904_70308fad26a8d9037701d9a009931a97.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986910_d441f93deb2a2fe2a0ca5229aa93cd1a.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/BẢNG CẢNH BÁO AN TOÀN/z7950428986916_a2bd76674aca188af59565aec84d9141.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/bia-coc-giao-thong.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 2 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 2.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 6 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 6.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 7 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG 7.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT DUONG.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT ĐƯƠNG 6 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHOT ĐƯƠNG 6.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHỐT ĐƯỜNG (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/CHỐT ĐƯỜNG.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/IMG_20240523_083609.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980509946_8f337cbdc3857a0b280e5b426d6d0aa9.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980530441_cc59ecc53f14e5a163a77a4a5a267f9a.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980546489_01d0d0d370bdd513e2c465f53082df88.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980553768_b78ef54e0a2efb7b77324787c46e4728.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980574499_e72f73e89c9c24e14a79cd2f26ab04bc.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980593010_605c769b7b010b5b5174cddbc1a4b5b0 (1).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z2364980593010_605c769b7b010b5b5174cddbc1a4b5b0.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z7912493386697_0a1fb04c3cfd506c76ec8fcaec9a183e.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z7950420785218_4f27765a3b1b81e0e91ffcc1c235fb33.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z7950420785348_908d2e53e2f86b471a50534fa765414d.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CỌC GIAO THÔNG/z7950420785349_09902adff329ca42d740e6fb49853aac.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/CUỘN RÀO CÔNG TRÌNH/bia-cuon-rao-cong-trinh.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/bia-day-phan-quang.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240426_080144.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240426_080147.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240426_080150.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240426_080156.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240426_080159.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240507_085241.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240507_085248.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240510_134635.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240510_134638.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240510_134640.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240510_134646.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240510_134649.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/DÂY PHẢN QUANG/IMG_20240510_134653.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN CẢNH BÁO THOÁT HIỂM/bia-den-canh-bao-thoat-hiem.png",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN CẢNH BÁO THOÁT HIỂM/z3592424909717_ce2e6f9377df1ffdb1e49a8a62298586.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN CẢNH BÁO THOÁT HIỂM/z3832581357189_386e34584c2545112911a4f315933382.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN CẢNH BÁO THOÁT HIỂM/z3832667680703_d46070f2fb33f309f781d8ad63334501.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN CẢNH BÁO THOÁT HIỂM/z7912427984656_7de2fe057644145c7d04c2ba8c53eedf.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN CẢNH BÁO THOÁT HIỂM/z7912427984657_613fc284c3dbc39c5f99fc7efb7c4ff4.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/ĐÈN CẢNH BÁO THOÁT HIỂM/z7912428041955_f2126256f9fcb48198bd8241db1c4ebf.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/IMG_20240509_090033.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH 1 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH 1.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH 2.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458794655_3eb842488bc0d79483ad3f91d9c88eb8.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458796413_aec0be07ecd3103d25d48784bc2482e0.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458804143_5ffd03b6e4c2ea4dc1c29b8a9de7450d.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458824913_81821f54c3fbb582a040dc1d0bcdf242.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458836468_c852b18c0ee0370b1fe4efae75d4a7d7.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458851932_252d0d3e8f26cf880aa7ef8f12315e03.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458864072_9546abb3e255870ac43b4dbd86d9c02b.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369473571549_229c436a6b05664729dffd56d4822a4b.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079772692850_7e0419ad512f7f1421d3e65e4f7d6ec8.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079784745330_e8fcd3c485f6b41617b208f27e806870.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079787997172_fd9b41c61017a562bfd65e555f532bbc.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079792602801_caa57d2aaa72e5213b302ad2f4cde131.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079795707501_9fc2aa8b112dad8911ca5f9131093c4a.jpg"
        ]
    },
    "HệThốngBáoCháy": {
        "title": "Hệ Thống Báo Cháy",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/310ad4af9d087f562619.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/bia-binh-cuu-hoa-binh-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/BÌNH F1111.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/BÌNH PCCC F1112.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/co2 (2).jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_20240503_104822.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_20240503_104826.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714711970103_1714712273605.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714711988808_1714712270944.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712049176_1714712268244.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712061524_1714712265590.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712356599_1714712506164.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712370855_1714712503690.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712400932_1714712501324.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712430141_1714712494843.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712451882_1714712492260.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z2372000387025_74ad0408baef41c9353fe13ddfb2e82d.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z2372003180802_05f70829178a6bc9fccc42f85f30720b.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z2380927386458_1f9e7e58cefdef7a1b62725f08f0dba5.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832663102396_22fa68613b2cc9454ff8ae01f45e8e3c.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832663700231_a2f6a1eb57fae815121382050207754f.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832666889346_feef5cc308fafd62931909505e2fee25.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832668882423_7b364dba83bc401e630ffe89bed20dc0.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832669698284_d3fbade2e993e132f448b178a8dec334.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964291150244_278397a2d6a2f9f672274eb2c0675c0f.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426293870_7bba9a92e6e97fce3a409876b276d906.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426301843_530897c81c7c1c5f052119073174a8dc.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426304727_02138259ad4f3fce712935e69696e808.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426307340_ae14bc4d34393de70bddf87d8938170f.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426532009_1a89c6bfe099c811f61c06e87f07b0eb.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964432402532_0bd3fa69f1cf3e33913f7dbe60b03c7a.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964517255570_15931ec5d90c467b55858427bb1f0703.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964522152213_58fc18a6b10576cca40bd65a2df12ba0.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/bia-bo-tieu-lenh-phong-chay-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/IMG_20240509_090033.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH (2).jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH 1 (2).jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH 1.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH 2.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458794655_3eb842488bc0d79483ad3f91d9c88eb8.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458796413_aec0be07ecd3103d25d48784bc2482e0.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458804143_5ffd03b6e4c2ea4dc1c29b8a9de7450d.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458824913_81821f54c3fbb582a040dc1d0bcdf242.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458836468_c852b18c0ee0370b1fe4efae75d4a7d7.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458851932_252d0d3e8f26cf880aa7ef8f12315e03.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458864072_9546abb3e255870ac43b4dbd86d9c02b.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369473571549_229c436a6b05664729dffd56d4822a4b.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079772692850_7e0419ad512f7f1421d3e65e4f7d6ec8.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079784745330_e8fcd3c485f6b41617b208f27e806870.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079787997172_fd9b41c61017a562bfd65e555f532bbc.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079792602801_caa57d2aaa72e5213b302ad2f4cde131.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079795707501_9fc2aa8b112dad8911ca5f9131093c4a.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/bia-ke-dung-binh-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085801.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085822.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085824.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085827.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085832.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240515_081125.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_1714711958835_1714712276160.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_1714712411386_1714712497392.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3832678253534_fb8a0889394aa932db2e5b839df6d409.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3832679048808_a9a9f07af02207e16248cdcd46819477.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955381403566_ccdc778b21872dd8a7c98e0c7e569260.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955381407804_53787c7d52637dbdf6837efd3fdb33f1.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955406519121_5414aeac7f6b880dd2c07ff234f242dd.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955406520904_b8ac7311f1598967d9c1c536cd3d6a75.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955406522317_adf091e854b8e95e3e219882c80a9474.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955406528889_d01e7d0cbe2b9a1745b31cc4580031d5.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955512360113_519df64faa7707c931ea3f02b79c6def.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955647304306_7bb278c5a3e7d91c4faef934396ad779.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955647494166_a55763c9d17e2029b6c8fd38d971dd83.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/bia-quan-ao-phong-chay-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161833.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161836.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161839.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161902.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161913.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_164603.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20250922_180753.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/z3592446132666_3236aa4c9d267f8eb5457ca1f7177b0c.jpg"
        ]
    },
    "Kínhbảohộ&Khẩutrang": {
        "title": "Kính bảo hộ & Khẩu trang",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ MẮT/bia-thiet-bi-bao-ve-mat.png",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH DEN 6.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH ĐEN 1.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH ĐEN 2.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH ĐEN 3.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH ĐEN 4.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH ĐEN 5.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH ĐEN BB 1.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH ĐEN BB.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH GỌN ĐEN BB1.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH GỌNG ĐEN BB.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH GỌNG XANH BB 1.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH GỌNG XANH BB.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH XANH 1.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH XANH 2.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH XANH 3.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH XANH 4.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/KÍNH XANH.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2008623135643_d9ea83eff80f001a5774b57fee6f76c1.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2008624602099_22105d33bbd350f610fdff6eefa309e8.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2008625400856_995acdb78407c91d7cf1e945b316bdb0.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2008721604207_2d3813099bb1ce0cb3ddec245488cfcb.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2008721619180_a201279f4a356d7084ccb79f18a516d1.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2008721627168_a275db7d194c5fca772b41768a0ea96c.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010319841299_9fa10d7231e04f810a3d3512f045d39f.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010320026583_084dfc7e604e73264cc5e2a33ec1c8e2.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010320150455_3da4dc3b1b472fb704e3d9ab53b61f8f.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010320361510_47139f5378f1cb98215c12dbe0501e26.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010320573329_8db2f2eb184087eb0a22b72f97e1bdd1.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010320848573_7186b1d8f6b84e381552942503f1cc03.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010321723978_fdd2ac4a63c047a5eb6cde0e8d19309d.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010326473542_55e5d3f13756431f15125f37f18b1fd8.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010326526590_60edc39b59aae776ec99e2ef2d178616.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010326587270_4c22198c80499bf0930ec611e084091d.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010326644319_9017ce95924e62db5484f3a4c38c4823.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010326679402_ff5bf903b39e83b099ffb519652d3ae2.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010326711332_ce9414bdcf19b9daa74cbf89f7888bcc.jpg",
            "../images/THIẾT BỊ BẢO VỆ MẮT/z2010328922619_2843d781386534c71f130cc331eab006.jpg"
        ]
    },
    "Mũbảohộlaođộng": {
        "title": "Mũ bảo hộ lao động",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/bia-non-bao-ho-non-cong-nhan.png",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20210621_171006.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20210621_171010.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20210621_171014.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240503_095321.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240503_095324.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240503_095334.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240503_095341.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_082221.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_082224.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_082227.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_082232.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_082235.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_082238.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_130105.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_130107.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_130110.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_130118.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_130121.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_130125.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20240509_130129.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20250106_091626.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20250106_091648.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_20251031_110539.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN BẢO HỘ - NÓN CÔNG NHÂN/IMG_1779336840456_1779337655499.jpg"
        ]
    },
    "Mặtnạhànbảohộlaođộng": {
        "title": "Mặt nạ hàn bảo hộ lao động",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/1......jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/2...jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/22.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/111.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/221.00.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/222....2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/222.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/2222.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/11111.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/22222..jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/221111.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/bia-mat-na-phong-doc.png",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/de7261325009b657ef18.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/eb1d484978729e2cc763.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/ee8ef458c463223d7b72.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160935.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160938.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160948.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160954.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160957.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161007.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161107.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161114.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161124.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161205.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161239.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161243.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161251.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161308.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161310.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161313.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161316.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161318.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOẠC ĐỘC 04.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 1 PHIN.JPG",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 1LOI (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 2 (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 LĨ 7 (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 LÕI (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 LÕI 3 (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 LÕI.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 PHHINNN.JPG",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 5N.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 23.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 1 LÕI 1_.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 1 LÕI.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN 1.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN 2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN 3.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN 4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 5.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC Q.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/PHIN LỌC 2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/PHIN LỌC.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347337643_f61ab24fb594026c6a554eb48bcb78c5.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347339418_a9831fa84b032029903ebe32b7d4328a.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347351251_559e8880b8884ce497583513fd41478d.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347352620_49ef514136ff2d8754029665732387e2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347360611_d6a2dfe8b1850d2fff9a8478e36dc580.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347371465_052d1d3638eef727cb3ab2364678127e.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347401813_7dbcf864ab177a65d1fc8b5c50f48f9a.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347426698_625cde9d1c4e5c20e5dfce3e307bc541.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347477325_0d4ed791884a7f8dd9ee107cc9efa7cd.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347507784_405bc408ada737312e2b365ef6bc8645.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347534271_edd5f98739b15c1d78ee3e861ca08d4b.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347559507_d3dc8fb4f395e3dd5c336e63173c9611.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347579893_e5e771b5b14dce7f20e75b70a15d49c0.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347610734_80ceb74195015af26caf04a4e82750f3.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347656189_e31c0d636d1ec98c75e675981b457737.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347725643_c97e9f7add5686c9272d40047ffb342b.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927404002_de38efb168209ac03c2e04af657c7a03.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927437366_f0ee7b7715eb79da37eed2b35796d4e1.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927457561_e59679318557c19a49bc68acb8679556.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927476374_14350375f97335d99a8bc3f9642224c4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927487111_ea03c030e2897c892db76f792e331fe4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927507801_5785b4b485daf380f73bf2b6633631bb.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927523454_9edc81a1261cc49e12a1d690b32733c4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927542859_7643757779ee7d793b31385ddef69a7c.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927560180_fefb88d639868978c8058f7566d5bcf2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927579504_188a3a7656095daff2b59a178e7cfd7d.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927592094_bdc1086bf9fbce307c50156ab188c515.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927622501_2b59a35308fa2e5fd6cafc032fffce66.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927634899_98ee13bccba51fdfbc6f470f54b77ce7.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927650475_abdbd98f31633d6b48456dce262e5bb6.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927666892_d34b6b04f9d8fd475c4d9801c9b116c7.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927684242_ccb958fbb5227c1e46daf96674c4778b.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927694033_7a99bb43a86cb5eb0788940ee3988af4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927711438_6cefbafe35aa6c19e3b78c879448e115.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927733547_9844c410279fcfccc21f870756d6eb00.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927752726_e5185e3a09006cb0b37494a147a061d1.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927768336_eb0bcae1a6ba6207ff1e57291eaccbcc.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927791926_47d3d8c9581ddd93227288a32eccf2c2.jpg"
        ]
    },
    "MặtNạPhòngĐộc": {
        "title": "Mặt Nạ Phòng Độc",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/1......jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/2...jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/22.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/111.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/221.00.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/222....2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/222.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/2222.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/11111.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/22222..jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/221111.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/bia-mat-na-phong-doc.png",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/de7261325009b657ef18.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/eb1d484978729e2cc763.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/ee8ef458c463223d7b72.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160935.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160938.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160948.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160954.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_160957.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161007.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161107.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161114.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161124.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161205.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161239.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161243.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161251.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161308.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161310.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161313.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161316.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/IMG_20240529_161318.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOẠC ĐỘC 04.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 1 PHIN.JPG",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 1LOI (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 2 (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 LĨ 7 (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 LÕI (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 LÕI 3 (2).jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 LÕI.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC 2 PHHINNN.JPG",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 5N.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LOC 23.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 1 LÕI 1_.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 1 LÕI.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN 1.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN 2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN 3.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN 4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 2 PHIN.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC ĐỘC 5.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/LỌC Q.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/PHIN LỌC 2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/PHIN LỌC.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347337643_f61ab24fb594026c6a554eb48bcb78c5.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347339418_a9831fa84b032029903ebe32b7d4328a.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347351251_559e8880b8884ce497583513fd41478d.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347352620_49ef514136ff2d8754029665732387e2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347360611_d6a2dfe8b1850d2fff9a8478e36dc580.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347371465_052d1d3638eef727cb3ab2364678127e.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347401813_7dbcf864ab177a65d1fc8b5c50f48f9a.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347426698_625cde9d1c4e5c20e5dfce3e307bc541.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347477325_0d4ed791884a7f8dd9ee107cc9efa7cd.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347507784_405bc408ada737312e2b365ef6bc8645.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347534271_edd5f98739b15c1d78ee3e861ca08d4b.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347559507_d3dc8fb4f395e3dd5c336e63173c9611.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347579893_e5e771b5b14dce7f20e75b70a15d49c0.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347610734_80ceb74195015af26caf04a4e82750f3.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347656189_e31c0d636d1ec98c75e675981b457737.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2071347725643_c97e9f7add5686c9272d40047ffb342b.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927404002_de38efb168209ac03c2e04af657c7a03.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927437366_f0ee7b7715eb79da37eed2b35796d4e1.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927457561_e59679318557c19a49bc68acb8679556.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927476374_14350375f97335d99a8bc3f9642224c4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927487111_ea03c030e2897c892db76f792e331fe4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927507801_5785b4b485daf380f73bf2b6633631bb.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927523454_9edc81a1261cc49e12a1d690b32733c4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927542859_7643757779ee7d793b31385ddef69a7c.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927560180_fefb88d639868978c8058f7566d5bcf2.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927579504_188a3a7656095daff2b59a178e7cfd7d.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927592094_bdc1086bf9fbce307c50156ab188c515.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927622501_2b59a35308fa2e5fd6cafc032fffce66.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927634899_98ee13bccba51fdfbc6f470f54b77ce7.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927650475_abdbd98f31633d6b48456dce262e5bb6.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927666892_d34b6b04f9d8fd475c4d9801c9b116c7.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927684242_ccb958fbb5227c1e46daf96674c4778b.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927694033_7a99bb43a86cb5eb0788940ee3988af4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927711438_6cefbafe35aa6c19e3b78c879448e115.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927733547_9844c410279fcfccc21f870756d6eb00.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927752726_e5185e3a09006cb0b37494a147a061d1.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927768336_eb0bcae1a6ba6207ff1e57291eaccbcc.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐƯỜNG HÔ HẤP/MẶT NẠ PHÒNG ĐỘC/z2380927791926_47d3d8c9581ddd93227288a32eccf2c2.jpg"
        ]
    },
    "NónSaoBảoVệ": {
        "title": "Nón , Sao Bảo Vệ",
        "cat": "accessories",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/1 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/2 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3 GẠCH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3d2659c54600a25efb11.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/7e127423c7a53cfb65b4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/240a195be58500db5994.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/3924b932a6f742a91be6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/bia-phu-kien-bao-ve.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ca-vat.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/caravat-bao-ve.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/CẦU VAI 2GACH.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/f5382d4c13faf5a4aceb.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/fad144385bfdbfa3e6ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/images.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/tải xuống.webp",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VÀ VẠT.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁO ....jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/VE ÁOAAA.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/ve_ao_mat_than.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/vn-11134258-81ztc-momw6akl6v4ef3.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421871515_d3d5544a59c1d4f8c44c4212f00e365a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421880312_f9583dd3633c052e1f9fd3709502fb4b - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421899433_8c9b79a669d12dfae839f1bf5c7cdd54.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2046421902718_df70f5bb0a366f7f1fb7f06e4b4c91e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756923956_cb6dedaa7616e22118f8e5d84506561f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756926937_501836770c4f0b24f94bac841bef43bc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756938157_a7b42a1c58a52041bec5d48973a28c9d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756945528_93a0756627ca0d079d0f1c16e4adbf72.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756952571_deb4c024c3e61411ffb705284b5d094b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523756957776_6c1572584e9b2a55d7ec8b9ddd904190.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523759453623_148f5adf349fb47d8f274fd77899c40c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z2523962818885_a542e961c989c80a1b8522da6acff1ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384757539_a367d9699fbb35bc0f0befdccd032c6f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384809372_c62c34355af0cc35c661d168c2b70647.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384834521_10f53ab7ef7823bbc6df21374ed5523e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384854201_31978d6e9274455238a7e98e16492d84.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516 (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384872023_1b21a727fa2c8be01a3737ebf89d5516.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384890814_2f0055d5935810a0a17d67aea4220efc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384906589_5bb1404edaa6d95d8af57a8f375f837b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384923072_bd73ab8cee3723617cc07a89fba9bb3b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384940081_b6e0508a1e6601fa61d027bab53fa357.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384956833_a8057e9eb8c94dca817e3698b7fb2c95.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384972393_a637179579c910965794a9b014624e17.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855384990798_97c94ce8e97671da2ac57dcd44ef35a6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385008463_35f54d9958adc0bf3f6bb106c531bfdc.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385027011_fe26247a847fd1ada67e93846dc23275.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385042782_3ee1bf1d9ef3fdfe43a790c95644f801.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385061939_c242c319a993e209d1bec75f410fb060.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z5855385080254_c17595093a445532c2e5924755b0e4c0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7455730420500_39a9261164980583a7771a13b7b146a5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061808567_57461fc5774bed9644528363fb58ea2b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061829569_220f9c5c634af883fbcdd0be797bc2f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061860302_3833547ddba226ebb0ffe553a440d5ea.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889061879299_f81d1a33ca79433cfc3842577cc63b87.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099532330_58d11a7bf9932e193ac98feec2bc91b5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099538672_c46d9c228853f80e58e7dcc795f65700.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099544154_85af1f7b1949edf9c2ab2394970d401c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099561873_1ad2bad48d49b4ab80333385ba829a81.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099562205_f17538e0e854be9a9d1fa51ca6830f8c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889099700210_195cdaa5a5b3ec70ece2553ec8463b19.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889107734168_99785674ca0255c95c9de31ce94fd8b9.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889238116988_7ae43a800c5f20774cf0f17daebd8752.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889240475661_6a459491aafe917e98505769b232bce8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889260706538_79f2f7e2cc9158c77cf17242e21baf42.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357508523_11d3b91e11f52003b6559086cfb60814.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357518702_fed21f53df0c67a6e0c746ebb6ac1894.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889357525492_871c76c4f78ec94e068102345c4e2790.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458471696_3f86dc7dcdf0b7d174e1fc1b1d92f13e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458478567_6c0768cede37806dcbeb5ac805c5dfd5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458484787_b84864698ec8146ae6c27c44c390aaec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458498510_6b3897ec634cdc1fbeaf88169fcb259e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458505415_6fc4d516326798946c9967303917cb35.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458511590_19b0374643724410677d7d5e58176e98.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889458518687_f26a874385c8a200eed26c35fa27f9f8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527629273_84313fdb2b8dfb41e21277becd8a14f7.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527637240_b4cd51d6db0578c44741aab69197d8b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527643153_c432edb8cce866c6487069bdf6e5b5cf.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889527648008_3ca2757db2b44622d85326cb21b82dd3.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567345921_9740d6e35c0e0fdd1b14cbb324250bd0.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567352194_484527f436abd62524858b117c3c47b6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567503105_17b31117caeac8a549553d0dc9fdc28d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567617886_bdd34c4f03d238dfcf0f90708ea53a48.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567779256_aa9aeef3935f320d844edb102d2440e6.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889567917662_65e26df171df88755c213511f1280c38.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568208585_19f4ed2c6144da1a61d9c1ccfa1bd9b8.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889568364267_d4ae841de0ddbc0f355237873beadadd.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308921_248cc5377bcc59a2d561b15fce68d872 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595308923_51f7b82b553ef37e7878782095607d56.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595309089_2d5e257f450964df3235fa9b3fc437c9 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595351652_ec688d8522c607575fa80e0580324200.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889595388253_d51108ba07c7ac858b475d808debd7a2 - Copy.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606405195_7b836f155f2ee5e9403bda0beca8c439.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448180_522d744b2a67bcf10d82c5abd6ae52ed.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448211_52d62a4de40fbc0daf0e36d1f3a3f504.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606448430_fc86f526f331993faefb45f09e49bf8e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606493549_a2a22332ad1825ba374d8407da347f62.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889606528785_5ccf2346fe1c7aeef3a48f2497edad4a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889717612214_913f6a264ef6e56114b1a839642b096a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e (1).jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7889906388300_6d8226a666143a010f9aeb4e0a4b487e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889560_fe51f1201847fd8cd41912d238403bf4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042889580_b9206d3ff2c35679b5adeaabec7f57f4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948075_a7d53f9de1c3eeba02c750f63ef48401.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948152_96e3c83a26897c5c230c7bb4fe09649a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890042948207_9a8c0a567a0862758b11a57c0c90ea39.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890051127145_520a3782a66cdeee32ece6fcb22258ec.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/PHỤ KIỆN BẢO VỆ/z7890110425283_1ede85e069c141596b7c62fbcc8868b8.jpg"
        ]
    },
    "Nónvảilướitrùm": {
        "title": "Nón vải lưới trùm",
        "cat": "accessories",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/bia-non-vai.png",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/NÓN +SAO BVV.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/NÓN BV.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/NÓN BVVV.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/SAO BV 1.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/SAO BV.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/vn-11134207-7r98o-ln9qxpimnn59bd.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/vn-11134207-7r98o-ln9qxpimp1ppf5.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/vn-11134207-7r98o-ln9qxpimruuld3.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/vn-11134207-7r98o-ln9qxpimunzhb4.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/vn-11134207-7r98o-ln9qxpimxh4d0d.jpg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/vn-11134207-7ras8-m1s488fp5utv04.jpeg",
            "../images/THIẾT BỊ BẢO VỆ ĐẦU/NÓN VẢI/vn-11134207-7ras8-m1s488fp31z3f1.jpeg"
        ]
    },
    "Nútchốngồn": {
        "title": "Nút chống ồn",
        "cat": "safety",
        "imgs": [
            "../images/BẢO VỆ TAI/9c32b0d1dffc3da264ed.jpg",
            "../images/BẢO VỆ TAI/bia-thiet-bi-bao-ve-tai.png",
            "../images/BẢO VỆ TAI/dcc9f5806ec58b9bd2d4.jpg",
            "../images/BẢO VỆ TAI/ddb7c42d5f68ba36e379.jpg",
            "../images/BẢO VỆ TAI/NÚT TAI 1.jpg",
            "../images/BẢO VỆ TAI/NÚT TAI 2.jpg",
            "../images/BẢO VỆ TAI/NÚT TAI.jpg"
        ]
    },
    "NộiquyTiêuđềCấmlửaCấmhútthuốc": {
        "title": "Nội quy-Tiêu đề-Cấm lửa-Cấm hút thuốc",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/IMG_20240509_090033.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH 1 (2).jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH 1.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH 2.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/TIEU LENH.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458794655_3eb842488bc0d79483ad3f91d9c88eb8.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458796413_aec0be07ecd3103d25d48784bc2482e0.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458804143_5ffd03b6e4c2ea4dc1c29b8a9de7450d.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458824913_81821f54c3fbb582a040dc1d0bcdf242.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458836468_c852b18c0ee0370b1fe4efae75d4a7d7.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458851932_252d0d3e8f26cf880aa7ef8f12315e03.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369458864072_9546abb3e255870ac43b4dbd86d9c02b.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z2369473571549_229c436a6b05664729dffd56d4822a4b.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079772692850_7e0419ad512f7f1421d3e65e4f7d6ec8.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079784745330_e8fcd3c485f6b41617b208f27e806870.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079787997172_fd9b41c61017a562bfd65e555f532bbc.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079792602801_caa57d2aaa72e5213b302ad2f4cde131.jpg",
            "../images/THIẾT BỊ CẢNH BÁO AN TOÀN/NỘI QUY/z7079795707501_9fc2aa8b112dad8911ca5f9131093c4a.jpg"
        ]
    },
    "ThangThoátHiểmCuốn": {
        "title": "Thang Thoát Hiểm Cuốn",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/THANG DÂY/bia-thang-day-thoat-hiem.png",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/THANG DÂY/z7950413769600_6bc6722e274375d63f5596c4642c188d.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/THANG DÂY/z7950413769602_d2f0f654d1411181bb00741010932897.jpg",
            "../images/THIẾT BỊ AN TOÀN TRÊN CAO/THANG DÂY/z7950413769603_a20a248a87a646fc00d3eaaca0285d39.jpg"
        ]
    },
    "ThiếtbịPCCC&Antoàn": {
        "title": "Thiết bị PCCC & An toàn",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/310ad4af9d087f562619.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/bia-binh-cuu-hoa-binh-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/BÌNH F1111.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/BÌNH PCCC F1112.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/co2 (2).jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_20240503_104822.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_20240503_104826.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714711970103_1714712273605.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714711988808_1714712270944.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712049176_1714712268244.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712061524_1714712265590.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712356599_1714712506164.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712370855_1714712503690.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712400932_1714712501324.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712430141_1714712494843.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/IMG_1714712451882_1714712492260.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z2372000387025_74ad0408baef41c9353fe13ddfb2e82d.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z2372003180802_05f70829178a6bc9fccc42f85f30720b.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z2380927386458_1f9e7e58cefdef7a1b62725f08f0dba5.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832663102396_22fa68613b2cc9454ff8ae01f45e8e3c.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832663700231_a2f6a1eb57fae815121382050207754f.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832666889346_feef5cc308fafd62931909505e2fee25.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832668882423_7b364dba83bc401e630ffe89bed20dc0.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3832669698284_d3fbade2e993e132f448b178a8dec334.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964291150244_278397a2d6a2f9f672274eb2c0675c0f.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426293870_7bba9a92e6e97fce3a409876b276d906.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426301843_530897c81c7c1c5f052119073174a8dc.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426304727_02138259ad4f3fce712935e69696e808.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426307340_ae14bc4d34393de70bddf87d8938170f.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964426532009_1a89c6bfe099c811f61c06e87f07b0eb.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964432402532_0bd3fa69f1cf3e33913f7dbe60b03c7a.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964517255570_15931ec5d90c467b55858427bb1f0703.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BÌNH CỨU HỎA- BÌNH CHỮA CHÁY/z3964522152213_58fc18a6b10576cca40bd65a2df12ba0.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/bia-bo-tieu-lenh-phong-chay-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/bo-noi-quy-tieu-lenh-phong-chay-chua-chay-400x381.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/IMG_20240509_090033.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH (2).jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH 1 (2).jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH 1.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH 2.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/TIEU LENH.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458794655_3eb842488bc0d79483ad3f91d9c88eb8.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458796413_aec0be07ecd3103d25d48784bc2482e0.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458804143_5ffd03b6e4c2ea4dc1c29b8a9de7450d.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458824913_81821f54c3fbb582a040dc1d0bcdf242.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458836468_c852b18c0ee0370b1fe4efae75d4a7d7.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458851932_252d0d3e8f26cf880aa7ef8f12315e03.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369458864072_9546abb3e255870ac43b4dbd86d9c02b.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z2369473571549_229c436a6b05664729dffd56d4822a4b.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079772692850_7e0419ad512f7f1421d3e65e4f7d6ec8.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079784745330_e8fcd3c485f6b41617b208f27e806870.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079787997172_fd9b41c61017a562bfd65e555f532bbc.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079792602801_caa57d2aaa72e5213b302ad2f4cde131.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/BỘ TIÊU LỆNH PHÒNG CHÁY CHỮA CHÁY/z7079795707501_9fc2aa8b112dad8911ca5f9131093c4a.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/bia-ke-dung-binh-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085801.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085822.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085824.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085827.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240509_085832.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_20240515_081125.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_1714711958835_1714712276160.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/IMG_1714712411386_1714712497392.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3832678253534_fb8a0889394aa932db2e5b839df6d409.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3832679048808_a9a9f07af02207e16248cdcd46819477.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955381403566_ccdc778b21872dd8a7c98e0c7e569260.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955381407804_53787c7d52637dbdf6837efd3fdb33f1.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955406519121_5414aeac7f6b880dd2c07ff234f242dd.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955406520904_b8ac7311f1598967d9c1c536cd3d6a75.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955406522317_adf091e854b8e95e3e219882c80a9474.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955406528889_d01e7d0cbe2b9a1745b31cc4580031d5.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955512360113_519df64faa7707c931ea3f02b79c6def.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955647304306_7bb278c5a3e7d91c4faef934396ad779.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/KỆ ĐỰNG BÌNH CHỮA CHÁY/z3955647494166_a55763c9d17e2029b6c8fd38d971dd83.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/bia-quan-ao-phong-chay-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161833.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161836.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161839.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161902.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161913.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_164603.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20250922_180753.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/z3592446132666_3236aa4c9d267f8eb5457ca1f7177b0c.jpg"
        ]
    },
    "Thùngđựngrác": {
        "title": "Thùng đựng rác",
        "cat": "tools",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/bia-thung-rac-cong-nghiep.png",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240503_095146.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240503_095150.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240503_095159.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240510_153728.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240510_153732.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240510_153734.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240510_153738.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240510_153746.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_101934.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_101941.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_101944.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_101947.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_101951.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_101954.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_101957.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102044.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102047.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102050.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102052.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102058.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102232.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102235.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102241.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102312.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102322.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102325.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102328.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102331.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102341.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102345.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102348.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102404.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102414.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102417.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102439.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102452.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_102455.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20240529_114407.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/IMG_20250220_220000.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/z7950433098158_f2799106b3f50f730bc56434805da407.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/z7950433098283_67062141491362a159f12b770f2ebc04.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/z7950433123899_57282c95ee99df02ee21c4724bd9f7c7.jpg",
            "../images/THIẾT BỊ BẢO VỆ SINH MÔI TRƯỜNG - THÙNG RÁC CÔNG NGHIỆP/z7950433123900_5725a8d171703a39d772925b575aea81.jpg"
        ]
    },
    "Áocásấumècaocấpnhiều": {
        "title": "Áo cá sấu mè cao cấp nhiều",
        "cat": "uniform",
        "imgs": [
            "../images/ÁO THUN/ÁO THUN CÔNG NHÂN/bia-ao-thun-cong-nhan.png",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/bia-ao-thun-the-thao.png",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240510_111518.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240510_111520.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240510_111637.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240530_102500.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240530_102504.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240530_102506.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240530_102509.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240530_102512.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240530_102515.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240530_102518.jpg",
            "../images/ÁO THUN/ÁO THUN THỂ THAO/IMG_20240530_102608.jpg",
            "../images/ÁO THUN/ÁO THUN VĂN PHÒNG/bia-ao-thun-van-phong.png"
        ]
    },
    "ÁoPhảnQuang": {
        "title": "Áo Phản Quang",
        "cat": "uniform",
        "imgs": [
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/ao-phan-quang-nhieu-mau (1).jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/ao-phan-quang-nhieu-mau (2).jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/ao-phan-quang-nhieu-mau (3).jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/ao-phan-quang-nhieu-mau (4).jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/ao-phan-quang-nhieu-mau (5).jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/ao-phan-quang-nhieu-mau (6).jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/ao-phan-quang-nhieu-mau (7).jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/bia-ao-phan-quang-kieu-3m.png",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/IMG_20260327_143452.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG KIỂU 3M/IMG_1714009188725_1714031339883.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG PALIZE/bia-ao-phan-quang-palize.png",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG PALIZE/IMG_20250106_091622.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG PALIZE/IMG_20250506_162008.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/111.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/11111.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/11111111.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/1111111111.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/11111111111.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/bia-ao-phan-quang-tui-luoi.png",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/IMG_20240508_081527.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/IMG_20240509_080020.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/IMG_20240509_080024.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/IMG_20240509_080026.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/IMG_20240509_080029.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/IMG_20260327_143451.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/IMG_1728276112331_1730862555522.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/IMG_1728276112440_1730862555890.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004937583235_f03d6778a6b6e16fa7b1d367807a0446.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004937587021_13fec292d573ff8502fcf8870ab4a39d.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004937588574_6b251d8743a73ebc834cdf75d32d7dd3.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004937590644_a355f12e1e8178bf842c529c29bb535c.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004937603756_0f844e88cdd84bf8cdac631c45102912.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004937606201_459bbf8b4acb6997ad89c2c60f862149.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004957761086_695b6f4dffa8850fda1186c27bdfc412.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004957765331_07dc8201126d539de0f5ef7f62320ac0.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004957765557_4811618226eff92ea431726495dbf558.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6004957772539_2e81c4369ca73e85e4d4b54d898f73f8.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6005242488988_b1b7f15c212a64860879e77a43fcc906.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6005242491122_eb63630ef4853098110742e79b84c81a.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6005242544284_c488094d84db523d668d22ea71c124d5.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6005242556068_972c5b00480cfdbe851132e238068465.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6005242585456_97b80facca24136db4cbd875a34f15f4.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6005242599993_8f60a03caca27c2b88f16816f5f92d5f.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANG TÚI LƯỚI/z6005242679361_0bc8680407058c1e953c5f21abfa20ae.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/bia-ao-phan-quang-thun-2-ben.png",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111729.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111733.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111735.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111737.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111740.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111742.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111745.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111747.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111750.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111752.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20240510_111910.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20250106_091631.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20260320_174808.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20260320_174814.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20260320_174824.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20260320_174826.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20260320_174833.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20260320_174834.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20260527_100950.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_20260527_100955.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754635137847_1754879811348.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754635138786_1754879811497.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754635139113_1754879811664.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754635140723_1754879811764.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754635141125_1754879811836.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754635141675_1754879811921.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754635142141_1754879811989.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754635142685_1754879812067.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754642806040_1754879807877.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754642806804_1754879808018.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754642807526_1754879808126.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754642808461_1754879808252.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754642809204_1754879808322.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754642809948_1754879808393.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754642811057_1754879808487.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754642812000_1754879808566.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754645412506_1754879805081.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754645413278_1754879805589.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754645413679_1754879805730.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754645415411_1754879805877.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/IMG_1754645416388_1754879806005.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/z7892281176182_7e80abcf1ac883ffb2d941b0cf7f1e9d.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/z7892281176183_6bf64c3c0c2e5ab7e6b514a55aa3f341.jpg",
            "../images/ÁO PHẢN QUANG/ÁO PHẢN QUANGTHUN 2 BÊN/z7892281198452_2e1f7b13fce9ca73af406804965b9757.jpg"
        ]
    },
    "ĐồbảohộPCCC": {
        "title": "Đồ bảo hộ PCCC",
        "cat": "safety",
        "imgs": [
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/bia-quan-ao-phong-chay-chua-chay.png",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161833.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161836.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161839.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161902.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_161913.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20240508_164603.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/IMG_20250922_180753.jpg",
            "../images/THIẾT BỊ PHÒNG CHÁY CHỮA CHÁY/QUẦN ÁO PHÒNG CHÁY CHỮA CHÁY/z3592446132666_3236aa4c9d267f8eb5457ca1f7177b0c.jpg"
        ]
    },
    "Đồđimưaáophao": {
        "title": "Đồ đi mưa - áo phao",
        "cat": "uniform",
        "imgs": [
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO MƯA CÁNH DƠI/bia-ao-mua-canh-doi.png",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO MƯA CÁNH DƠI/IMG_20240521_174006.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO MƯA CÁNH DƠI/IMG_20240521_174013.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO MƯA CÁNH DƠI/IMG_20240523_114220.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO MƯA CÁNH DƠI/IMG_20240523_115240.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO MƯA CÁNH DƠI/IMG_20240523_141952.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/bia-ao-phao.png",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240503_095216.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240503_095221.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240503_095258.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240503_095301.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080430.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080432.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080435.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080444.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080447.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080449.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080452.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080455.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080457.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080500.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080507.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080509.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240515_080513.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240530_144227.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240530_144231.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240530_144250.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240530_144303.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240530_144306.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240530_144458.jpg",
            "../images/QUẦN ÁO MƯA – ÁO PHAO/ÁO PHAO/IMG_20240530_144501.jpg"
        ]
    },
    "ĐồngPhụcBảoVệ": {
        "title": "Đồng Phục Bảo Vệ",
        "cat": "uniform",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/4dc2cb60-c515-469e-83eb-be26475c3aef.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/5a4a033d-6bfa-43ef-8867-7027752d7815.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/7f94393e-47d0-445f-8af9-a5005e094ca1.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/8a1e8c36-f6aa-44ac-86fd-4940383e1f4a.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/75d57e41-9ad3-48b8-9185-b6421567a886.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/a75fe89d171bec45b50a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/b50a7577-9622-444d-bb59-7c6e2656555c.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/beb0c944-ce7d-4223-acfb-1c25b4942ebd.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/bia-đong-phuc-bao-ve.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/db9fdda2-344b-4ddb-817d-b6f3a75971fb.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/dfc1b6c34a45b11be854.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889122542642_81e7e44b01d8cc1642797d796d97b265.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889126223327_4287cdbf4ab3edae33a23ec5c0395103.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889204383265_740057995fb645b3451ecac4dd6e2ee1.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889208403713_55ab8e2db6c3a518387bf5d14edd0255.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610911870_7f0e04ef01f80c1cbf651ea1aed941d5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610955024_2604238d8143f73ed8f4ae86b1c4c4e7.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610955113_7afb47da9ea3aa9225484486448cc35e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610992293_20899c7a103777374f54dad2b2bccc95.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610992392_083f0b020a9b6ffc5a090f16cf7143a4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610992483_93299a928622898111ab8c8abd3df93c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889611037704_dd3899bba75f2c9ceb684437453f888f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889691225357_5ff335cc61a4d8b9b1399333d2992a59.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889692379205_24daaf79e17d5c974c7f8ddcaaf445ab.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889693653172_0e0a4cf50bf14a2b88af7da31e4fec69.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889695176248_1cf6585f9f58841a71cacaa76d545a7d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889705859785_5b48dc06ef46f290cf46685473313171.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889707348553_0b8057cdb2fc199a173dede4fcd09401.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889707348555_a4ae80e6d318b660d7ef6f4b0ebeda0b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7890122138044_a653f121a1a5afb6c4ba6f6160adcddb.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7890122138047_f9b2d9838d6a6820a6b9e96bebe1b656.jpg"
        ]
    },
    "ĐồngPhụcBảoVệNEW": {
        "title": "Đồng Phục Bảo Vệ NEW",
        "cat": "uniform",
        "imgs": [
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/4dc2cb60-c515-469e-83eb-be26475c3aef.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/5a4a033d-6bfa-43ef-8867-7027752d7815.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/7f94393e-47d0-445f-8af9-a5005e094ca1.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/8a1e8c36-f6aa-44ac-86fd-4940383e1f4a.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/75d57e41-9ad3-48b8-9185-b6421567a886.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/a75fe89d171bec45b50a.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/b50a7577-9622-444d-bb59-7c6e2656555c.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/beb0c944-ce7d-4223-acfb-1c25b4942ebd.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/bia-đong-phuc-bao-ve.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/db9fdda2-344b-4ddb-817d-b6f3a75971fb.png",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/dfc1b6c34a45b11be854.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889122542642_81e7e44b01d8cc1642797d796d97b265.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889126223327_4287cdbf4ab3edae33a23ec5c0395103.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889204383265_740057995fb645b3451ecac4dd6e2ee1.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889208403713_55ab8e2db6c3a518387bf5d14edd0255.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610911870_7f0e04ef01f80c1cbf651ea1aed941d5.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610955024_2604238d8143f73ed8f4ae86b1c4c4e7.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610955113_7afb47da9ea3aa9225484486448cc35e.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610992293_20899c7a103777374f54dad2b2bccc95.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610992392_083f0b020a9b6ffc5a090f16cf7143a4.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889610992483_93299a928622898111ab8c8abd3df93c.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889611037704_dd3899bba75f2c9ceb684437453f888f.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889691225357_5ff335cc61a4d8b9b1399333d2992a59.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889692379205_24daaf79e17d5c974c7f8ddcaaf445ab.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889693653172_0e0a4cf50bf14a2b88af7da31e4fec69.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889695176248_1cf6585f9f58841a71cacaa76d545a7d.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889705859785_5b48dc06ef46f290cf46685473313171.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889707348553_0b8057cdb2fc199a173dede4fcd09401.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7889707348555_a4ae80e6d318b660d7ef6f4b0ebeda0b.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7890122138044_a653f121a1a5afb6c4ba6f6160adcddb.jpg",
            "../images/ĐỒNG PHỤC VÀ PHỤ KIỆN BẢO VỆ/ĐỒNG PHỤC BẢO VỆ/z7890122138047_f9b2d9838d6a6820a6b9e96bebe1b656.jpg"
        ]
    },
    "Ủngbảohộlaođộng": {
        "title": "Ủng bảo hộ lao động",
        "cat": "shoes",
        "imgs": [
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/bia-ung-bao-ho.png",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_20220606_104535.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_20240425_145457.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_20240425_145501.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_1730856427984_1730856479139.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_1730856427987_1730856479312.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_1730856427991_1730856479557.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_1730856427994_1730856479777.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_1730856427999_1730856480098.jpg",
            "../images/THIẾT BỊ BẢO VỆ CHÂN/ỦNG BẢO HỘ/IMG_1740803434431_1740820083262.jpg"
        ]
    }
};

// Translations
const translations = {
    'vi': {
        'nav-home': 'Trang chủ',
        'nav-about': 'Giới thiệu',
        'nav-products': 'Sản phẩm',
        'nav-why': 'Tại sao chọn chúng tôi',
        'nav-testimonials': 'Đánh giá',
        'nav-news': 'Tin tức',
        'nav-contact': 'Liên hệ',
        'hero-badge': 'Bảo Hộ Lao Động Uy Tín Số 1',
        'hero-title-1': 'An Toàn Của Bạn là<br><span class="highlight">Sứ Mệnh Của Chúng Tôi</span>',
        'hero-slogan': '"Uy Tín Là Bảo Hộ Tốt Nhất"',
        'hero-desc-1': 'Chuyên cung cấp trang thiết bị bảo hộ lao động và đồng phục chuyên dụng chất lượng cao, đạt chuẩn an toàn quốc gia và quốc tế.',
        'btn-explore': 'Khám Phá Sản Phẩm',
        'btn-contact': 'Nhận Tư Vấn Ngay',
        'cart-title': 'Giỏ Hàng',
        'cart-empty': 'Giỏ hàng đang trống',
        'cart-checkout': 'Gửi Đơn Qua Zalo',
        'search-placeholder': 'Tìm sản phẩm...',
        'view-detail': 'Xem chi tiết',
        'contact-price': 'Liên hệ báo giá',
        'qty': 'Số lượng',
        'products-title': 'Sản Phẩm <span class="highlight">Nổi Bật</span>',
        'why-title': 'Tại Sao Chọn <span class="highlight">Thành Phong</span>?',
        'testimonials-title': 'Khách Hàng Nói Gì Về <span class="highlight">Chúng Tôi</span>?',
        'diary-title': 'Nhật Ký <span class="highlight">Thành Phong</span>',
        'news-title': 'Tin Tức <span class="highlight">Mới Nhất</span>',
        'contact-title': 'Liên Hệ <span class="highlight">Với Chúng Tôi</span>'
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-products': 'Products',
        'nav-why': 'Why Us',
        'nav-testimonials': 'Reviews',
        'nav-news': 'News',
        'nav-contact': 'Contact',
        'hero-badge': 'Top Rated Safety Equipment',
        'hero-title-1': 'Your Safety is<br><span class="highlight">Our Mission</span>',
        'hero-slogan': '"Credibility is the Best Protection"',
        'hero-desc-1': 'Specializing in high-quality safety equipment and specialized uniforms, meeting national and international safety standards.',
        'btn-explore': 'Explore Products',
        'btn-contact': 'Get Advice Now',
        'cart-title': 'Shopping Cart',
        'cart-empty': 'Your cart is empty',
        'cart-checkout': 'Order via Zalo',
        'search-placeholder': 'Search products...',
        'view-detail': 'View Detail',
        'contact-price': 'Contact for Quote',
        'qty': 'Quantity',
        'products-title': 'Featured <span class="highlight">Products</span>',
        'why-title': 'Why Choose <span class="highlight">Thanh Phong</span>?',
        'testimonials-title': 'What Customers Say <span class="highlight">About Us</span>?',
        'diary-title': 'Thanh Phong <span class="highlight">Diary</span>',
        'news-title': 'Latest <span class="highlight">News</span>',
        'contact-title': 'Contact <span class="highlight">With Us</span>'
    }
};

// Global State
let cart = JSON.parse(localStorage.getItem('tp_cart')) || [];
let currentLang = localStorage.getItem('tp_lang') || 'vi';

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    shuffleHomepageBanners();
    renderHomepageProducts();
    initHeroCarousel();
    initSmoothScroll();
    initNavbarEffects();
    initProductFilters();
    initSearch();
    initCart();
    initLanguage();
    initStatsCounter();
    initContactForm();
    initProductGalleryLightbox();

    // AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }

    updateCartBadge();
});

// 1. Hero Carousel
function initHeroCarousel() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.hero-slider', {
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            effect: 'fade',
            fadeEffect: { crossFade: true },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }
}

// 2. Navbar Effects (Scroll & Toggle)
function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// 3. Product Filters (Category & Status)
function initProductFilters() {
    const categoryBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const statusBtns = document.querySelectorAll('.filter-btn[data-status]');
    const products = document.querySelectorAll('.product-card');

    let currentFilter = 'all';
    let currentStatus = 'all';

    function applyFilters() {
        products.forEach(card => {
            const cat = card.dataset.category;
            const status = card.dataset.status;
            
            const catMatch = currentFilter === 'all' || cat === currentFilter;
            const statusMatch = currentStatus === 'all' || status === currentStatus;

            if (catMatch && statusMatch) {
                card.style.display = 'block';
                card.classList.remove('hidden');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilters();
        });
    });

    statusBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            statusBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStatus = btn.dataset.status;
            applyFilters();
        });
    });
}

// 4. Live Search
function initSearch() {
    const searchTrigger = document.getElementById('searchTrigger');
    const navSearch = document.getElementById('navSearch');
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product-card');

    searchTrigger.addEventListener('click', () => {
        navSearch.classList.toggle('active');
        if (navSearch.classList.contains('active')) searchInput.focus();
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        products.forEach(card => {
            const titleEl = card.querySelector('.product-title');
            const descEl = card.querySelector('.product-desc');
            
            if (!titleEl || !descEl) return;
            
            const title = titleEl.innerText.toLowerCase();
            const desc = descEl.innerText.toLowerCase();
            
            if (title.includes(query) || desc.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// 5. Shopping Cart
function initCart() {
    const cartTrigger = document.getElementById('cartTrigger');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutZaloBtn = document.getElementById('zaloOrderBtn');
    
    // Full Cart View Elements
    const viewFullCartBtn = document.getElementById('viewFullCartBtn');
    const fullCartPage = document.getElementById('fullCartPage');
    const fullCartClose = document.getElementById('fullCartClose');
    const fullCartCheckoutBtn = document.getElementById('fullCartCheckoutBtn');
    const cartEmptyBuyNow = document.getElementById('cartEmptyBuyNow');

    const toggleSidebar = () => {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('open');
        document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
    };

    const openFullCart = () => {
        fullCartPage.classList.add('active');
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'hidden';
        renderCart();
    };

    const closeFullCart = () => {
        fullCartPage.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (cartTrigger) cartTrigger.addEventListener('click', toggleSidebar);
    if (cartClose) cartClose.addEventListener('click', toggleSidebar);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleSidebar);
    if (viewFullCartBtn) viewFullCartBtn.addEventListener('click', openFullCart);
    if (fullCartClose) fullCartClose.addEventListener('click', closeFullCart);
    if (cartEmptyBuyNow) cartEmptyBuyNow.addEventListener('click', () => {
        toggleSidebar();
    });

    const handleZaloOrder = () => {
        if (cart.length === 0) {
            showNotification('Giỏ hàng của bạn đang trống!', 'error');
            return;
        }

        let message = 'Xin chào Bảo Hộ Thành Phong, tôi muốn đặt các sản phẩm sau:\n\n';
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.title} (SL: ${item.qty})\n`;
        });
        message += '\nTổng cộng: Liên hệ báo giá\n\nVui lòng tư vấn cho tôi!';

        const encodedMsg = encodeURIComponent(message);
        const zaloUrl = `https://zalo.me/0349781300?text=${encodedMsg}`;
        window.open(zaloUrl, '_blank');
    };

    if (checkoutZaloBtn) checkoutZaloBtn.addEventListener('click', handleZaloOrder);
    if (fullCartCheckoutBtn) fullCartCheckoutBtn.addEventListener('click', handleZaloOrder);

    // Select All Logic for Full Cart
    const selectAllHeader = document.getElementById('selectAllItems');
    const selectAllFooter = document.getElementById('selectAllItemsFooter');
    
    if (selectAllHeader) {
        selectAllHeader.addEventListener('change', (e) => {
            const checked = e.target.checked;
            if (selectAllFooter) selectAllFooter.checked = checked;
            document.querySelectorAll('.cart-item-check').forEach(cb => cb.checked = checked);
        });
    }

    renderCart();
}

window.handleAddToCart = (id) => {
    const product = productData[id];
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: id,
            title: product.title,
            img: product.imgs[0],
            qty: 1
        });
    }

    saveCart();
    renderCart();
    updateCartBadge();
    
    // Open sidebar automatically
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartSidebar && !cartSidebar.classList.contains('open')) {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
    }
    
    showNotification(`Đã thêm "${product.title}" vào giỏ hàng!`);
};

function saveCart() {
    localStorage.setItem('tp_cart', JSON.stringify(cart));
}

function renderCart() {
    // 1. Render Sidebar
    const sidebarList = document.getElementById('cartItems');
    const sidebarTotal = document.getElementById('cartTotal');
    
    if (sidebarList) {
        if (cart.length === 0) {
            sidebarList.innerHTML = `
                <div class="cart-empty-state">
                    <div class="empty-icon-box"><i class="fas fa-shopping-basket"></i></div>
                    <p>Giỏ hàng của bạn đang trống</p>
                    <a href="#products" class="btn btn-cart-buy-now" onclick="document.getElementById('cartClose').click()">Mua ngay</a>
                </div>
            `;
        } else {
            sidebarList.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.img}" class="cart-item-img" alt="${item.title}">
                    <div class="cart-item-info">
                        <h4>${item.title}</h4>
                        <p class="cart-item-price">Liên hệ báo giá</p>
                        <div class="cart-item-qty">
                            <div class="qty-btn" onclick="updateQty('${item.id}', -1)">-</div>
                            <span>${item.qty}</span>
                            <div class="qty-btn" onclick="updateQty('${item.id}', 1)">+</div>
                            <i class="fas fa-trash-alt" style="margin-left: auto; color: var(--danger); cursor: pointer;" onclick="removeFromCart('${item.id}')"></i>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // 2. Render Full Cart
    const fullCartList = document.getElementById('fullCartItems');
    const fullCartTotal = document.getElementById('fullCartTotal');
    
    if (fullCartList) {
        if (cart.length === 0) {
            fullCartList.innerHTML = `
                <div class="cart-empty-state" style="background: #fff; border-radius: 8px; margin-top: 20px;">
                    <div class="empty-icon-box"><i class="fas fa-shopping-basket"></i></div>
                    <p>Giỏ hàng của bạn đang trống. Hãy quay lại chọn sản phẩm nhé!</p>
                    <button class="btn btn-primary" onclick="document.getElementById('fullCartClose').click()">Tiếp tục mua sắm</button>
                </div>
            `;
        } else {
            fullCartList.innerHTML = cart.map(item => `
                <div class="cart-item-row">
                    <div class="check-col"><input type="checkbox" class="cart-item-check" checked></div>
                    <div class="prod-col">
                        <div class="cart-item-product">
                            <img src="${item.img}" alt="${item.title}">
                            <div class="cart-item-name">
                                <h4>${item.title}</h4>
                                <p>Phân loại: Sản phẩm bảo hộ</p>
                            </div>
                        </div>
                    </div>
                    <div class="price-col">Liên hệ</div>
                    <div class="qty-col">
                        <div class="quantity-control" style="margin: 0;">
                            <button onclick="updateQty('${item.id}', -1)">-</button>
                            <input type="text" value="${item.qty}" readonly>
                            <button onclick="updateQty('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <div class="total-col cart-item-subtotal">Báo giá</div>
                    <div class="action-col">
                        <span class="cart-item-action" onclick="removeFromCart('${item.id}')">Xóa</span>
                    </div>
                </div>
            `).join('');
        }
    }
}

window.updateQty = (id, amt) => {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += amt;
        if (item.qty < 1) {
            removeFromCart(id);
        } else {
            saveCart();
            renderCart();
            updateCartBadge();
        }
    }
};

window.removeFromCart = (id) => {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    updateCartBadge();
};

function updateCartBadge() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    const count = cart.reduce((total, item) => total + item.qty, 0);
    badge.innerText = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
}

// 6. Language Switcher
function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;
    
    const btns = langToggle.querySelectorAll('.lang-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            currentLang = lang;
            localStorage.setItem('tp_lang', lang);
            
            btns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
            applyTranslations();
        });
    });

    applyTranslations();
}

function applyTranslations() {
    const dict = translations[currentLang];
    
    // Navbar links
    const navItems = ['home', 'about', 'products', 'why', 'testimonials', 'news', 'contact'];
    navItems.forEach(item => {
        const el = document.getElementById(`trans-nav-${item}`);
        if (el) el.innerText = dict[`nav-${item}`];
    });
    
    // Hero
    const heroBadge = document.getElementById('trans-hero-badge');
    if (heroBadge) heroBadge.innerHTML = `<i class="fas fa-shield-alt"></i> ${dict['hero-badge']}`;
    
    const heroTitle1 = document.getElementById('trans-hero-title-1');
    if (heroTitle1) heroTitle1.innerHTML = dict['hero-title-1'];
    
    const heroSlogan = document.getElementById('trans-hero-slogan');
    if (heroSlogan) heroSlogan.innerText = dict['hero-slogan'];
    
    const heroDesc1 = document.getElementById('trans-hero-desc-1');
    if (heroDesc1) heroDesc1.innerText = dict['hero-desc-1'];
    
    const btnExplore = document.getElementById('trans-btn-explore');
    if (btnExplore) btnExplore.innerHTML = `${dict['btn-explore']} <i class="fas fa-arrow-right"></i>`;
    
    const btnContact = document.getElementById('trans-btn-contact');
    if (btnContact) btnContact.innerText = dict['btn-contact'];
    
    // Cart
    const cartTitle = document.querySelector('.cart-header h3');
    if (cartTitle) cartTitle.innerText = dict['cart-title'];
    
    const checkoutBtn = document.getElementById('checkoutZalo');
    if (checkoutBtn) checkoutBtn.innerHTML = `<i class="fab fa-whatsapp"></i> ${dict['cart-checkout']}`;
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = dict['search-placeholder'];

    // Update repeating elements
    document.querySelectorAll('.trans-view-detail').forEach(el => el.innerText = dict['view-detail']);
    document.querySelectorAll('.trans-contact-price').forEach(el => el.innerText = dict['contact-price']);

    // Section Titles
    const sections = ['products', 'why', 'testimonials', 'diary', 'news', 'contact'];
    sections.forEach(s => {
        const el = document.getElementById(`trans-${s}-title`);
        if (el) el.innerHTML = dict[`${s}-title`];
    });
    
    renderCart(); // Re-render cart for empty message translation
}

// 7. Stats Counter
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    if (!statNumbers.length) return;

    let hasAnimated = false;
    const animateCounters = () => {
        if (hasAnimated) return;
        const trigger = document.querySelector('.partners-marquee');
        if (!trigger) return;

        const rect = trigger.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            hasAnimated = true;
            statNumbers.forEach(el => {
                const target = parseInt(el.dataset.count);
                let current = 0;
                const step = target / 100;
                const counter = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        el.innerText = target;
                        clearInterval(counter);
                    } else {
                        el.innerText = Math.floor(current);
                    }
                }, 20);
            });
        }
    };
    window.addEventListener('scroll', animateCounters);
}

// 8. Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// 10. Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.onsubmit = (e) => {
        e.preventDefault();
        showNotification('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.', 'success');
        form.reset();
    };
}

// 11. Lightbox
let currentProductId = null;
let currentImageIndex = 0;

function initProductGalleryLightbox() {
    const lightbox = document.getElementById('productLightbox');
    const mainImg = document.getElementById('lightboxMainImg');
    const thumbnails = document.getElementById('lightboxThumbs');
    const closeBtn = lightbox?.querySelector('.lightbox-close');
    const overlay = lightbox?.querySelector('.lightbox-overlay');
    const prevBtn = lightbox?.querySelector('.prev-btn');
    const nextBtn = lightbox?.querySelector('.next-btn');
    const addToCartBtn = document.getElementById('lt-add-to-cart');

    if (!lightbox) return;

    document.querySelectorAll('.product-gallery-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const id = trigger.dataset.albumId;
            const product = productData[id];
            if (!product) return;

            currentProductId = id;
            currentImageIndex = 0;

            document.getElementById('lt-title').innerText = product.title;
            document.getElementById('lt-price').innerText = product.price || 'Liên hệ báo giá';
            document.getElementById('lt-desc').innerText = product.desc || 'Chất lượng cao, đạt chuẩn an toàn. Liên hệ để biết thêm chi tiết.';

            updateLightboxContent();
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    const close = () => {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', close);
    overlay?.addEventListener('click', close);

    prevBtn?.addEventListener('click', () => {
        const product = productData[currentProductId];
        currentImageIndex = (currentImageIndex - 1 + product.imgs.length) % product.imgs.length;
        updateLightboxContent();
    });

    nextBtn?.addEventListener('click', () => {
        const product = productData[currentProductId];
        currentImageIndex = (currentImageIndex + 1) % product.imgs.length;
        updateLightboxContent();
    });

    addToCartBtn?.addEventListener('click', () => {
        if (currentProductId) {
            handleAddToCart(currentProductId);
        }
    });
}

function updateLightboxContent() {
    const product = productData[currentProductId];
    const mainImg = document.getElementById('lightboxMainImg');
    const thumbnails = document.getElementById('lightboxThumbs');

    if (mainImg) mainImg.src = product.imgs[currentImageIndex];

    if (thumbnails) {
        thumbnails.innerHTML = product.imgs.map((img, idx) => `
            <div class="thumb-item ${idx === currentImageIndex ? 'active' : ''}" onclick="setLightboxImage(${idx})">
                <img src="${img}">
            </div>
        `).join('');
    }
}

window.setLightboxImage = (idx) => {
    currentImageIndex = idx;
    updateLightboxContent();
};

window.changeQty = (amt) => {
    const qtyInput = document.getElementById('lt-qty');
    if (qtyInput) {
        let val = parseInt(qtyInput.value) + amt;
        if (val < 1) val = 1;
        qtyInput.value = val;
    }
};

// Notification
function showNotification(msg, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${msg}</span>
    `;
    Object.assign(toast.style, {
        position: 'fixed', top: '30px', right: '30px', padding: '15px 25px',
        borderRadius: '10px', background: type === 'success' ? '#10B981' : '#EF4444',
        color: 'white', zIndex: '10001', display: 'flex', alignItems: 'center',
        gap: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        animation: 'slideIn 0.4s ease forwards'
    });
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Keyframes for toast
if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.innerHTML = `
        @keyframes slideIn { from { transform: translateX(120%); } to { transform: translateX(0); } }
        @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(120%); } }
    `;
    document.head.appendChild(style);
}

// Announcement Bar
(function initAnnouncementBar() {
    const annBar = document.getElementById('announcementBar');
    const annClose = document.getElementById('annClose');
    if (!annBar) return;

    document.body.classList.add('has-ann-bar');

    if (annClose) {
        annClose.addEventListener('click', () => {
            annBar.style.transition = 'height 0.35s ease, opacity 0.35s ease';
            annBar.style.opacity = '0';
            annBar.style.height = '0';
            document.body.classList.remove('has-ann-bar');
            const navbar = document.getElementById('navbar');
            if (navbar) navbar.style.top = '0';
            setTimeout(() => annBar.remove(), 380);
        });
    }

    const navbar = document.getElementById('navbar');
    if (navbar) navbar.style.top = '40px';

    window.addEventListener('scroll', () => {
        if (!navbar || !annBar) return;
        navbar.style.top = window.pageYOffset > 10 ? '0' : (annBar.offsetHeight || 0) + 'px';
    }, { passive: true });
})();

// Preloader Removal on window load
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }
}

window.addEventListener('load', hidePreloader);

// Safety timeout: Hide preloader after 3 seconds regardless of load state
setTimeout(hidePreloader, 3000);


// Helper: Shuffle homepage hero slides (ảnh bìa banner)
function shuffleHomepageBanners() {
    const swiperWrapper = document.querySelector('.hero-slider .swiper-wrapper');
    if (!swiperWrapper) return;
    const slides = Array.from(swiperWrapper.children);
    
    // Fisher-Yates Shuffle
    for (let i = slides.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [slides[i], slides[j]] = [slides[j], slides[i]];
    }
    
    swiperWrapper.innerHTML = '';
    slides.forEach(slide => swiperWrapper.appendChild(slide));
}

// Helper: Shuffle homepage product cards (các ảnh bìa danh mục)
// Render homepage category cards dynamically and shuffle them
function renderHomepageProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid || typeof products === 'undefined' || typeof catBiaImages === 'undefined') return;
    
    // Shuffle category keys
    const catKeys = Object.keys(catBiaImages);
    for (let i = catKeys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [catKeys[i], catKeys[j]] = [catKeys[j], catKeys[i]];
    }
    
    // Map to HTML
    grid.innerHTML = catKeys.map((catId, index) => {
        const catProducts = products.filter(p => p.cat === catId);
        const catLabel = catProducts.length > 0 ? catProducts[0].catLabel : catId;
        const count = catProducts.length;
        const biaImg = catBiaImages[catId];
        const safeLabel = catLabel.replace(/"/g, '&quot;');
        const delay = index * 50;
        
        return '<div class="product-card" data-aos="fade-up" data-aos-delay="' + delay + '" onclick="window.location.href=\'sanpham.html?cat=' + catId + '\'">' +
            '<div class="product-image">' +
            '<a href="sanpham.html?cat=' + catId + '">' +
            '<img src="' + biaImg + '" alt="' + safeLabel + '" loading="lazy" onerror="this.parentElement.style.background=\'#f1f5f9\'">' +
            '<div class="zoom-overlay">' +
            '<i class="fas fa-search-plus"></i>' +
            '<span class="trans-view-detail">Xem chi tiết</span>' +
            '</div>' +
            '</a>' +
            '</div>' +
            '<div class="product-info">' +
            '<span class="product-category-tag">' + count + ' sản phẩm</span>' +
            '<h3 class="product-title">' + catLabel + '</h3>' +
            '<p class="product-desc">Cung cấp trang thiết bị bảo hộ đạt chuẩn, chất lượng cao.</p>' +
            '<div class="product-action-row">' +
            '<a href="sanpham.html?cat=' + catId + '" class="product-link">' +
            '<span class="trans-contact-price">Xem chi tiết</span> ' +
            '<i class="fas fa-arrow-right"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}
