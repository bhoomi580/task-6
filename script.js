const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameInput.classList.add("error");
    return false;
  }
  nameError.textContent = "";
  nameInput.classList.remove("error");
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
  if (email === "") {
    emailError.textContent = "Email is required.";
    emailInput.classList.add("error");
    return false;
  }
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    emailInput.classList.add("error");
    return false;
  }
  emailError.textContent = "";
  emailInput.classList.remove("error");
  return true;
}

function validateMessage() {
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    messageInput.classList.add("error");
    return false;
  }
  messageError.textContent = "";
  messageInput.classList.remove("error");
  return true;
}

// Live validation while typing
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

// Form submit validation
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isMessageValid) {
    successMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    messageInput.classList.remove("error");
  } else {
    successMessage.textContent = "";
  }
});
