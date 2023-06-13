let isLogin       = JSON.parse(localStorage.getItem("isLogin"));
const btnLogin    = document.querySelector('.btn-login')
const btnLogout   = document.querySelector('.btn-logout')
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
        img : "images_hoachiabuon/tangle_ke-2-tang-mau-trang-sang-trong.jpg" ,
        title : "Đặt Hoa Tang Lễ Kệ 2 Tầng Màu Trắng Xanh Sạng Trọng" ,
        price : "1.499.000đ"
    } ,
    {
        id : 1 ,
        img : "images_hoachiabuon/vong-hoa-vieng-dt-nen-chon-hoa-gi.webp" ,
        title : "Vòng Hoa Kính Viếng Màu Đen Sang Trọng Giá Rẻ" ,
        price : "1.000.000đ"
    } ,
    {
        id : 2 ,
        img : "images_hoachiabuon/chiabuon_dep-sang-trong-mau-trang.jpg" ,
        title : "Hoa Chia Buồn Đẹp Sang Trọng Màu Trắng" ,
        price : "3.499.000đ"
    } ,
    {
        id : 3 ,
        img : "images_hoachiabuon/hoa-cuc-trang-damtang.jpg" ,
        title : "Hoa Cúc Trắng Đám Tang Đẹp Sang Trọng" ,
        price : "1.500.000đ"
    } ,
    {
        id : 4 ,
        img : "images_hoachiabuon/hoa-damtang-gia-re-2-tang.jpg" ,
        title : "Hoa Đám Tang Giá Rẻ Tại Đà Nẵng, Mẫu Kệ 2 Tầng" ,
        price : "1.500.000đ"
    } ,
    {
        id : 5 ,
        img : "images_hoachiabuon/damtang_hoa-lyly-lan-chu-dao.jpg" ,
        title : "Hoa Đám Tang Đẹp Độc Đáo Hoa Lyly, Hoa Lan Chủ Đạo" ,
        price : "3.000.000đ"
    } ,
    {
        id : 6 ,
        img : "images_hoachiabuon/dam-tang-lan-ho-diep-trang.jpg" ,
        title : "Hoa Đám Tang Lan Hồ Điệp Trắng CHủ Đạo Sang Trọng" ,
        price : "4.000.000đ"
    } ,
    {
        id : 7 ,
        img : "images_hoachiabuon/tang-le-dep-mau-hien-dai-dang-trong.webp" ,
        title : "Hoa Tang Lễ Đẹp MẪu Hiện Đại Sang Trọng Ý Nghĩa" ,
        price : "2.899.000đ"
    } ,
    {
        id : 8 ,
        img : "images_hoachiabuon/hoa-tang-le-dep-moi-la-doc-dao.jpg" ,
        title : "Hoa Tang Lễ Đẹp Mới Lạ Độc Đáo - Sản Phẩm Rẻ Đẹp" ,
        price : "999.000đ"
    } ,
    {
        id : 9 ,
        img : "images_hoachiabuon/hoa-viem-dep-mau-trang-diem-lan-hd-tim.jpg" ,
        title : "Hoa Viếng Đám Tang Đẹp Màu Trắng Điểm Lan Hồ Điệp Tím" ,
        price : "1.5599.000đ"
    } ,
    {
        id : 10 ,
        img : "images_hoachiabuon/hoa-vieng-dep-sangtrong-tim-trang.jpg" ,
        title : "Hoa Viếng Đẹp Sang Trọng Màu Tím Trắng" ,
        price : "3.499.000đ"
    } ,
    {
        id : 11 ,
        img : "images_hoachiabuon/hoa-vieng-tang-re-chia-buon.jpg" ,
        title : "Hoa Viếng Đám Tang Giá Rẻ, Hoa Chia Buồn Kệ 2 Tầng" ,
        price : "1.000.000đ"
    } ,
    {
        id : 12 ,
        img : "images_hoachiabuon/ke-hoa-dt-sang-trong-cao-cap.webp" ,
        title : "Kệ Hoa Đám Tang Sang Trọng Cao Cấp: Hoa Nhập Khẩu Chủ Đạo" ,
        price : "4.990.000đ"
    } ,
    {
        id : 13 ,
        img : "images_hoachiabuon/mau-hoa-dam-tang-dep-hien-dai.jpg" ,
        title : "Mẫu Hoa Đám Tang Đẹp Sang Trọng Hiện Đại" ,
        price : "3.000.000đ"
    } ,
    {
        id : 14 ,
        img : "images_hoachiabuon/mau-hoa-dam-tang-hoang-trang.jpg" ,
        title : "Mẫu Hoa Đám Tang Sang Trọng Hiện Đại Và Hoành Tráng" ,
        price : "2.700.000đ"
    } ,
    {
        id : 15 ,
        img : "images_hoachiabuon/vong-hoa-dam-tang-dep-mau-trang.jpg" ,
        title : "Vòng Hoa Đám Tang Đẹp Màu Trắng Điềm Tím" ,
        price : "1.990.000đ"
    } ,
]



//render Product layout
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
  
                                          <div class="mt-3">
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
      document.querySelector('.cart-body').innerHTML += htmlProductInCart;
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
      document.querySelector('.cart-body').innerHTML += htmlProductInCart;
    })
  }