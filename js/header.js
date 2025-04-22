document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const siteHeader = document.querySelector('.site-header');
    const menuOverlay = document.querySelector('.menu-overlay');
    const desktopNav = document.querySelector('.desktop-nav');
    
    // Check viewport width and manage menu visibility initially
    function handleResponsiveMenu() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 768) {
            // Mobile viewport
            if (desktopNav) desktopNav.style.display = 'none';
            if (menuToggle) menuToggle.style.display = 'block';
            
            // Don't automatically show mobile menu, just make sure desktop is hidden
            if (!menuToggle?.classList.contains('active')) {
                if (mobileNav) mobileNav.classList.remove('active');
                if (siteHeader) siteHeader.classList.remove('menu-active');
            }
        } else {
            // Desktop viewport
            if (desktopNav) desktopNav.style.display = 'flex';
            if (menuToggle) menuToggle.style.display = 'none';
            
            // Always hide mobile menu in desktop view
            if (mobileNav) mobileNav.classList.remove('active');
            if (siteHeader) siteHeader.classList.remove('menu-active');
            if (menuOverlay) menuOverlay.classList.remove('active');
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
            if (siteHeader) siteHeader.classList.toggle('menu-active');
            if (menuOverlay) menuOverlay.classList.toggle('active');
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
            siteHeader.classList.remove('menu-active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking on a link
    const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('.nav-link') : [];
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