import { object, string, number } from 'yup';
import { addExerciseRating } from '../services/api';

let formSchema = object({
  email: string()
    .email('Please enter a valid email')
    .required('Email is required'),
  rate: number()
    .required('Rating is required')
    .min(1, 'Rating must be between 1 and 5')
    .max(5, 'Rating must be between 1 and 5'),
  review: string().trim().required('Comment is required.'),
});

const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

let currentExerciseId = null;

export function openFeedbackModal({ exerciseId }) {
  currentExerciseId = exerciseId;
  refs.modal.classList.remove('is-hidden');
}

function closeFeedbackModal() {
  refs.modal.classList.add('is-hidden');
}

refs.closeModalBtn.addEventListener('click', closeFeedbackModal);

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
        email,
        review,
        rate: stars,
      },
      { abortEarly: false }
    );
    refs.modal.classList.add('is-hidden');
    addExerciseRating({ exerciseId: currentExerciseId, body: validatedData });
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
    if (errors['review']) {
      feedbackForm.querySelector('#comment-error').textContent =
        errors['review'];
      feedbackForm.querySelector('#comment-error').style.display = 'block';
    }
    if (errors['rate']) {
      feedbackForm.querySelector('#stars-error').textContent = errors['rate'];
      feedbackForm.querySelector('#stars-error').style.display = 'block';
    }
  }
}

document
  .querySelector('.modal-form')
  .addEventListener('submit', formSubmitHandler);
