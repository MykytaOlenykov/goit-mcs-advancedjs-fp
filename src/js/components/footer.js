import * as yup from 'yup';
import { createSubscription } from '../services/api';
import { isAxiosError } from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const emailSchema = yup.object({
  email: yup.string().email('Invalid email!').required('Email is required.'),
});

const formRef = document.querySelector('.subscription-form');

formRef.addEventListener('submit', async e => {
  try {
    e.preventDefault();
    const { email } = e.target.elements;
    const data = await emailSchema.validate({ email: email.value });
    formRef.reset();
    const { message } = await createSubscription({ body: data });
    iziToast.success({ message, position: 'topRight' });
  } catch (error) {
    let message = '';
    if (isAxiosError(error)) {
      message = error.response.data.message ?? '';
    } else {
      message = error.errors?.[0] ?? '';
    }
    iziToast.error({ message, position: 'topRight' });
  }
});
