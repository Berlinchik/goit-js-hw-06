const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// отримую доступ до ul:
const ul = document.querySelector(".gallery");
//створив пустий масив, перебираю масив зображень, на кожній ітерації створюю розмітку:
const markup = images
  .map(
    (image) => `<li>
  <img src = '${image.url}' alt = ${image.alt} width = '240'>
  </li>`
  )
  .join(""); //використовуючи join перетворив масив у рядок
//переміщаю розмітку в ul:
ul.insertAdjacentHTML("beforeend", markup);
