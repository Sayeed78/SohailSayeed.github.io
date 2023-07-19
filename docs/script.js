// script.js

const imageContainer = document.querySelector('.image-container');

function scrollImages() {
    imageContainer.scrollLeft += 2; // Change the scroll speed by adjusting the value (larger = faster)
}

setInterval(scrollImages, 50); // Adjust the interval (milliseconds) for smoother or faster scrolling
