!function(){// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.
// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}console.log(t());let e=document.querySelector("body");document.querySelector(".change-color");let o=document.querySelector(".color");e.addEventListener("click",n=>{let r=t();o.textContent=r,e.style.backgroundColor=r})}();//# sourceMappingURL=task-09.2d560ac7.js.map

//# sourceMappingURL=task-09.2d560ac7.js.map
