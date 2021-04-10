function Login(){
    var mail = document.getElementById("E-mail").value;
    var password = document.getElementById("password").value;
    
    
    if(mail == "" || mail.indexOf("@") == -1){
        document.getElementById("E-mail").classList.add("is-invalid");
    }
    else{
        document.getElementById("E-mail").classList.remove("is-invalid");
    }
    
    if(password == ""){
        document.getElementById("password").classList.add("is-invalid");
    }
    else{
        document.getElementById("password").classList.remove("is-invalid");
    }
   
    let teams =JSON.parse(localStorage.getItem('users'));
    if(teams == null){
        teams = [];
    }
    let login = teams.find(element => element.mail == mail && element.password == password);
   
    if(login == undefined){
        alert('utilisateur non disponible');
    }else{
        window.location.href = "Add category.html";
    }
}
function Afficher() {
    var mail = document.getElementById("E-mail").value;
    var password = document.getElementById("password").value;
    document.getElementById("Cat").hidden = true;
    document.getElementById("Prod").hidden = true;
    document.getElementById("Allp").hidden = true;
    document.getElementById("Adm").hidden = true;
}
Afficher()