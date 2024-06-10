const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const logoBtn = document.getElementById('logo-btn');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add hover effect to the hero section
const heroSection = document.querySelector('.hero');

function scaleHeroElements(scale) {
    document.querySelector('.highlight').style.transform = `scale(${scale})`;
    document.querySelector('.hero p').style.transform = `scale(${scale})`;
}

heroSection.addEventListener('mouseenter', () => scaleHeroElements(1.1));
heroSection.addEventListener('mouseleave', () => scaleHeroElements(1));

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

// Scroll to specific sections in the 'how' section
document.querySelectorAll('.feature').forEach((feature, index) => {
    feature.addEventListener('click', () => {
        const targets = [
            '.ai-assistant',
            '.placeholder img[alt="Live data strategies"]',
            '.placeholder img[alt="Clear explanations"]',
            '.placeholder img[alt="Expert partnerships"]'
        ];
        document.querySelector(targets[index]).scrollIntoView({ behavior: 'smooth' });
    });
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
