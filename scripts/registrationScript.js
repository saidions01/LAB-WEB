let users = [];

function validateForm() {
    // validation logic...
    if (isValid) {
        let user = {
            username: username,
            email: email,
            password: password
        };
        users.push(user);
        console.log("User added:", user);
    }
}
