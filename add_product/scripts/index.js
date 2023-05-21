function sproduct() {
  window.location = "inventory.html";
}
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("product_name").value;
  var brand = document.getElementById("product_brand").value;
  var price = document.getElementById("product_price").value;
  var image = document.getElementById("product_image").value;

  if (localStorage.getItem("product") === null) {
    localStorage.setItem("product", JSON.stringify([]));
  }
  var arr = JSON.parse(localStorage.getItem("product"));
  let obj = {
    name,
    brand,
    price,
    image,
  };
  arr.push(obj);
  localStorage.setItem("product", JSON.stringify(arr));
});
