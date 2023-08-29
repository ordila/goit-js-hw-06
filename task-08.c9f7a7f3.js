!function(){// Завдання 8
// Напиши скрипт управління формою логіна.
// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів
// форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
let e=document.querySelector(".login-form");e.addEventListener("submit",function(e){e.preventDefault();let t=new FormData(e.currentTarget),r={};t.forEach((e,t)=>{""!==e?r[t]=e:alert("Всі поля повинні бути заповнені")}),e.currentTarget.reset(),console.log(r)})}();//# sourceMappingURL=task-08.c9f7a7f3.js.map

//# sourceMappingURL=task-08.c9f7a7f3.js.map
