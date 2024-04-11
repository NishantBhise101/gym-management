const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  // **Replace with your actual login validation logic**
  // This is a placeholder for demonstration purposes only
  if (username === 'owner' && password === 'secure_password') {
    // Login successful: Redirect to the owner dashboard
    window.location.href = 'owner-dashboard.html';
  } else {
    errorMessage.textContent = 'Invalid username or password.';
  }
});
