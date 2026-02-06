const titles = document.querySelectorAll("h1");
// console.log(titles); // NodeList
const title = titles[3];
// element.property(textContent, className, id, innerText) = value
// element.methods(setAttribute, removeAttribute, getAttribute)
title.textContent = "Fourth Title";
title.className = "title fourth-title";
title.id = "fourth-title";
console.log(title.classList); // DOMTokenList
title.classList.add("new-class"); // class qo'shish
title.classList.toggle("title2"); // class qo'shish
title.classList.remove("new-class"); // class o'chirish

titles.forEach((title, index) => {
  title.style.fontSize = "24px";
  if (index % 2 === 0) {
    title.style.color = "red";
    title.style.backgroundColor = "green";
  } else {
    title.style.color = "blue";
    title.style.backgroundColor = "yellow";
  }
});
