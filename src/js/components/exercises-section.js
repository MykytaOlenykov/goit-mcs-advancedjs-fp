import Pagination from 'tui-pagination';
import { getFilters, getExercises } from '../services/api';
import { draw_exercies, draw_filters, remove_filters, remove_exercies } from './draw-filters';

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    buttonsAll: document.querySelector('.exercises__buttons'),
    exerciseCards: document.querySelector('.exercises__cards'),
    searchBtnClear: document.querySelector('#search-btn-clear'),
    searchForm: document.querySelector('#search-form'),
    searchInput: document.querySelector('#search-input'),
    breadcrumbsTitle: document.querySelector(
      '#exercises-breadcrumbs h2'
    ),
    breadcrumbsTitleDivider: document.querySelector(
      '#exercises-breadcrumbs span'
    ),
    breadcrumbsSubtitle: document.querySelector('#exercises-breadcrumbs p'),
    paginationContainer: document.querySelector('#tui-pagination-container'),
    loader: document.querySelector('#loader'),
  };

  const filtersPerPage = 12;
  const exercisesPerPage = window.innerWidth <= 768 ? 8 : 10;
  const visiblePagesPagination = 10;
  let currentPage = 1;
  let selectedCategory = 'Muscles';
  let selectedPart = '';
  let paginationInstance;

  const categoriesToFiltersMap = {
    Muscles: 'muscles',
    Equipment: 'equipment',
    'Body parts': 'bodypart',
  };

  const removePagination = () => {
    elements.paginationContainer.classList.add('hidden');
    elements.paginationContainer.innerHTML = '';
  }

  const capitalizeFirstLetter = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const debounce = (func, delay) => {
    let timeout;

    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const initializePagination = (totalPages, perPage) => {
    if (totalPages > 1) {
      elements.paginationContainer.classList.remove('hidden');

      paginationInstance = new Pagination(elements.paginationContainer, {
        totalItems: totalPages * perPage,
        itemsPerPage: perPage,
        visiblePages: visiblePagesPagination,
        page: currentPage,
      });

      paginationInstance.on('afterMove', event => {
        currentPage = event.page;
        if (selectedPart) {
          fetchAndDrawExercises({
            [categoriesToFiltersMap[selectedCategory]]: selectedPart,
            page: currentPage,
            limit: exercisesPerPage,
          });
        } else {
          fetchAndDrawFilters(selectedCategory);
        }

        scrollToTop();
      });
    } else {
      removePagination();
    }
  };

  const fetchAndDrawFilters = async (category = 'Muscles') => {
    remove_filters();
    removePagination();
    elements.loader.classList.remove('hidden');

    try {
      const { results, totalPages } = await getFilters({
        params: {
          filter: category,
          page: currentPage,
          limit: filtersPerPage,
        },
      });

      elements.searchForm.classList.add('hidden');
      elements.breadcrumbsTitleDivider.classList.add('hidden');
      elements.breadcrumbsSubtitle.classList.add('hidden');

      draw_filters(results);
      initializePagination(totalPages, filtersPerPage);
    } catch (error) {
      console.error('Error fetching filters:', error);
    } finally {
      elements.loader.classList.add('hidden');
    }
  };

  const fetchAndDrawExercises = async params => {
    remove_exercies();
    removePagination();
    elements.loader.classList.remove('hidden');

    try {
      const { results, totalPages } = await getExercises({ params });
      draw_exercies(results);
      initializePagination(totalPages, exercisesPerPage);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      elements.loader.classList.add('hidden');
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

    elements.breadcrumbsSubtitle.classList.remove('hidden');
    elements.searchForm.classList.remove('hidden');
    elements.breadcrumbsTitleDivider.classList.remove('hidden');

    currentPage = 1;

    scrollToTop();
    await fetchAndDrawExercises({
      [categoriesToFiltersMap[selectedCategory]]: selectedPart,
      page: currentPage,
      limit: exercisesPerPage,
    });
  };

  const toggleSearchClearButton = () => {
    if (elements.searchInput.value.trim() !== '') {
      elements.searchBtnClear.classList.remove('hidden');
    } else {
      elements.searchBtnClear.classList.add('hidden');
    }
  };

  const onSearchInput = debounce(async () => {
    const searchValue = elements.searchInput.value;

    if (searchValue.trim() !== '') {
      elements.searchBtnClear.classList.remove('hidden');
    } else {
      elements.searchBtnClear.classList.add('hidden');
    }

    currentPage = 1;

    await fetchAndDrawExercises({
      [categoriesToFiltersMap[selectedCategory]]: selectedPart,
      keyword: searchValue,
      page: currentPage,
      limit: exercisesPerPage,
    });
  }, 300);

  const onClearSearchClick = () => {
    elements.searchInput.value = '';
    elements.searchInput.focus();
    elements.searchBtnClear.classList.add('hidden');

    currentPage = 1;

    fetchAndDrawExercises({
      [categoriesToFiltersMap[selectedCategory]]: selectedPart,
      keyword: '',
      page: currentPage,
      limit: exercisesPerPage,
    });
  };

  const onTitleClick = async () => {
    if (!selectedPart) return;

    currentPage = 1;
    selectedPart = '';
    await fetchAndDrawFilters(selectedCategory);
  };

  // Event listeners
  elements.buttonsAll?.addEventListener('click', onFilterButtonClick);
  elements.exerciseCards?.addEventListener('click', onExerciseCardClick);
  elements.searchInput?.addEventListener('input', () => {
    toggleSearchClearButton();
    onSearchInput();
  });
  elements.searchBtnClear?.addEventListener('click', onClearSearchClick);
  elements.breadcrumbsTitle?.addEventListener('click', onTitleClick);

  // Initial load
  fetchAndDrawFilters(selectedCategory);
});
