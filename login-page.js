const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginErrorMsg = document.getElementById("login-error-msg");

// Wait for login button to be clicked
loginButton.addEventListener("click", (event) => {
    // Prevent default
    event.preventDefault();

    // Values from login form
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    //username and password can be changed, for now they are generic

    if (username === "username" && password === "password") {
        // If both username and password are correct
        alert("Log in was successful!");
        // different action could be added here, for now reload
        location.reload();
    } else {
        // Else
        alert("Invalid username and/or password");
    }
})