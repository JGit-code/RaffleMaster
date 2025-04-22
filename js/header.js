document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const siteHeader = document.querySelector('.site-header');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    // Check viewport width and manage menu visibility initially
    function handleResponsiveMenu() {
        if (window.innerWidth <= 768) {
            // Mobile viewport
            document.querySelector('.desktop-nav').style.display = 'none';
            menuToggle.style.display = 'block';
        } else {
            // Desktop viewport
            document.querySelector('.desktop-nav').style.display = 'flex';
            menuToggle.style.display = 'none';
            mobileNav.classList.remove('active');
            siteHeader.classList.remove('menu-active');
            document.body.classList.remove('menu-open');
        }
    }
    
    // Run on page load
    handleResponsiveMenu();
    
    // Run on window resize
    window.addEventListener('resize', handleResponsiveMenu);
    
    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        siteHeader.classList.toggle('menu-active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target) && mobileNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            siteHeader.classList.remove('menu-active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            siteHeader.classList.remove('menu-active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });
}); 