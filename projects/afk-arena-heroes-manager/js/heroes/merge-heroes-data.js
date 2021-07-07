import { staticHeroes, userHeroes } from '../app.js';

const ascentions = [
  'none', //0
  'elite', //1
  'eliteP', //2
  'legendary', //3
  'legendaryP', //4
  'mythic', //5
  'mythicP', //6
  'ascended', //7
];

//[fraction, base, class, ascention, si, furniture]

export const mergedHeroes = [];
userHeroes.forEach((hero, index) => mergeHero(hero, index));

function mergeHero(hero, n) {
  //проверям есть ли данный герой у пользователя
  if (hero.ascention === 'none') {
    //return; врменно отключаем
  }
  //в пустой объект записываем !ВНАЧАЛЕ баззовые потом пользовательское
  const merged = {};
  Object.assign(merged, staticHeroes[n], hero);
  //создаем у объекта маску характеристик для филтрации и сорт
  merged.mask = [
    +merged.bgImage.slice(0, 1),
    +merged.bgImage.slice(1, 2),
    +merged.bgImage.slice(2, 3),
    ascentions.indexOf(merged.ascention) + merged.stars,
    merged.si,
    merged.furniture,
  ];
  //записываем в наш массив
  mergedHeroes.push(merged);
}
