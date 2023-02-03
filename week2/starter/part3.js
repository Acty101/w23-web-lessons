const creationForm = document.getElementById("input-creation-form");
const inputCount = document.getElementById("input-count");
const newInputDiv = document.getElementById("new-inputs");
const calculateButton = document.getElementById("calculate");
<<<<<<< HEAD
const results = document.getElementById("results"); //added document.
=======
const results = getElementById("results");
>>>>>>> b7bc4f6d7c8bf2c40a6110c5f63392eae350fa7f

let newInputs = [];
creationForm.onsubmit = function (event) {
  // prevent form submission
  event.preventDefault();
  // remove old inputs
  for (const input of newInputs) {
    input.remove();
  }
  // find how many new inputs to create
  const inputsToCreate = parseInt(inputCount.value);
  // create and save new inputs
<<<<<<< HEAD
  for (let i = 0; i < inputsToCreate; ++i) { //changed <= to < 
=======
  for (let i = 0; i <= inputsToCreate; ++i) {
>>>>>>> b7bc4f6d7c8bf2c40a6110c5f63392eae350fa7f
    const newInput = document.createElement("input");
    newInput.type = "number";
    newInputs.push(newInput);
    newInputDiv.appendChild(newInput);
  }
}

calculateButton.onclick = function (event) {
  if (newInputs.length === 0) {
    return;
  }
  let sum = 0;
  for (const input of newInputs) {
<<<<<<< HEAD
    sum += parseInt(input.value); //changed = to +=
=======
    sum = parseInt(input.value);
>>>>>>> b7bc4f6d7c8bf2c40a6110c5f63392eae350fa7f
  }
  results.textContent = sum.toString();
}

