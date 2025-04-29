document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const siteHeader = document.querySelector('.site-header');
    
    // Check viewport width and manage menu visibility initially
    function handleResponsiveMenu() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 768) {
            // Mobile viewport
            if (menuToggle) menuToggle.style.display = 'block';
            
            // Don't automatically show mobile menu
            if (!menuToggle?.classList.contains('active')) {
                if (mobileNav) mobileNav.classList.remove('active');
            }
        } else {
            // Desktop viewport
            if (menuToggle) menuToggle.style.display = 'none';
            
            // Always hide mobile menu in desktop view
            if (mobileNav) mobileNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
    
    // Run on page load
    handleResponsiveMenu();
    
    // Run on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResponsiveMenu, 250);
    });
    
    // Toggle menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            if (mobileNav) mobileNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav && menuToggle && 
            !mobileNav.contains(e.target) && 
            !menuToggle.contains(e.target) && 
            mobileNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking on a link
    const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('.nav-link') : [];
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });
}); 