import { getExerciseById } from '../services/api';
import { favoritesExercisesStore } from '../store/exercises';
import { renderFavouriteExerciseCards } from './draw-filters';
import { openFeedbackModal } from './feedback-modal';
import svgSprite from '../../assets/icons/icons-sprite.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const exercisesListRef = document.querySelector('.js-exercises-cards');
const exerciseModalBackdropRef = document.querySelector(
  '.exercise-modal-backdrop'
);
const exerciseModalContentRef = exerciseModalBackdropRef.querySelector(
  '.exercise-modal__content'
);
const exerciseModalCloseBtnRef = exerciseModalBackdropRef.querySelector(
  '.exercise-modal__close-btn'
);

const EXERCISE_MODAL_BACKDROP_HIDDEN_CLASS =
  'exercise-modal-backdrop--is-hidden';

let currentExercise = null;

exercisesListRef.addEventListener('click', e => {
  const { target } = e;

  let exerciseId = target.dataset.modalOpen;

  if (exerciseId) {
    getExercise({ exerciseId });
    return;
  }

  const buttonRef = target.closest('button[data-modal-open]');
  exerciseId = buttonRef?.dataset?.modalOpen;

  if (exerciseId) {
    getExercise({ exerciseId });
    return;
  }
});

async function getExercise({ exerciseId }) {
  try {
    const data = await getExerciseById({
      exerciseId,
    });
    currentExercise = data;
    exerciseModalContentRef.innerHTML = renderExerciseCard(data);
    mountExerciseCard();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
    });
  }
}

function mountExerciseCard() {
  mountActionBar();
  exerciseModalCloseBtnRef.addEventListener('click', closeExerciseModal);
  exerciseModalBackdropRef.addEventListener(
    'click',
    closeExerciseModalOnBackdrop
  );
  document.addEventListener('keydown', closeExerciseModalOnEscape);
  exerciseModalBackdropRef.classList.remove(
    EXERCISE_MODAL_BACKDROP_HIDDEN_CLASS
  );
}

function unmountExerciseCard() {
  unmountActionBar();
  exerciseModalCloseBtnRef.removeEventListener('click', closeExerciseModal);
  exerciseModalBackdropRef.removeEventListener(
    'click',
    closeExerciseModalOnBackdrop
  );
  document.removeEventListener('keydown', closeExerciseModalOnEscape);
}

function closeExerciseModal() {
  exerciseModalBackdropRef.classList.add(EXERCISE_MODAL_BACKDROP_HIDDEN_CLASS);
  setTimeout(() => {
    unmountExerciseCard();
    currentExercise = null;
    exerciseModalContentRef.innerHTML = '';
  }, 500);
}

function closeExerciseModalOnEscape(e) {
  if (e.code === 'Escape') {
    closeExerciseModal();
  }
}

function closeExerciseModalOnBackdrop(e) {
  if (e.target === exerciseModalBackdropRef) {
    closeExerciseModal();
  }
}

function renderExerciseCard({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  popularity,
}) {
  return `
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${gifUrl}" alt="${name}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${name}</h3>

        ${renderExerciseRating({ rating })}

        ${renderExerciseInfo({
          bodyPart,
          equipment,
          target,
          burnedCalories,
          popularity,
        })}

        <p class="exercise-modal__desc">${description}</p>

        <div class="js-action-bar-wrapper">
            ${renderExerciseActionBar({ exerciseId: _id })}
        </div>
      </div>
  `;
}

function renderExerciseRating({ rating }) {
  return `
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${rating}</p>

          ${[1, 2, 3, 4, 5]
            .map(value =>
              renderRatingStar({ isActive: value <= Math.round(rating) })
            )
            .join('')}
        </div>
    `;
}

function renderRatingStar({ isActive }) {
  return `
        <svg class="exercise-modal__rating-star ${
          isActive ? 'exercise-modal__rating-star--accent' : ''
        }">
            <use href="${svgSprite}#star"></use>
        </svg>
    `;
}

