const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

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
