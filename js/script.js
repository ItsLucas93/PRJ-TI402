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

        nbcar.textContent = monformulaire.elements["nom"].value;
        date.textContent = monformulaire.elements["prenom"].value;
        catego.textContent = monformulaire.elements["promo"].value;
        siteappli.textContent = monformulaire.elements["prog"].value;
        alternance.textContent = monformulaire.elements["alternance"].value;
        date.textContent = monformulaire.elements["date"].value;

        newLine.append(nom, prenom, promo, prog, alternance, date);

        console.log(prenom);

        let memberTab = document.getElementById("memberlist");

        memberTab.appendChild(newLine);
    }
    else {alert("Champs incomplets. Veuillez remplir les champs.");}
}