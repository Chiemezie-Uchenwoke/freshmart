// Why choose us
const whyImageElement = document.getElementById("why-us-image");
const whyImages = ["facility1.jpg", "dumbell.jpg", "equipments.jpg", "gym6.jpg", "gym8.jpg", "fac2.jpg", "fac3.jpg"];

window.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;

    const updateWhyImage = () => {
        const imageUrl = "./assets/images/" + whyImages[currentIndex];
        whyImageElement.setAttribute("src", imageUrl);
    }
    updateWhyImage();

    setInterval(() => {
        currentIndex = (currentIndex + 1) % whyImages.length;
        updateWhyImage();
    }, 3000);

});