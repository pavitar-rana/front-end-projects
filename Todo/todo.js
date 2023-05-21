document.querySelector("form").addEventListener("submit", function todo(e) {
  e.preventDefault();
  var inputName = document.querySelector("#name").value;
  var inputqty = document.querySelector("#qty").value;
  var inputpriority = document.querySelector("#priority").value;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  td1.innerText = inputName;
  td2.innerText = inputqty;
  td3.innerText = inputpriority;
  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
});
