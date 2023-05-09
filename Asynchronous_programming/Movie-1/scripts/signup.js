function signup(e) {
  e.preventDefault();

  let signupform = document.getElementById("signform");
  let name = signupform.name.value;
  let contact = signupform.phone.value;
  let email = signupform.email.value;
  let password = signupform.password.value;
  let obj = {
    name,
    contact,
    email,
    password,
  };
  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([]));
  }
  let arr = JSON.parse(localStorage.getItem("users"));
  arr.push(obj);
  localStorage.setItem("users", JSON.stringify(arr));
  document.getElementById("subbtn").disable = true;
}
function red(url){
  window.location = url;
}