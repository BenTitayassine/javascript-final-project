function Afficher() {
    let Categoriess = JSON.parse(localStorage.getItem("Titre"))|| [];
    
    document.getElementById("Reg").hidden = true;
    document.getElementById("Log").hidden = true;
}
Afficher()