const changeColorBtn = document.querySelector('.change-color');
const changedColorInput = document.querySelector('.color');
const body = document.body;

changeColorBtn.addEventListener('click', changeColor);

function changeColor(event) {
  const changedColor = getRandomHexColor();
  changedColorInput.textContent = changedColor;
  body.style.backgroundColor = changedColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
