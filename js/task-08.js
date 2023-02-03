const form = document.querySelector('.login-form');
const newUser = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // збір даних з допомогою FormData
  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log('name:', name);
  //   console.log('value:', value);
  // });

  // збір даних з допомогою elements
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    alert('Please fill in all fields of the form');
  } else {
    newUser.email = email;
    newUser.password = password;
    console.log(newUser);
  }

  event.currentTarget.reset();
}
