const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const changedFontSize = input.value;
  output.style.fontSize = `${changedFontSize}px`;
}
