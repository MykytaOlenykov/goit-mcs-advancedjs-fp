const cardList = document.querySelector('.exercises__cards');

export default function draw_filters(cards) {
  const markup = cards
    .map(
      card =>
        `<li class="exercises__cards-item">
            <a class="exercises__cards-link" href="#" data-name="${card.name}">
            <p class="exercises__cards-descr">
                <span class="exercises__cards-metadata-name">${card.name}</span>
                <span class="exercises__cards-metadata-filter">${card.filter}</span>
            </p>
            <img
                class="exercises__cards-image"
                src="${card.imgURL}"
                alt="${card.name}"
                />
            </a>
        </li>
        `
    )
    .join('');

  cardList.innerHTML = markup;

  //     const cardItems = document.querySelectorAll('.exercises__cards-item');
  // cardItems.forEach(item => {
  //   const imgURL = item.querySelector('.exercises__cards-image').src;
  //   item.style.background = `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL}) lightgray -44.056px -4.58px / 132.562% 121.147% no-repeat`;
  // });
}


function draw_exercies(keyword) {
  const markup = keyword
  .map(
    key => 
      `<li class="exercises__name">
          <span>Workout</span>
          ${key.rating}

          <button class="exercises__name-btn" type="button" data-modal-open="">Start</button>
          <h3>${key.name}</h3>
          <ul>
          <li>BurnedCalories${key.burnedCalories}</li>
          <li>Body part${key.bodyPart}</li>
          <li>Target${key.target}</li>
          
          
          </ul>
            
        </li>
        `
  ).join('');
}