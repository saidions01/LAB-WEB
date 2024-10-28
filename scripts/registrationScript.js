let users = [];

// Function to validate individual fields
function engine(input, errorElement, successIcon, failIcon, validationFunction, errorMessage) {
    if (validationFunction(input.value)) {
        // Input is valid
        errorElement.textContent = ""; // Clear any previous error message
        input.classList.remove("error-border");
        input.classList.add("success-border");
        successIcon.style.display = "inline";
        failIcon.style.display = "none";
    } else {
        // Input is invalid
        errorElement.textContent = errorMessage; // Show error message
        input.classList.remove("success-border");
        input.classList.add("error-border");
        successIcon.style.display = "none";
        failIcon.style.display = "inline";
    }
}

// Validation functions
const isNotEmpty = (value) => value.trim() !== "";
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isValidPassword = (value) => value.length >= 6;

// Real-time field validation
document.getElementById("username").addEventListener("input", () => {
    engine(
        document.getElementById("username"),
        document.getElementById("usernameError"),
        document.getElementById("usernameSuccess"),
        document.getElementById("usernameFail"),
        isNotEmpty,
        "Please enter a username."
    );
});

document.getElementById("email").addEventListener("input", () => {
    engine(
        document.getElementById("email"),
        document.getElementById("emailError"),
        document.getElementById("emailSuccess"),
        document.getElementById("emailFail"),
        isValidEmail,
        "Please enter a valid email address."
    );
});

document.getElementById("password").addEventListener("input", () => {
    engine(
        document.getElementById("password"),
        document.getElementById("passwordError"),
        document.getElementById("passwordSuccess"),
        document.getElementById("passwordFail"),
        isValidPassword,
        "Password must be at least 6 characters long."
    );
});

// Final form submission validation
function validateForm(event) {
    event.preventDefault();

    let isFormValid = true;

    // Validate each field one last time before submission
    isFormValid &= isNotEmpty(document.getElementById("username").value);
    isFormValid &= isValidEmail(document.getElementById("email").value);
    isFormValid &= isValidPassword(document.getElementById("password").value);

    if (isFormValid) {
        const user = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
        users.push(user);
        console.log("User added:", user);

        // Clear form fields
        document.getElementById("registrationForm").reset();
        document.querySelectorAll(".error-border, .success-border").forEach((el) => {
            el.classList.remove("error-border", "success-border");
        });
        document.querySelectorAll(".error-icon, .success-icon").forEach((icon) => {
            icon.style.display = "none";
        });
    }
}

// Attach event listener to form
document.getElementById("registrationForm").addEventListener("submit", validateForm);
