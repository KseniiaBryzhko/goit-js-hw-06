const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const listOfBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  createBoxes(Number(input.value));
});
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  let arrayOfBoxes = [];
  let sizes = 30;
  for (let i = 0; i < input.value; i += 1) {
    const oneBox = document.createElement('div');
    sizes += 10;
    oneBox.style.height = `${sizes}px`;
    oneBox.style.width = `${sizes}px`;
    oneBox.style.backgroundColor = getRandomHexColor();
    arrayOfBoxes.push(oneBox);
  }
  return listOfBoxes.append(...arrayOfBoxes);
}

function destroyBoxes() {
  listOfBoxes.innerHTML = '';
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// попередній варіант
// const input = document.querySelector('input[type="number"]');
// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy]');
// const listOfBoxes = document.querySelector('#boxes');

// input.addEventListener('input', changedValue);
// createBtn.addEventListener('click', () => {
//   createBoxes(Number(input.value));
// });
// destroyBtn.addEventListener('click', destroyBoxes);

// let inputValue = 0;

// function changedValue(event) {
//   inputValue = event.currentTarget.value;
// }

// function createBoxes(amount) {
//   let arrayOfBoxes = [];
//   let sizes = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const oneBox = document.createElement('div');
//     sizes += 10;
//     oneBox.style.height = `${sizes}px`;
//     oneBox.style.width = `${sizes}px`;
//     oneBox.style.backgroundColor = getRandomHexColor();
//     arrayOfBoxes.push(oneBox);
//   }
//   return listOfBoxes.append(...arrayOfBoxes);
// }

// function destroyBoxes() {
//   return (listOfBoxes.innerHTML = '');
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
