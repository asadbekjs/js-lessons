const keyName = document.getElementById("key-name");
const keyCode = document.getElementById("key-code");
const text = document.getElementById("text");

window.addEventListener("keydown", (e) => {
  console.log(e);
  text.style.display = "none";
  keyName.textContent = e.key === " " ? "Space" : e.key;
  keyCode.textContent = e.keyCode;
});
