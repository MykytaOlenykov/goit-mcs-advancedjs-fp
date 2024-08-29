import { getFilters } from '../services/api';

import draw_filters from './draw-filters';

import { getExercises } from '../services/api';

const buttonsAll = document.querySelector('.exercises__buttons');
const exersice = document.querySelector('.exercises__cards');

let page_load = 1;

const onFilterButton = async event => {
  const selectedButton =
    event && event.target.nodeName === 'BUTTON'
      ? event.target.textContent.trim()
      : 'Muscles';

  page_load = 1;

  try {
    const data = await getFilters({
      params: {
        filter: selectedButton,
        page: page_load,
        limit: 12,
      },
    });

    draw_filters(data.results);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

if (buttonsAll) {
  buttonsAll.addEventListener('click', onFilterButton);
}

onFilterButton();

//get text/value for the exercises request
const onExercisesHandler = async event => {
  event.preventDefault();

  const link = event.target.closest('.exercises__cards-link');
  const selectedExc = link.getAttribute('data-name');
  console.log(selectedExc);

  //logic for the request

  const exercises = await getExercises({
    params: {
      filter: selectedExc,
      page: page_load,
      limit: 10,
    },
  });

  console.log(exercises);

  
};

if (exersice) {
  exersice.addEventListener('click', onExercisesHandler);
}
