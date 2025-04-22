document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
});

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    let isAnimating = false;
    let slideInterval;
    const autoPlayDelay = 5000; // 5 seconds between slides
    
    // Preload all background images to prevent flashing
    preloadSlideImages();
    
    // Create dots for each slide
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Set up event listeners for navigation
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // Start autoplay
    startAutoPlay();
    
    // Pause autoplay on hover
    const sliderContainer = document.querySelector('.hero-slider');
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', startAutoPlay);
    
    function preloadSlideImages() {
        // Preload all background images to prevent flashing
        slides.forEach(slide => {
            const bgImg = slide.style.backgroundImage;
            if (bgImg) {
                const url = bgImg.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
                const img = new Image();
                img.src = url;
            }
        });
    }
    
    function goToSlide(index) {
        if (isAnimating || index === currentSlide) return;
        isAnimating = true;
        
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        document.querySelectorAll('.slider-dot').forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        document.querySelectorAll('.slider-dot')[index].classList.add('active');
        
        currentSlide = index;
        
        // Reset animation flag after transition completes
        setTimeout(() => {
            isAnimating = false;
        }, 1000); // Match this to the transition duration in CSS
    }
    
    function nextSlide() {
        const newIndex = (currentSlide + 1) % slides.length;
        goToSlide(newIndex);
    }
    
    function prevSlide() {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(newIndex);
    }
    
    function startAutoPlay() {
        stopAutoPlay(); // Clear any existing interval
        slideInterval = setInterval(nextSlide, autoPlayDelay);
    }
    
    function stopAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Add swipe support for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    sliderContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide(); // Swipe left, go to next slide
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide(); // Swipe right, go to previous slide
        }
    }
} 