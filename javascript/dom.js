// Accessing Element Content
// 1. innerText/textContent - element ichidagi textni oladi
const element = document.getElementById("learn");
console.log(element);
console.log(element.innerText); // Learn JavaScript
console.log(element.textContent); // Learn JavaScript
element.innerText = "Learn DOM";
console.log(element);
// 2. innerHTML - element ichidagi HTML kodini oladi
const divElement = document.querySelector(".box");
console.log(divElement.innerHTML); // <p>text</p>
divElement.innerHTML = "<h2>Heading 2</h2>";

// Accessing Element Attributes
const titleElement = document.querySelector(".title");
console.log(titleElement.getAttribute("class")); // title
console.log(titleElement.getAttribute("id")); // heading3
console.log(titleElement.getAttribute("style")); // null
titleElement.setAttribute("style", "color: red");
titleElement.setAttribute("class", "title2");
console.log(titleElement);

const image = document.getElementById("image");
console.log(image.getAttribute("src"));
image.setAttribute("src", "./images/screen2.png");
image.setAttribute("alt", "Screenshot 2");
image.setAttribute("width", "400");
image.removeAttribute("height");
console.log(image);

// element.style.property
const h2Element = document.querySelector("h2");
console.log(h2Element.style); // CSSStyleDeclaration => {}
h2Element.style.color = "blue";
