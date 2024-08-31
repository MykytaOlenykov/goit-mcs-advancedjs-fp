const mobileMenu = document.querySelector('[data-burger]');
const openMenuBtn = document.querySelector('[data-burger-open]');
const closeMenuBtn = document.querySelector('[data-burger-close]');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('menu-is-hidden');
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.add('menu-is-hidden');
  openMenuBtn.setAttribute('aria-expanded', false);
});
