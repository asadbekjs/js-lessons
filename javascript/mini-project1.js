const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
h1.style.textAlign = "center";
h2.style.textAlign = "center";
h2.style.textDecoration = "underline";

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
year.style.fontWeight = "bold";
year.style.fontSize = "64px";
year.style.color = "green";

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// setInterval() - ma'lum bir funksiyani belgilangan vaqt orasida qayta qayta ishlatish uchun ishlatiladi
setInterval(() => {
  year.style.color = randomColor();
}, 1000);

const liElements = document.querySelectorAll("li");
liElements.forEach((li) => {
  li.style.listStyleType = "none";
  li.style.marginBottom = "4px";
  li.style.padding = "16px";
  li.style.fontSize = "20px";

  if (li.textContent.includes("Done")) {
    li.style.backgroundColor = "green";
  } else if (li.textContent.includes("Ongoing")) {
    li.style.backgroundColor = "yellow";
  } else if (li.textContent.includes("Coming")) {
    li.style.backgroundColor = "red";
  } else {
    li.style.backgroundColor = "blue";
  }
});
