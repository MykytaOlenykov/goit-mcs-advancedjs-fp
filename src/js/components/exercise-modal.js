import { getExerciseById } from '../services/api';

const exerciseModalContentRef = document.querySelector(
  '.exercise-modal__content'
);

(async () => {
  try {
    const data = await getExerciseById({
      exerciseId: '64f389465ae26083f39b17a2',
    });
    const markup = renderExerciseCard(data);
    exerciseModalContentRef.innerHTML = markup;
  } catch (error) {}
})();

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

        ${renderExerciseActionBar({ exerciseId: _id })}
      </div>
  `;
}

function renderExerciseRating({ rating }) {
  return `
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${rating}</p>
         
          ${[1, 2, 3, 4, 5].map(value =>
            renderRatingStar({ isActive: value <= Math.round(rating) })
          )}
        </div>
    `;
}

function renderRatingStar({ isActive }) {
  return `
        <svg class="exercise-modal__rating-star ${
          isActive ? 'exercise-modal__rating-star--accent' : ''
        }">
            <use href="./assets/icons/icons-sprite.svg#star"></use>
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
          ${exerciseInfoLabels.map(([infoKey, infoLabel]) => {
            const infoValue = props[infoKey];

            return infoValue
              ? `
                <li>
                    <h4 class="exercise-modal__info-title">${infoLabel}</h4>
                    <p class="exercise-modal__info-desc">${infoValue}</p>
                </li>
            `
              : ``;
          })}
        </ul>
    `;
}

function renderExerciseActionBar({ exerciseId }) {
  return `
        <div class="exercise-modal__action-bar">
          <button
            class="exercise-modal__btn exercise-modal__btn--primary"
            type="button"
          >
            Add to favorites
            <svg>
              <use href="./assets/icons/icons-sprite.svg#heart"></use>
            </svg>
          </button>
          <button
            class="exercise-modal__btn exercise-modal__btn--secondary"
            type="button"
          >
            Give a rating
          </button>
        </div>
    `;
}
