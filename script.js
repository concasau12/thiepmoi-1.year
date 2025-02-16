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
       
        // Hiện phần nội dung sau 5 giây
        setTimeout(() => {
            document.getElementById("content").style.display = "block";
        }, 100);

        setTimeout(() => {
            window.location.href = "main.html";
        }, 5000);
    } else { 
        document.getElementById("error-message").innerText = "Mật khẩu sai!";
        
        // Xóa thông báo sau 2 giây
        setTimeout(() => { 
            document.getElementById("error-message").innerText = "";
        }, 2000);
    }   
}



<script>
        document.addEventListener("DOMContentLoaded", function () {
            let container = document.querySelector(".container");
            function scrollImages() {
                if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                    container.scrollTop = 0;
                } else {
                    container.scrollTop += 6;
                }
            }
            setInterval(scrollImages, 30);
        });
    </script>