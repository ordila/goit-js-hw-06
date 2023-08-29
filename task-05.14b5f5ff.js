!//  Завдання 5
//  Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися
//  рядок "Anonymous".
//  <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
function(){let t=document.querySelector("#name-input"),e=document.querySelector("#name-output");e.textContent="Anonymous",t.addEventListener("input",()=>{e.textContent=t.value,""===t.value&&(e.textContent="Anonymous")})}();//# sourceMappingURL=task-05.14b5f5ff.js.map

//# sourceMappingURL=task-05.14b5f5ff.js.map
