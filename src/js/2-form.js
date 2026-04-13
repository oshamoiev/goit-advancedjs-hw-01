const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

let formData = {
  email: '',
  message: '',
};

const formDataFromLS = localStorage.getItem(STORAGE_KEY);
if (formDataFromLS) {
  formData = JSON.parse(formDataFromLS);
}

Object.keys(formData).forEach(key => {
  refs.form.elements[key].value = formData[key];
});

const onFeedbackFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();
  formData[fieldName] = fieldValue;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const onFormSubmit = e => {
  e.preventDefault();

  if (Object.values(formData).some(value => value.trim() === '')) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
};

refs.form.addEventListener('input', onFeedbackFormFieldChange);
refs.form.addEventListener('submit', onFormSubmit);
