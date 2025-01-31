const scrollToTopBtn = document.getElementById("scroll");
scrollToTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > window.innerHeight){
        scrollToTopBtn.style.display = "flex";
    }
    else{
        scrollToTopBtn.style.display = "none"
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});