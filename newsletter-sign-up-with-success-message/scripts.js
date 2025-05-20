const emailInput = document.getElementById('email');
const subscribeButton = document.querySelector('subscribeBtn');
const dismissBtn = document.getElementById('dismissBtn');
const subscribeForm = document.querySelector('form');
const errorMessage = document.getElementById('errorMessage');
const container = document.getElementById('container');
const successContainer = document.getElementById('successContainer');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userEmail = document.getElementById('userEmail');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInputValue = emailInput.value.trim();

  if (emailInputValue === ""){
    errorMessage.textContent = "Please enter your email address";
    emailInput.classList.add('error');
  }else if (!emailRegex.test(emailInputValue)){
    errorMessage.textContent = "Valid email required"
    emailInput.classList.add('error');
  }else {
    errorMessage.textContent = "";
    emailInput.classList.remove('error');
    userEmail.textContent = emailInputValue;
    container.style.display = 'none';
    successContainer.style.display = 'flex';
  }
})

dismissBtn.addEventListener('click', (e) => {
  container.style.display = 'flex';
  successContainer.style.display = 'none';
  emailInput.value = "";
})
