window.onload = async function () {
    document.getElementById('login').addEventListener('click', async function (event) {
        // Prevent default
        event.preventDefault();

        // Get username & password
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Debug
        console.log(username);
        console.log(password);

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            console.log('Response:', data); // Debug log

            if (response.ok) {
                // If login is successful, redirect to the main page
                window.location.href = "index.html";
            }else{


                alert(data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
        }
    })
    document.getElementById('register').addEventListener('click', async function(event){
        // Get username & password
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
            registerUser(username, password);
        } else {
            alert('Please fill in both username and password to register.');
        }
    });

    async function registerUser(username, password) {
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            console.log('Register:', data);

            if (response.ok) {
                alert('Registration successful. You can now log in.');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred during registration. Please try again.');
        }
    }
}
