const form = document.getElementById('myForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const hiddenSubmit = document.getElementById('submitBtn');

// Add event listeners to each field
nameField.addEventListener('input', validateField);
emailField.addEventListener('input', validateField);
phoneField.addEventListener('input', validateField);

function validateField() {
  try {
    // Run validation checks for each field
    validateName(nameField.value);
    validateEmail(emailField.value);
    validatePhone(phoneField.value);

    // If all fields are valid, enable the hidden submit button
    hiddenSubmit.disabled = false;
  } catch (error) {
    // If any field is invalid, disable the hidden submit button
    hiddenSubmit.disabled = true;
    errorMessages.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }

  // Trigger form submission when all fields are valid
  if (hiddenSubmit.disabled === false) {
    hiddenSubmit.style.display="block";
  }
}

function validateName(name) {
  if (name.length < 3) {
    throw new Error('Name is too short!');
  }
}

function validateEmail(email) {
  if (!email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
    throw new Error('Invalid email address!');
  }
}

function validatePhone(phone) {
  if (!phone.match(/[0-9]{10}/)) {
    throw new Error('Invalid phone number!');
  }
}