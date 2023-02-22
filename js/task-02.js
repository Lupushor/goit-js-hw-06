const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');
const listItem = [];

ingredients.forEach((ingredientItem) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredientItem;
  liEl.classList.add('item');
  listItem.push(liEl);
});

container.append(...listItem);
