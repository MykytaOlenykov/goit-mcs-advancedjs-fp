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
          <span>Workout</span>
          ${key.rating}

          <button class="exercises__name-btn" type="button" data-modal-open="">Start</button>
          <h3>${key.name}</h3>
          <ul>
          <li>BurnedCalories${key.burnedCalories}</li>
          <li>Body part${key.bodyPart}</li>
          <li>Target${key.target}</li>


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

  cardList.innerHTML = markup_exercies;
}
