// Get all the keys from document
let keys = document.querySelectorAll("#calculator span");
let operators = ["+", "-", "x", "÷"];
let decimalAdded = false;

for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function (e) {
    let input = document.querySelector(".screen");
    let inputVal = input.innerHTML;
    let btnVal = this.innerHTML;

    if (btnVal == "C") {
      input.innerHTML = "";
      decimalAdded = false;
    } else if (btnVal == "=") {
      let equation = inputVal;
      let lastChar = equation[equation.length - 1];

      equation = equation.replace(/x/g, "*").replace(/÷/g, "/");

      if (operators.indexOf(lastChar) > -1 || lastChar == ".")
        equation = equation.replace(/.$/, "");

      if (equation) input.innerHTML = eval(equation);

      decimalAdded = false;
    } else if (operators.indexOf(btnVal) > -1) {
      let lastChar = inputVal[inputVal.length - 1];

      if (inputVal != "" && operators.indexOf(lastChar) == -1)
        input.innerHTML += btnVal;
      else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;

      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded = false;
    } else if (btnVal == ".") {
      if (!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    } else {
      input.innerHTML += btnVal;
    }

    e.preventDefault();
  };
}
