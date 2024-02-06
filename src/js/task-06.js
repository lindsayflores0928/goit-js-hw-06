const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function() {
  const inputValue = validationInput.value.trim();
  const expectedLength = parseInt(validationInput.getAttribute('data-length'));
  
  if (inputValue.length === expectedLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});

