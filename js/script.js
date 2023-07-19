const gallery = document.querySelector('.image-gallery');

function scrollGallery() {
    gallery.scrollLeft += 2; // Change the scroll speed by adjusting the value (larger = faster)
}

setInterval(scrollGallery, 50); // Adjust the interval (milliseconds) for smoother or faster scrolling