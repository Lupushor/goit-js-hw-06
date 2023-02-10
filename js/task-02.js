const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');
const ulEl = document.createElement('ul');

ingredients.forEach((ingredientItem) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredientItem;
  ulEl.append(liEl)
});

container.append(ulEl);


