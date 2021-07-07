export function changeButtonsActivity(
  targetFilterType,
  targetFilterId,
  modifier //получаем массив активных фильтров, если удаляется фильтр
) {
  const targetBtns = document.querySelectorAll(
    `.filters__btn--${targetFilterType}`
  );

  if (isNaN(targetFilterId)) {
    targetBtns.forEach((btn) => btn.classList.remove('filters__btn--active'));
    targetBtns[0].classList.add('filters__btn--active');
    return;
  }

  if (modifier) {
    targetBtns[targetFilterId + 1].classList.remove('filters__btn--active');
    if (modifier.length === 0) {
      document
        .querySelector(`#${targetFilterType}_a`)
        .classList.add('filters__btn--active');
    }
    return;
  }

  targetBtns[0].classList.remove('filters__btn--active');
  targetBtns[targetFilterId + 1].classList.add('filters__btn--active');
}
