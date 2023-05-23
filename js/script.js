function assertRequiredField(monformulaire){
    return (monformulaire.elements["nom"].value !== "" && monformulaire.elements["date"].value !== "dd/mm/yyyy" && monformulaire.elements["prenom"].value !== "" && monformulaire.elements["promo"].value !== "" && monformulaire.elements["programme"].value !== "");
}

function generer(){
    let monformulaire = document.forms.addmember;

    if (assertRequiredField(monformulaire)) {

        let newLine = document.createElement("tr");

        let nom = document.createElement("td");
        let prenom = document.createElement("td");
        let promo = document.createElement("td");
        let prog = document.createElement("td");
        let alternance = document.createElement("td")
        let date = document.createElement("td");

        nom.textContent = monformulaire.elements["nom"].value;
        prenom.textContent = monformulaire.elements["prenom"].value;
        promo.textContent = monformulaire.elements["promo"].value;
        prog.textContent = monformulaire.elements["programme"].value;
        date.textContent = monformulaire.elements["date"].value;

        if(monformulaire.elements["alternance"].checked){
            alternance.textContent = "Oui";
        } else {
            alternance.textContent = "Non"
        }

        newLine.append(nom, prenom, promo, prog, alternance, date);

        console.log(prenom);

        let memberTab = document.getElementById("memberlist");

        memberTab.appendChild(newLine);

    }else {
        alert("Champs incomplets. Veuillez remplir les champs.");
    }
}