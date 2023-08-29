// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і
//  змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

function changeFontSize() {
  const inputElement = document.querySelector('#font-size-control');
  const textToChange = document.querySelector('#text');
  console.dir(inputElement);

  inputElement.addEventListener('input', () => {
    const inputValue = +inputElement.value;
    textToChange.style.fontSize = inputValue + 'px';
  });
}
changeFontSize();
