const counterValue = {
  value: 0,
  onDecrementBtnClick() {
    this.value -= 1;
  },
  onIncrementBtnClick() {
    this.value += 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const changedValue = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  counterValue.onDecrementBtnClick();
  changedValue.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
  counterValue.onIncrementBtnClick();
  changedValue.textContent = counterValue.value;
});
