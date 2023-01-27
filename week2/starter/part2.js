const copyDiv = document.getElementById("copying-buttons");
const copyButton = document.getElementById("copy");

let lastIndex = 1;

<<<<<<< HEAD
copyButton.onclick = function (event) { //add event here
  if (event.ctrlKey) {
    this.remove();
    --lastIndex;
    return;
  }
  const newButton = document.createElement("button"); //button mispelled 
=======
copyButton.onclick = function () {
  if (event.ctrlKey) {
    this.remove();
    return;
  }
  const newButton = document.createElement("buton");
>>>>>>> b7bc4f6d7c8bf2c40a6110c5f63392eae350fa7f
  newButton.textContent = "Click to make a copy of me. I am button " + ++lastIndex;
  newButton.onclick = copyButton.onclick;
  copyDiv.appendChild(newButton);
}
