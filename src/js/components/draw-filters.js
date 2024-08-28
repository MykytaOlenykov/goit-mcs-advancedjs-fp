const cardList = document.querySelector('.exercises__cards');

export default function draw_filters(cards) {
    // console.log(cards);
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
}
