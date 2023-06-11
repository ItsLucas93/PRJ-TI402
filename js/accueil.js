// Ce script est utilisé pour faire le carrousel de la page d'accueil
document.addEventListener("DOMContentLoaded", function () {
        // Liste des images
        const images = ["../img/banner.jpeg", "../img/image2.png", "../img/eventBDE09062023.jpg", "../img/image1.png"];
        var currentImage = 0;

        // Fonction qui permet de changer les images
        function changeImage() {
            currentImage = (currentImage + 1) % images.length;
            const bannerImage = document.getElementById('banner-image');
            bannerImage.src = images[currentImage];

            // Reset la barre de progression
            const progressBar = document.getElementById('progress-bar');
            progressBar.style.transition = 'none';
            progressBar.style.width = '0';

            // Démarre la barre de progression
            setTimeout(function () {
                progressBar.style.transition = 'width 5s linear';
                progressBar.style.width = '100%';
            }, 100);
        }

        // Initialise la barre de progression
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.backgroundColor = 'green';
        progressBar.style.width = '100%';
        progressBar.style.transition = 'width 5s linear';

        // Change l'image toute les 5 secondes
        setInterval(changeImage, 5000);

    }
)