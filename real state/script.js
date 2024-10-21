// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation on mobile
const toggleMenu = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
};

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

// Redirect to listings page when Explore Listings is clicked
document.querySelector('.hero button').addEventListener('click', () => {
    window.location.href = 'listings.html';
});
