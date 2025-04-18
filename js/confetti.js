/**
 * Confetti animation for celebrations
 * Uses canvas-confetti library or falls back to CSS animations
 */
function celebrate() {
  // Try to use Canvas Confetti if available
  try {
    // Check if we've already loaded the library
    if (typeof confetti === 'undefined') {
      // Dynamically import canvas-confetti library
      import('https://cdn.skypack.dev/canvas-confetti')
        .then(module => {
          const confetti = module.default;
          triggerConfetti(confetti);
        })
        .catch(error => {
          console.log('Falling back to CSS confetti');
          createCSSConfetti();
        });
    } else {
      // Library already loaded
      triggerConfetti(confetti);
    }
  } catch (error) {
    // Fall back to CSS confetti
    createCSSConfetti();
  }
}

/**
 * Trigger confetti animation using the canvas-confetti library
 * @param {function} confetti - The confetti function from canvas-confetti
 */
function triggerConfetti(confetti) {
  // Default celebration
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
  
  // Fire multiple bursts for a more exciting effect
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
  }, 250);
  
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  }, 400);
}

/**
 * Create CSS-based confetti as a fallback
 */
function createCSSConfetti() {
  // Create container for confetti
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);
  
  // Create 50 pieces of confetti
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    
    // Randomize confetti appearance
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    container.appendChild(confetti);
  }
  
  // Remove confetti after animation completes
  setTimeout(() => {
    container.remove();
  }, 6000);
  
  // Add CSS if not already added
  if (!document.getElementById('confetti-css')) {
    const style = document.createElement('style');
    style.id = 'confetti-css';
    style.textContent = `
      .confetti-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
      }
      
      .confetti-piece {
        position: absolute;
        width: 10px;
        height: 10px;
        background: #ffd700;
        top: -10px;
        opacity: 0;
        transform: translateY(0) rotate(0);
        animation: confetti-fall 5s ease-out forwards;
      }
      
      @keyframes confetti-fall {
        0% {
          opacity: 1;
          transform: translateY(0) rotate(0);
        }
        
        100% {
          opacity: 0;
          transform: translateY(100vh) rotate(720deg);
        }
      }
    `;
    
    document.head.appendChild(style);
  }
}

// Example usage:
// celebrate(); // Call this when someone wins or confirms a purchase
