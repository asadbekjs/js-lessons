const paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph";
document.body.appendChild(paragraph);

// creating multiple elements and appending to parent element
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "24px";
  title.textContent = i;
  document.body.appendChild(title);
}

// removing a child element from a parent node
const ul = document.querySelector("ul");
const lists = document.querySelectorAll("li");
// // element.removeChild(child)
// for (const li of lists) {
//   //   console.log(li); // HTML element
//   ul.removeChild(li);
// }
// innerHTML / textContent / innerText
const h2 = document.querySelector("h2");
console.log(h2.textContent); // string
console.log(h2.innerText); // string

console.log(ul.innerHTML);
ul.innerHTML = "";
