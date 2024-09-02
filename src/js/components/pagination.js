import Pagination from 'tui-pagination';
import svgSprite from '../../assets/icons/icons-sprite.svg';

const paginationContainer = document.querySelector('#tui-pagination-container');
let paginationInstance;
const visiblePagesPagination = 5;

const paginationIconsMap = {
  first: 'double-arrow-prev',
  prev: 'arrow-prev',
  next: 'arrow-next',
  last: 'double-arrow-next',
};

export const removePagination = () => {
  paginationContainer.classList.add('visually-hidden');
  paginationContainer.innerHTML = '';
};

const getMovePageBtn = (type, isDisabled = false) => {
  return `<a href="#" class="tui-page-btn tui-${type} ${
    isDisabled ? 'tui-is-disabled' : ''
  }" aria-label="page-${type}">
      <svg width="20" height="20">
        <use href="${svgSprite}#${paginationIconsMap[type]}"></use>
      </svg>
    </a>`;
};

export const initializePagination = (
  totalPages,
  perPage,
  currentPage,
  onAfterMove
) => {
  if (totalPages > 1) {
    paginationContainer.classList.remove('visually-hidden');

    paginationInstance = new Pagination(paginationContainer, {
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

    paginationInstance.on('afterMove', onAfterMove);
  } else {
    removePagination();
  }
};
