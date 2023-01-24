//оттримуємо доступ до спану та інпуту:
const span = document.querySelector("#name-output");
const input = document.querySelector("#name-input");
//створюємо події:
input.addEventListener("input", () => {
  if (input.value != "") {
    span.textContent = input.value;
  } else {
    span.textContent = "Anonymous";
  }
});
