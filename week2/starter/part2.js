const copyDiv = document.getElementById("copying-buttons");
const copyButton = document.getElementById("copy");

let lastIndex = 1;

copyButton.onclick = function (event) { //add event here
  if (event.ctrlKey) {
    this.remove();
    --lastIndex;
    return;
  }
  const newButton = document.createElement("button"); //button mispelled 
  newButton.textContent = "Click to make a copy of me. I am button " + ++lastIndex;
  newButton.onclick = copyButton.onclick;
  copyDiv.appendChild(newButton);
}
