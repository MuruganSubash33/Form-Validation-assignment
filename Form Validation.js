 
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();  

  
  clearErrors();
 
  let isValid = true;

   
  const username = document.getElementById('username').value.trim();
  if (username === '') {
    showError('usernameError', 'Username is required.');
    isValid = false;
  }
 
  const email = document.getElementById('email').value.trim();
  if (!validateEmail(email)) {
    showError('emailError', 'Please enter a valid email address.');
    isValid = false;
  }

   
  const password = document.getElementById('password').value.trim();
  if (!validatePassword(password)) {
    showError(
      'passwordError',
      'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
    );
    isValid = false;
  }

  
  const message = document.getElementById('message').value.trim();
  if (message === '') {
    showError('messageError', 'Message/Address is required.');
    isValid = false;
  }

  
  const contact = document.getElementById('contact').value.trim();
  if (!validateContact(contact)) {
    showError('contactError', 'Contact number must be exactly 10 digits.');
    isValid = false;
  }

   
  if (isValid) {
    alert('Form submitted successfully!');
    
  }
});

 
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

 
function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

 
function validateContact(contact) {
  const contactRegex = /^\d{10}$/;
  return contactRegex.test(contact);
}

 
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

 
function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach((element) => {
    element.textContent = '';
    element.style.display = 'none';
  });
}