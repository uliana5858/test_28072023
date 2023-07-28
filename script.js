"use strict";

  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const repeatPasswordInput = document.getElementById('repeatPasswordInput');

  emailInput.addEventListener('input', handleInputChange);
  passwordInput.addEventListener('input', handleInputChange);
  repeatPasswordInput.addEventListener('input', handleInputChange);

  function handleInputChange() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const repeatPasswordValue = repeatPasswordInput.value;

    // Check if email is empty and apply styles accordingly
    if (emailValue.trim() === '') {
      emailInput.style.borderColor = 'red';
    } else {
      emailInput.style.borderColor = 'green';
    }

    // Check if passwords match and apply styles accordingly
    if (passwordValue === repeatPasswordValue && passwordValue !== '') {
      passwordInput.style.borderColor = 'green';
      repeatPasswordInput.style.borderColor = 'green';
    } else {
      passwordInput.style.borderColor = 'red';
      repeatPasswordInput.style.borderColor = 'red';
    }
  }




