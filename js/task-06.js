const input = document.querySelector('#validation-input');
const inputValue = input.value;

input.addEventListener('change', onInputBlur);

function onInputBlur(event) {
  const changedValue = event.target.value;

  if (changedValue.length === Number(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
