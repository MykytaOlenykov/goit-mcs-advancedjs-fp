import { getFilters, getExercises } from '../services/api';
import {
  draw_exercies,
  draw_filters,
  remove_filters,
  remove_exercies,
} from './draw-filters';
import { initializePagination, removePagination } from './pagination';
import { capitalizeFirstLetter, debounce } from './helpers';

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    buttonsAll: document.querySelector('.exercises__buttons'),
    exerciseCards: document.querySelector('.exercises__cards'),
    searchBtnClear: document.querySelector('#search-btn-clear'),
    searchForm: document.querySelector('#search-form'),
    searchInput: document.querySelector('#search-input'),
    breadcrumbsTitle: document.querySelector('#exercises-breadcrumbs h2'),
    breadcrumbsTitleDivider: document.querySelector(
      '#exercises-breadcrumbs span'
    ),
    breadcrumbsSubtitle: document.querySelector('#exercises-breadcrumbs p'),
    paginationContainer: document.querySelector('#tui-pagination-container'),
    loader: document.querySelector('#loader'),
  };

  let filtersPerPage = {
    small: 9,
    large: 12,
  }
  let exercisesPerPage = {
    small: 8,
    large: 10,
  }
  let currentBreakpoint = window.innerWidth <= 768 ? 'small' : 'large';
  let currentPage = 1;
  let selectedCategory = 'Muscles';
  let selectedPart = '';

  const categoriesToFiltersMap = {
    Muscles: 'muscles',
    Equipment: 'equipment',
    'Body parts': 'bodypart',
  };

  const onAfterMove = event => {
    currentPage = event.page;
    if (selectedPart) {
      fetchAndDrawExercises({
        [categoriesToFiltersMap[selectedCategory]]: selectedPart,
        page: currentPage,
        limit: exercisesPerPage[currentBreakpoint],
      });
    } else {
      fetchAndDrawFilters(selectedCategory);
    }
  }

  const fetchAndDrawFilters = async (category = 'Muscles') => {
    remove_filters();
    removePagination();
    elements.loader.classList.remove('visually-hidden');

    try {
      const { results, totalPages } = await getFilters({
        params: {
          filter: category,
          page: currentPage,
          limit: filtersPerPage[currentBreakpoint],
        },
      });

      elements.searchForm.classList.add('exercises__search-form--hidden');
      elements.breadcrumbsTitleDivider.classList.add('visually-hidden');
      elements.breadcrumbsSubtitle.classList.add('visually-hidden');

      draw_filters(results);
      initializePagination(
        totalPages,
        filtersPerPage[currentBreakpoint],
        currentPage,
        onAfterMove
      );
    } catch (error) {
      console.error('Error fetching filters:', error);
    } finally {
      elements.loader.classList.add('visually-hidden');
    }
  };

  const fetchAndDrawExercises = async params => {
    remove_exercies();
    removePagination();
    elements.loader.classList.remove('visually-hidden');

    try {
      const { results, totalPages } = await getExercises({ params });
      draw_exercies(results);
      initializePagination(
        totalPages,
        exercisesPerPage[currentBreakpoint],
        currentPage,
        onAfterMove
      );
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      elements.loader.classList.add('visually-hidden');
    }
  };

  const onFilterButtonClick = async event => {
    if (event.target.nodeName !== 'BUTTON') return;

    selectedCategory = event.target.textContent.trim();

    currentPage = 1;
    selectedPart = '';

    await fetchAndDrawFilters(selectedCategory);
  };

  const onExerciseCardClick = async event => {
    event.preventDefault();
    const link = event.target.closest('.exercises__cards-link');
    if (!link) return;

    selectedPart = link.getAttribute('data-name');
    elements.breadcrumbsSubtitle.textContent =
      capitalizeFirstLetter(selectedPart);

    elements.breadcrumbsSubtitle.classList.remove('visually-hidden');
    elements.searchForm.classList.remove('exercises__search-form--hidden');
    elements.breadcrumbsTitleDivider.classList.remove('visually-hidden');

    currentPage = 1;

    await fetchAndDrawExercises({
      [categoriesToFiltersMap[selectedCategory]]: selectedPart,
      page: currentPage,
      limit: exercisesPerPage[currentBreakpoint],
    });
  };

  const toggleSearchClearButton = () => {
    if (elements.searchInput.value.trim() !== '') {
      elements.searchBtnClear.classList.remove('visually-hidden');
    } else {
      elements.searchBtnClear.classList.add('visually-hidden');
    }
  };

  const onSearchInput = debounce(async () => {
    const searchValue = elements.searchInput.value;

    if (searchValue.trim() !== '') {
      elements.searchBtnClear.classList.remove('visually-hidden');
    } else {
      elements.searchBtnClear.classList.add('visually-hidden');
    }

    currentPage = 1;

    await fetchAndDrawExercises({
      [categoriesToFiltersMap[selectedCategory]]: selectedPart,
      keyword: searchValue,
      page: currentPage,
      limit: exercisesPerPage[currentBreakpoint],
    });
  }, 300);

  const onClearSearchClick = () => {
    elements.searchInput.value = '';
    elements.searchInput.focus();
    elements.searchBtnClear.classList.add('visually-hidden');

    currentPage = 1;

    fetchAndDrawExercises({
      [categoriesToFiltersMap[selectedCategory]]: selectedPart,
      keyword: '',
      page: currentPage,
      limit: exercisesPerPage[currentBreakpoint],
    });
  };

  const onTitleClick = async () => {
    if (!selectedPart) return;

    currentPage = 1;
    selectedPart = '';
    await fetchAndDrawFilters(selectedCategory);
  };

  const onResize = debounce(() => {
    const newBreakpoint = window.innerWidth <= 768 ? 'small' : 'large';

    if (newBreakpoint === currentBreakpoint) return;
    currentBreakpoint = newBreakpoint;

    currentPage = 1;
    if (selectedPart) {
      fetchAndDrawExercises({
        [categoriesToFiltersMap[selectedCategory]]: selectedPart,
        page: currentPage,
        limit: exercisesPerPage[currentBreakpoint],
      });
    } else {
      fetchAndDrawFilters(selectedCategory);
    }
  }, 500);

  // Event listeners
  elements.buttonsAll?.addEventListener('click', onFilterButtonClick);
  elements.exerciseCards?.addEventListener('click', onExerciseCardClick);
  elements.searchInput?.addEventListener('input', () => {
    toggleSearchClearButton();
    onSearchInput();
  });
  elements.searchBtnClear?.addEventListener('click', onClearSearchClick);
  elements.breadcrumbsTitle?.addEventListener('click', onTitleClick);

  window.addEventListener('resize', onResize);

  // Initial load
  fetchAndDrawFilters(selectedCategory);
});
