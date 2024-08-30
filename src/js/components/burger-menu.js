
const toggleModal = (modalSelector) => {
    modalSelector.classList.toggle('is-hidden');
  
    handleBodyOverflow(modalSelector);
    handleZIndex(modalSelector);
  };

const refs = {
  openBurgerBtn: document.querySelector('[data-burger-open]'),
  closeBurgerBtn: document.querySelector('[data-burger-close]'),
  navLinks: document.querySelectorAll('[data-nav-link]'),
  burgerMenu: document.querySelector('[data-burger]'),
  burgerMenuContent: document.querySelector('[data-burger-content]'),
  body: document.querySelector('body'),
};

refs.openBurgerBtn.addEventListener('click', () => toggleModal(refs.burgerMenu));
refs.closeBurgerBtn.addEventListener('click', () => toggleModal(refs.burgerMenu));
refs.navLinks.forEach(link => {
  link.addEventListener('click', () => toggleModal(refs.burgerMenu));
});

// Outside click
window.addEventListener('click', e => {
  if (
    refs.burgerMenu.classList.contains('is-hidden') ||
    refs.burgerMenuContent.contains(e.target) ||
    refs.openBurgerBtn.contains(e.target)
  ) {
    return;
  }

  toggleModal(refs.burgerMenu)
});

window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
  if (!e.matches) return;
  if (!refs.burgerMenu.classList.contains('is-hidden')) {
    toggleModal(refs.burgerMenu)
  }
});
