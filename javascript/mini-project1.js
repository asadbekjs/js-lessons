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

// rgb(0, 0, 255) - r (red), g (green), b (blue) ranglarni ifodalaydi
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

const datetime = document.getElementById("datetime");
datetime.style.textAlign = "center";
datetime.style.padding = "12px";
datetime.style.fontSize = "20px";
datetime.style.fontWeight = "bold";
datetime.style.margin = "16px 0";

function updateDateTime() {
  const now = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const formattedDateTime = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
  datetime.textContent = formattedDateTime;
}

updateDateTime();
setInterval(() => {
  updateDateTime();
  datetime.style.backgroundColor = randomColor();
}, 1000);

const liElements = document.querySelectorAll("li");
liElements.forEach((li) => {
  li.style.listStyleType = "none";
  li.style.marginBottom = "4px";
  li.style.padding = "16px";
  li.style.fontSize = "20px";

  const text = li.textContent;

  if (text.includes("Done")) {
    li.style.backgroundColor = "green";
  } else if (text.includes("Ongoing")) {
    li.style.backgroundColor = "yellow";
  } else if (text.includes("Coming")) {
    li.style.backgroundColor = "red";
  } else {
    li.style.backgroundColor = "blue";
  }
});
