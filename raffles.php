<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raffles - Raffle Master</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/components/header.css">
    <link rel="stylesheet" href="css/components/footer.css">
    <link rel="stylesheet" href="css/components/prize-card.css">
    <link rel="stylesheet" href="css/components/modal.css">
    <link rel="stylesheet" href="css/components/animation.css">
</head>
<body>
    <?php include 'header.php'; ?>

    <main>
        <!-- Raffles Banner -->
        <section class="page-banner">
            <div class="container text-center">
                <h1>Current Raffles</h1>
                <p class="subtitle">Browse our selection of amazing prizes ready to be won!</p>
            </div>
        </section>
        
        <!-- Filter Section -->
        <section class="filter-section">
            <div class="container">
                <div class="filter-controls">
                    <div class="filter-group">
                        <label>Category:</label>
                        <div class="filter-options">
                            <button class="filter-btn active" data-category="all">All</button>
                            <button class="filter-btn" data-category="tech">Tech</button>
                            <button class="filter-btn" data-category="cars">Cars</button>
                            <button class="filter-btn" data-category="travel">Travel</button>
                            <button class="filter-btn" data-category="cash">Cash</button>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <label>Sort By:</label>
                        <select class="sort-select">
                            <option value="ending-soon">Ending Soon</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="popularity">Popularity</option>
                        </select>
                    </div>
                </div>
                
                <div class="filter-info">
                    <p>Showing <span id="result-count">9</span> results</p>
                </div>
            </div>
        </section>
        
        <!-- Raffles Grid -->
        <section class="raffles-grid-section">
            <div class="container">
                <div class="raffle-grid">
                    <!-- iPhone 15 Pro Prize Card -->
                    <div class="prize-card tilt" data-category="tech">
                        <img src="assets/images/iphone15.jpg" alt="iPhone 15 Pro">
                        <div class="prize-meta">
                            <span class="prize-tickets">487 tickets left</span>
                        </div>
                        <h3>iPhone 15 Pro</h3>
                        <p class="price">£10 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 60%;"></div>
                            <span class="progress-text">60% Sold</span>
                        </div>
                        <a href="raffles/iphone15.php" class="cta-button">Buy Ticket</a>
                    </div>
                    
                    <!-- Tesla Model 3 Prize Card -->
                    <div class="prize-card tilt" data-category="cars">
                        <img src="assets/images/tesla.jpg" alt="Tesla Model 3">
                        <div class="prize-meta">
                            <span class="prize-tickets">125 tickets left</span>
                        </div>
                        <h3>Tesla Model 3</h3>
                        <p class="price">£25 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-10T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 90%;"></div>
                            <span class="progress-text">90% Sold</span>
                        </div>
                        <a href="raffles/tesla.php" class="cta-button">Buy Ticket</a>
                    </div>
                    
                    <!-- MacBook Pro Prize Card -->
                    <div class="prize-card tilt" data-category="tech">
                        <img src="assets/images/macbook-pro.jpg" alt="MacBook Pro">
                        <div class="prize-meta">
                            <span class="prize-tickets">342 tickets left</span>
                        </div>
                        <h3>MacBook Pro</h3>
                        <p class="price">£20 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 80%;"></div>
                            <span class="progress-text">80% Sold</span>
                        </div>
                        <a href="raffles/macbook.php" class="cta-button">Buy Ticket</a>
                    </div>
                    
                    <!-- More prize cards can be added here -->
                    
                    <!-- Holiday Prize Card -->
                    <div class="prize-card tilt" data-category="travel">
                        <img src="assets/images/holiday1.jpg" alt="Luxury Holiday">
                        <div class="prize-meta">
                            <span class="prize-tickets">250 tickets left</span>
                        </div>
                        <h3>Luxury Holiday</h3>
                        <p class="price">£15 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-15T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 40%;"></div>
                            <span class="progress-text">40% Sold</span>
                        </div>
                        <a href="#" class="cta-button">Buy Ticket</a>
                    </div>
                    
                    <!-- Cash Prize Card -->
                    <div class="prize-card tilt" data-category="cash">
                        <img src="assets/images/cash.jpg" alt="£10,000 Cash">
                        <div class="prize-meta">
                            <span class="prize-tickets">750 tickets left</span>
                        </div>
                        <h3>£10,000 Cash</h3>
                        <p class="price">£5 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-06-01T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 30%;"></div>
                            <span class="progress-text">30% Sold</span>
                        </div>
                        <a href="#" class="cta-button">Buy Ticket</a>
                    </div>
                    
                    <!-- Gaming Console Prize Card -->
                    <div class="prize-card tilt" data-category="tech">
                        <img src="assets/images/playstation5.jpg" alt="PlayStation 5">
                        <div class="prize-meta">
                            <span class="prize-tickets">412 tickets left</span>
                        </div>
                        <h3>PlayStation 5 Bundle</h3>
                        <p class="price">£8 per ticket</p>
                        <div class="countdown-timer" data-end-time="2025-05-05T20:00:00Z"></div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: 70%;"></div>
                            <span class="progress-text">70% Sold</span>
                        </div>
                        <a href="#" class="cta-button">Buy Ticket</a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Newsletter Section -->
        <section class="newsletter-section bg-surface">
            <div class="container text-center">
                <h2>Never Miss a Draw</h2>
                <p>Subscribe to our newsletter to get updates on new raffles and winners.</p>
                
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address" required>
                    <button type="submit" class="cta-button">Subscribe</button>
                </form>
            </div>
        </section>
        
        <!-- How It Works Section -->
        <section class="how-it-works">
            <div class="container text-center">
                <h2>How It Works</h2>
                
                <div class="steps-grid">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3>Choose Your Prize</h3>
                        <p>Browse our selection of premium prizes. From the latest tech to luxury cars, we have something for everyone.</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">2</div>
                        <h3>Buy Your Tickets</h3>
                        <p>Select how many tickets you want to purchase. More tickets mean a higher chance of winning!</p>
                    </div>
                    
                    <div class="step">
                        <div class="step-number">3</div>
                        <h3>Wait for the Draw</h3>
                        <p>Each raffle has a closing date. The draw happens either when all tickets are sold or when the timer ends.</p>
                    </div>
                </div>
                
                <a href="how-it-works.php" class="secondary-button">Learn More</a>
            </div>
        </section>
        
        <!-- Recent Winners Carousel -->
        <section class="recent-winners">
            <div class="container">
                <h2 class="text-center">Recent Winners</h2>
                
                <div class="winners-carousel">
                    <div class="winner-card">
                        <img src="assets/images/winners/winner1.jpg" alt="John D.">
                        <div class="winner-info">
                            <h3>John D. won Tesla Model S</h3>
                            <p>"I never thought I'd actually win! The Tesla is amazing and the whole process was so smooth."</p>
                        </div>
                    </div>
                </div>
                
                <div class="text-center">
                    <a href="winners.php" class="secondary-button">View All Winners</a>
                </div>
            </div>
        </section>
    </main>

    <?php include 'footer.php'; ?>

    <script src="js/countdown.js"></script>
    <script src="js/header.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize countdown timers
            const countdownElements = document.querySelectorAll('.countdown-timer');
            countdownElements.forEach(element => {
                const endTime = element.dataset.endTime;
                startCountdown(element, endTime);
            });
            
            // Category filter functionality
            const filterButtons = document.querySelectorAll('.filter-btn');
            const prizeCards = document.querySelectorAll('.prize-card');
            const resultCount = document.getElementById('result-count');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to the clicked button
                    button.classList.add('active');
                    
                    const category = button.dataset.category;
                    let visibleCount = 0;
                    
                    prizeCards.forEach(card => {
                        if (category === 'all' || card.dataset.category === category) {
                            card.style.display = 'block';
                            visibleCount++;
                        } else {
                            card.style.display = 'none';
                        }
                    });
                    
                    resultCount.textContent = visibleCount;
                });
            });
            
            // Sort functionality
            const sortSelect = document.querySelector('.sort-select');
            
            sortSelect.addEventListener('change', () => {
                const sortValue = sortSelect.value;
                const cardsArray = Array.from(prizeCards);
                
                cardsArray.sort((a, b) => {
                    if (sortValue === 'price-low') {
                        const priceA = parseFloat(a.querySelector('.price').textContent.replace(/[^0-9.]/g, ''));
                        const priceB = parseFloat(b.querySelector('.price').textContent.replace(/[^0-9.]/g, ''));
                        return priceA - priceB;
                    } else if (sortValue === 'price-high') {
                        const priceA = parseFloat(a.querySelector('.price').textContent.replace(/[^0-9.]/g, ''));
                        const priceB = parseFloat(b.querySelector('.price').textContent.replace(/[^0-9.]/g, ''));
                        return priceB - priceA;
                    } else if (sortValue === 'ending-soon') {
                        const timeA = a.querySelector('.countdown-timer').dataset.endTime;
                        const timeB = b.querySelector('.countdown-timer').dataset.endTime;
                        return new Date(timeA) - new Date(timeB);
                    } else if (sortValue === 'popularity') {
                        const soldA = parseInt(a.querySelector('.progress-bar').style.width);
                        const soldB = parseInt(b.querySelector('.progress-bar').style.width);
                        return soldB - soldA;
                    }
                    
                    return 0;
                });
                
                const container = document.querySelector('.raffle-grid');
                cardsArray.forEach(card => container.appendChild(card));
            });
            
            // Update cart count from localStorage
            const cartCountEl = document.querySelector('.cart-count');
            if (cartCountEl) {
                const cart = JSON.parse(localStorage.getItem('raffle-cart') || '[]');
                cartCountEl.textContent = cart.length;
            }
        });
    </script>
</body>
</html>
