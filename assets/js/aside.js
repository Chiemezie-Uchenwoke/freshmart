const openSideBarBtn = document.getElementById("open-aside");
const closeSideBarBtn = document.getElementById("close-aside");
const aside = document.getElementById("sidebar");

openSideBarBtn.addEventListener("click", () => {
    aside.classList.remove("rm-animate");
    aside.classList.add("animate");
});

closeSideBarBtn.addEventListener("click", () => {
    aside.classList.remove("animate");
    aside.classList.add("rm-animate");
});