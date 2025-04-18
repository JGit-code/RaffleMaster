/**
 * Testimonial carousel functionality
 */
function initCarousel() {
  const carousel = document.querySelector('.testimonial-carousel');
  if (!carousel) return;
  
  const slides = carousel.querySelectorAll('.testimonial-slide');
  if (slides.length <= 1) return;
  
  // Initialize variables
  let currentSlide = 0;
  const slideCount = slides.length;
  let autoplayInterval;
  
  // Create carousel controls
  function createControls() {
    // Create arrows
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-arrow carousel-prev';
    prevBtn.innerHTML = '&#10094;';
    prevBtn.setAttribute('aria-label', 'Previous slide');
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-arrow carousel-next';
    nextBtn.innerHTML = '&#10095;';
    nextBtn.setAttribute('aria-label', 'Next slide');
    
    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-controls';
    
    // Create dots
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('button');
      dot.className = i === 0 ? 'carousel-dot active' : 'carousel-dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.dataset.slide = i;
      dotsContainer.appendChild(dot);
    }
    
    // Append controls to carousel
    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);
    carousel.appendChild(dotsContainer);
    
    // Add event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.slide));
      });
    });
  }
  
  // Initialize the first slide
  function initSlides() {
    slides[0].classList.add('active');
    
    // Set initial positions for other slides
    for (let i = 1; i < slideCount; i++) {
      slides[i].classList.add('next');
    }
  }
  
  // Go to a specific slide
  function goToSlide(index) {
    // Handle out of bounds
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    
    // Remove all position classes
    slides.forEach(slide => {
      slide.classList.remove('active', 'prev', 'next');
    });
    
    // Calculate prev and next indices
    const prevIndex = (index - 1 + slideCount) % slideCount;
    const nextIndex = (index + 1) % slideCount;
    
    // Add appropriate classes
    slides[prevIndex].classList.add('prev');
    slides[index].classList.add('active');
    slides[nextIndex].classList.add('next');
    
    // Update dots
    const dots = carousel.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    // Update current slide index
    currentSlide = index;
  }
  
  // Go to next slide
  function nextSlide() {
    goToSlide(currentSlide + 1);
    resetAutoplay();
  }
  
  // Go to previous slide
  function prevSlide() {
    goToSlide(currentSlide - 1);
    resetAutoplay();
  }
  
  // Start autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }
  
  // Reset autoplay (after user interaction)
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
  
  // Initialize carousel
  createControls();
  initSlides();
  startAutoplay();
  
  // Pause autoplay on hover
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  // Resume autoplay on mouse leave
  carousel.addEventListener('mouseleave', startAutoplay);
}

// Auto-initialize carousels on page load
document.addEventListener('DOMContentLoaded', initCarousel);
