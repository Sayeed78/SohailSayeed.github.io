// script.js

document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".carousel-slide");
    const slides = slideContainer.children;
    const totalSlides = slides.length;
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;

    // Function to move the carousel to the given index
    function goToSlide(index) {
        slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    }

    // Function to show the next slide
    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0); // Go back to the first slide if at the end
        }
    }

    // Automatically move to the next slide every few seconds
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
});