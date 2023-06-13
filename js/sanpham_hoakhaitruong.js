//hide btn-login
let isLogin = JSON.parse(localStorage.getItem("isLogin"));
const btnLogin = document.querySelector('.btn-login')
const btnLogout = document.querySelector('.btn-logout')
const btnRegister = document.querySelector('.btn-register')
const icCart = document.querySelector('.ic-cart')
if (isLogin) {
  btnLogin.classList.add('hidden')
  btnRegister.classList.add('hidden')
} else {
  icCart.classList.add('hidden')
  btnLogout.classList.add('hidden')
}
function handleLogout() {
  localStorage.setItem("isLogin", false);
}
let listProduct = [
    {
        id : 0 ,
        img: "images_khaitruong/sang-trong-mau-to-khong-lo.jpg" ,
        title: "Hoa Khai Trương Sang Trọng Mẫu To Khổng Lồ",
        price : "2.499.000đ" ,
        describe: "Hoa Khai Trương Sang Trọng Mẫu To Khổng Lồ" ,
        
    },
    {
        id : 1 ,
        img: "images_khaitruong/khaitruong_do-ke-2-tang.jpg" ,
        title: "Hoa Khai Trương Màu Đỏ May Mắn Phát Tài",
        price : "1.500.000đ",
        describe: "Hoa Khai Trương Màu Đỏ May Mắn Phát Tài" ,
      
    },
    {
        id : 2 ,
        img: "images_khaitruong/DAT-HOA-CHUC-MUNG-KHAI-TRUONG-min.jpg.webp" ,
        title: "Đặt Hoa Mừng Khai Trương Màu Xanh Dương",
        price : "2.000.000đ",
        describe: "Đặt Hoa Mừng Khai Trương Màu Xanh Dương",
    },
    {
        id : 3 ,
        img: "images_khaitruong/HOA-TANG-KHAI-TRUONG-CUA-HANG-min.jpg.webp" ,
        title: "Hoa Tặng Khai Trương Cửa Hàng Sen Đá Tươi Lâu Độc Lạ",
        price : "3.500.000đ",
        describe: "Hoa Tặng Khai Trương Cửa Hàng Sen Đá Tươi Lâu Độc Lạ",
    },
    {
        id : 4 ,
        img: "images_khaitruong/khaitruong_cam-ruc-ro.webp" ,
        title: "Bình Hoa Mừng Khai Trương Màu Cam Rực Rỡ May Mắn",
        price : "4.500.000đ",
        describe: "Bình Hoa Mừng Khai Trương Màu Cam Rực Rỡ May Mắn",
    },
    {
        id : 5 ,
        img: "images_khaitruong/quan-cafe-hot-nhat-nam.webp" ,
        title: "Hoa Mừng Khai Trương Quán Cafe \"HOT\" Nhất Năm",
        price : "2.255.000đ",
        describe: "Hoa Mừng Khai Trương Quán Cafe \"HOT\" Nhất Năm",

    },
    {
        id : 6 ,
        img: "images_khaitruong/do-sieu-to-khonglo.webp" ,
        title: "Mua Hoa Hồng Đỏ Siêu To Khổng Lồ-Bình Hoa Hồng Cao Cấp",
        price : "9.000.000đ",
        describe: "Mua Hoa Hồng Đỏ Siêu To Khổng Lồ-Bình Hoa Hồng Cao Cấp",
    },
    {
        id : 7 ,
        img: "images_khaitruong/de-ban-hoa-hong-nhap-khau.jpg" ,
        title: "Lãng Hoa Chúc Mừng Khai Trương Để Bàn Hoa Hồng Nhập Khẩu",
        price : "2.500.000đ",
        describe: "Lãng Hoa Chúc Mừng Khai Trương Để Bàn Hoa Hồng Nhập Khẩu",
    },
    {
        id : 8 ,
        img: "images_khaitruong/khaitruong_hoa-hong-vang-chu-dao.jpg" ,
        title: "Bông Khai Trương Hoa Hồng Vàng Chủ Đạo",
        price : "1.800.000đ",
        describe: "Bông Khai Trương Hoa Hồng Vàng Chủ Đạo",
         
    },
    {
        id : 9 ,
        img: "images_khaitruong/khaitruong_chau-hoa-ho-diep-vang.webp" ,
        title: "Chậu Hoa Mừng Khai Trương-Hồ Điệp Vàng Mang Tài Lộc May Mắn",
        price : "5.500.000đ",
        describe: "Chậu Hoa Mừng Khai Trương-Hồ Điệp Vàng Mang Tài Lộc May Mắn",
         
    },
    {
        id : 10 ,
        img: "images_khaitruong/khong-lo-co-chan-dung.webp" ,
        title: "Mẫu Bó Hoa Mừng Khai trương Khổng Lồ Có Chân Đứng",
        price : "3.950.000đ",
        describe: "Mẫu Bó Hoa Mừng Khai trương Khổng Lồ Có Chân Đứng",
         
    },
    {
        id : 11 ,
        img: "images_khaitruong/chuc-mung-tat-nien-congty.jpg" ,
        title: "Hoa Chúc Mừng Tất Niên Công Ty, Hoa Tặng NĂm Mới",        
        price : "1.990.000đ",
        describe: "Hoa Chúc Mừng Tất Niên Công Ty, Hoa Tặng NĂm Mới",
         
    },
    {
        id : 12 ,
        img: "images_khaitruong/lan-ho-diep-dep-ben-lau.webp" ,
        title: "Mua Lan Hồ Điệp Ở Đâu Rẻ, Và Bền Lâu[Chậu Lan Hồ Điệp 60 Cây]",
        price : "4.000.000đ",
        describe: "Mua Lan Hồ Điệp Ở Đâu Rẻ, Và Bền Lâu[Chậu Lan Hồ Điệp 60 Cây]",
         
    },
    {
        id : 13 ,
        img: "images_khaitruong/top5-shop-ban-hoa.webp" ,
        title: "Top 5 Shop Bán Hoa Mừng Khai Trương Đẹp Nhất Đà Thành",
        price : "600.000đ",
        describe: "Top 5 Shop Bán Hoa Mừng Khai Trương Đẹp Nhất Đà Thành",
         
    },
    {
        id : 14 ,
        img: "images_khaitruong/tieu-ho-diep.jpg.webp" ,
        title: "Tiểu Hồ Điệp Vàng-Bình Hoa Thỏi Vàng Thuận Buồm Xuông Gió",
        price : "700.000đ",
        describe: "Tiểu Hồ Điệp Vàng-Bình Hoa Thỏi Vàng Thuận Buồm Xuông Gió",
         
    },
    {
        id : 15 ,
        img: "images_khaitruong/chon-hoa-sn-cho-nam-gioi.webp" ,
        title: "Xu Hướng Chọn Hoa Sinh Nhật Cho Nam Giới Đẹp Và Ý Nghĩa",
        price : "4.990.000đ",
        describe: "Xu Hướng Chọn Hoa Sinh Nhật Cho Nam Giới Đẹp Và Ý Nghĩa",
         
    },
]
///render Product layout
listProduct.forEach((value) => {
    let htmlProduct = `<div class="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4" >
                      <a href="##">
                          <img class="w-100 h-auto js-view_product-btn"
                                                          data-bs-toggle="modal"
                                                          data-bs-target="#staticBackdrop"
                                                          onclick="viewDetail(${value.id})"
                               src="${value.img}"
                               alt="">
                      </a>
                      <a class="text-decoration-none"
                         href="">
                          <h5 class="mt-3 text-dark fw-bolder"
                              style="font-family: 'Dancing Script', cursive;">${value.title}
                          </h5>
                      </a>
                      <h6 class="text-danger fw-bold my-3">${value.price}</h6>
                      <button class="btn navbar-btn" onclick="addToCart(${value.id})">THÊM VÀO GIỎ HÀNG</button>
                  </div >
  `
    document.querySelector('.list-product').innerHTML = document.querySelector('.list-product').innerHTML + htmlProduct
  })

  function viewDetail(id) {
    listProduct.forEach((value) => {
      if (value.id == id) {
        document.querySelector('.view-detail-product').innerHTML = "";
        let HTMlProductView = `
                                  <div class="js-view_product-container">
                              <div class="row">
                                  <div class="col-sm-6 col-md-6">
                                      <img class="w-100"
                                           src="${value.img}"
                                           alt="cucgiay">
                                  </div>
  
                                  <div class="col-sm-12 col-md-6">
                                      <h3>${value.title}</h3>
                                      <span>${value.price}</span> <br>
                                      <span>Màu Sắc: ${value.color}</span> <br>
                                      <span>Từ khóa: Cúc mẫu đơn</span> <br> <br>
                                  </div>
                                  <div class="mt-3">
                                      <span>MÔ TẢ</span>
                                      <hr>
                                      <span>
                                          <h3>${value.describe}</h3>
                                          <ul>
                                              <li>Bó hoa cúc mẫu đơn màu hồng nhạt có một ưu điểm là màu nữ tính.</li>
                                              <li>Cúc mẫu đơn tặng sinh nhật bạn gái, chị gái, em gái hay con gái.
                                              </li>
                                              <li>Ngoài mẫu bó hoa dài, quý khách có thể lên bó tròn rất lãng mạn</li>
                                              <li>Hoa cúc mẫu đơn kết hợp với hoa hồng màu hồng</li>
                                          </ul>
                                      </span> <br> <br>
                                  </div>
                              </div>
                          </div>
        `
        document.querySelector('.view-detail-product').innerHTML = HTMlProductView;
      }
    })
  };

  //render Product cart
