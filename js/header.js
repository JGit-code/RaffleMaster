document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const siteHeader = document.querySelector('.site-header');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
    
    // Open mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenuContainer.classList.add('active');
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    });
    
    // Close mobile menu
    mobileMenuClose.addEventListener('click', () => {
        mobileMenuContainer.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    });
    
    // Close mobile menu when clicking on navigation links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuContainer.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });
    
    // Handle escape key to close menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuContainer.classList.contains('active')) {
            mobileMenuContainer.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
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