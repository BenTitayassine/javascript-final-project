function Afficher() {
    let Produitss = JSON.parse(localStorage.getItem("NDP")) || [];
    let data = '';
    document.getElementById("Reg").hidden = true;
    document.getElementById("Log").hidden = true;

    Produitss.forEach((PRD, i) => {
        data += `<div class="col-4 mt-2">
        <div class="card">
            <img class="card-img-top" src="${PRD.srcImg}" alt="car">
            <div class="card-body">
                <h5 class="card-title">${PRD.NomDuProd}</h5>
                <p class="card-text">${PRD.discription}</p>
            </div>
        </div>
    </div>`;
    });
    document.getElementById('card').innerHTML = data;
}
Afficher()
