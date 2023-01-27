<<<<<<< HEAD
const dateSpan = document.getElementById("date-location"); //bug 1 here: id incorrect
=======
const dateSpan = document.getElementById("date-locatio");
>>>>>>> b7bc4f6d7c8bf2c40a6110c5f63392eae350fa7f
const timeSpan = document.getElementById("time-location");
const dateButton = document.getElementById("update-date");
const timeButton = document.getElementById("update-time");

dateSpan.textContent = new Date().toDateString();
<<<<<<< HEAD
timeSpan.textContent = new Date().toTimeString(); //bug 2 here: missing ()


dateButton.onclick = function (event) {
  dateSpan.textContent = new Date().toDateString(); //bug 3 here: missing ()
=======
timeSpan.textContent = new Date.toTimeString();


dateButton.onclick = function (event) {
  dateSpan.textContent = new Date().toDateString;
>>>>>>> b7bc4f6d7c8bf2c40a6110c5f63392eae350fa7f
}

timeButton.onclick = function (event) {
  timeSpan.textContent = new Date().toTimeString();
}
