'use strict';

let count = 0;
const value = document.querySelector('.container__count-value');
const btns = document.querySelectorAll('.container__btn');

btns.forEach((item) => {
  item.addEventListener('click', (event) => {
    const styles = event.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    value.style.color = count > 0 ? 'green' : count < 0 ? 'red' : '#102a42';
    value.textContent = count;
  });
});
