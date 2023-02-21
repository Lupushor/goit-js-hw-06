const inputForm = document.querySelector('.login-form');
inputForm.addEventListener('submit', handleInputFormSubmit);

function handleInputFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (!email.value || !password.value) {
    alert('Не верно заполнен email/пароль. Проверь ещё раз!');
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  event.target.reset();
}
