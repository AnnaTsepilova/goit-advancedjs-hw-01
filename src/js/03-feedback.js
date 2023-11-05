import throttle from 'lodash.throttle';

const LSKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};

savedData();

function onInputData() {
  formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LSKey, JSON.stringify(formData));
}

function savedData() {
  const getFormData = JSON.parse(localStorage.getItem(LSKey));
  email.value = getFormData.email ?? '';
  message.value = getFormData.message ?? '';
}

function onFormSubmit(event) {
  event.preventDefault();

  formData = {
    email: email.value,
    message: message.value,
  };

  if (formData.email === '' || formData.message === '') {
    alert('Будь ласка, заповніть всі поля!');
  } else {
    console.log(formData);
    localStorage.removeItem(LSKey);
    form.reset();
  }
}
