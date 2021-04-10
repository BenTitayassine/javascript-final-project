function Security() {
    let session = localStorage.getItem("session");
    console.log(session);

    if(session == null){
        window.location.href = "Login.html"
    }
}