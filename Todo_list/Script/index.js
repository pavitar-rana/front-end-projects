document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let task = document.getElementById("name").value;
  let qty = document.getElementById("qty").value;
  let priority = document.getElementById("priority").value;
  if (localStorage.getItem("todo") === null) {
    localStorage.setItem("todo", JSON.stringify([]));
  }
  var obj = {
    task,
    qty,
    priority, 
  };

  let arr = JSON.parse(localStorage.getItem("todo"));
  arr.push(obj);
  localStorage.setItem("todo", JSON.stringify(arr));
});
