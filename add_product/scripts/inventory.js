function aproduct() {
  window.location = "index.html";
}
var parent = document.getElementById("products_data");
if (localStorage.getItem("product") === null) {
  alert("No Product available");
} else {
  var hello = JSON.parse(localStorage.getItem("product"));

  hello.forEach((it) => {
    var div = document.createElement("div");
    div.setAttribute("class", "inner");
    var img = document.createElement("img");
    img.src = it.image;
    var name1 = document.createElement("h2");
    name1.innerText = it.name;
    var brand = document.createElement("p");
    brand.innerText = it.brand;
    var price = document.createElement("p");
    price.innerText = it.price;
    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.onclick = function () {
      remove(it);
    };
    // btn.setAttribute("onclick", "removeDiv(this)");
    div.append(img, name1, brand, price, btn);
    parent.append(div);
  });
}
let arr = [];
function remove(p) {
  var index = hello.findIndex(
    (product) =>
      product.name === p.name &&
      product.brand === p.brand &&
      product.price === p.priceIs
  );
  if (index > -1) {
    hello.splice(index, 1); // Remove the product from the array

    // Remove the corresponding product div from the DOM
    var productDivs = document.getElementsByClassName("inner");
    productDivs[index].remove();
  }
  localStorage.setItem("product", JSON.stringify(hello));
}
console.log(arr);
function removeDiv(button) {
  var divToRemove = button.parentNode;
  divToRemove.parentNode.removeChild(divToRemove);
}
