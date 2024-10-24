document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    loginUser();
});

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = 'index.html'; 


    } else {
        alert("Invalid credentials");
    }
}
