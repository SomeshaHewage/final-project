const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  if (username === '' || password === '') {
    alert('Please enter your username and password.');
    return;
  }

  // Submit the form
  form.loging();
});
