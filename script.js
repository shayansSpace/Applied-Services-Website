const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

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

// Mobile dropdown toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const servicesLink = document.querySelector('.navigation ul li a[href=""]'); // Services link with empty href
    const dropdown = document.querySelector('.dropdown-services');

    // Function to detect if device has touch capability
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    if (servicesLink && dropdown) {
        servicesLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Check if we're on a touch device (works in all orientations)
            if (isTouchDevice()) {
                // Toggle dropdown visibility using CSS class
                dropdown.classList.toggle('show');
            }
        });

        // Close dropdown when clicking outside on touch devices
        document.addEventListener('click', function(e) {
            if (isTouchDevice()) {
                if (!servicesLink.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.classList.remove('show');
                }
            }
        });

        // Reset dropdown display on window resize for non-touch devices
        window.addEventListener('resize', function() {
            if (!isTouchDevice() && window.innerWidth > 768) {
                dropdown.classList.remove('show'); // Remove mobile class on desktop
            }
        });
    }
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
// for read-more btn

hoverBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        const readMoreBtn = this.querySelector('#box-btn');
        readMoreBtn.style.display = 'flex';
    });

    box.addEventListener('mouseleave', function() {
        const readMoreBtn = this.querySelector('#box-btn');
        readMoreBtn.style.display = 'none';
    });
});

// navbar scroll animation
const navBar = document.querySelector('nav');
let lastScrollY = 0;

// Use Locomotive Scroll's scroll event instead of native window scroll
scroll.on('scroll', (instance) => {
    const currentScrollY = instance.scroll.y;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down and past initial threshold
        navBar.classList.add('nav--hidden');
    } else if (currentScrollY < lastScrollY) {
        // Scrolling up - be more explicit about the condition
        navBar.classList.remove('nav--hidden');
    }
    lastScrollY = currentScrollY;
});

// Fallback: Also listen to native scroll events in case Locomotive Scroll fails
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        navBar.classList.add('nav--hidden');
    } else if (currentScrollY < lastScrollY) {
        navBar.classList.remove('nav--hidden');
    }
    lastScrollY = currentScrollY;
});

// const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
//     box.addEventListener("mouseenter", () => {
//         boxes.forEach((otherBox) => {
//             if (otherBox !== box) {
//                 otherBox.classList.add("dimmed");
//             }
//         });
//     });

//     box.addEventListener("mouseleave", () => {
//         boxes.forEach((otherBox) => {
//             otherBox.classList.remove("dimmed");
//         });
//     });
// });

// boxes animation
// This script handles the hover effect on boxes and displays a fixed image based on the hovered box
// const a = document.querySelector('#box1');
// const abc = a.getAttribute('data-image');
// console.log(abc);

// const fixedImage = document.querySelector('#fixed-images');
// const imgContainer = document.querySelector('#img-container');

// imgContainer.addEventListener('mouseenter', function() {
//     fixedImage.style.display = 'block';
// })

// imgContainer.addEventListener('mouseleave', function() {
//     fixedImage.style.display = 'none';
// })

// track all boxes and change the image on hover
// using data attributes to store the image source
// const boxes = document.querySelectorAll('.box');
// boxes.forEach(box => {
//     box.addEventListener('mouseenter', function() {
//         const imageSrc = box.getAttribute('data-image');
//         fixedImage.style.backgroundImage = `url(${imageSrc})`;
//     })
// })