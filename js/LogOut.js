function LogOut() {
    localStorage.removeItem("session");
    window.location.href = "Login.html"
}