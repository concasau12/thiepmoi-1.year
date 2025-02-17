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


document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-music");

    // Kiểm tra trạng thái nhạc từ Local Storage
    let isPlaying = localStorage.getItem("musicPlaying") === "true";

    // Tạo Audio mới nếu chưa có
    if (!window.audioInstance) {
        window.audioInstance = new Audio("img/Christina Perri  A Thousand Years.mp3");
        window.audioInstance.loop = true;
        window.audioInstance.volume = 0.5; // Điều chỉnh âm lượng nếu cần
    }
    
    // Nếu trước đó nhạc đang phát, tiếp tục phát
    if (isPlaying) {
        window.audioInstance.play();
    }

    // Lưu trạng thái khi người dùng rời trang
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicPlaying", !window.audioInstance.paused);
    });
});