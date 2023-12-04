'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  if (event.currentTarget.value.trim() !== '') {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});

const inputText = document.querySelector('input');
inputText.classList.add('input-text');

const heading = document.querySelector('h1');
heading.classList.add('output-title');
