import Pagination from 'tui-pagination';
import { getFilters, getExercises } from '../services/api';
import {
  draw_exercies,
  draw_filters,
  remove_filters,
  remove_exercies,
} from './draw-filters';
import svgSprite from '../../assets/icons/icons-sprite.svg';

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

  const filtersPerPage = 12;
  const exercisesPerPage = window.innerWidth <= 768 ? 8 : 10;
  const visiblePagesPagination = 5;
  let currentPage = 1;
  let selectedCategory = 'Muscles';
  let selectedPart = '';
  let paginationInstance;

  const categoriesToFiltersMap = {
    Muscles: 'muscles',
    Equipment: 'equipment',
    'Body parts': 'bodypart',
  };

  const paginationIconsMap = {
    first: 'double-arrow-prev',
    prev: 'arrow-prev',
    next: 'arrow-next',
    last: 'double-arrow-next',
  };

  const removePagination = () => {
    elements.paginationContainer.classList.add(
      'exercises__search-form--hidden'
    );
    elements.paginationContainer.innerHTML = '';
  };

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
      behavior: 'smooth',
    });
  };

  const getMovePageBtn = (type, isDisabled = false) => {
    return `<a href="#" class="tui-page-btn tui-${type} ${
      isDisabled ? 'tui-is-disabled' : ''
    }">
        <svg width="20" height="20">
          <use href="${svgSprite}#${paginationIconsMap[type]}"></use>
        </svg>
      </a>`;
  };

  const initializePagination = (totalPages, perPage) => {
    if (totalPages > 1) {
      elements.paginationContainer.classList.remove(
        'exercises__search-form--hidden'
      );

      paginationInstance = new Pagination(elements.paginationContainer, {
        totalItems: totalPages * perPage,
        itemsPerPage: perPage,
        visiblePages: visiblePagesPagination,
        page: currentPage,
        template: {
          moveButton: data => {
            const { type } = data;

            return getMovePageBtn(type);
          },
          disabledMoveButton: data => {
            const { type } = data;

            return getMovePageBtn(type, true);
          },
        },
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
    elements.loader.classList.remove('exercises__search-form--hidden');

    try {
      const { results, totalPages } = await getFilters({
        params: {
          filter: category,
          page: currentPage,
          limit: filtersPerPage,
        },
      });

      elements.searchForm.classList.add('exercises__search-form--hidden');
      elements.breadcrumbsTitleDivider.classList.add(
        'exercises__search-form--hidden'
      );
      elements.breadcrumbsSubtitle.classList.add(
        'exercises__search-form--hidden'
      );

      draw_filters(results);
      initializePagination(totalPages, filtersPerPage);
    } catch (error) {
      console.error('Error fetching filters:', error);
    } finally {
      elements.loader.classList.add('exercises__search-form--hidden');
    }
  };

  const fetchAndDrawExercises = async params => {
    remove_exercies();
    removePagination();
    elements.loader.classList.remove('exercises__search-form--hidden');

    try {
      const { results, totalPages } = await getExercises({ params });
      draw_exercies(results);
      initializePagination(totalPages, exercisesPerPage);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      elements.loader.classList.add('exercises__search-form--hidden');
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

    elements.breadcrumbsSubtitle.classList.remove(
      'exercises__search-form--hidden'
    );
    elements.searchForm.classList.remove('exercises__search-form--hidden');
    elements.breadcrumbsTitleDivider.classList.remove(
      'exercises__search-form--hidden'
    );

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
      elements.searchBtnClear.classList.remove(
        'exercises__search-form--hidden'
      );
    } else {
      elements.searchBtnClear.classList.add('exercises__search-form--hidden');
    }
  };

  const onSearchInput = debounce(async () => {
    const searchValue = elements.searchInput.value;

    if (searchValue.trim() !== '') {
      elements.searchBtnClear.classList.remove(
        'exercises__search-form--hidden'
      );
    } else {
      elements.searchBtnClear.classList.add('exercises__search-form--hidden');
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
    elements.searchBtnClear.classList.add('exercises__search-form--hidden');

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
