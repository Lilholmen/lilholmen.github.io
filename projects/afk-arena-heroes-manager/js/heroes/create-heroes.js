import { mergedHeroes, createHero } from '../app.js';

createHeroes();

export const heroesGrid = document.querySelectorAll('.hero');

function createHeroes() {
  const heroArea = document.getElementById('heroes-section');

  mergedHeroes.map((hero) => {
    //добавляем на страницу всех героев пользователя
    heroArea.appendChild(createHero(hero));
  });
}
