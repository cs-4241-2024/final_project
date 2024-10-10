const registerForm = document.getElementById('register-form') as HTMLFormElement;
const registerMessage = document.getElementById('register-message') as HTMLParagraphElement;

// Handle registration form submission
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const registerUsername = (document.getElementById('register-username') as HTMLInputElement).value;
    const registerPassword = (document.getElementById('register-password') as HTMLInputElement).value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: registerUsername, password: registerPassword })
        });

        if (response.ok) {
            const result = await response.json();
            alert(`Registration successful! User ID: ${result.insertedId}`); // Adjust this based on your response
            registerForm.reset(); // Clear the form after successful registration
            registerForm.style.display = 'none';// Hide the register form
        } else {
            const error = await response.text();
            registerMessage.textContent = error; // Show error message
        }
    } catch (error) {
        console.error('Registration error:', error);
        registerMessage.textContent = 'An error occurred during registration';
    }
});
