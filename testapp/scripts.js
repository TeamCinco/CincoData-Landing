const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const logoBtn = document.getElementById('logo-btn');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll to pricing section
document.querySelector('a[href="#pricing"]').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('h2:nth-of-type(4)').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to waitlist section and center email input
document.querySelector('a[href="#register"]').addEventListener('click', (event) => {
    event.preventDefault();
    const waitlistSection = document.querySelector('.waitlist');
    waitlistSection.scrollIntoView({ behavior: 'smooth' });
    waitlistSection.querySelector('.waitlist-input').focus();
});

document.querySelector('a[href="#login"]').addEventListener('click', (event) => {
    event.preventDefault();
    const waitlistSection = document.querySelector('.waitlist');
    waitlistSection.scrollIntoView({ behavior: 'smooth' });
    waitlistSection.querySelector('.waitlist-input').focus();
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
