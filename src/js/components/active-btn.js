const buttons = document.querySelector('.exercises__buttons');

const onChangeActive = event => {
  if (event.target.tagName === 'BUTTON') {
    // Find the currently active button
    const currentActive = document.querySelector('.exercises__btn-smpl.active');

    // Remove 'active' class from the current active item and its button
    if (currentActive) {
      currentActive.classList.remove('active');
    }

    // Add 'active' class to the clicked button
    const clickedButton = event.target;
    clickedButton.classList.add('active');
  }
};
if (buttons) {
  buttons.addEventListener('click', onChangeActive);
}
