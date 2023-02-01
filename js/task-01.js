const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
  const categoryNames = element.firstElementChild.textContent;
  const listElements = element.querySelectorAll('li');
  console.log(`Category: ${categoryNames}`);
  console.log(`Elements: ${listElements.length}`);
});
