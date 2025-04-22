document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;
    let isMenuOpen = false;

    // Toggle menu
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when pressing escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });

    // Close menu when clicking a nav link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('menu-open');

        // Reset animations
        if (isMenuOpen) {
            const items = mobileNav.querySelectorAll('li');
            items.forEach((item, index) => {
                item.style.animationDelay = `${0.1 + (index * 0.05)}s`;
            });
        }
    }

    // Header scroll effect
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Initial check
    updateHeader();

    // Add scroll event listener with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateHeader();
                ticking = false;
            });
            ticking = true;
        }
    });
}); 