/**
 * Product Detail Modal System
 * Provides functionality to display product details in a modal
 * and handles the transition to the ticket purchase modal
 */

// Product data - in a real app, this would come from a database or API
const productData = {
  'iphone15': {
    id: 'iphone15',
    title: 'iPhone 15 Pro - 256GB',
    badge: 'Limited Edition',
    category: 'Tech',
    price: 5,
    totalTickets: 1000,
    remainingTickets: 487,
    soldPercentage: 52,
    endTime: '2025-04-20T20:00:00Z',
    description: 'Win a brand new iPhone 15 Pro with 256GB storage in Titanium finish. This is the latest flagship from Apple featuring cutting-edge technology and design.',
    features: [
      { icon: '⚡️', text: 'A17 Pro chip' },
      { icon: '📸', text: 'Pro camera system with 48MP main camera' },
      { icon: '📱', text: 'Super Retina XDR display with ProMotion' },
      { icon: '🔋', text: 'All-day battery life' },
      { icon: '🛡️', text: 'Ceramic Shield front' }
    ],
    images: [
      'assets/images/iphone15.jpg',
      'assets/images/iphone15.jpg', 
      'assets/images/iphone15.jpg'
    ],
    additionalInfo: [
      { icon: '🎁', text: 'Free delivery worldwide' },
      { icon: '🏆', text: 'Draw conducted live on YouTube' }
    ]
  },
  'tesla': {
    id: 'tesla',
    title: 'Tesla Model S Plaid',
    badge: 'Grand Prize',
    category: 'Automotive',
    price: 20,
    totalTickets: 2000,
    remainingTickets: 982,
    soldPercentage: 51,
    endTime: '2025-05-15T20:00:00Z',
    description: 'Win the incredible Tesla Model S Plaid - the fastest production car ever made with 0-60 mph in just 1.99 seconds and over 1,000 horsepower.',
    features: [
      { icon: '⚡️', text: '1,020 horsepower' },
      { icon: '🚀', text: '0-60 mph in 1.99 seconds' },
      { icon: '🔋', text: '396 mile range' },
      { icon: '🖥️', text: '17" touchscreen display' },
      { icon: '🛡️', text: 'Advanced autopilot included' }
    ],
    images: [
      '/assets/images/tesla.jpg',
      '/assets/images/tesla-interior.jpg',
      '/assets/images/tesla-rear.jpg'
    ],
    additionalInfo: [
      { icon: '🎁', text: 'Tax and delivery included' },
      { icon: '🏆', text: 'Draw conducted live on YouTube' }
    ]
  },
  'macbook': {
    id: 'macbook',
    title: 'MacBook Pro 16" - M2 Pro',
    badge: 'Most Popular',
    category: 'Tech',
    price: 10,
    totalTickets: 1500,
    remainingTickets: 342,
    soldPercentage: 77,
    endTime: '2025-05-10T18:00:00Z',
    description: 'Win the powerful MacBook Pro 16" with M2 Pro chip, perfect for creative professionals and power users who demand the best performance.',
    features: [
      { icon: '⚡️', text: 'M2 Pro chip with 12-core CPU' },
      { icon: '🖥️', text: '16" Liquid Retina XDR display' },
      { icon: '💾', text: '1TB SSD storage' },
      { icon: '🔋', text: 'Up to 22 hours of battery life' },
      { icon: '🔊', text: 'Six-speaker sound system' }
    ],
    images: [
      '/assets/images/macbook.jpg',
      '/assets/images/macbook-open.jpg',
      '/assets/images/macbook-side.jpg'
    ],
    additionalInfo: [
      { icon: '🎁', text: 'Free delivery worldwide' },
      { icon: '🏆', text: 'AppleCare+ included' }
    ]
  }
  // Add more products as needed
};

// Current product being viewed
let currentProduct = null;
let selectedQuantity = 1;

// Initialize the product modal system
document.addEventListener('DOMContentLoaded', () => {
  initProductModal();
});

/**
 * Initialize the product modal system
 */
