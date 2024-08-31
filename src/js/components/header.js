const headerNavRef = document.querySelector('.js-header-nav');

const { pathname } = window.location;

if (pathname.includes('favorites')) {
  headerNavRef
    .querySelector('[data-path="favorites"]')
    ?.classList.add('link--active');
} else {
  headerNavRef
    .querySelector('[data-path="home"]')
    ?.classList.add('link--active');
}
