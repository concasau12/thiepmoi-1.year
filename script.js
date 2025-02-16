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
    const CorrectPassword = "240903";
    
    if (enteredPassword === CorrectPassword) {
        document.getElementById("error-message").innerText = "Đúng mật khẩu!";

        document.getElementById("password-screen").style.display = "none";
       
        document.getElementById("content").style.display = "block";

    } else { 
        document.getElementById("error-message").innerText = "Mật khẩu sai!";
        
        // Xóa thông báo sau 2 giây
        setTimeout(() => { 
            document.getElementById("error-message").innerText = "";
        }, 2000);
    }   
}    