const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const logoBtn = document.getElementById('logo-btn');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll event listener for shapes
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrollPosition = window.scrollY;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5; // Different speed for each shape
        shape.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Scroll to top when logo is clicked
logoBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Waitlist form submission
document.getElementById('waitlist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email-input').value;
    var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe-JUl-RvQEM_0F3dDQ9GXRpdMe-XJrL-XBNbbVYZasw4ZiJQ/formResponse';
    var formData = new FormData();
    formData.append('entry.1761605893', email); // Replace with your actual email entry ID

    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(function(response) {
        alert('Thank you for joining our waitlist!');
        document.getElementById('waitlist-form').reset();
    }).catch(function(error) {
        alert('There was an error. Please try again.');
    });
});

// Carousel functionality for placeholders
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carouselContainer, containerIndex) => {
        const carousel = carouselContainer.querySelector('.carousel');
        const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
        const prevButton = carouselContainer.querySelector('.carousel-control.prev');
        const nextButton = carouselContainer.querySelector('.carousel-control.next');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carousel.style.transform = `translateX(${offset}%)`;
            carouselContainer.setAttribute('data-bg', currentIndex);
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });

        updateCarousel(); // Initialize carousel
    });
});

// Intersection Observer for fade-in effect
const placeholders = document.querySelectorAll('.placeholder-container');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.direction);
        } else {
            entry.target.classList.remove(entry.target.dataset.direction); // Remove class if element is not in view
        }
    });
}, observerOptions);

placeholders.forEach((placeholder, index) => {
    placeholder.dataset.direction = (index % 2 === 0) ? 'fade-in-left' : 'fade-in-right';
    observer.observe(placeholder);
});

// Intersection Observer for hero section
const heroElements = document.querySelectorAll('.hero h1, .hero p');

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-top');
        } else {
            entry.target.classList.remove('fade-in-top'); // Remove class if element is not in view
        }
    });
}, observerOptions);

heroElements.forEach(element => {
    heroObserver.observe(element);
});