let listCart = JSON.parse(localStorage.getItem("listCart"));

if (listCart) {
  listCart.forEach((value) => {
    let htmlProductInCart = `
  <div class="box-product-cart">
                            <div class="img-product">
                                <img src="${value.img}"
                                     alt="">
                            </div>
                            <span class="title-product">
                                ${value.title}          
                            </span>
                            <span class="price-product">
                                ${value.price}
                            </span>
                            <i class="bi bi-trash3-fill ic-del-cart"
                               onclick="handleDeleteProductInCart(${value.id})"></i>
                        </div>`
    document.querySelector('.cart-body').innerHTML = document.querySelector('.cart-body').innerHTML + htmlProductInCart
  })
}
function addToCart(index) {
    // biến tạm
    let productChoice;
  
    let checkIsset = false;
    listProduct.forEach((value) => {
      if (value.id == index) {
        productChoice = value;
      }
    })
  
    if (listCart) {
      listCart.forEach((value) => {
        if (value.id == index) {
          checkIsset = true
        }
      })
      if (!checkIsset) {
        listCart.push(productChoice)
      }
    } else {
      listCart = [productChoice]
    }
  
    localStorage.setItem("listCart", JSON.stringify(listCart));
  
    //load lại dữ liệu cho cart
    document.querySelector('.cart-body').innerHTML = "";
    listCart.forEach((value) => {
      let htmlProductInCart = `
    <div class="box-product-cart">
                              <div class="img-product">
                                  <img src="${value.img}"
                                       alt="">
                              </div>
                              <span class="title-product">
                                  ${value.title}
                              </span>
                              <span class="price-product">
                                  1.200.000đ
                              </span>
                              <i class="bi bi-trash3-fill ic-del-cart"
                                 onclick="handleDeleteProductInCart(${value.id})"></i>
                          </div>`
      document.querySelector('.cart-body').innerHTML = document.querySelector('.cart-body').innerHTML + htmlProductInCart;
    })
  
  }

  function handleDeleteProductInCart(id) {
    listCart.forEach((value, index) => {
      if (value.id == id) {
        listCart.splice(index, 1)
      }
    });
    localStorage.setItem("listCart", JSON.stringify(listCart));
  
    document.querySelector('.cart-body').innerHTML = "";
    listCart.forEach((value) => {
      let htmlProductInCart = `
    <div class="box-product-cart">
                              <div class="img-product">
                                  <img src="${value.img}"
                                       alt="">
                              </div>
                              <span class="title-product">
                                  ${value.title}
                              </span>
                              <span class="price-product">
                                  1.200.000đ
                              </span>
                              <i class="bi bi-trash3-fill ic-del-cart"
                                 onclick="handleDeleteProductInCart(${value.id})"></i>
                          </div>`
      document.querySelector('.cart-body').innerHTML = document.querySelector('.cart-body').innerHTML + htmlProductInCart;
    })
  }
  
  