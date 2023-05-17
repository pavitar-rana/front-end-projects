document.querySelector("form").addEventListener("submit", function bozaz(e) {
  e.preventDefault();
  let cat = document.getElementById("category").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  td1.textContent = cat;
  td2.textContent = name;
  td3.textContent = price;
  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
});