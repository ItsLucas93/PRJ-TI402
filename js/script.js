function generer(){
    let monformulaire = document.forms.ajoutmembre;

    if (assertRequiredField(monformulaire)) {

        let newLine = document.createElement("tr");

        let nom = document.createElement("td");
        let prenom = document.createElement("td");
        let promo = document.createElement("td");
        let prog = document.createElement("td");
        let date = document.createElement("td");

        nbcar.textContent = monformulaire.elements["nom"].value;
        date.textContent = monformulaire.elements["prenom"].value;
        catego.textContent = monformulaire.elements["promo"].value;
        siteappli.textContent = monformulaire.elements["prog"].value;
        date.textContent = monformulaire.elements["date"].value;

        nom.classList.add("c1");
        prenom.classList.add("c2");
        promo.classList.add("c3");
        prog.classList.add("c4");
        date.classList.add("c5");

        newLine.append(nom, prenom, promo, prog, date);

        let memberTab = document.getElementById("memberlist");

        memberTab.appendChild(newLine);
    }
    else {alert("Champs incomplets. Veuillez remplir les champs et cocher l'une des cases.");}
}