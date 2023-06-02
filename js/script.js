var nosMembres = [];

class MEMBER {
    constructor(nom, prenom, promo, prog, alternance, date) {
        this.nom = nom;
        this.prenom = prenom;
        this.promo = promo;
        this.prog = prog;
        this.alternance = alternance;
        this.date = date;
    }
}

if (localStorage.getItem('Compteur') === null) {
    localStorage.setItem('Compteur', '0');
}

document.addEventListener('DOMContentLoaded', function() {
    let compteurValue = localStorage.getItem('Compteur');
    let compteurElement = document.getElementById('footer-compteur');
    compteurElement.textContent = compteurValue;
});

function compteur(){
    let compteurValue = localStorage.getItem('Compteur');
    compteurValue = parseInt(compteurValue) + 1;
    localStorage.setItem('Compteur', compteurValue.toString());
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#addmber').querySelector("#ajout").addEventListener('click', function () {
        let monformulaire = document.forms.addmember;
        if (monformulaire.elements["nom"].value === "" || monformulaire.elements["prenom"].value === "y" || monformulaire.elements["promo"].value === "" || monformulaire.elements["prog"].value === "" || monformulaire.elements["date"].value === "") {
            alert("Champs incomplets. Veuillez remplir les champs.");
        } else {
            ajouter();
        }

    });

});

function pushMember(nom, prenom, promo, prog, alternance, date) {
    const newMember = new MEMBER(nom, prenom, promo, prog, alternance, date);
    nosMembres.push(newMember);
}

function MemberSaisi(alt) {

    let monformulaire = document.forms.addmember;

    let nom = monformulaire.elements["nom"].value;
    let prenom = monformulaire.elements["prenom"].value;
    let promo = monformulaire.elements["promo"].value;
    let prog = monformulaire.elements["prog"].value;
    let alternance = alt;
    let date = monformulaire.elements["date"].value;

    pushMember(nom, prenom, promo, prog, alternance, date);
}

function ajouter(){
    let monformulaire = document.forms.addmember;

    let newLine = document.createElement("tr");

    let nom = document.createElement("td");
    let prenom = document.createElement("td");
    let promo = document.createElement("td");
    let prog = document.createElement("td");
    let alternance = document.createElement("td")
    let date = document.createElement("td");

    if(monformulaire.elements["alternance"].checked){
        alternance.textContent = "Oui";
    } else {
        alternance.textContent = "Non"
    }

    MemberSaisi(alternance);

    Array.prototype.forEach.call(nosMembres, (elemMembers) => {
        nom.textContent = elemMembers.nom;
        prenom.textContent = elemMembers.prenom;
        promo.textContent = elemMembers.promo;
        prog.textContent = elemMembers.prog;
        date.textContent = elemMembers.date;
        
        newLine.append(nom, prenom, promo, prog, alternance, date);
        let memberTab = document.getElementById("memberlist");
        memberTab.appendChild(newLine);
    });

    document.addmember.reset();
}