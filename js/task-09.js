function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", onChangeColor);
function onChangeColor() {
  const randomColor = getRandomHexColor();
  body.style.background = randomColor;
  span.textContent = randomColor;
}
