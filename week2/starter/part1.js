const dateSpan = document.getElementById("date-location"); //bug 1 here: id incorrect
const timeSpan = document.getElementById("time-location");
const dateButton = document.getElementById("update-date");
const timeButton = document.getElementById("update-time");

dateSpan.textContent = new Date().toDateString();
timeSpan.textContent = new Date().toTimeString(); //bug 2 here: missing ()


dateButton.onclick = function (event) {
  dateSpan.textContent = new Date().toDateString(); //bug 3 here: missing ()
}

timeButton.onclick = function (event) {
  timeSpan.textContent = new Date().toTimeString();
}
