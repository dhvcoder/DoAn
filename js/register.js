//Register
let emailRegister = document.querySelectorAll('.email-register');
let passwordRegister = document.querySelectorAll('.password-register');
let phoneRegister = document.querySelectorAll('.phone-register');
let btnRegister = document.querySelectorAll('.btn-register');

btnRegister[0].addEventListener('click', function (event) {
  if (emailRegister[0].value && passwordRegister[0].value) {
    let listAccountLogin = JSON.parse(localStorage.getItem("listAccount"));

    if (listAccountLogin) {
      listAccountLogin.push({
        email: emailRegister[0].value,
        phone: phoneRegister[0].value,
        password: passwordRegister[0].value
      })
    } else {
      listAccountLogin = [
        {
          email: emailRegister[0].value,
          phone: phoneRegister[0].value,
          password: passwordRegister[0].value
        }
      ]
    }

    localStorage.setItem("listAccount", JSON.stringify(listAccountLogin));
    location.href = "../dangnhap.html";
  }
});