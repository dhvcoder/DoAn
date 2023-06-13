
//Login
let emailLogin = document.querySelectorAll('.email-login');
let passwordLogin = document.querySelectorAll('.password-login');
let btnLogin = document.querySelectorAll('.btn-login');


btnLogin[0].addEventListener('click', function (event) {
  let list = JSON.parse(localStorage.getItem("listAccount"));

  list.forEach((value) => {
    if (value.email === emailLogin[0].value && value.password === passwordLogin[0].value) {
      location.href = "../trangchu.html";
      localStorage.setItem("isLogin", true);
    }else if (value.email === emailLogin.value && value.password === passwordLogin.value) {
       alert("Sai tai khoan") 
    }
  })
});



// function checkLogin() {
//   console.log(listAccountLogin)
//   // listAccountLogin.forEach((value) => {
//   //   if (value.account === account[0].value && value.password === password[0].value) {
//   //     location.href = "./demo.html";
//   //   }
//   // })
// }