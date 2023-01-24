//отримую доступ до інпуту та спану:
const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
//додаю події:
input.addEventListener("input", ChangeSize);
function ChangeSize() {
  span.style.fontSize = `${input.value}px`;
}
