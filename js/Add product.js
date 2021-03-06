function showCategorie(){
    let Categoriess = JSON.parse(localStorage.getItem("Titre"))|| [];
    let data = ' <option selected value="">Choose a category ...</option>';
    
    Categoriess.forEach((Categorie) => {
        data += `<option value="${Categorie.id}">${Categorie.Titre}</option>`;     
    });
        document.getElementById('category').innerHTML = data;
}
function  encodeImageFileAsURL(image) {
    var file = image.files[0];
   if(file)
   {
        var reader = new FileReader();
        reader.readAsDataURL(file)
        return new Promise((resolve, reject) => {
            reader.onloadend = () => { resolve(reader.result); }
        });
   }else{
       return "";
   }
}
async function add(){
    let NomDuProd = document.getElementById("NDP").value;
    let discription = document.getElementById("discription").value;
    let Categorie = document.getElementById("category").value;
    let Taswira = document.getElementById("srcImg");
    
    let photo = await encodeImageFileAsURL(Taswira);

    let PRD = JSON.parse(localStorage.getItem("NDP")) || [];


    let Produit = {
        id : PRD.length,
        NomDuProd : NomDuProd,
        discription : discription,
        Categorie : Categorie,
        photo : photo
    };
    PRD.push(Produit);
    localStorage.setItem('NDP', JSON.stringify(PRD));  
    ClearData(); 
    load();
}

function load(){
    let Produitss = JSON.parse(localStorage.getItem("NDP"))|| [];
    let data = '';
    document.getElementById("Reg").hidden = true;
    document.getElementById("Log").hidden = true;
    document.getElementById("zee").hidden = false;
    document.getElementById("Saveupdate").hidden = true;

    Produitss.forEach((PRD, i) => {
        data += `<div class="col-4 mt-2">
        <div class="card">
            <img class="card-img-top" src="${PRD.photo}" alt="car">
            <div class="card-body">
                <h5 class="card-title">${PRD.NomDuProd}</h5>
                <p class="card-text">${PRD.discription}</p>
                <a href="#" class="btn btn-success"  onclick="modifier(${i})" >Modifier</a>
                <a href="#" class="btn btn-danger" onclick="supprimer(${i})">Supprimer</a>
            </div>
        </div>
    </div>`;
});
// console.log(data);
document.getElementById('card').innerHTML = data;
}
function supprimer(i){
    let PRD = JSON.parse(localStorage.getItem("NDP"))|| [];
    PRD.splice(i,1);
    localStorage.setItem('NDP',JSON.stringify(PRD));
    load();
}
function modifier(i){
    let PRD = JSON.parse(localStorage.getItem("NDP"))|| [];
    let PRDaModifier = PRD[i];
    document.getElementById("zee").hidden = true;
    document.getElementById("Saveupdate").hidden = false;
    document.getElementById("NDP").value = PRDaModifier.NomDuProd;
    document.getElementById("discription").value = PRDaModifier.discription;
    document.getElementById("category").value = PRDaModifier.Categorie;
    document.getElementById("index").value = i;
}
async function Saveupdate(){
    let PRD = JSON.parse(localStorage.getItem("NDP"))|| [];
    let i = document.getElementById("index").value;
    let NomDuProd = document.getElementById("NDP").value;
    let discription = document.getElementById("discription").value;
    let Categorie = document.getElementById("category").value;
    let photo;
    let Taswira = document.getElementById("srcImg");

    if(Taswira.files[0])
    {
        photo = await encodeImageFileAsURL(Taswira);

    }else{
        photo = PRD[i].photo;
    }

    let Produit = {
        id : PRD.length,
        NomDuProd : NomDuProd,
        discription : discription,
        Categorie : Categorie,
        photo : photo
    };
    PRD.splice(i,1,Produit);
    localStorage.setItem('NDP',JSON.stringify(PRD));
    ClearData();
    load();
}
function ClearData() {
    document.getElementById("NDP").value = "";
    document.getElementById("discription").value = "";
    document.getElementById("category").value = "";
    document.getElementById("srcImg").value = "";
}