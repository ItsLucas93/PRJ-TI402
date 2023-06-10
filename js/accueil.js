document.addEventListener("DOMContentLoaded", function () {
    const images = ["../img/banner.jpeg", "../img/image2.png", "../img/eventBDE09062023.jpg", "../img/image1.png"];
    var currentImage = 0;

    function changeImage() {
        currentImage = (currentImage + 1) % images.length;
        const bannerImage = document.getElementById('banner-image');
        bannerImage.src = images[currentImage];

        // Reset the progress bar
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.transition = 'none';
        progressBar.style.width = '0';

        // Start the progress bar
        setTimeout(function() {
            progressBar.style.transition = 'width 5s linear';
            progressBar.style.width = '100%';
        }, 100);
    }

    // Initiate the progress bar
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.backgroundColor = 'green';
    progressBar.style.width = '100%';
    progressBar.style.transition = 'width 5s linear';

    // Change the image every 5 seconds
    setInterval(changeImage, 5000);

    }
)