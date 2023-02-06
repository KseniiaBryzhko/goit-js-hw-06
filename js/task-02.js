const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elements = ingredients.map(element => {
  const oneIngridient = document.createElement('li');
  oneIngridient.classList.add('item');
  oneIngridient.textContent = element;
  return oneIngridient;
});

const listOfIngridients = document.querySelector('#ingredients');
listOfIngridients.append(...elements);

// попередній варіант
// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const elements = [];
// ingredients.forEach(element => {
//   const oneIngridient = document.createElement('li');
//   oneIngridient.classList.add('item');
//   oneIngridient.textContent = element;
//   elements.push(oneIngridient);
// });

// const listOfIngridients = document.querySelector('#ingredients');
// listOfIngridients.append(...elements);
