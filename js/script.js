

function printHello() {
    alert('Hello Akari')
}

const imageContainer = document.querySelector(".image-container");

function scrollImages() {
    imageContainer.scrollLeft += 200; // Change the scroll speed by adjusting the value (larger = faster)
}

setInterval(scrollImages, 50); // Adjust the interval (milliseconds) for smoother or faster scrolling
