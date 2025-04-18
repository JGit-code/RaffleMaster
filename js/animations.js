/**
 * Advanced animations and interactions for the raffle website
 */
document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations
  initScrollAnimations();
  
  // Parallax effects
  initParallaxEffects();
  
  // Header scroll effect
  initHeaderScroll();
  
  // Prize card hover effects
  initPrizeCardEffects();
  
  // Image zoom effect
  initImageZoom();
});

/**
 * Initialize scroll-based animations for elements
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-from-left, .fade-from-right');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Initialize parallax scrolling effects
 */
function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const offset = scrollTop * speed;
      element.style.transform = `translateY(${offset}px)`;
    });
  });
}

/**
 * Header appearance change on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const scrollThreshold = 100;
  
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Enhanced hover effects for prize cards
 */
function initPrizeCardEffects() {
  const cards = document.querySelectorAll('.prize-card:not(.coming-soon)');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Add a class to keep neighboring cards from being too affected
      card.classList.add('hovered');
      
      // Add subtle scale down to siblings for a focus effect
      cards.forEach(sibling => {
        if (sibling !== card) {
          sibling.classList.add('dimmed');
        }
      });
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
      
      cards.forEach(sibling => {
        sibling.classList.remove('dimmed');
      });
    });
  });
}

/**
 * Initialize image zoom effect on product detail page
 */
function initImageZoom() {
  const container = document.querySelector('.image-container');
  const img = document.querySelector('.featured-image');
  const overlay = document.querySelector('.zoom-overlay');
  
  if (!container || !img || !overlay) return;
  
  container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Transform the image based on mouse position
    img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    img.style.transform = 'scale(1.5)';
    
    // Show the overlay with reduced opacity
    overlay.style.opacity = '0.2';
  });
  
  container.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    overlay.style.opacity = '0';
  });
}
