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
    id: 0,
    img: "images_hoabo/bo-hoa-cuc-mau-don-hong.jpg",
    title: "Bó Hoa Cúc Mẫu Đơn Hồng Nhạt Đẹp Lãng Mạng",
    price: "1.200.000đ",
    color: "Hồng" ,
    describe: "Bó Hoa Cúc Mẫu Đơn Hồng Nhạt Đẹp Lãng Mạng"
  },
  ,
  {
    id: 1,
    img: "images_hoabo/bo-hoa-cuc-nau-mix-hong-trang.webp",
    title: "Bó Hoa Cúc Mẫu Đơn Mix Với Hoa Hồng Đỏ Và Trắng",
    price: "1.500.000đ",
    color: "Trắng",
    describe: "Bó Hoa Cúc Mẫu Đơn Mix Với Hoa Hồng Đỏ Và Trắng"
  },
  {
    id: 2,
    img: "images_hoabo/bo-hoa-cuc-xanh-duong.jpg",
    title: "Bó Hoa Cúc Mẫu Đơn Xanh Dương Đẹp Sang Trọng",
    price: "2.200.000đ",
    color: "Xanh",
    describe: "Bó Hoa Cúc Mẫu Đơn Xanh Dương Đẹp Sang Trọng"
  },
  {
    id: 3,
    img: "images_hoabo/99-bong-hong-do.webp",
    title: "Bó Hoa 99 Bông Hồng Đỏ Mix Cúc Trắng Siêu Đẹp",
    price: "3.000.000đ",
    color: "Đỏ",
    describe: "Bó Hoa 99 Bông Hồng Đỏ Mix Cúc Trắng Siêu Đẹp"

  },
  {
    id: 4,
    img: "images_hoabo/bo-hoa-socola-dautay-hoababy-nhapkhau.jpg",
    title: "Bó Hoa Socola, Dâu Tây, Hoa Baby Nhập Khẩu Khổng Lồ",
    price: "4.000.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Socola, Dâu Tây, Hoa Baby Nhập Khẩu Khổng Lồ"

  },
  {
    id: 5,
    img: "images_hoabo/bo-hoa-trai-cherry-nhap-khau.jpg",
    title: "Bó Hoa Trái Cherry Nhập Khẩu 99 Trái Tặng Bạn Gái",
    price: "2.500.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Trái Cherry Nhập Khẩu 99 Trái Tặng Bạn Gái"

  },
  {
    id: 6,
    img: "images_hoabo/combo-hop-dau-tay-va-hoa-baby.jpg",
    title: "Combo Hộp Dâu Tây Trái Tim Và Bó Hoa Baby Tím",
    price: "950.000đ",
    color: "Đỏ",
    describe: "Combo Hộp Dâu Tây Trái Tim Và Bó Hoa Baby Tím"

  },
  {
    id: 7,
    img: "images_hoabo/hoa-dau-tay-khac-ten-nguoi-yeu.webp",
    title: "Hoa Dâu Tây Xếp Thành Tên Người Yêu Gây Ấn Tượng",
    price: "2.000.000đ",
    color: "Đỏ",
    describe: "Hoa Dâu Tây Xếp Thành Tên Người Yêu Gây Ấn Tượng"

  },
  {
    id: 8,
    img: "images_hoabo/baby-hong-co-gai.jpg",
    title: "Bình Hoa Baby Hồng Cô Gái Độc Đáo[Hoa Sinh Nhật Hoa Baby]",
    price: "4.000.000đ",
    color: "Đỏ",
    describe: "Bình Hoa Baby Hồng Cô Gái Độc Đáo[Hoa Sinh Nhật Hoa Baby]"

  },
  {
    id: 9,
    img: "images_hoabo/baby-gia-re.webp",
    title: "Bó Hoa Baby Hồng Giá Rẻ[Hoa Nhập Khẩu Hà Lan]",
    price: "600.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Baby Hồng Giá Rẻ[Hoa Nhập Khẩu Hà Lan]"

  },
  {
    id: 10,
    img: "images_hoabo/bo_hoa_bi_trang.jpg.webp",
    title: "Bó Hoa Bi Trắng Dẹp Giá Rẻ-Kiểu Bó Tròn-Hoa Nhập Khẩu",
    price: "700.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Bi Trắng Dẹp Giá Rẻ-Kiểu Bó Tròn-Hoa Nhập Khẩu"

  },
  {
    id: 11,
    img: "images_hoabo/bi-dep-hoa-baby-tim.webp",
    title: "Bó Hoa Bi - Hoa Baby Tím Lãng Mạn Thủy Chung",
    price: "4.990.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Bi - Hoa Baby Tím Lãng Mạn Thủy Chung"

  },
  {
    id: 12,
    img: "images_hoabo/bo-hoa-cuc-mau-don-nau-socola.jpg",
    title: "Bó Hoa Cúc Mẫu Đơn Nâu Sô-Cô-La Đẹp Nhất",
    price: "1.600.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Cúc Mẫu Đơn Nâu Sô-Cô-La Đẹp Nhất"

  },
  {
    id: 13,
    img: "images_hoabo/bo-hoa-chuc-mung-sinh-nhat-ohara.webp",
    title: "Bó Hoa Đẹp Chúc Mừng Sinh Nhật Hoa Hồng Ohara",
    price: "1.000.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Đẹp Chúc Mừng Sinh Nhật Hoa Hồng Ohara"

  },
  {
    id: 14,
    img: "images_hoabo/hoa-hong-bo-dep-an-tuong-kho-quen.webp",
    title: "Bó Hoa Hồng Đẹp Ấn Tượng Khó Quên Tặng Sinh Nhật Mẹ",
    price: "2.000.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Hồng Đẹp Ấn Tượng Khó Quên Tặng Sinh Nhật Mẹ"

  },
  {
    id: 15,
    img: "images_hoabo/bo_hoa_hong_vang_khong_lo.jpg.webp",
    title: "Bó Hoa Hồng Vàng Khổng Lồ Đẹp Rực Rỡ[Hoa Bó Dài]",
    price: "2.500.000đ",
    color: "Đỏ",
    describe: "Bó Hoa Hồng Vàng Khổng Lồ Đẹp Rực Rỡ[Hoa Bó Dài]"

  },
  
]

