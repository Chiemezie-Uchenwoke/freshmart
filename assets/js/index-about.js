// About Us
const imageElement = document.getElementById("about-image");
const images = ["building.jpg", "lady-gym.jpg", "practice.jpg"];

window.addEventListener("DOMContentLoaded", () => {
    let currentImageIndex = 0

    const updateImage = () => {
        const imageUrl = "./assets/images/" + images[currentImageIndex];
        imageElement.setAttribute("src", imageUrl)
    }
    updateImage();

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }, 3000);

});
