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
let e;e=0,function(){let t=document.querySelector('button[data-action="increment"]'),n=document.querySelector('button[data-action="decrement"]'),c=document.querySelector("#value");console.dir(c),t.addEventListener("click",()=>{e+=1,c.textContent=e}),n.addEventListener("click",()=>{e-=1,c.textContent=e})}();//# sourceMappingURL=task-04.8cff7010.js.map

//# sourceMappingURL=task-04.8cff7010.js.map
