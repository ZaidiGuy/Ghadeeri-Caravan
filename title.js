document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".title");

    function revealOnScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once in case elements are already in view
});


let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-box");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        if (i === index) {
            testimonial.classList.add("active");
        }
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextTestimonial, 5000);

// Toggle Mobile Navigation

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
});
