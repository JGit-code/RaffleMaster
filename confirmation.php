<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - Raffle Master</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/components/header.css">
    <link rel="stylesheet" href="css/components/footer.css">
    <link rel="stylesheet" href="css/components/checkout.css">
    <link rel="stylesheet" href="css/components/animation.css">
</head>
<body class="confirmation-page">
    <?php include 'header.php'; ?>

    <main>
        <!-- Confirmation Section -->
        <section class="confirmation-section">
            <div class="container">
                <div class="confirmation-content">
                    <div class="confirmation-icon">
                        <img src="assets/icons/ticket.svg" alt="Confirmation">
                    </div>
                    
                    <h1>Thank You for Your Order!</h1>
                    <p class="confirmation-message">Your ticket purchase has been confirmed and we've sent a receipt to your email.</p>
                    
                    <div class="order-details">
                        <div class="order-detail">
                            <span class="detail-label">Order Number:</span>
                            <span class="detail-value" id="order-number">RM-123456</span>
                        </div>
                        <div class="order-detail">
                            <span class="detail-label">Order Date:</span>
                            <span class="detail-value" id="order-date"></span>
                        </div>
                        <div class="order-detail">
                            <span class="detail-label">Total Amount:</span>
                            <span class="detail-value" id="order-total">£50.00</span>
                        </div>
                    </div>
                    
                    <div class="ticket-list">
                        <h2>Your Raffle Tickets</h2>
                        <div class="tickets" id="ticket-numbers">
                            <!-- Will be populated by JavaScript -->
                        </div>
                    </div>
                    
                    <div class="draw-info">
                        <h2>Draw Information</h2>
                        <p>The draw for your entered raffles will take place on <span id="draw-date">April 20, 2025</span>. We'll notify you by email if you're a winner!</p>
                    </div>
                    
                    <div class="action-buttons">
                        <a href="index.php" class="cta-button">Continue Shopping</a>
                        <a href="winners.php" class="secondary-button">View Past Winners</a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Promotional Section -->
        <section class="promo-section">
            <div class="container">
                <h2>You Might Also Like</h2>
                <div class="raffle-grid">
                    <!-- Prize Card -->
                    <div class="prize-card tilt">
                        <img src="assets/images/iphone15.jpg" alt="iPhone 15 Pro">
                        <h3>iPhone 15 Pro</h3>
                        <p class="price">£10 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z"></div>
                        <a href="#" class="cta-button">Buy Ticket</a>
                    </div>
                    
                    <!-- Prize Card -->
                    <div class="prize-card tilt">
                        <img src="assets/images/holiday1.jpg" alt="Luxury Holiday">
                        <h3>Luxury Holiday</h3>
                        <p class="price">£15 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-15T20:00:00Z"></div>
                        <a href="#" class="cta-button">Buy Ticket</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'footer.php'; ?>

    <!-- Confetti Animation -->
    <canvas id="confetti-canvas"></canvas>

    <script src="js/confetti.js"></script>
    <script src="js/header.js"></script>
    <script src="js/countdown.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Set order date (current date)
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('order-date').textContent = now.toLocaleDateString('en-US', options);
            
            // Generate random ticket numbers for demo
            const ticketCount = Math.floor(Math.random() * 10) + 1; // 1-10 tickets
            const ticketContainer = document.getElementById('ticket-numbers');
            
            for (let i = 0; i < ticketCount; i++) {
                const ticketNumber = Math.floor(Math.random() * 900000) + 100000; // 6-digit number
                const ticketEl = document.createElement('div');
                ticketEl.className = 'ticket';
                ticketEl.textContent = `#${ticketNumber}`;
                ticketContainer.appendChild(ticketEl);
            }
            
            // Generate random order number
            const orderPrefix = 'RM-';
            const orderNumber = Math.floor(Math.random() * 900000) + 100000;
            document.getElementById('order-number').textContent = `${orderPrefix}${orderNumber}`;
            
            // Set a random total amount between £10 and £100
            const total = (Math.floor(Math.random() * 90) + 10).toFixed(2);
            document.getElementById('order-total').textContent = `£${total}`;
            
            // Clear cart
            localStorage.setItem('raffle-cart', '[]');
            
            // Update cart count
            const cartCountEl = document.querySelector('.cart-count');
            if (cartCountEl) {
                cartCountEl.textContent = '0';
            }
            
            // Initialize countdown timers
            const countdownElements = document.querySelectorAll('.countdown-timer');
            countdownElements.forEach(element => {
                const endTime = element.dataset.endTime;
                startCountdown(element, endTime);
            });
            
            // Start confetti animation
            startConfetti();
            
            // Stop confetti after a few seconds
            setTimeout(() => {
                stopConfetti();
            }, 5000);
        });
    </script>
</body>
</html>

