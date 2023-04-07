function Bold() {
  let inputValue = document.getElementById("txt").value;
  localStorage.setItem("textvalue", inputValue);
}

function Italic() {
  let Value = document.getElementById("txt").value;
  localStorage.setItem("value", Value);
}

function Underline() {
  let underlineValue = document.getElementById("txt").value;
  localStorage.setItem("valueunderline", underlineValue);
}

