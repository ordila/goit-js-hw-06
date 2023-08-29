// Напиши скрипт, який:

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

function getInfoCategory() {
  const categories_arr = document.querySelectorAll('.item');
  const numberOfCategories = document.querySelectorAll('.item').length;
  console.log(` Number of categories: ${numberOfCategories}`);
  categories_arr.forEach(el => {
    const category = el.querySelector('.title').textContent;
    const elements = el.querySelectorAll('li').length;
    console.log(`Category : ${category}`);
    console.log(`Elements : ${elements}`);
  });
}

// getInfoCategory();
