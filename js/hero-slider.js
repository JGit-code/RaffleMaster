class HeroSlider {
    constructor() {
        this.slider = document.querySelector('.hero-slider');
        this.slides = document.querySelectorAll('.hero-slide');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.dotsContainer = document.querySelector('.slider-dots');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.intervalDuration = 5000; // Change slide every 5 seconds
        this.isTransitioning = false;

        this.init();
    }

    init() {
        // Create dots
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });

        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Start autoplay
        this.startAutoplay();

        // Pause autoplay on hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());

        // Set initial slide
        this.updateSlides();
    }

    updateSlides() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;

        // Remove active class from all slides
        this.slides.forEach(slide => slide.classList.remove('active'));

        // Add active class to current slide
        this.slides[this.currentSlide].classList.add('active');

        // Update dots
        const dots = this.dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // Reset transition flag after animation completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500); // Match this with CSS transition duration
    }

    nextSlide() {
        if (this.isTransitioning) return;
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
    }

    prevSlide() {
        if (this.isTransitioning) return;
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentSlide) return;
        this.currentSlide = index;
        this.updateSlides();
    }

    startAutoplay() {
        if (this.slideInterval) return;
        this.slideInterval = setInterval(() => this.nextSlide(), this.intervalDuration);
    }

    stopAutoplay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
}); 