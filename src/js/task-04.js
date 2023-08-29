// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button class = 'plus' type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button class='minus' type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

function calculator() {
  const plusButton = document.querySelector('button[data-action="increment"]');
  const minusButton = document.querySelector('button[data-action="decrement"]');
  const counter = document.querySelector('#value');

  console.dir(counter);

  plusButton.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
  });
  minusButton.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
  });
}
// calculator();
