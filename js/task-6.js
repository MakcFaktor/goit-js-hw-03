'use strict';

const buttonTask6Ref = document.querySelector('#task6');

buttonTask6Ref.addEventListener('click', () => {
  const products = [{
      name: 'Радар',
      price: 1300,
      quantity: 4
    },
    {
      name: 'Сканер',
      price: 2700,
      quantity: 3
    },
    {
      name: 'Дроид',
      price: 400,
      quantity: 7
    },
    {
      name: 'Захват',
      price: 1200,
      quantity: 2
    },
  ];

  const calculateTotalPrice = (allProdcuts, productName) => {
    let totalAmount = 0;
    for (const product of allProdcuts) {
      if (product.name === productName) {
        totalAmount = product.price * product.quantity;
      }
    }
    return totalAmount;
  };

  console.log(calculateTotalPrice(products, 'Радар'));

  console.log(calculateTotalPrice(products, 'Дроид'));

  console.log(calculateTotalPrice(products, 'Сканер'));
});