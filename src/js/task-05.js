//  Завдання 5
//  Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися
//  рядок "Anonymous".

//  <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

function greeting() {
  const inputElement = document.querySelector('#name-input');
  const placeToPutName = document.querySelector('#name-output');

  placeToPutName.textContent = 'Anonymous';

  inputElement.addEventListener('input', () => {
    placeToPutName.textContent = inputElement.value;

    if (inputElement.value === '') {
      placeToPutName.textContent = 'Anonymous';
    }
  });
}
greeting();
