// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.
// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}console.log(o());const t=document.querySelector("body");document.querySelector(".change-color");const e=document.querySelector(".color");t.addEventListener("click",n=>{let r=o();e.textContent=r,t.style.backgroundColor=r});//# sourceMappingURL=task-09.0a50b212.js.map

//# sourceMappingURL=task-09.0a50b212.js.map
