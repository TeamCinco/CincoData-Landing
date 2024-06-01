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
