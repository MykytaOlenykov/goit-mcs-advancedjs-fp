import { object, string, number } from 'yup';
import { addExerciseRating } from '../services/api';

let formSchema = object({
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
  const feedbackForm = document.querySelector('.modal-form');
  const formElements = event.target.elements;

  const email = formElements.email.value;
  const review = formElements.comment.value;
  const stars = parseInt(
    feedbackForm.querySelector('.modal-rating').textContent
  );

  feedbackForm.querySelector('#email-error').style.display = 'none';
  feedbackForm.querySelector('#stars-error').style.display = 'none';

  try {
    const validatedData = await formSchema.validate(
      {
        email: email,
        review: review,
        stars: stars,
      },
      { abortEarly: false }
    );
    refs.modal.classList.add('is-hidden');
    addExerciseRating('1', validatedData);
  } catch (err) {
    const errors = {};
    err.inner.forEach(error => {
      if (!errors[error.path]) {
        errors[error.path] = error.message;
      }
    });
    if (errors['email']) {
      feedbackForm.querySelector('#email-error').textContent = errors['email'];
      feedbackForm.querySelector('#email-error').style.display = 'block';
    }
    if (errors['comment']) {
      feedbackForm.querySelector('#comment-error').textContent =
        errors['comment'];
      feedbackForm.querySelector('#comment-error').style.display = 'block';
    }
    if (errors['stars']) {
      feedbackForm.querySelector('#stars-error').textContent = errors['stars'];
      feedbackForm.querySelector('#stars-error').style.display = 'block';
    }
  }
}

document
  .querySelector('.modal-form')
  .addEventListener('submit', formSubmitHandler);

export default toggleModal;
