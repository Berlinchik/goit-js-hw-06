// 1.
//отримую доступ до ul:
const liItems = document.querySelector("#categories");
//виводжу в консоль кількість дітей ul заcтосовуючи властивість childElementCount:
console.log(`Number of categories: ${liItems.childElementCount}`);

// 2.
//перебираю циклом for ...of  дітей наших li ul:
for (const liItem of liItems.children) {
  //на кожній ітерації виводжу у консоль першу дитну li:
  console.log(`Category: ${liItem.firstElementChild.textContent}`);
  //отримую доступ до внутрішнього ul:
  const ulList = liItem.querySelector("ul");
  //виводжу у консоль кількість дітей ul:
  console.log(`Elements: ${ulList.childElementCount}`);
}
