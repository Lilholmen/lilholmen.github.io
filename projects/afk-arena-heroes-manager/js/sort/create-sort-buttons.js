import { heroesParams, sortHeroesGrid } from '../app.js';

const { factions, based, classes, ascentions, sigItems, furnitures } =
  heroesParams;

const sortParams = {
  faction: factions,
  base: based,
  class: classes,
  ascention: ascentions,
  si: sigItems,
  furniture: furnitures,
};

const propertys = ['faction', 'base', 'class', 'ascention', 'si', 'furniture'];

export function createSortButtons() {
  const sortButtonsArea = document.querySelector('.sort__active-sort');

  for (let param in sortParams) {
    const sortBtn = document.createElement('button');

    sortBtn.className = 'sort_btn';
    sortBtn.textContent = param;
    sortBtn.addEventListener('click', () => {
      sortHeroesGrid(sortParams[param], param);
    });

    sortButtonsArea.append(sortBtn);
  }
}

export function createSortButtons1() {
  const sortButtonsArea = document.querySelector('.sort__inactive-sort');

  propertys.forEach((prop) => {
    const sortBtn = document.createElement('button');

    sortBtn.classList.add('sort_btn');
    sortBtn.textContent = prop;

    sortBtn.addEventListener('click', () => {
      sortHeroesGrid(prop);
    });

    sortButtonsArea.append(sortBtn);
  });
}
