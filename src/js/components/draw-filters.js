import { favoritesExercisesStore } from '../store/exercises';
import svgSprite from '../../assets/icons/icons-sprite.svg';

const cardList = document.querySelector('.exercises__cards');
const cardListEmpty = document.querySelector('.exercises__cards-empty');

export function remove_filters() {
  cardList.innerHTML = '';
  cardList.classList.remove('exercises__cards-wrkt');
}

export function draw_filters(cards) {
  cardListEmpty.classList.add('visually-hidden');

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

export function remove_exercies() {
  cardList.innerHTML = '';
  cardList.classList.remove('exercises__cards-wrkt');
}

export function draw_exercies(exercises, isFavouritePage = false) {
  cardListEmpty.classList.add('visually-hidden');

  const getChangableFragment = exercise =>
    isFavouritePage
      ? `<button class="exercises__remove-btn" type="button" data-remove-id="${exercise._id}">
          <svg width="18" height="18" style="stroke: black">
            <use href="${svgSprite}#trash"></use>
          </svg>
      </button>`
      : `<span class="exercises__name-rating">
          ${exercise.rating}
           <svg>
            <use href="${svgSprite}#star"></use>
            </svg>
      </span>`;

  const markup_exercies = exercises
    .map(
      exercise =>
        `<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        ${getChangableFragment(exercise)}
        <button class="exercises__name-btn" type="button" data-modal-open="${
          exercise._id
        }">Start
          <svg class="exercises__name-icon" width="16" height="16">
            <use href="${svgSprite}#arrow"></use>
          </svg>
        </button>
        </div>

        <div class="exercises__name-h3-wraper">
        <h3 class="exercises__name-h3">${exercise.name}</h3>
        <div class="exersize__h3-icon-wraper">
          <svg class="exersize__h3-icon" width="18" height="18">
            <use href="${svgSprite}#runner"></use>
          </svg>
        </div>
        </div>

        <ul class="exercises__name-props" >
            <li class="exercises__name-item" >BurnedCalories:<span class="exercises__name-clr">${
              exercise.burnedCalories
            }</span></li>
            <li class="exercises__name-item">Body part:<span class="exercises__name-clr">${
              exercise.bodyPart
            }</span></li>
            <li class="exercises__name-item">Target:<span class="exercises__name-clr">${
              exercise.target
            }</span></li>
        </ul>
        </li>
        `
    )
    .join('');

  const emptyMessage = isFavouritePage
    ? `It appears that you haven\'t added any exercises to your favorites yet.
      To get started, you can add exercises that you like to your favorites
      for easier access in the future.`
    : 'No exercises found';

  if (exercises.length === 0) {
    cardList.innerHTML = '';
    cardListEmpty.classList.remove('visually-hidden');
    cardListEmpty.innerHTML = emptyMessage;
    return;
  }

  cardList.classList.add('exercises__cards-wrkt');
  cardList.innerHTML = markup_exercies;
}

export const renderFavouriteExerciseCards = () => {
  if (!window.location.pathname.includes('favorites')) return;

  const favouritesExercises = favoritesExercisesStore.favoritesExercises;
  draw_exercies(favouritesExercises, true);
};
