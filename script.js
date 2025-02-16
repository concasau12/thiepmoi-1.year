let enteredPassword = "";

function enterDigit(digit) {
    if (enteredPassword.length < 6) {
        enteredPassword += digit;
        document.getElementById("password").value = "*".repeat(enteredPassword.length);
    }
}

function clearPassword() {
    enteredPassword = "";
    document.getElementById("password").value = "";
}

function checkPassword() {
    if (enteredPassword === "240903") {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Mật khẩu sai! Vui lòng thử lại.";
        clearPassword();
    }
}
