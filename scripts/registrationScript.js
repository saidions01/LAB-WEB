let users = JSON.parse(localStorage.getItem('users')) || [];

function validateForm(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required';
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '' || !email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Valid email is required';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required';
        isValid = false;
    }

    if (isValid) {
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration successful! Redirecting to login page...");
        window.location.href = 'login.html'; 
    }
}

document.getElementById('registrationForm').addEventListener('submit', validateForm);
