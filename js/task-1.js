'use strict';

const buttonTask1Ref = document.querySelector('#task1');

buttonTask1Ref.addEventListener('click', () => {

  const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;

  const keys = Object.keys(user);
  for (const key of keys) {
    Object.keys(user);
    user[key];
    console.log(`${key}: ${user[key]}`);
  }
});