// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (idx === index) {
            slide.classList.add('active');
        }
    });
}



function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set the interval for automatic sliding
setInterval(nextSlide, 3000); // Change image every 3 seconds


function makevisible(){
    himgp1 = document.getElementById("himgp1")

    

    
}