//render Product layout
listProduct.forEach((value) => {
  let htmlProduct = `<div class="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4" >
                        <a href="##">
                            <img class="w-100 h-auto"
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
  document.querySelector('.list-product').innerHTML += htmlProduct
})

//thong tin chi tiet san pham
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

                                        <div>
                                            <span>MÔ TẢ</span>
                                            <hr>
                                            <span>
                                                <h5>${value.describe}</h5>
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
// Hàm chung để tạo các sự kiện nhấp chuột cho các phần tử HTML
// function createViewProductEvents(loginBtnClass, loginClass, closeClass, loginCtnClass) {
//   // Lựa chọn các phần tử HTML theo lớp CSS
//   const loginbtn = document.querySelector(loginBtnClass)
//   const login = document.querySelector(loginClass)
//   const close = document.querySelector(closeClass)
//   const loginctn = document.querySelector(loginCtnClass)

//   // Hàm để hiển thị phần tử login
//   function showViewProduct() {
//     login.classList.add('open')
//   }

//   // Hàm để ẩn phần tử login
//   function outViewProduct() {
//     login.classList.remove('open')
//   }


//   // Thêm các sự kiện nhấp chuột cho các phần tử HTML
//   loginbtn.addEventListener('click', showViewProduct)
//   close.addEventListener('click', outViewProduct)
//   login.addEventListener('click', outViewProduct)
//   loginctn.addEventListener('click', function (event) {
//     event.stopPropagation()
//   })
// }

// // Sử dụng hàm chung cho các div HTML khác nhau
// createViewProductEvents('.js-view_product-btn', '.view_product', '.js-view_product-close', '.js-view_product-container')