document.addEventListener("DOMContentLoaded", () => {
  const eyeicon = document.getElementById("eyeicon");
  const password = document.getElementById("password");
  const strengthText = document.getElementById("strength-text");
  const passwordStrength = document.getElementById("password-strength");

  // Toggle password visibility
  eyeicon.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      eyeicon.src = "eye-open.png";
      eyeicon.alt = "Hide password";
    } else {
      password.type = "password";
      eyeicon.src = "eye-close.png";
      eyeicon.alt = "Show password";
    }
  });

  // Password strength meter
  password.addEventListener("input", () => {
    const value = password.value;
    const strength = getPasswordStrength(value);
    strengthText.textContent = strength.text;
    strengthText.style.color = strength.color;
  });

  function getPasswordStrength(password) {
    let strength = { text: "Weak", color: "red" };

    if (password.length >= 8) {
      strength.text = "Moderate";
      strength.color = "orange";
    }
    if (
      password.length >= 12 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password)
    ) {
      strength.text = "Strong";
      strength.color = "green";
    }

    return strength;
  }

  // Keyboard shortcut to toggle visibility: Alt + P
  document.addEventListener("keydown", (event) => {
    if (event.altKey && event.key === "p") {
      eyeicon.click(); // Trigger the click event
    }
  });
});
