// script.js

function printHello() {
    alert('Hello Akari')
}

const imageContainer = document.querySelector(".image-container");

function scrollImages() {
    imageContainer.scrollLeft += 200; // Change the scroll speed by adjusting the value (larger = faster)
}

setInterval(scrollImages, 50); // Adjust the interval (milliseconds) for smoother or faster scrolling


// Get references to the button and container
const toggleButton = document.getElementById('Show Images');
const myContainer = document.getElementById('.image-container');

// Add a click event listener to the button
toggleButton.addEventListener('click', function () {
  // Toggle the display property of the container between 'none' and 'block'
  if (myContainer.style.display === 'none') {
    myContainer.style.display = 'block';
    toggleButton.textContent = 'Hide Container';
  } else {
    myContainer.style.display = 'none';
    toggleButton.textContent = 'Show Container';
  }
});
