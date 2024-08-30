import { getFilters } from '../services/api';

import draw_filters from './draw-filters';

import { getExercises } from '../services/api';

import { draw_exercies } from './draw-filters'

const buttonsAll = document.querySelector('.exercises__buttons');
const exersice = document.querySelector('.exercises__cards');

let page_load = 1;

const onFilterButton = async event => {
  const selectedButton =
    event && event.target.nodeName === 'BUTTON'
      ? event.target.textContent.trim()
      : 'Muscles';

  page_load = 1;
  exersice.classList.remove('exercises__cards-wrkt'); 

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
  if (!link) {
    return
;  }
  const selectedExc = link.getAttribute('data-name');
  const limit = window.innerWidth <= 768 ? 8 : 10;


  //logic for the request

  try {
    const exercises = await getExercises({
      params: {
        filter: selectedExc,
        page: page_load,
        limit: limit,
      },
    });
  
    draw_exercies(exercises.results);

  } catch(error) {
    console.log('Error fetching exercises:', error);
  }

};

if (exersice) {
  exersice.addEventListener('click', onExercisesHandler);
}
