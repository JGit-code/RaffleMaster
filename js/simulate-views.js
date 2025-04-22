// Script to simulate product views for testing
document.addEventListener('DOMContentLoaded', () => {
    // Add a button to the page for testing
    const testButton = document.createElement('button');
    testButton.textContent = 'Simulate iPhone 15 View';
    testButton.style.position = 'fixed';
    testButton.style.bottom = '20px';
    testButton.style.right = '20px';
    testButton.style.zIndex = '9999';
    testButton.style.padding = '10px';
    testButton.style.backgroundColor = 'var(--color-primary)';
    testButton.style.color = 'var(--color-background)';
    testButton.style.border = 'none';
    testButton.style.borderRadius = '5px';
    testButton.style.cursor = 'pointer';
    
    testButton.addEventListener('click', () => {
        // Simulate a product view
        document.dispatchEvent(new CustomEvent('productModalOpened', {
            detail: { productId: 'iphone15' }
        }));
        
        // Show feedback
        testButton.textContent = 'View Counted!';
        setTimeout(() => {
            testButton.textContent = 'Simulate iPhone 15 View';
        }, 2000);
    });
    
    document.body.appendChild(testButton);
}); 