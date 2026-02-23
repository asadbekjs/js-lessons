const mass = document.getElementById("mass");
const height = document.getElementById("height");
const button = document.querySelector("button");
const body = document.querySelector("body");
const p = document.createElement("p");
body.appendChild(p);

let bmi;
button.addEventListener("click", () => {
  bmi = mass.value / height.value ** 2;
  const result = `Your BMI is ${bmi.toFixed(2)}. `;
  let text = "You are ";
  // 4 bmi categories
  if (bmi < 18.5) {
    p.textContent = result + text + "Underweight";
  } else if (bmi < 25) {
    p.textContent = result + text + "Normal";
  } else if (bmi < 30) {
    p.textContent = result + text + "Overweight";
  } else {
    p.textContent = result + text + "Obese";
  }
});
