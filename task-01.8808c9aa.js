!// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5
function(){let e=document.querySelectorAll(".item"),l=document.querySelectorAll(".item").length;console.log(` Number of categories: ${l}`),e.forEach(e=>{let l=e.querySelector(".title").textContent,t=e.querySelectorAll("li").length;console.log(`Category : ${l}`),console.log(`Elements : ${t}`)})}();//# sourceMappingURL=task-01.8808c9aa.js.map

//# sourceMappingURL=task-01.8808c9aa.js.map
