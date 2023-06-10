document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('Compteur') === null) {
        localStorage.setItem('Compteur', '0');
    }

    compteur();
});

function compteur(){
    let nosMembres = localStorage.getItem('nosMembres');
    let compteurValue;

    if (nosMembres) {
        compteurValue = JSON.parse(nosMembres).length;
    } else {
        compteurValue = 0;
    }
    localStorage.setItem('Compteur', compteurValue.toString());

    let compteurElement = document.getElementById('footer-compteur');
    compteurElement.textContent = compteurValue;
}