var parent = document.getElementById("body");
var arr = JSON.parse(localStorage.getItem("todo"));
arr.forEach(function (t) {
  let task = t.task;
  let qty = t.qty;
  let priority = t.priority;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  const td4 = document.createElement("td");
  td4.textContent = "Complete";

  td4.addEventListener("click", function () {
    completed(t);
  });

  td4.addEventListener("click", function () {
    removeDiv(td4);
  });

  td1.textContent = task;
  td2.textContent = qty;
  td3.textContent = priority;
  tr.append(td1, td2, td3, td4);
  parent.append(tr);
});

if (localStorage.getItem("completed") === null) {
  localStorage.setItem("completed", JSON.stringify([]));
}

function completed(t) {
  var jj = JSON.parse(localStorage.getItem("completed"));
  jj.push(t);
  localStorage.setItem("completed", JSON.stringify(jj));
}

function removeDiv(button) {
  var td4 = button; // The button element clicked
  var tr = td4.parentNode; // Get the parent table row (tr)
  var index = Array.from(parent.children).indexOf(tr); // Get the index of the table row within the parent element

  if (index > -1) {
    arr.splice(index, 1); // Remove the object from the array

    tr.remove(); // Remove the table row from the DOM
  }

  localStorage.setItem("todo", JSON.stringify(arr)); // Update the "todo" localStorage item with the modified array
}
