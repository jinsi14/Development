selectedRow = null;

function onFormSubmit() {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  reset();
}

function readFormData() {
  let formData = {};
  formData["firstname"] = document.getElementById("firstname").value;
  formData["lastname"] = document.getElementById("lastname").value;
  formData["address"] = document.getElementById("address").value;

  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("studentList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstname;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastname;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.address;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("address").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstname;
  selectedRow.cells[1].innerHTML = formData.lastname;
  selectedRow.cells[2].innerHTML = formData.address;
}

function onDelete(td) {
  row = td.parentElement.parentElement;
  document.getElementById("studentList").deleteRow(row.rowIndex);
  reset();
}

function reset() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  selectedRow = null;
}
