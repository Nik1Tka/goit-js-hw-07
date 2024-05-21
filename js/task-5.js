const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

buttonEl.addEventListener('click', event => {
  fooChangeColor(event, bodyEl);
});
function fooChangeColor(e, el) {
  el.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
