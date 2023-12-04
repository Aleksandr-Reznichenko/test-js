'use strict';

const numberOfCategories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);

  item.firstElementChild.classList.add('item-title');
  item.lastElementChild.classList.add('item-list', 'list');
});

numberOfCategories.classList.add('categories');

const itemElements = document.querySelectorAll('.item-list li');

itemElements.forEach(element => {
  element.classList.add('item-element');
});
