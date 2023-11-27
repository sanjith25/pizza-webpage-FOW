document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
       event.preventDefault()
        const username = usernameInput.value;
        const password = passwordInput.value;

        
        if (username === "user@123" && password === "password@123") {
           
            window.location.href = "pizza.html";
        } else {
            document.getElementById("error").textContent = "Invalid username or password.";
        }
    });
});
