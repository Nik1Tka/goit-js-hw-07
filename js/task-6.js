const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttondestroy = document.querySelector('[data-destroy]');
let widthDiv = 30;
let heightDiv = 30;

buttonCreate.addEventListener('click', event => {
  fooCreateSquare(event, boxesEl);
});
function fooCreateSquare(event, context) {
  context.innerHTML = '';
  let array = [];
  let num = inputEl.value;
  for (let i = 0; num > i; i++) {
    context.insertAdjacentHTML(
      'beforeend',
      `<div
    style="width: ${widthDiv}px; height:${heightDiv}px; background-color:${getRandomHexColor()}" >eee</div>`
    );
    widthDiv += 10;
    heightDiv += 10;
  }
  num = 0;
  widthDiv = 30;
  heightDiv = 30;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}