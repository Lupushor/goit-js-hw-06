const valueInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

valueInput.addEventListener('input', (e) => {
  textOutput.style.fontSize = `${e.target.value}px`;
});
