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
  const liEl = `<li>${ingredientItem}</li>`;
  ulEl.insertAdjacentHTML('beforeend', liEl);
});

container.append(ulEl);


