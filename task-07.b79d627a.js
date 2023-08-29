!// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і
//  змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
function(){let e=document.querySelector("#font-size-control"),t=document.querySelector("#text");console.dir(e),e.addEventListener("input",()=>{let n=+e.value;t.style.fontSize=n+"px"})}();//# sourceMappingURL=task-07.b79d627a.js.map

//# sourceMappingURL=task-07.b79d627a.js.map
