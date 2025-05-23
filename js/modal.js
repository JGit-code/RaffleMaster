/**
 * Modal functionality for ticket selection
 */
document.addEventListener('DOMContentLoaded', () => {
  // Get modal elements
  const modalContainer = document.getElementById('ticket-modal');
  if (!modalContainer) return;
  
  const modal = modalContainer.querySelector('.modal');
  const closeBtn = modalContainer.querySelector('.modal-close');
  const ticketBtns = modalContainer.querySelectorAll('.ticket-btn');
  const customAmount = modalContainer.querySelector('#custom-ticket-amount');
  const ticketTotal = modalContainer.querySelector('.ticket-total');
  const addToCartBtn = modalContainer.querySelector('.add-to-cart-btn');
  
  // Get all buttons that should open the modal
  const openModalBtns = document.querySelectorAll('.buy-ticket-btn');
  
  // Variables
  let selectedQuantity = 1;
  const ticketPrice = 5; // Default price, can be overridden
  
  // Open modal function
  function openModal() {
    modalContainer.classList.add('open');
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  }
  
  // Close modal function
  function closeModal() {
    modalContainer.classList.remove('open');
    // Re-enable scrolling
    document.body.style.overflow = '';
  }
  
  // Update total price
  function updateTotal() {
    if (ticketTotal) {
      ticketTotal.textContent = `£${selectedQuantity * ticketPrice}`;
    }
  }
  
  // Initialize
  updateTotal();
  
  // Event Listeners
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  
  // Close when clicking the close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Close when clicking outside the modal
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      closeModal();
    }
  });
  
  // Handle ticket buttons
  ticketBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      ticketBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Get quantity from data attribute
      selectedQuantity = parseInt(btn.dataset.quantity);
      
      // Update custom input to match
      if (customAmount) {
        customAmount.value = selectedQuantity;
      }
      
      // Update total
      updateTotal();
    });
  });
  
  // Handle custom amount input
  if (customAmount) {
    customAmount.addEventListener('input', () => {
      // Get value from input
      const value = parseInt(customAmount.value);
      
      // Validate input
      if (value > 0 && value <= 100) {
        selectedQuantity = value;
        
        // Remove active class from all buttons
        ticketBtns.forEach(btn => btn.classList.remove('active'));
        
        // Check if any button matches this value and activate it
        ticketBtns.forEach(btn => {
          if (parseInt(btn.dataset.quantity) === value) {
            btn.classList.add('active');
          }
        });

        // Update total
        updateTotal();
      }
    });
  }
  
  // Handle add to cart button
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      // Get current product information from the window object
      // This will be set by product-modal.js
      const productInfo = window.currentModalProduct || {
        id: 'unknown',
        name: 'Raffle Item',
        price: ticketPrice
      };

      // Add to cart (store in localStorage)
      let cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
      
      cart.push({
        id: productInfo.id,
        name: productInfo.name,
        quantity: selectedQuantity,
        price: productInfo.price,
        total: selectedQuantity * productInfo.price,
        date: new Date().toISOString()
      });
      
      localStorage.setItem('raffle-cart', JSON.stringify(cart));
      
      // Update cart count in header
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = cart.length;
      }
      
      // Show success feedback
      addToCartBtn.textContent = 'Added to Cart!';
      addToCartBtn.classList.add('success');
      
      // Add confetti celebration if available
      if (typeof celebrate === 'function') {
        celebrate();
      }

      // Reset button after delay
      setTimeout(() => {
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.classList.remove('success');
        closeModal();
      }, 1500);
    });
  }

  // Public method to set the product price from outside
  window.setTicketPrice = function(price) {
    if (price && !isNaN(price)) {
      ticketPrice = price;
      updateTotal();
    }
  };

  // Store the current modal product for cart reference
  window.setCurrentModalProduct = function(product) {
    window.currentModalProduct = product;
  };
});

