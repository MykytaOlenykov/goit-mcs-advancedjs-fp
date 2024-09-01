import { object, string, number } from 'yup';
import { addExerciseRating } from '../services/api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { isAxiosError } from 'axios';

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
  resetForm();
}

const formRef = document.querySelector('.modal-form');
refs.closeModalBtn.addEventListener('click', closeFeedbackModal);

document.querySelectorAll('.modal-star').forEach(star => {
  star.addEventListener('click', event => {
    const starValue = event.currentTarget.dataset.value;

    document.querySelectorAll('.modal-star').forEach(star => {
      const value = star.dataset.value;
      if (value <= starValue) {
        star.querySelector('svg').style.fill = '#eea10c';
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
  const review = formElements.comment.value;
  const stars = parseInt(formRef.querySelector('.modal-rating').textContent);

  formRef.querySelector('#email-error').style.display = 'none';
  formRef.querySelector('#stars-error').style.display = 'none';

  try {
    const validatedData = await formSchema.validate(
      {
        email,
        review,
        rate: stars,
      },
      { abortEarly: false }
    );
    await addExerciseRating({
      exerciseId: currentExerciseId,
      body: validatedData,
    });
    refs.modal.classList.add('is-hidden');
    iziToast.success({
      message: 'Thanks for your feedback',
      position: 'topRight',
    });
    resetForm();
  } catch (err) {
    if (isAxiosError(err)) {
      iziToast.error({
        message: 'Something went wrong, please try again later.',
        position: 'topRight',
      });
    } else {
      const errors = {};
      err.inner.forEach(error => {
        if (!errors[error.path]) {
          errors[error.path] = error.message;
        }
      });
      if (errors['email']) {
        formRef.querySelector('#email-error').textContent = errors['email'];
        formRef.querySelector('#email-error').style.display = 'block';
      }
      if (errors['review']) {
        formRef.querySelector('#comment-error').textContent = errors['review'];
        formRef.querySelector('#comment-error').style.display = 'block';
      }
      if (errors['rate']) {
        formRef.querySelector('#stars-error').textContent = errors['rate'];
        formRef.querySelector('#stars-error').style.display = 'block';
      }
    }
  }
}

formRef.addEventListener('submit', formSubmitHandler);

function resetForm() {
  formRef.reset();

  // rating
  document.querySelectorAll('.modal-star').forEach(star => {
    star.querySelector('svg').style.fill = 'rgba(244, 244, 244, 0.20)';
  });
  const ratingDisplay = document.querySelector('.modal-rating');
  ratingDisplay.textContent = `0.0`;

  // errors
  formRef.querySelector('#email-error').textContent = '';
  formRef.querySelector('#email-error').style.display = 'none';
  formRef.querySelector('#comment-error').textContent = '';
  formRef.querySelector('#comment-error').style.display = 'none';
  formRef.querySelector('#stars-error').textContent = '';
  formRef.querySelector('#stars-error').style.display = 'none';
}
