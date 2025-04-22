// Product view tracking system
const productViews = {
    // Initialize from localStorage or empty object
    data: JSON.parse(localStorage.getItem('product-views') || '{}'),
    
    // Track a product view
    trackView(productId) {
        if (!this.data[productId]) {
            this.data[productId] = 0;
        }
        this.data[productId]++;
        this.save();
        this.updateHeroBackground();
    },
    
    // Save to localStorage
    save() {
        localStorage.setItem('product-views', JSON.stringify(this.data));
    },
    
    // Get most viewed product
    getMostViewed() {
        return Object.entries(this.data)
            .sort(([,a], [,b]) => b - a)[0]?.[0] || null; // Return null if no views
    },
    
    // Update hero background based on most viewed product
    updateHeroBackground() {
        const mostViewedId = this.getMostViewed();
        const heroSection = document.querySelector('.hero-banner');
        if (!heroSection) return;
        
        // Remove video if it exists
        const existingVideo = heroSection.querySelector('.hero-video');
        if (existingVideo) {
            existingVideo.remove();
        }
        
        // Get product image from productData (defined in product-modal.js)
        const product = window.productData?.[mostViewedId];
        const imageUrl = product?.images?.[0] || 'assets/images/background.png';
        
        // Update background
        heroSection.style.backgroundImage = `url(${imageUrl})`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
        
        // Update hero text to show the most viewed product
        const heroText = heroSection.querySelector('.hero-text p');
        if (heroText) {
            if (product) {
                heroText.textContent = `Enter to win a ${product.title}. Most popular item!`;
            } else {
                heroText.textContent = 'Enter to win amazing prizes. Most popular item!';
            }
        }
    }
};

// Initialize tracking when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Update hero background on page load
    productViews.updateHeroBackground();
    
    // Track product views when modal is opened
    document.addEventListener('productModalOpened', (e) => {
        if (e.detail?.productId) {
            productViews.trackView(e.detail.productId);
        }
    });
}); 