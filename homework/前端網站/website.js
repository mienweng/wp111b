document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表單提交
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 在這裡可以進行登入驗證的相關處理
    if (username === "admin" && password === "password") {
        document.getElementById("message").textContent = "登入成功！";
    } else {
        document.getElementById("message").textContent = "使用者名稱或密碼錯誤！";
    }
});
