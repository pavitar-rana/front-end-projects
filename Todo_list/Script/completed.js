var parent = document.getElementById("body");
var arr = JSON.parse(localStorage.getItem("completed"));
arr.forEach((t) => {
  let task = t.task;
  let qty = t.qty;
  let priority = t.priority;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  //   const td4 = document.createElement("td");
  //   td4.textContent = "Completed";
  td1.textContent = task;
  td2.textContent = qty;
  td3.textContent = priority;
  tr.append(td1, td2, td3);
  parent.append(tr);
});
