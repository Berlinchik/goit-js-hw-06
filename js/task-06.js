//отримую доступ до інпуту:
const input = document.querySelector("#validation-input");
//додаю подію з перевіркою на кількість символів:
input.addEventListener("blur", funcCount);
function funcCount() {
  const inputDataLength = this.dataset.length;
  const currentLength = this.value.length;
  if (inputDataLength == currentLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
