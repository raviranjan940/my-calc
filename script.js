
// var wrapper = document.getElementById("wrapper");

// let inputField = document.createElement("input");
// inputField.type = "text";
// inputField.id = "display";

// wrapper.appendChild(inputField);

let currDisp = '';
document.querySelector('#display').value = currDisp;

let resultDisp=false;

function addToDisp(value) {
  if (val === '.' && currDisp.includes('.')) return;
  if (currDisp === "" || resultDisp) {
    currDisp = value;
  } else {
    currDisp += value;
  }
  resultDisp=false;
  updateDisplay();
}

function updateDisplay() {
  const dispElement = document.querySelector('#display');
  dispElement.textContent = currDisp;
}

// var currDisp = document.querySelector('#display').value; --> Its inside the every function

function clearDisplay() {
  currDisp = '';
  updateDisplay()
}

function addRemove() {
  currDisp = currDisp.slice(0, -1);
  if (currDisp === "") {
    currDisp = "";
  }
  updateDisplay()
}

function addEqualTo() {
  let result = eval(currDisp);
  currDisp += "\n" + result.toString();
  updateDisplay();
}


// Attach handleOverflow to window resize event
//window.addEventListener("resize", handleOverflow);

// Call handleOverflow initially to handle any overflow on page load
//handleOverflow();