function initProductModal() {
  // Get modal elements
  const productModal = document.getElementById('product-detail-modal');
  const productModalClose = document.getElementById('product-modal-close');
  const productCards = document.querySelectorAll('.prize-card');
  
  if (!productModal) return;
  
  // Add click event to all product cards
  productCards.forEach(card => {
    // Get the product ID from the card
    const productId = card.dataset.productId;
    if (!productId) return;
    
    // Replace the direct link with a modal trigger
    const buyButton = card.querySelector('.cta-button');
    if (buyButton) {
      // Remove the href attribute and set a data attribute
      const href = buyButton.getAttribute('href');
      buyButton.removeAttribute('href');
      buyButton.dataset.originalHref = href;
      
      // Add click event to open modal
      buyButton.addEventListener('click', (e) => {
        e.preventDefault();
        openProductModal(productId);
      });
    }
  });
  
  // Add close event to the modal close button
  if (productModalClose) {
    productModalClose.addEventListener('click', closeProductModal);
  }
  
  // Close modal when clicking outside
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });
}

/**
 * Open the product modal with the specified product details
 * @param {string} productId - The ID of the product to display
 */
function openProductModal(productId) {
  const productModal = document.getElementById('product-detail-modal');
  const productModalContent = productModal.querySelector('.product-modal-content');
  
  if (!productModal || !productModalContent) return;
  
  // Show modal and loading state
  productModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  
  // Dispatch event for product view tracking
  document.dispatchEvent(new CustomEvent('productModalOpened', {
    detail: { productId }
  }));
  
  // Simulate loading delay
  setTimeout(() => {
    // Get product data
    const product = productData[productId];
    if (!product) {
      productModalContent.innerHTML = `
        <div class="error-message">
          <h3>Product Not Found</h3>
          <p>Sorry, we couldn't find the product you're looking for.</p>
        </div>
      `;
      return;
    }
    
    // Store current product
    currentProduct = product;
    selectedQuantity = 1;
    
    // Format the product details HTML
    const productHtml = `
      <div class="product-gallery">
        <div class="product-gallery-main">
          <img src="${product.images[0]}" alt="${product.title}" id="main-product-image">
          <div class="product-zoom-overlay"></div>
        </div>
        <div class="gallery-nav">
          ${product.images.map((img, i) => `
            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
              <img src="${img}" alt="${product.title} - Image ${i+1}">
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="product-info">
        <span class="product-badge">${product.badge}</span>
        <h2 class="product-title">${product.title}</h2>
        
        <div class="product-meta">
          <div class="product-meta-item">
            <span class="meta-icon">🏷️</span>
            <span>${product.category}</span>
          </div>
          <div class="product-meta-item highlight">
            <span class="meta-icon">💰</span>
            <span>£${product.price} per ticket</span>
          </div>
          <div class="product-meta-item">
            <span class="meta-icon">🎟️</span>
            <span>${product.remainingTickets} tickets remaining</span>
          </div>
        </div>
        
        <div class="product-progress">
          <div class="countdown-container">
            <span>Draw closes in:</span>
            <div class="countdown-timer modal-countdown" data-end-time="${product.endTime}"></div>
          </div>
          
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${product.soldPercentage}%"></div>
          </div>
          <div class="progress-text">
            <span>${product.soldPercentage}% Sold</span>
            <span>${product.totalTickets - product.remainingTickets}/${product.totalTickets} Tickets</span>
          </div>
        </div>
        
        <div class="product-description">
          <h3>Prize Details</h3>
          <p>${product.description}</p>
          
          <ul class="feature-list">
            ${product.features.map(feature => `
              <li><span class="feature-icon">${feature.icon}</span> ${feature.text}</li>
            `).join('')}
          </ul>
          
          <div class="additional-info">
            ${product.additionalInfo.map(info => `
              <div class="info-item">
                <span class="info-icon">${info.icon}</span>
                <span>${info.text}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="product-actions">
          <div class="quantity-selector">
            <h4>Select Quantity:</h4>
            <div class="quantity-buttons">
              <button class="quantity-btn active" data-qty="1">1</button>
              <button class="quantity-btn" data-qty="5">5</button>
              <button class="quantity-btn" data-qty="10">10</button>
              <button class="quantity-btn" data-qty="20">20</button>
              <button class="quantity-btn" data-qty="50">50</button>
            </div>
          </div>
          
          <button class="buy-now-btn">Buy Tickets Now</button>
        </div>
      </div>
    `;
    
    // Update modal content
    productModalContent.innerHTML = productHtml;
    
    // Initialize gallery functionality
    initGallery();
    
    // Initialize quantity buttons
    initQuantityButtons();
    
    // Initialize countdown timer
    initModalCountdown();
    
    // Initialize buy button
    const buyButton = productModalContent.querySelector('.buy-now-btn');
    if (buyButton) {
      buyButton.addEventListener('click', () => {
        closeProductModal();
        openTicketModal();
      });
    }
  }, 800); // Simulated loading time
}

/**
 * Initialize the image gallery in the product modal
 */
function initGallery() {
  const galleryThumbs = document.querySelectorAll('.gallery-thumb');
  const mainImage = document.getElementById('main-product-image');
  
  if (!galleryThumbs.length || !mainImage) return;
  
  galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Remove active class from all thumbs
      galleryThumbs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked thumb
      thumb.classList.add('active');
      
      // Update main image
      const index = parseInt(thumb.dataset.index);
      mainImage.src = currentProduct.images[index];
      
      // Add a zoom-in animation
      mainImage.classList.add('zoom-in');
      setTimeout(() => {
        mainImage.classList.remove('zoom-in');
      }, 300);
    });
  });
  
  // Add zoom effect on hover
  const galleryMain = document.querySelector('.product-gallery-main');
  const zoomOverlay = document.querySelector('.product-zoom-overlay');
  
  if (galleryMain && zoomOverlay && mainImage) {
    galleryMain.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = galleryMain.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      mainImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
      mainImage.style.transform = 'scale(1.5)';
      zoomOverlay.style.opacity = '0.2';
    });
    
    galleryMain.addEventListener('mouseleave', () => {
      mainImage.style.transform = 'scale(1)';
      zoomOverlay.style.opacity = '0';
    });
  }
}

