import { favoritesExercisesStore } from '../store/exercises';
import {
  renderFavouriteExerciseCards,
} from './draw-filters';

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    exerciseCards: document.querySelector('.exercises__cards'),
  };

  renderFavouriteExerciseCards();

  elements.exerciseCards.addEventListener('click', e => {
    e.preventDefault();

    const removeButton = e.target.closest('.exercises__remove-btn');

    if (!removeButton) return;

    const exerciseId = removeButton.dataset.removeId;
    favoritesExercisesStore.removeFavoriteExercise(exerciseId);

    renderFavouriteExerciseCards();
  });
});
