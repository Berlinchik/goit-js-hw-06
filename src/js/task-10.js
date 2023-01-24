function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divArray = [];
function createBoxes(amount) {
  for (let i = 0; i <= amount; i++) {
    const div = document.createElement("div");
    div.width = 30;
    div.height = 30;
    div.style.background = getRandomHexColor();
    divArray.push(div);
  }
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");