/**
 * Initialize quantity selection buttons
 */
function initQuantityButtons() {
  const quantityButtons = document.querySelectorAll('.quantity-btn');
  
  if (!quantityButtons.length) return;
  
  quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      quantityButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Update selected quantity
      selectedQuantity = parseInt(button.dataset.qty);
      
      // Update buy button text
      const buyButton = document.querySelector('.buy-now-btn');
      if (buyButton) {
        const totalPrice = selectedQuantity * currentProduct.price;
        buyButton.textContent = `Buy ${selectedQuantity} Ticket${selectedQuantity > 1 ? 's' : ''} for £${totalPrice}`;
      }
    });
  });
  
  // Initialize buy button text with default quantity
  const buyButton = document.querySelector('.buy-now-btn');
  if (buyButton) {
    const totalPrice = selectedQuantity * currentProduct.price;
    buyButton.textContent = `Buy ${selectedQuantity} Ticket${selectedQuantity > 1 ? 's' : ''} for £${totalPrice}`;
  }
}

/**
 * Initialize countdown timer in the modal
 */
function initModalCountdown() {
  const countdownElements = document.querySelectorAll('.modal-countdown');
  
  countdownElements.forEach(element => {
    const endTime = element.dataset.endTime;
    
    // If startCountdown is defined in countdown.js
    if (typeof startCountdown === 'function') {
      startCountdown(element, endTime);
    } else {
      // Fallback countdown if the function isn't available
      const updateCountdown = () => {
        const now = new Date().getTime();
        const end = new Date(endTime).getTime();
        const distance = end - now;
        
        if (distance <= 0) {
          element.innerHTML = 'ENDED';
          return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      };
      
      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  });
}

/**
 * Close the product modal
 */
function closeProductModal() {
  const productModal = document.getElementById('product-detail-modal');
  
  if (!productModal) return;
  
  productModal.classList.remove('open');
  // Re-enable scrolling
  document.body.style.overflow = '';
}

/**
 * Open the ticket purchase modal
 */
function openTicketModal() {
  const ticketModal = document.getElementById('ticket-modal');
  
  if (!ticketModal || !currentProduct) return;
  
  // Update modal title with product name
  const modalTitle = ticketModal.querySelector('h2');
  if (modalTitle) {
    modalTitle.innerHTML = `Select Tickets for <span class="highlight-text">${currentProduct.title}</span>`;
  }
  
  // Update ticket buttons (optional - sync with previously selected quantity)
  const ticketBtns = ticketModal.querySelectorAll('.ticket-btn');
  ticketBtns.forEach(btn => {
    const btnQty = parseInt(btn.dataset.quantity);
    if (btnQty === selectedQuantity) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Update custom input with selected quantity
  const customInput = ticketModal.querySelector('#custom-ticket-amount');
  if (customInput) {
    customInput.value = selectedQuantity;
  }
  
  // Update ticket price
  const ticketTotal = ticketModal.querySelector('.ticket-total');
  if (ticketTotal) {
    ticketTotal.textContent = `£${selectedQuantity * currentProduct.price}`;
  }
  
  // Show the modal
  ticketModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}


