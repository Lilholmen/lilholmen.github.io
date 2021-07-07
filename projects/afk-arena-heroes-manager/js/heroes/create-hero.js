import { card, heroesParams } from '../app.js';

export function createHero(heroStats) {
  const hero = document.createElement('div');

  //добавляем классы и id для DOM елемента
  hero.classList.add('hero');
  hero.classList.add(heroStats.faction);
  hero.classList.add(heroStats.ascention);
  hero.id = heroStats.id;

  //парметры для иконки героя
  hero.style.backgroundImage = 'url("img/' + heroStats.bgImage + '.jpg")';
  hero.style.backgroundSize = '64px';

  //вешаем событие по нажатию
  hero.addEventListener('click', card);

  //добавляем фракционную иконку и там же сигнатуру(временно!!)
  addFactionIcon(hero, heroStats);

  //если есть фурнитура то добавляем гемы
  if (heroStats.furniture > 2) {
    addFurnitureGems(hero, heroStats.furniture == 9);
  }

  //еслиу героя есть звезды то добавлем как потомков
  if (heroStats.stars) {
    addStars(hero, heroStats.stars);
  }

  return hero;
}

function addFactionIcon(hero, heroStats) {
  //добавляем иконку класса как потомка
  const factionIcon = document.createElement('img');
  factionIcon.src = `img/faction_${heroesParams.factions.indexOf(
    heroStats.faction
  )}.png`;
  factionIcon.classList.add('faction-icon');

  //если есть сигнатурка то добавляем класс
  if (heroStats.si !== null) {
    const siSwitch =
      heroStats.si > 29
        ? 30
        : heroStats.si > 19
        ? 20
        : heroStats.si > 9
        ? 10
        : 0;
    factionIcon.classList.add('si' + siSwitch);
  }

  hero.appendChild(factionIcon);
}

function addFurnitureGems(hero, isFull) {
  const gemSection = document.createElement('div');
  gemSection.classList.add('hero__furniture-section');

  let furnitureGem = document.createElement('img');
  furnitureGem.src = 'img/fur.png';
  furnitureGem.classList.add('furniture-section__gem');

  furnitureGem = gemSection.appendChild(furnitureGem).cloneNode();
  if (isFull) {
    gemSection.appendChild(furnitureGem);
  }

  hero.appendChild(gemSection);
}

function addStars(hero, starsCount) {
  const starSection = document.createElement('div');
  starSection.className = 'hero__star-section';

  for (let starN = 1; starN <= starsCount; starN++) {
    const starImg = document.createElement('img');
    starImg.src = 'img/ascention_star.png';
    starImg.className = 'star-section__star';

    starSection.appendChild(starImg);
  }

  hero.appendChild(starSection);
}
