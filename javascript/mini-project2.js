const divContainer = document.querySelector(".container");
divContainer.style.display = "grid";
divContainer.style.gridTemplateColumns = "repeat(6, 1fr)";
divContainer.style.gap = "8px";

let span;
for (let i = 0; i < 102; i++) {
  span = document.createElement("span");
  span.innerText = i;
  divContainer.appendChild(span);
  span.style.fontSize = "32px";
  span.style.padding = "16px";
  span.style.textAlign = "center";
  span.style.color = "lightblue";
  span.style.backgroundColor = isPrimeEvenOddNumber(i);
}

function isPrimeEvenOddNumber(number) {
  if (number < 2) {
    return number % 2 === 0 ? "green" : "yellow";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return number % 2 === 0 ? "green" : "yellow";
    }
  }
  return "red";
}
