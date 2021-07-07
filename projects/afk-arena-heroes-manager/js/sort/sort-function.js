import { mergedHeroes, heroesGrid } from '../app.js';

const activeSortParams = [];

export function addSortOnButtons() {
  document.querySelectorAll('.sort__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btnClickEvent(btn);
    });
  });
}

function btnClickEvent(btn) {
  manageSortParams(btn, activeSortParams);

  const heroesContainer = document.querySelector('.heroes');
  const sortedHeroes = sortHeroesDatabase([...mergedHeroes], activeSortParams);
  const itemsArray = [];

  for (let i = 0; i < heroesGrid.length; i++) {
    itemsArray.push(heroesContainer.removeChild(heroesGrid[i]));
  }

  itemsArray
    .sort(
      (nodeA, nodeB) =>
        sortedHeroes.indexOf(
          sortedHeroes.find((item) => item.id === nodeA.id)
        ) -
        sortedHeroes.indexOf(sortedHeroes.find((item) => item.id === nodeB.id))
    )
    .forEach((node) => heroesContainer.appendChild(node));
}

function sortHeroesDatabase(heroesArray, sortMask) {
  sortMask.forEach((sortParam) =>
    heroesArray.sort(
      (heroA, heroB) => heroB.mask[sortParam] - heroA.mask[sortParam]
    )
  );

  return heroesArray;
}

/* function logNameOnly(arr) {
  console.log(arr.reduce((res, item) => res + item.name + ', ', ''));
} */

function manageSortParams(btn, activeSorts) {
  const activeSection = document.querySelector('.sort__active-sort');
  const inactiveSection = document.querySelector('.sort__inactive-sort');

  if (btn.classList[2] === 'sort__btn--inactive') {
    btn.classList.add('sort__btn--active');
    btn.classList.remove('sort__btn--inactive');
    activeSection.append(btn);
    activeSorts.push(+btn.id);
  } else {
    btn.classList.add('sort__btn--inactive');
    btn.classList.remove('sort__btn--active');
    inactiveSection.append(btn);
    activeSorts.splice(activeSorts.indexOf(btn.id), 1);
  }
}
