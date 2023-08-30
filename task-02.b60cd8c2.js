// Завдання 2
// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, який для кожного елемента масиву
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const e=["Potatoes","Mushrooms","Garlic","Tomatos","Herbs","Condiments"];!function(){let t=document.querySelector("#ingredients"),o=[];e.forEach(e=>{let t=document.createElement("li");t.classList.add("item"),t.textContent=e,o.push(t)}),t.append(...o)}();//# sourceMappingURL=task-02.b60cd8c2.js.map

//# sourceMappingURL=task-02.b60cd8c2.js.map
