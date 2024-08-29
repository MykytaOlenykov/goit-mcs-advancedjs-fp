const scrollUpBtn = document.querySelector('.scroll__up');

scrollUpBtn.addEventListener('click', scrollUp);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const offset = window.scrollY;
  const height = document.documentElement.clientHeight;
  scrollUpBtn.classList.toggle('scroll__up--show', offset > height);
}

function scrollUp() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -75);
    requestAnimationFrame(scrollUp);
  }
}
