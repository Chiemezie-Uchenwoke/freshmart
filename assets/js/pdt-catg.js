const container = document.querySelector(".products-catg-inner"); // Scrolling container
const items = document.querySelectorAll(".products-catg-inner > div"); // All product items
const totalItems = items.length;
let currentIndex = 0;
const interval = 2000; // 2 seconds

// Clone the items and append them to create a seamless effect
const duplicateItems = [...items].map(item => item.cloneNode(true));
duplicateItems.forEach(clone => container.appendChild(clone));

function scrollAndScale() {
    // Remove scale class from all items
    items.forEach(item => item.classList.remove("scale-img"));

    // Apply scale class to the current item
    items[currentIndex].classList.add("scale-img");

    // Scroll the container
    const itemWidth = items[currentIndex].offsetWidth + 20; // Width + gap
    container.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    container.style.transition = "transform 0.8s ease-in-out"; // Smooth transition

    // Move to the next item
    currentIndex++;

    // Reset when reaching the last original item to avoid empty spaces
    if (currentIndex >= totalItems) {
        setTimeout(() => {
            container.style.transition = "none"; // Disable transition for instant reset
            container.style.transform = "translateX(0)"; // Reset position
            currentIndex = 0; // Start again
        }, 800); // Wait for animation to finish
    }
}

// Run the function every 2 seconds
setInterval(scrollAndScale, interval);
