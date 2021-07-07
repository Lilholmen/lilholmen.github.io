import { filterFunction } from '../app.js';

export function createFilterButtons() {
  const filters = [7, 3, 5, 7];

  document.querySelectorAll('.btn-container').forEach((filterBlock, index) => {
    const filterType = filterBlock.classList[1].slice(15);

    filterBlock.append(createFilterButton(filterType, 'a'));

    for (let i = 0; i < filters[index]; i++) {
      filterBlock.append(createFilterButton(filterType, i));
    }
  });
}

function createFilterButton(type, index) {
  const btn = document.createElement('button');

  btn.id = type + '_' + index;
  btn.classList.add('filters__btn', `filters__btn--${type}`);
  if (index === 'a') {
    btn.classList.add('filters__btn--all', 'filters__btn--active');
  } else {
    btn.style.backgroundImage = 'url("img/' + btn.id + '.png")';
  }

  btn.addEventListener('click', () => filterFunction(btn.id));

  return btn;
}
