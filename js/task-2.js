'use strict';

const buttonTask2Ref = document.querySelector('#task2');

buttonTask2Ref.addEventListener('click', () => {
  const countProps = function (obj) {
    const keys = Object.keys(obj);
    return keys.length;
  };

  console.log(countProps({}));

  console.log(countProps({
    name: 'Mango',
    age: 2
  }));

  console.log(countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500
  }));
});