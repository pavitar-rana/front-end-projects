function login(e) {
  e.preventDefault();
  var all_users = JSON.parse(localStorage.getItem("users"));
  console.log(all_users);
  let loginform = document.getElementById("login");
  let email = loginform.email.value;
  let password = loginform.password.value;
  all_users.forEach(function (users) {
    if (email === users.email && password === users.password) {
      //   alert("login successful");
      window.location.href = "index.html";
    } else {
      alert("Invalid Credentials");
    }
  });
}
function red(url) {
  window.location = url;
}
// document
//   .getElementById("signupbtn")
//   .addEventListener("click", (window.location.href = "signup.html"));
// document
//   .getElementById("loginbtn")
//   .addEventListener("click", (window.location.href = "login.html"));
