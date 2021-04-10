function Security() {
    let session = localStorage.getItem("session");
    if(session == null){
        window.location.href = "Login.html"
    }
}