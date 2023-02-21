const textInput = document.querySelector('#validation-input');
const dataLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
  if (textInput.value.length == dataLength) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
});
