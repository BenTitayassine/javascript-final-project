function ajouter(){
    let Titre = document.getElementById("Titre").value;
    let discription = document.getElementById("discription").value;
    
    
    let Categorie = JSON.parse(localStorage.getItem("Titre"))|| [];

    let Categories = {
        id : Categorie.length,
        Titre : Titre,
        discription : discription,
    };


    Categorie.push(Categories);
    localStorage.setItem('Titre', JSON.stringify(Categorie));
    clearData();
    load();
}
function load(){
    let Categoriess = JSON.parse(localStorage.getItem("Titre"))|| [];
    let data = '';
    document.getElementById("Reg").hidden = true;
    document.getElementById("Log").hidden = true;
    
    document.getElementById("zee").hidden = false;
    document.getElementById("Saveupdate").hidden = true;

    Categoriess.forEach((Categorie, i) => {
        data += `<tr>
        <td>${Categorie.Titre}</td>
        <td>${Categorie.discription}</td>
        <td>
        <button class=" btn btn-danger" onclick="supprimer(${i})">Delete</button>
        <button class=" btn btn-info" onclick="modifier(${i})">Edit</button>
        </td>
    </tr>`;
        
    });
    // console.log(data);
    document.getElementById('table').innerHTML = data;
}
function supprimer(i){
    let Categorie = JSON.parse(localStorage.getItem("Titre"))|| [];
    Categorie.splice(i,1);
    localStorage.setItem('Titre',JSON.stringify(Categorie));
    load();
}
function modifier(i){
    let Categorie = JSON.parse(localStorage.getItem("Titre"))|| [];
    let TitreAmodifier = Categorie[i];
    document.getElementById("Saveupdate").hidden = false;
    document.getElementById("zee").hidden = true;
    document.getElementById("Titre").value = TitreAmodifier.Titre;
    document.getElementById("discription").value = TitreAmodifier.discription;
    document.getElementById("index").value = i;


}
function Saveupdate(){
    let Categorie = JSON.parse(localStorage.getItem("Titre"))|| [];
    let i = document.getElementById("index").value;

    let Titre = document.getElementById("Titre").value;
    let discription = document.getElementById("discription").value;
    
    let Categories = {
        id : Categorie.length,
        Titre : Titre,
        discription : discription,
    };

    Categorie.splice(i,1,Categories);
    localStorage.setItem('Titre',JSON.stringify(Categorie));
    clearData();
    load();
}

function clearData() {
    document.getElementById("Titre").value = "";
    document.getElementById("discription").value = "";
}
