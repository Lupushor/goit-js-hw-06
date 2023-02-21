function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const buttonChangeColor = document.querySelector('button.change-color');
const colorBgSpan = document.querySelector('span.color');

buttonChangeColor.addEventListener('click', function () {
  let color = getRandomHexColor();

  body.style.backgroundColor = color;

  colorBgSpan.textContent = color;
});
