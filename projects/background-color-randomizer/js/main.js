'use strict';

const btn = document.getElementById('btn');
const color = document.querySelector('.container__color');

btn.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += getRandomHex().toString(16);
  }

  color.textContent = hexColor;
  color.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomHex() {
  return Math.floor(Math.random() * 16);
}
