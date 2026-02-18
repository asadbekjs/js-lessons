const mass = document.getElementById("mass");
const height = document.getElementById("height");
const button = document.querySelector("button");

let bmi;
button.addEventListener("click", () => {
  bmi = mass.value / height.value ** 2;
  alert(`Your BMI is ${bmi.toFixed(2)}`);
  console.log(bmi);
});
