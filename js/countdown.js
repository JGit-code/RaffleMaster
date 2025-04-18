/**
 * Starts a countdown timer for a specified element until a given end time
 * @param {HTMLElement} element - The DOM element to display the countdown in
 * @param {string} endTime - ISO format date string for when the countdown ends
 */
function startCountdown(element, endTime) {
  if (!element) return;
  
  // Convert endTime to milliseconds
  const endDate = new Date(endTime).getTime();
  
  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
  
  // Initial update
  updateCountdown();
  
  function updateCountdown() {
    // Get current time
    const now = new Date().getTime();
    
    // Calculate the distance between now and the countdown end date
    const distance = endDate - now;
    
    // If the countdown is finished
    if (distance <= 0) {
      clearInterval(countdownInterval);
      element.innerHTML = 'ENDED';
      element.classList.add('countdown-ended');
      return;
    }
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Format display based on remaining time
    let display = '';
    
    if (days > 0) {
      display += `${days}d `;
    }
    
    display += `${hours.toString().padStart(2, '0')}h `;
    display += `${minutes.toString().padStart(2, '0')}m `;
    display += `${seconds.toString().padStart(2, '0')}s`;
    
    // Display the result
    element.innerHTML = display;
    
    // Add urgency class if less than 24 hours remain
    if (distance < 24 * 60 * 60 * 1000) {
      element.classList.add('countdown-urgent');
    }
  }
}

// Auto-initialize countdowns on page load
document.addEventListener('DOMContentLoaded', () => {
  // Find all elements with data-end-time attribute
  const countdowns = document.querySelectorAll('[data-end-time]');
  
  countdowns.forEach(countdown => {
    const endTime = countdown.getAttribute('data-end-time');
    startCountdown(countdown, endTime);
  });
});
