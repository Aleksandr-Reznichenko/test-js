'use strict';

/*
    document.querySelector(".class")

    textContent

    classList:
            classList.contains(className) - перевіряє (true або false)
            classList.add(className) - додати
            classList.remove(className) - видалити
            classList.toggle(className)  - додає в кінець списку класів, якщо className відсутній і навпаки видаляє, якщо він є
            classList.replace(oldClassName, newClassName) - стара назва класу, нова назва класу
    
    style

    element.hasAttribute(nameAttribute) - перевіряє (true або false)
    element.getAttribute(nameAttribute) - повертає значення атрибута
    element.setAttribute(nameAttribute, value) - приймає два аргументи: рядок з іменем атрибута, який потрібно встановити або змінити, та значення, яке цьому атрибуту треба присвоїти.
    element.removeAttribute(nameAttribute) - видаляє атрибут зі значенням.

    Отримання значень (властивість dataset)
    Зміна значень (властивість dataset)
    Видалення атрибута (оператор delete)
*/

//

// const button = document.querySelector('.btn');
// const box = document.querySelector('.box');

// const handleButtonClick = () => {
//   box.style.backgroundColor = 'teal';
//   box.style.marginLeft = '10px';
//   //   button.removeEventListener('click', onButtonClick);
// };

// button.addEventListener('click', handleButtonClick, { once: true });

//====================================================================//

// const userName = document.querySelector('.js-user-name');
// const button = document.querySelector('.js-button');

// let usename = '';

// userName.addEventListener('input', event => {
//   usename = event.currentTarget.value.trim();
// });

// userName.addEventListener('blur', event => {
//   if (!event.target.value) {
//     console.log("Будь ласка, введіть ім'я!");
//   }
// });

// button.addEventListener(
//   'click',
//   () => {
//     console.log(`Привіт, ${usename}!`);
//     userName.value = '';
//     usename = '';
//   },
//   { once: true }
// );

//====================================================================//

// const form = document.querySelector('.js-form');

// const response = [];

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   data.forEach((value, key) => {
//     // console.log(`${key}: ${value}`);
//     response[key] = value;
//   });

//   console.log(response);
// });

//====================================================================//

// document.addEventListener('keydown', event => {
//   console.log(event.code);
// });

//====================================================================//

// const button = document.querySelector('.btn');
const box = document.querySelector('.box');

// const handleButtonClick = () => {
//   box.style.backgroundColor = 'teal';
//   box.style.marginLeft = '10px';
//   //   button.removeEventListener('click', onButtonClick);
// };

box.addEventListener('mousemove', () => {
  console.log('Move ');
});
