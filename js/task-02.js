const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createIngredientsList = document.createElement('li');
createIngredientsList.classList.add('item');

const ingredientsDetails = [];
ingredients.forEach(ingredient => {
  ingredients.push(ingredient);
});
// console.log(ingredientsDetails)

createIngredientsList.textContent = ingredients;

console.log(createIngredientsList);