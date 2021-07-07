export { staticHeroes } from './res/static-heroes.js';
export { userHeroes } from './res/user-heroes.js';
export { heroesParams } from './res/heroes-params.js';
export { mergedHeroes } from './heroes/merge-heroes-data.js';
import './heroes/merge-heroes-data.js';
export { filterMask, filterFunction } from './filteres/filter-machine.js';
export { heroesGrid } from './heroes/create-heroes.js';
export { changeButtonsActivity } from './filteres/change-buttons-activity.js';
export { card } from './card.js';
export { sortHeroesGrid } from './sort/sort-machine.js';
export { createHero } from './heroes/create-hero.js';
import { createFilterButtons } from './filteres/create-filter-buttons.js';
//import { createSortButtons } from './sort/create-sort-buttons.js';
import { addSortOnButtons } from './sort/sort-function.js';

createFilterButtons();
addSortOnButtons();
