const btn = document.getElementById("btn");
const body = document.getElementById("body");
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("blur", (e) => {
  p.textContent = "Field is required";
  p.style.color = "red";
});

body.addEventListener("keypress", (e) => {
  console.log(e);
  alert(e.key, e.keyCode);
});

btn.addEventListener("click", (event) => {
  console.log("Button Clicked");
  console.log("event gives the event listener object:", event);
  console.log("event.target gives the selected element: ", event.target);
  console.log(
    "event.target.textContent gives content of selected element: ",
    event.target.textContent,
  );
});

btn.addEventListener("mouseenter", (e) => {
  console.log("Mouse Enter", e);
});

btn.addEventListener("mouseleave", (e) => {
  console.log("Mouse Leave", e);
});

body.addEventListener("load", () => {
  alert("Body Loaded");
  console.log("Body Loaded");
});
