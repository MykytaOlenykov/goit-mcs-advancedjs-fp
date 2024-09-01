import { favoritesExercisesStore } from '../store/exercises';
import { draw_exercies } from './draw-filters';
import { initializePagination } from './pagination';
import { debounce } from './helpers';

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    exerciseCards: document.querySelector('.exercises__cards'),
    paginationContainer: document.querySelector('#tui-pagination-container'),
  };

  const perPage = {
    small: 8,
    large: 10,
  };

  let currentPage = 1;
  let currentBreakpoint = window.innerWidth <= 768 ? 'small' : 'large';

  const getPaginatedExercises = (page, limit) => {
    const allExercises = favoritesExercisesStore.favoritesExercises;
    const totalExercises = allExercises.length;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedExercises = allExercises.slice(startIndex, endIndex);

    return { paginatedExercises, totalExercises };
  };

  const renderPaginatedExercises = () => {
    const { totalExercises, paginatedExercises } = getPaginatedExercises(
      currentPage,
      perPage[currentBreakpoint]
    );

    initializePagination(
      Math.ceil(totalExercises / perPage[currentBreakpoint]),
      perPage[currentBreakpoint],
      currentPage,
      onAfterMove
    );

    draw_exercies(paginatedExercises, true);
  };

  const onAfterMove = event => {
    currentPage = event.page;
    renderPaginatedExercises();
  };

  const onExerciseCardClick = e => {
    e.preventDefault();

    const removeButton = e.target.closest('.exercises__remove-btn');
    if (!removeButton) return;

    const exerciseId = removeButton.dataset.removeId;
    favoritesExercisesStore.removeFavoriteExercise(exerciseId);

    renderPaginatedExercises();
  };

  const onResize = debounce(() => {
    const newBreakpoint = window.innerWidth <= 768 ? 'small' : 'large';

    if (newBreakpoint === currentBreakpoint) return;
    currentBreakpoint = newBreakpoint;

    currentPage = 1;
    renderPaginatedExercises();
  }, 500);

  elements.exerciseCards.addEventListener('click', onExerciseCardClick);
  window.addEventListener('resize', onResize);

  renderPaginatedExercises();
});
