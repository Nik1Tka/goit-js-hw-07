const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', () => {
  if (inputEl.value.trim()) {
    spanEl.textContent = inputEl.value;
  } else {
    spanEl.textContent = 'Anonymous';
  }
});