const registrationForm = document.getElementById("trainer-registration-form");
const registrationMessage = document.getElementById("registration-message");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const specialization = document.getElementById("specialization").value;
  const experience = document.getElementById("experience").value;

  // Basic client-side validation (replace with server-side validation)
  if (password !== confirmPassword) {
    registrationMessage.textContent = "Passwords do not match!";
    return;
  }

  // Simulate sending data to server (replace with actual logic)
  fetch('/api/trainer/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      specialization: specialization,
      experience: experience
    })
  })
  .then(response => {
    if (response.ok) {
      registrationMessage.textContent = "Trainer registration successful!";
      registrationForm.reset(); // Clear form after successful registration
    } else {
      registrationMessage.textContent = "Trainer registration failed!";
    }
  });
});
