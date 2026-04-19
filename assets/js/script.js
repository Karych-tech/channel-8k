const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const faqBoxes = document.querySelectorAll('.faq-box');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

/* Close menu when a link is clicked */
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

/* Close menu when clicking outside */
window.addEventListener('click', function(e) {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

/* FAQ Accordion Logic */
faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Check if this box is already active
        const isActive = box.classList.contains('active');
        
        // Close all other boxes
        faqBoxes.forEach(otherBox => otherBox.classList.remove('active'));
        
        // If it wasn't active, open it
        if (!isActive) {
            box.classList.add('active');
        }
    });
});