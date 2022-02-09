document.getElementById("login-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const useaEmail = emailField.value;
    const passwordField = document.getElementById("user-password");
    const useaPassword = passwordField.value;
    if (useaEmail == "sontan@baap.com" && useaPassword == "secret") {
        console.log("valid user")
    }
})