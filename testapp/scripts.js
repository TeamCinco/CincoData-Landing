const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const logoBtn = document.getElementById('logo-btn');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

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

// Scroll to specific sections in the 'how' section
document.querySelector('.feature:nth-child(1)').addEventListener('click', () => {
    document.querySelector('.ai-assistant').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.feature:nth-child(2)').addEventListener('click', () => {
    document.querySelector('.placeholder img[alt="Live data strategies"]').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.feature:nth-child(3)').addEventListener('click', () => {
    document.querySelector('.placeholder img[alt="Clear explanations"]').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.feature:nth-child(4)').addEventListener('click', () => {
    document.querySelector('.placeholder img[alt="Expert partnerships"]').scrollIntoView({ behavior: 'smooth' });
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

document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelectorAll(".feature");
    const placeholders = document.querySelectorAll(".placeholder-container");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function isElementPartiallyInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            (rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.top >= 0) ||
            (rect.bottom > 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }

    function checkElementsInView() {
        features.forEach(function(feature) {
            if (isElementInViewport(feature)) {
                feature.classList.add("carousel");
            } else {
                feature.classList.remove("carousel");
            }
        });

        placeholders.forEach(function(placeholder) {
            if (isElementInViewport(placeholder)) {
                placeholder.classList.add("carousel");
                placeholder.classList.remove("fade-out");
            } else if (isElementPartiallyInViewport(placeholder)) {
                placeholder.classList.add("fade-out");
                placeholder.classList.remove("carousel");
            } else {
                placeholder.classList.remove("carousel");
                placeholder.classList.remove("fade-out");
            }
        });
    }

    // Listen for scroll events
    window.addEventListener("scroll", checkElementsInView);
    
    // Initial check
    checkElementsInView();
});
