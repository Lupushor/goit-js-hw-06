const numberOfCategories = document.querySelectorAll('.item').length;
console.log('Number of categories:', numberOfCategories)

const category = document.querySelectorAll('.item');

category.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

