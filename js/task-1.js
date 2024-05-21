
const categoriesNames = document.querySelectorAll('h2');
console.log(`Number of categories: ${categoriesNames.length}`);
let categoriesList = document.querySelectorAll('ul ul');
categoriesList = Array.from(categoriesList);
const arrayOfCategoriesLength = categoriesList.map(
  el => el.querySelectorAll('li').length
);

arrayOfCategoriesLength.forEach((el, index) => {
  console.log(`Category: ${categoriesNames[index].textContent}`);
  console.log(`Elements: ${el}`);
});




