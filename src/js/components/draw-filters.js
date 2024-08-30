const cardList = document.querySelector('.exercises__cards');
const cardListEmpty = document.querySelector('.exercises__cards-empty');

export function draw_filters(cards) {
  cardListEmpty.classList.add('hidden');

  const markup = cards
    .map(
      card =>
        `<li class="exercises__cards-item">
            <a class="exercises__cards-link" href="#" data-name="${card.name}">
            <p class="exercises__cards-descr">
                <span class="exercises__cards-metadata-name">${card.name}</span>
                <span class="exercises__cards-metadata-filter">${card.filter}</span>
            </p>
            <img
                class="exercises__cards-image"
                src="${card.imgURL}"
                alt="${card.name}"
                loading="lazy"
                />
            </a>
        </li>
        `
    )
    .join('');

  cardList.innerHTML = markup;
}

export function draw_exercies(keyword) {
  cardListEmpty.classList.add('hidden');

  const markup_exercies = keyword
    .map(
      key =>
        `<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        <span class="exercises__name-rating">${key.rating}</span>
        <button class="exercises__name-btn" type="button" data-modal-open="">Start</button>
        
          <svg class="exercises__name-icon" width="16" height="16" style="stroke: black;">
            <use href="./assets/icons/icons-sprite.svg#arrow"></use>
          </svg>
        
        
        </div>

        <div class="exercises__name-h3-wraper">
        <h3 class="exercises__name-h3">${key.name}</h3>
        <div class="exersize__h3-icon-wraper">
          <svg class="exersize__h3-icon" width="18" height="18">
            <use href="../assets/icons/icons-sprite.svg#runner"></use>
          </svg>
        </div>
        </div>

        <ul class="exercises__name-props" >
            <li class="exercises__name-item" >BurnedCalories:<span class="exercises__name-clr">${key.burnedCalories}</span></li>
            <li class="exercises__name-item">Body part:<span class="exercises__name-clr">${key.bodyPart}</span></li>
            <li class="exercises__name-item">Target:<span class="exercises__name-clr">${key.target}</span></li>
        </ul>
        </li>
        `
    )
    .join('');

  if (keyword.length === 0) {
    cardList.innerHTML = '';
    cardListEmpty.classList.remove('hidden');
    cardListEmpty.innerHTML = 'No exercises found';
    return;
  }

  cardList.classList.add('exercises__cards-wrkt');  
  cardList.innerHTML = markup_exercies;
}
