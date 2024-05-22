const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttondestroy = document.querySelector('[data-destroy]');
let widthDiv = 30;
let heightDiv = 30;

buttonCreate.addEventListener('click', event => {
  fooCreateSquare(event, boxesEl);
});
buttondestroy.addEventListener('click', event => {
  destroyBoxes(event, boxesEl);
});

function destroyBoxes(event, context) {
  context.innerHTML = '';
  inputEl.value = '';
}

function fooCreateSquare(event, context) {
  context.innerHTML = '';
  let num = 0;
  let row = '';
  if (inputEl.value <= 100 && inputEl.value > 0) {
    num = inputEl.value;
  }
  for (let i = 0; num > i; i++) {
    row += `<div
    style="width: ${widthDiv}px; height:${heightDiv}px; background-color:${getRandomHexColor()}" ></div>`;
    widthDiv += 10;
    heightDiv += 10;
  }
  context.insertAdjacentHTML('beforeend', row);
  num = 0;
  widthDiv = 30;
  heightDiv = 30;
  inputEl.value = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}