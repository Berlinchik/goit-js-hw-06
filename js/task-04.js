//отримав доступ до спану:
const field = document.querySelector("#value");
//створив змінну з початковим значенням 0:
let counterValue = 0;
//отримую доступ до кнопок:
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
//додаю події на кнопки:
decrementButton.addEventListener("click", funcDecremen);
//при кліці на кнопку присвоюю текстовий контент для спану:
function funcDecremen() {
  field.textContent = counterValue -= 1;
}
incrementButton.addEventListener("click", funcIncrement);
//при кліці на кнопку присвоюю текстовий контент для спану:
function funcIncrement() {
  field.textContent = counterValue += 1;
}
