// Intersection Observer for scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    // Letter-by-letter glow effect for hero title
    const heroTitle = document.querySelector('.hero-content h1 i');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';

        // Wrap each character in a span
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'letter';

            // Add hover effect to each letter
            span.addEventListener('mouseenter', function() {
                this.style.textShadow = '0 0 3px #c0c0c0, 0 0 6px #c0c0c0, 0 0 9px #c0c0c0';
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'all 0.2s ease-in-out';
            });

            span.addEventListener('mouseleave', function() {
                this.style.textShadow = 'none';
                this.style.transform = 'scale(1)';
            });

            heroTitle.appendChild(span);
        }
    }

    // Create an intersection observer for Services heading underline
    // const servicesObserver = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('animate-underline');
    //             servicesObserver.unobserve(entry.target);
    //         }
    //     });
    // }, {
    //     threshold: 0.3, // Trigger when 30% of the element is visible
    //     rootMargin: '0px 0px -20px 0px'
    // });

    // Observe the services heading

    // Create an intersection observer for box animations
    const boxObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade');
                boxObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        boxObserver.observe(box);
    });

});

const hoverBoxes = document.querySelectorAll('.box');
// const showText = document.getElementById('show-desc');

hoverBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        const showDesc = this.querySelector('#show-desc');
        showDesc.style.display = 'block';
    });

    box.addEventListener('mouseleave', function() {
        const showDesc = this.querySelector('#show-desc');
        showDesc.style.display = 'none';
    });
});

// navbar scroll animation
const navBar = document.querySelector('nav');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        navBar.classList.add('nav--hidden');
    } else {
        // Scrolling up
        navBar.classList.remove('nav--hidden');
    }
    lastScrollY = window.scrollY;

});