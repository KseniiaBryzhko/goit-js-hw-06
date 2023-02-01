const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// додавання через append
// const makeImage = ({ url, alt }) => {
//   const oneItem = document.createElement('li');
//   const oneImage = document.createElement('img');
//   oneImage.setAttribute('src', url);
//   oneImage.setAttribute('alt', alt);
//   oneItem.append(oneImage);
//   return oneItem;
// };

// const createdImages = images.map(makeImage);
// const listOfImages = document.querySelector('.gallery');
// listOfImages.append(...createdImages);

// додавання через insertAdjacentHTML
const listOfImages = document.querySelector('.gallery');
images.forEach(image => {
  listOfImages.insertAdjacentHTML(
    'afterbegin',
    `<li class = "third-task-item"><img class = "third-task-image" src = "${image.url}" alt = "${image.alt}" /></li>`
  );
});
