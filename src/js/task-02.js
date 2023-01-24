const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// отримую доступ до ul:
const ul = document.querySelector("#ingredients");
//перебираю масив продуктів, на кожній ітерації створюю елемент li, присвоюю текстовий контент з перебраного масиву і присвоюю клас:
const productList = ingredients.map((product) => {
  const li = document.createElement("li");
  li.textContent = product;
  li.classList.add("item");
  return li;
});
//додаю всі li в ul(доступ до якого отриав раніше):
ul.append(...productList);