const exerciseInfoLabels = [
  ['target', 'Target'],
  ['bodyPart', 'Body Part'],
  ['equipment', 'Equipment'],
  ['popularity', 'Popular'],
  ['burnedCalories', 'Burned Calories'],
];

function renderExerciseInfo(props) {
  return `
        <ul class="exercise-modal__info">
          ${exerciseInfoLabels
            .map(([infoKey, infoLabel]) => {
              const infoValue = props[infoKey];

              return infoValue
                ? `
                <li>
                    <h4 class="exercise-modal__info-title">${infoLabel}</h4>
                    <p class="exercise-modal__info-desc">${infoValue}</p>
                </li>
            `
                : ``;
            })
            .join('')}
        </ul>
    `;
}

function renderExerciseActionBar({ exerciseId }) {
  const isFavoriteExercise =
    favoritesExercisesStore.isFavoriteExercise(exerciseId);

  return `
        <div class="exercise-modal__action-bar ${
          isFavoriteExercise ? 'exercise-modal__action-bar--wrap' : ''
        }">
          ${renderActionButton({
            type: 'primary',
            className: isFavoriteExercise
              ? 'js-favorite-remove-btn'
              : 'js-favorite-add-btn',
            children: isFavoriteExercise
              ? `
                Remove from favorites
                <svg>
                  <use href="${svgSprite}#trash"></use>
                </svg>
              `
              : `
                Add to favorites
                <svg>
                  <use href="${svgSprite}#heart"></use>
                </svg>
              `,
          })}
          ${renderActionButton({
            type: 'secondary',
            className: `js-rating-btn ${
              isFavoriteExercise ? 'exercise-modal__btn--large' : ''
            }`,
            children: `
             Give a rating
           `,
          })}
        </div>
    `;
}

function refreshActionBar() {
  const actionBarRef = exerciseModalContentRef.querySelector(
    '.js-action-bar-wrapper'
  );

  unmountActionBar();
  actionBarRef.innerHTML = renderExerciseActionBar({
    exerciseId: currentExercise._id,
  });
  mountActionBar();
}

function mountActionBar() {
  const { favoriteAddButtonRef, favoriteRemoveButtonRef, ratingButtonRef } =
    getActionButtonsRefs();

  favoriteAddButtonRef?.addEventListener('click', addFavoriteExercise);
  favoriteRemoveButtonRef?.addEventListener('click', removeFavoriteExercise);
  ratingButtonRef?.addEventListener('click', handleOpenFeedBackModal);
}

function unmountActionBar() {
  const { favoriteAddButtonRef, favoriteRemoveButtonRef, ratingButtonRef } =
    getActionButtonsRefs();

  favoriteAddButtonRef?.removeEventListener('click', addFavoriteExercise);
  favoriteRemoveButtonRef?.removeEventListener('click', removeFavoriteExercise);
  ratingButtonRef?.removeEventListener('click', handleOpenFeedBackModal);
}

function renderActionButton({ type = '', className = '', children = '' }) {
  return `
        <button
            class="exercise-modal__btn exercise-modal__btn--${type} ${className}"
            type="button"
          >
            ${children}
        </button>
    `;
}

function getActionButtonsRefs() {
  const actionBarRef = exerciseModalContentRef.querySelector(
    '.exercise-modal__action-bar'
  );

  return {
    favoriteAddButtonRef: actionBarRef.querySelector('.js-favorite-add-btn'),
    favoriteRemoveButtonRef: actionBarRef.querySelector(
      '.js-favorite-remove-btn'
    ),
    ratingButtonRef: actionBarRef.querySelector('.js-rating-btn'),
  };
}

function addFavoriteExercise() {
  favoritesExercisesStore.addFavoriteExercise(currentExercise);
  refreshActionBar();
  renderFavouriteExerciseCards();
}

function removeFavoriteExercise() {
  favoritesExercisesStore.removeFavoriteExercise(currentExercise?._id);
  refreshActionBar();
  renderFavouriteExerciseCards();
}

function handleOpenFeedBackModal() {
  openFeedbackModal({ exerciseId: currentExercise._id });
}
