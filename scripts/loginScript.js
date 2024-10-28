document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    loginUser();
});



function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        window.location.href = '../pages/index.html';
    } else {
        alert("Invalid credentials");
    }
}
