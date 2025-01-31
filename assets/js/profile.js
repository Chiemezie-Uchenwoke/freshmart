const profileButton = document.getElementById("profile-btn");
const profileLinksContainer = document.getElementById("profile-inner");
profileButton.addEventListener("click", () => {
    profileLinksContainer.classList.toggle("show");
});