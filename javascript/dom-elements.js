// DOM - Document Object Model - tree of Nodes that represents an HTML Page
// Node - element, text, attribute, comment
// Accessing HTML element
// 1. Get by id attribute
console.log(document); // HTML document
const element = document.getElementById("learn");
element.innerText = "Learn DOM";
console.log(element);

// 2. Get elements by tag name
const elements = document.getElementsByTagName("h2");
console.log(elements); // HTML collection => []

// 3. Get elements by class name
const elements2 = document.getElementsByClassName("title");
console.log(elements2); // HTML collection => []

// 4. Get element by query selector
const h2Element = document.querySelector("#learn");
console.log(h2Element);

const h3Element = document.querySelector(".title");
console.log(h3Element);

const pElement = document.querySelector("p");
console.log(pElement);
