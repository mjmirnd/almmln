const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "jeren" && password === "mcryle") {
        alert("You have successfully logged in.");
        location.replace("https://forms.gle/9DxsA5YB9Cvk2nAu7");
    } else if (username === "jeren" && password === "ipis") {
        alert("You have successfully logged in.");
        location.replace("https://forms.gle/zTsozL9Cky5kAmwPA");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});
