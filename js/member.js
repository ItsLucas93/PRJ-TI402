//tableau où l'on va stocker toutes les informations de la page membres
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

//verifie que tous les champs du formulaires sont remplis
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#addmber').querySelector("#ajout").addEventListener('click', function () {
        let monformulaire = document.forms.addmember;
        if (monformulaire.elements["nom"].value === "" || monformulaire.elements["prenom"].value === "y" || monformulaire.elements["promo"].value === "" || monformulaire.elements["prog"].value === "" || monformulaire.elements["date"].value === "") {
            alert("Champs incomplets. Veuillez remplir les champs.");
        } else {
            ajouter();
        }

        compteur();
    });

    let storedMembers = localStorage.getItem('nosMembres');
    if (storedMembers) {
        nosMembres = JSON.parse(storedMembers); //recupere le tableau stocké en local
        displayMembers();
    }

});

// Ajoute les informations dans le tableau nosMembres 
function pushMember(nom, prenom, promo, prog, alternance, date) {
    const newMember = new MEMBER(nom, prenom, promo, prog, alternance, date);
    nosMembres.push(newMember);
    localStorage.setItem('nosMembres', JSON.stringify(nosMembres)); //permet le stockage en local
}

// Récupère les informations saisies dans le formulaire et les ajoute aux membres
function MemberSaisi() {

    let monformulaire = document.forms.addmember;

    let nom = monformulaire.elements["nom"].value;
    let prenom = monformulaire.elements["prenom"].value;
    let promo = monformulaire.elements["promo"].value;
    let prog = monformulaire.elements["prog"].value;
    let alternance = monformulaire.elements["alternance"].checked;
    let date = monformulaire.elements["date"].value;
    let textalt = "";

    if (alternance) {
        textalt = "Oui";
    } else {
        textalt = "Non";
    }

    pushMember(nom, prenom, promo, prog, textalt, date);
}

// Affiche les membres dans le tableau HTML
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
        alternance.textContent = elemMembers.alternance;

        nom.classList.add("c1");
        prenom.classList.add("c2");
        promo.classList.add("c3");
        prog.classList.add("c4");
        alternance.classList.add("c5");
        date.classList.add("c6");

        newLine.append(nom, prenom, promo, prog, alternance, date);
        memberTab.appendChild(newLine);

        document.addmember.reset();
    });
}

// Fonction appelée lors du clic sur le bouton "Ajouter"
function ajouter() {

    MemberSaisi();

    document.addmember.reset(); //vide le formulaire

    displayMembers();
}