//function that display value
function show(sum) {
  document.getElementById("result").value += sum;
}

//function that evaluates the digit and return result
function equal() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

//function that clear the display
function clr() {
  document.getElementById("result").value = "";
}
