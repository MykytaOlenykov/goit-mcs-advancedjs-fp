const toggleModal = modalSelector => {
  modalSelector.classList.toggle('is-hidden');
};

const refs = {
  openBurgerBtn: document.querySelector('[data-burger-open]'),
  closeBurgerBtn: document.querySelector('[data-burger-close]'),
  burgerMenu: document.querySelector('[data-burger]'),
  body: document.querySelector('body'),
};

refs.openBurgerBtn.addEventListener('click', () =>
  toggleModal(refs.burgerMenu)
);
refs.closeBurgerBtn.addEventListener('click', () =>
  toggleModal(refs.burgerMenu)
);

window.addEventListener('click', e => {
  if (
    refs.burgerMenu.classList.contains('is-hidden') ||
    refs.openBurgerBtn.contains(e.target)
  ) {
    return;
  }

  toggleModal(refs.burgerMenu);
});
