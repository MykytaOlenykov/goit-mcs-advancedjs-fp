import { object, string, number } from 'yup';

let formSchema = object({
  comment: string()
    .required('Comment is required')
    .min(10, 'Comment must be at least 10 characters'),
  email: string()
    .email('Please enter a valid email')
    .required('Email is required'),
  stars: number()
    .required('Rating is required')
    .min(1, 'Rating must be between 1 and 5')
    .max(5, 'Rating must be between 1 and 5'),
});

const refs = {
  // openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

refs.closeModalBtn.addEventListener('click', toggleModal);

document.querySelectorAll('.modal-star').forEach(star => {
  star.addEventListener('click', event => {
    const starValue = event.currentTarget.dataset.value;

    document.querySelectorAll('.modal-star').forEach(star => {
      const value = star.dataset.value;
      if (value <= starValue) {
        star.querySelector('svg').style.fill = 'gold';
      } else {
        star.querySelector('svg').style.fill = 'rgba(244, 244, 244, 0.20)';
      }
    });

    const ratingDisplay = document.querySelector('.modal-rating');
    ratingDisplay.textContent = `${starValue}.0`;
  });
});

async function formSubmitHandler(event) {
  event.preventDefault();
  const formElements = event.target.elements;

  const email = formElements.email.value;
  const comment = formElements.comment.value;
  const stars = parseInt(document.querySelector('.modal-rating').textContent);

  document.getElementById('email-error').style.display = 'none';
  document.getElementById('comment-error').style.display = 'none';
  document.getElementById('stars-error').style.display = 'none';

  try {
    const validatedData = await formSchema.validate({
      email: emailInput,
      comment: commentInput,
      stars: stars,
    });
    console.log('Validated Data:', validatedData);
    refs.modal.classList.add('is-hidden');
  } catch (err) {
    if (err.path === 'email') {
      document.getElementById('email-error').textContent = err.message;
      document.getElementById('email-error').style.display = 'block';
    }
    if (err.path === 'comment') {
      document.getElementById('comment-error').textContent = err.message;
      document.getElementById('comment-error').style.display = 'block';
    }
    if (err.path === 'stars') {
      document.getElementById('stars-error').textContent = err.message;
      document.getElementById('stars-error').style.display = 'block';
    }
  }
}

document
  .querySelector('.modal-form')
  .addEventListener('submit', formSubmitHandler);

export default toggleModal;
