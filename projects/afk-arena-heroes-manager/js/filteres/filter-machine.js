import {
  heroesParams,
  mergedHeroes,
  heroesGrid,
  changeButtonsActivity,
} from '../app.js';

const { factions, based, classes, ascentions } = heroesParams;

export const filterMask = {
  faction: [],
  base: [],
  class: [],
  ascention: [],
};

export function filterFunction(filterButtonId) {
  //разбиваем полученую строку на массив [тип параметра, его id(число или a)]
  const params = [filterButtonId.slice(0, -2), +filterButtonId.slice(-1)];

  if (!isNaN(params[1])) {
    //если нажата кнопка НЕ all
    if (filterMask[params[0]].includes(params[1])) {
      //если такой фильтр уже применён то удаляем его
      filterMask[params[0]] = filterMask[params[0]].filter(
        (item) => item !== params[1]
      );
      changeButtonsActivity(params[0], params[1], filterMask[params[0]]);
    } else {
      //если такой фильтр еще не включен, то включаем его
      filterMask[params[0]].push(+params[1]);
      changeButtonsActivity(params[0], params[1]);
    }
  } else {
    //если нажата кнопка all
    filterMask[params[0]] = [];
    changeButtonsActivity(params[0], params[1]);
  }

  mergedHeroes.forEach((hero) => {
    heroesGrid.find = [].find;
    const heroNode = heroesGrid.find((item) => item.id === hero.id);

    if (useFilterMask(hero)) {
      heroNode.classList.add('hero--hidden');
    } else heroNode.classList.remove('hero--hidden');
  });
}

function useFilterMask(hero) {
  let successFilterCounter = 0;

  if (
    filterMask.faction.length === 0 ||
    filterMask.faction.includes(factions.indexOf(hero.faction))
  )
    successFilterCounter++;
  if (
    filterMask.base.length === 0 ||
    filterMask.base.includes(based.indexOf(hero.base))
  )
    successFilterCounter++;
  if (
    filterMask.class.length === 0 ||
    filterMask.class.includes(classes.indexOf(hero.class))
  )
    successFilterCounter++;
  if (
    filterMask.ascention.length === 0 ||
    filterMask.ascention.includes(ascentions.indexOf(hero.ascention))
  )
    successFilterCounter++;

  return successFilterCounter < 4;
}
