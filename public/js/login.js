document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const registerSection = document.getElementById("registerSection");
  const googleLoginBtn = document.getElementById("google-login-btn");
  const registerPrompt = document.getElementById("registerPrompt");
  const showRegisterBtn = document.getElementById("showRegister");

  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check localStorage to set initial mode if previously set
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  // Handle registration form sliding in
  showRegisterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    registerSection.style.display = "block"; // Show register form
    registerSection.classList.add("slide-in"); // Trigger sliding animation
  });

  // Handle login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/home"; // Redirect to home after login
        } else {
          alert("Invalid username or password");
        }
      })
      .catch((error) => console.error("Error:", error));
  });

  // Handle Google login button
  if (googleLoginBtn) {
    googleLoginBtn.addEventListener("click", () => {
      window.location.href = "/auth/google";
    });
  } else {
    console.log("google-login-btn not found on this page.");
  }

  // Handle Google login redirect
  document.getElementById("google-login-btn").addEventListener("click", () => {
    window.location.href = "/auth/google";
  });

  // Handle registration form sliding in
  showRegisterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    registerSection.style.display = "block"; // Show register form

    // Add sliding animation
    registerSection.classList.add("slide-in");
  });

  // Handle registration
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) =>
        response
          .json()
          .then((data) => ({ status: response.status, body: data }))
      )
      .then(({ status, body }) => {
        if (status === 201) {
          alert(body.message);
          registerForm.reset();
          location.reload(); // Reload the page to go back to login after registration
        } else {
          alert(body.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  });
});
