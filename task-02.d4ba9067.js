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
const e=["Potatoes","Mushrooms","Garlic","Tomatos","Herbs","Condiments"];!function(){let t=document.querySelector("#ingredients");e.forEach(e=>{let o=document.createElement("li");o.classList.add("item"),o.textContent=e,t.append(o)})}();//# sourceMappingURL=task-02.d4ba9067.js.map

//# sourceMappingURL=task-02.d4ba9067.js.map
