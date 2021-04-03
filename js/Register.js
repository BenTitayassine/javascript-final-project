function Ajouter() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("pass").value;
    var passwordConfirm = document.getElementById("cPass").value;

    if (firstName == "") {
        document.getElementById("fName").classList.add("is-invalid");
    }
    else {
        document.getElementById("fName").classList.remove("is-invalid");
    }

    if (lastName == "") {
        document.getElementById("lName").classList.add("is-invalid");
    }
    else {
        document.getElementById("lName").classList.remove("is-invalid");
    }

    if (mail == "" || mail.indexOf("@") == -1) {
        document.getElementById("mail").classList.add("is-invalid");
    }
    else {
        document.getElementById("mail").classList.remove("is-invalid");
    }

    if (password == "") {
        document.getElementById("pass").classList.add("is-invalid");
    }
    else {
        document.getElementById("pass").classList.remove("is-invalid");
    }

    if (passwordConfirm == "") {
        document.getElementById("cPass").classList.add("is-invalid");
    }
    else if (password != passwordConfirm) {
        document.getElementById("cPass").classList.add("is-invalid");
        alert("Le mot de passe de confirmation ne correspond pas")
    }
    else {
        document.getElementById("cPass").classList.remove("is-invalid");
    }

    var utilisateurs = JSON.parse(localStorage.getItem('users')) || [];
    
    var utilisateur = {
        id : utilisateurs.length,
        firstName: firstName,
        lastName: lastName,
        mail: mail,
        password: password,
    };
    
    
    utilisateurs.push(utilisateur);

    localStorage.setItem('users', JSON.stringify(utilisateurs));
    window.location.assign("file:///C:/Users/chames/Desktop/Yassine/Java%20Script/Exercices/Projet%20JS/Login.html");
}