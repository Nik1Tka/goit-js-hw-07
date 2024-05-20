const translate = {
  en: { formValid: 'All form fields must be filled in' },
  uk: { formValid: 'Усі поля форми мають бути заповнені' },
};
const lang = document.querySelector('html').lang;

const selector = '#main-form';
document.addEventListener('submit', event => {
  formFoo(event, selector);
});

function formFoo(event, sel) {
  event.preventDefault();
  const formEl = document.querySelector(sel);
  let isValid = false;
  let inputArray = formEl.querySelectorAll('input');
  inputArray = Array.from(inputArray);
  inputArray.forEach(input => {
    if (input.value) {
      isValid = true;
    } else {
      isValid = false;
    }
  });
  if (!isValid) {
    alert(translate[lang].formValid);
  }
  let formObj = {};

  const keys = Object.keys(formEl.elements).filter(key => key.length > 1);
  keys.forEach(key => {
    const value = formEl.elements[key].value;
    formObj[key] = value;
  });
  formEl.reset();
  return console.log(formObj);
}