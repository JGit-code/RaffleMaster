<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Raffle Master</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/components/header.css">
    <link rel="stylesheet" href="css/components/footer.css">
    <link rel="stylesheet" href="css/components/checkout.css">
    <link rel="stylesheet" href="css/components/animation.css">
</head>
<body class="checkout-page">
    <?php include 'header.php'; ?>

    <main>
        <!-- Checkout Section -->
        <section class="checkout-section">
            <div class="container">
                <div class="checkout-grid">
                    <!-- Checkout Form -->
                    <div class="checkout-form">
                        <h1>Checkout</h1>
                        
                        <!-- Progress Bar -->
                        <div class="checkout-progress">
                            <div class="progress-step active">
                                <div class="step-number">1</div>
                                <div class="step-label">Customer Info</div>
                            </div>
                            <div class="progress-bar"></div>
                            <div class="progress-step">
                                <div class="step-number">2</div>
                                <div class="step-label">Payment</div>
                            </div>
                            <div class="progress-bar"></div>
                            <div class="progress-step">
                                <div class="step-number">3</div>
                                <div class="step-label">Confirmation</div>
                            </div>
                        </div>
                        
                        <form id="checkout-form">
                            <!-- Customer Information -->
                            <div class="form-section active" id="customer-info">
                                <h2>Customer Information</h2>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="first-name">First Name</label>
                                        <input type="text" id="first-name" name="first-name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="last-name">Last Name</label>
                                        <input type="text" id="last-name" name="last-name" required>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" required>
                                </div>
                                
                                <div class="form-actions">
                                    <button type="button" class="back-btn" id="back-to-cart">Back to Cart</button>
                                    <button type="button" class="next-btn" id="to-payment">Continue to Payment</button>
                                </div>
                            </div>
                            
                            <!-- Payment Information -->
                            <div class="form-section" id="payment-info">
                                <h2>Payment Information</h2>
                                
                                <div class="form-group">
                                    <label for="card-number">Card Number</label>
                                    <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required>
                                </div>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="expiry-date">Expiry Date</label>
                                        <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="123" required>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="card-name">Name on Card</label>
                                    <input type="text" id="card-name" name="card-name" required>
                                </div>
                                
                                <div class="payment-icons">
                                    <img src="assets/icons/visa.svg" alt="Visa">
                                    <img src="assets/icons/mastercard.svg" alt="Mastercard">
                                    <img src="assets/icons/amex.svg" alt="American Express">
                                </div>
                                
                                <div class="form-actions">
                                    <button type="button" class="back-btn" id="back-to-customer">Back</button>
                                    <button type="button" class="next-btn" id="to-review">Review Order</button>
                                </div>
                            </div>
                            
                            <!-- Order Review -->
                            <div class="form-section" id="order-review">
                                <h2>Review Your Order</h2>
                                
                                <div class="review-info">
                                    <h3>Customer Information</h3>
                                    <p id="review-name"></p>
                                    <p id="review-email"></p>
                                    <p id="review-phone"></p>
                                </div>
                                
                                <div class="review-info">
                                    <h3>Payment Method</h3>
                                    <p id="review-payment"></p>
                                </div>
                                
                                <div class="review-items">
                                    <h3>Order Items</h3>
                                    <div id="review-items-list">
                                        <!-- Will be filled by JavaScript -->
                                    </div>
                                </div>
                                
                                <div class="form-actions">
                                    <button type="button" class="back-btn" id="back-to-payment">Back</button>
                                    <button type="submit" class="submit-btn">Complete Purchase</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <!-- Order Summary -->
                    <div class="order-summary">
                        <h2>Order Summary</h2>
                        <div id="cart-items">
                            <!-- Will be populated by JavaScript -->
                        </div>
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span id="cart-subtotal">£0</span>
                        </div>
                        <div class="summary-row">
                            <span>Processing Fee</span>
                            <span id="cart-fee">£0</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span id="cart-total">£0</span>
                        </div>
                        <div class="secure-checkout">
                            <img src="assets/icons/lock.svg" alt="Secure Checkout">
                            <p>Your data is encrypted and secure</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'footer.php'; ?>

    <script src="js/header.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Get form sections
            const customerSection = document.getElementById('customer-info');
            const paymentSection = document.getElementById('payment-info');
            const reviewSection = document.getElementById('order-review');
            
            // Get buttons
            const backToCartBtn = document.getElementById('back-to-cart');
            const toPaymentBtn = document.getElementById('to-payment');
            const backToCustomerBtn = document.getElementById('back-to-customer');
            const toReviewBtn = document.getElementById('to-review');
            const backToPaymentBtn = document.getElementById('back-to-payment');
            const submitBtn = document.querySelector('.submit-btn');
            
            // Get progress steps
            const progressSteps = document.querySelectorAll('.progress-step');
            
            // Event listeners for buttons
            backToCartBtn.addEventListener('click', () => {
                window.location.href = 'cart.php';
            });
            
            toPaymentBtn.addEventListener('click', () => {
                customerSection.classList.remove('active');
                paymentSection.classList.add('active');
                progressSteps[1].classList.add('active');
            });
            
            backToCustomerBtn.addEventListener('click', () => {
                paymentSection.classList.remove('active');
                customerSection.classList.add('active');
                progressSteps[1].classList.remove('active');
            });
            
            toReviewBtn.addEventListener('click', () => {
                // Populate review information
                const firstName = document.getElementById('first-name').value;
                const lastName = document.getElementById('last-name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const cardNumber = document.getElementById('card-number').value;
                
                document.getElementById('review-name').textContent = `${firstName} ${lastName}`;
                document.getElementById('review-email').textContent = email;
                document.getElementById('review-phone').textContent = phone;
                document.getElementById('review-payment').textContent = `Credit Card ending in ${cardNumber.slice(-4)}`;
                
                paymentSection.classList.remove('active');
                reviewSection.classList.add('active');
                progressSteps[2].classList.add('active');
            });
            
            backToPaymentBtn.addEventListener('click', () => {
                reviewSection.classList.remove('active');
                paymentSection.classList.add('active');
                progressSteps[2].classList.remove('active');
            });
            
            // Form submission
            document.getElementById('checkout-form').addEventListener('submit', (e) => {
                e.preventDefault();
                
                // In a real implementation, you would send the form data to your server here
                // For this demo, we'll just redirect to the confirmation page
                window.location.href = 'confirmation.php';
            });
            
            // Get cart from localStorage
            const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
            const cartItemsEl = document.getElementById('cart-items');
            const subtotalEl = document.getElementById('cart-subtotal');
            const feeEl = document.getElementById('cart-fee');
            const totalEl = document.getElementById('cart-total');
            const reviewItemsList = document.getElementById('review-items-list');
            
            // If cart is empty, redirect to cart page
            if (cart.length === 0) {
                window.location.href = 'cart.php';
                return;
            }
            
            // Populate cart items and calculate totals
            let subtotal = 0;
            
            cart.forEach(item => {
                const itemTotal = item.quantity * item.price;
                subtotal += itemTotal;
                
                const cartItemEl = document.createElement('div');
                cartItemEl.className = 'cart-item';
                cartItemEl.innerHTML = `
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>${item.quantity} ticket${item.quantity > 1 ? 's' : ''} @ £${item.price} each</p>
                    </div>
                    <div class="item-price">£${itemTotal}</div>
                `;
                
                cartItemsEl.appendChild(cartItemEl);
                
                // Also add to review items list
                const reviewItemEl = document.createElement('div');
                reviewItemEl.className = 'review-item';
                reviewItemEl.innerHTML = `
                    <div class="item-name">${item.name} (${item.quantity})</div>
                    <div class="item-price">£${itemTotal}</div>
                `;
                
                reviewItemsList.appendChild(reviewItemEl);
            });
            
            // Calculate processing fee (example: 5% of subtotal)
            const fee = subtotal * 0.05;
            const total = subtotal + fee;
            
            // Update summary
            subtotalEl.textContent = `£${subtotal.toFixed(2)}`;
            feeEl.textContent = `£${fee.toFixed(2)}`;
            totalEl.textContent = `£${total.toFixed(2)}`;
            
            // Update cart count
            const cartCountEl = document.querySelector('.cart-count');
            if (cartCountEl) {
                cartCountEl.textContent = cart.length;
            }
        });
    </script>
</body>
</html>
