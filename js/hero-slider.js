document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
});

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!slides.length || !prevButton || !nextButton || !dotsContainer) {
        console.warn('Hero slider elements not found. Slider initialization skipped.');
        return;
    }
    
    let currentSlide = 0;
    let isAnimating = false;
    let slideInterval;
    const autoPlayDelay = 7000; // 7 seconds between slides
    
    // --- Dot Creation ---
    dotsContainer.innerHTML = ''; // Clear any existing dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            if (index !== currentSlide) {
                goToSlide(index);
                resetAutoPlay(); // Reset timer when dot clicked
            }
        });
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.slider-dot'); // Get nodelist of dots

    // --- Event Listeners ---
    prevButton.addEventListener('click', () => { 
        prevSlide(); 
        resetAutoPlay(); 
    });
    nextButton.addEventListener('click', () => { 
        nextSlide(); 
        resetAutoPlay(); 
    });
    
    const sliderContainer = document.querySelector('.hero-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoPlay);
        sliderContainer.addEventListener('mouseleave', startAutoPlay);
    } else {
         console.warn('.hero-slider container not found for hover events.');
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        let actionTaken = false;
        if (e.key === 'ArrowLeft') {
            prevSlide();
            actionTaken = true;
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            actionTaken = true;
        }
        if (actionTaken) {
            resetAutoPlay();
        }
    });

    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;
    
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        sliderContainer.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
    }

    function handleSwipe() {
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide(); 
            resetAutoPlay();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide(); 
            resetAutoPlay();
        }
    }

    // --- Core Functions ---
    function goToSlide(index) {
        if (isAnimating || index < 0 || index >= slides.length) return;
        isAnimating = true;
        
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Allow time for CSS transition (match CSS duration)
        setTimeout(() => {
            isAnimating = false;
        }, 800); // Should match opacity transition in hero.css 
    }
    
    function nextSlide() {
        const newIndex = (currentSlide + 1) % slides.length;
        goToSlide(newIndex);
    }
    
    function prevSlide() {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(newIndex);
    }
    
    // --- Autoplay ---
    function startAutoPlay() {
        stopAutoPlay(); // Clear existing interval first
        slideInterval = setInterval(nextSlide, autoPlayDelay);
    }
    
    function stopAutoPlay() {
        clearInterval(slideInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // --- Initialisation ---
    // Preload images (optional but good practice)
    slides.forEach(slide => {
        const bgImg = slide.style.backgroundImage;
        if (bgImg) {
            const url = bgImg.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            if (url) {
                const img = new Image();
                img.src = url;
            }
        }
        const carImg = slide.querySelector('.hero-car');
        if(carImg && carImg.src) {
            const img = new Image();
            img.src = carImg.src;
        }
    });

    startAutoPlay(); // Start the slider
} 