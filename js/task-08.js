const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const currentEmail = e.target.elements.email;
  const currentPassword = e.target.elements.password;
  if (currentEmail.value !== "" && currentPassword.value !== "") {
    const info = {
      [currentEmail.name]: currentEmail.value,
      [currentPassword.name]: currentPassword.value,
    };
    console.log(info);
  } else {
    alert("Всі поля повинні бути заповнені!");
  }
}
