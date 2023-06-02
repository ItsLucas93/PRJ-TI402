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

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('Compteur') === null) {
        localStorage.setItem('Compteur', '0');
    }

    let compteurValue = localStorage.getItem('Compteur');
    let compteurElement = document.getElementById('footer-compteur');
    compteurElement.textContent = compteurValue;

    let storedMembers = localStorage.getItem('nosMembres');
    if (storedMembers) {
        nosMembres = JSON.parse(storedMembers);
        displayMembers();
    }
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
    localStorage.setItem('nosMembres', JSON.stringify(nosMembres));
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


function displayMembers() {
    let memberTab = document.getElementById("memberlist");
    memberTab.innerHTML = '';

    nosMembres.forEach((elemMembers) => {
        let newLine = document.createElement("tr");

        let nom = document.createElement("td");
        let prenom = document.createElement("td");
        let promo = document.createElement("td");
        let prog = document.createElement("td");
        let alternance = document.createElement("td")
        let date = document.createElement("td");

        nom.textContent = elemMembers.nom;
        prenom.textContent = elemMembers.prenom;
        promo.textContent = elemMembers.promo;
        prog.textContent = elemMembers.prog;
        date.textContent = elemMembers.date;

        if (elemMembers.alternance) {
            alternance.textContent = "Oui";
        } else {
            alternance.textContent = "Non";
        }

        newLine.append(nom, prenom, promo, prog, alternance, date);
        memberTab.appendChild(newLine);

        document.addmember.reset();
    });
}

function ajouter(){

    MemberSaisi(alternance);

    document.addmember.reset();

    displayMembers();
}