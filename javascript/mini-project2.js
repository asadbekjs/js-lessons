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
  span.style.backgroundColor = "blue";
  span.style.color = "white";
  // span.style.backgroundColor = isPrimeEvenOddNumber(i);
}

function isPrimeEvenOddNumber(number) {
  // Agar prime bo'lsa "red" qaytarilsin
  // Agar even bo'lsa "green" qaytarilsin
  // Agar odd bo'lsa "yellow" qaytarilsin
}
