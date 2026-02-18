const btn = document.getElementById("btn");
const body = document.getElementById("body");

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
