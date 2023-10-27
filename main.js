// Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let Fahrenheit = +document.getElementById("Fahrenheit").value;

  let Process = ((Fahrenheit - 32) * 5) / 9;

  document.getElementById("output").innerHTML = Process;
}

document.getElementById("btn2").addEventListener("click", btn2Clicked);

function btn2Clicked() {
  let Celsius = +document.getElementById("Celsius").value;

  let Process2 = (Celsius * 9) / 5 + 32;

  document.getElementById("output2").innerHTML = Process2;
}
