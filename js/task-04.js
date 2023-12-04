'use strict';

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  email === '' || password === ''
    ? alert('All form fields must be filled in')
    : event.currentTarget.reset();

  console.log({ email, password });
}

const divEl = document.createElement('div');
divEl.classList.add('contact-form');
formEl.append(divEl);

const labelEl = document.querySelectorAll('.login-form label');
labelEl.forEach(element => {
  divEl.append(element);
  element.classList.add('contact-label');

  const inputEl = element.querySelector('input');
  inputEl.classList.add('contact-input');
});

const buttonEl = document.querySelector('.login-form button');
formEl.insertAdjacentElement('beforeend', buttonEl);
buttonEl.classList.add('btn-form');
