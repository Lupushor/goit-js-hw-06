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

const ulItems = document.querySelector('.gallery');

let listItems = '';

images.forEach((image) => {
  listItems += `<li><img class="photo" src="${image.url}" width = 640 alt="${image.alt}"></li>`;
});

ulItems.insertAdjacentHTML('beforeend', listItems);
document.body.appendChild(ulItems);

// const image = document.querySelector('.photo');

// ulItems.style.display = 'flex';
// ulItems.style.gap = '20';
// listItems.style.padding = '20';
// image.style.borderRadius = '50';
// image.style.justifyContent = 'center';
// image.style.alignItems = 'center';
// ulItems.style.listStyleType = 'none';
