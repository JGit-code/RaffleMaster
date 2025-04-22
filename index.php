<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raffle Master - Win Amazing Prizes</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/components/header.css">
    <link rel="stylesheet" href="css/components/footer.css">
    <link rel="stylesheet" href="css/components/prize-card.css">
    <link rel="stylesheet" href="css/components/modal.css">
    <link rel="stylesheet" href="css/components/animation.css">
    <link rel="stylesheet" href="css/components/hero.css">
</head>
<body>
    <?php include 'header.php'; ?>
    <main>
        <section class="hero-banner">
            <div class="hero-slider">
                <!-- Slide 1: Polo Car Giveaway -->
                <div class="hero-slide active" style="background-image: url('assets/images/backgrounds/polo-bg.jpg'); background-position: center center;">
                    <div class="slide-overlay"></div>
                    <div class="dream-car-tag">SIMPLE MAN</div>
                    <div class="price-tag">
                        <div class="price-tag-text">TICKETS</div>
                        <div class="price-tag-amount">R15</div>
                    </div>
                    <div class="cars-container polo-container">
                        <img src="assets/images/vw-polo.jpg" alt="VW Polo" class="hero-car polo-car">
                    </div>
                    <div class="hero-content">
                        <h1>STAND A CHANCE TO WIN A POLO!</h1>
                        <p>Buy as many tickets as you can. The more, the merrier!</p>
                        <a href="#" class="enter-btn" data-product="polo" data-toggle="modal" data-target="#ticket-modal">ENTER TO WIN »</a>
                    </div>
                    <div class="bonus-tag">
                        <span>OR</span>
                        <strong>R100,000</strong>
                        <span>CASH PRIZE</span>
                    </div>
                </div>

                <!-- Slide 2: iPhone 15 Pro -->
                <div class="hero-slide" style="background-image: url('assets/images/tech-background.jpg');">
                    <div class="prize-tag">TECH GIVEAWAY</div>
                    <div class="price-tag">
                        <div class="price-tag-text">TICKETS FROM</div>
                        <div class="price-tag-amount">£10</div>
                    </div>
                    <div class="product-container iphone-container">
                        <img src="assets/images/iphone15.jpg" alt="iPhone 15 Pro" class="hero-product iphone-product">
                    </div>
                    <div class="hero-content">
                        <h1>WIN THE LATEST iPHONE 15 PRO!</h1>
                        <p>Your chance to win Apple's flagship smartphone with incredible camera and performance!</p>
                        <a href="#iphone15" class="enter-btn">ENTER TO WIN »</a>
                    </div>
                </div>

                <!-- Slide 3: MacBook Pro -->
                <div class="hero-slide" style="background-image: url('assets/images/desk-background.jpg');">
                    <div class="prize-tag">PRO GEAR</div>
                    <div class="price-tag">
                        <div class="price-tag-text">TICKETS FROM</div>
                        <div class="price-tag-amount">£20</div>
                    </div>
                    <div class="product-container macbook-container">
                        <img src="assets/images/macbook-pro.jpg" alt="MacBook Pro" class="hero-product macbook-product">
                    </div>
                    <div class="hero-content">
                        <h1>MACBOOK PRO GIVEAWAY!</h1>
                        <p>Take your productivity to the next level with Apple's most powerful laptop!</p>
                        <a href="#macbook" class="enter-btn">ENTER NOW »</a>
                    </div>
                </div>

                <!-- Slide 4: Holiday & Crypto -->
                <div class="hero-slide" style="background-image: url('assets/images/holiday1.jpg');">
                    <div class="prize-tag">DUAL PRIZE</div>
                    <div class="price-tag">
                        <div class="price-tag-text">TICKETS FROM</div>
                        <div class="price-tag-amount">£15</div>
                    </div>
                    <div class="dual-container">
                        <div class="crypto-icon">₿</div>
                    </div>
                    <div class="hero-content">
                        <h1>LUXURY HOLIDAY + CRYPTO!</h1>
                        <p>Win a dream vacation AND £5,000 in cryptocurrency of your choice!</p>
                        <a href="#holiday-crypto" class="enter-btn">SPIN & WIN »</a>
                    </div>
                </div>
                
                <!-- Slide 5: PlayStation 5 Bundle -->
                <div class="hero-slide" style="background-image: url('assets/images/gaming-background.jpg');">
                    <div class="prize-tag">GAMING BUNDLE</div>
                    <div class="price-tag">
                        <div class="price-tag-text">TICKETS FROM</div>
                        <div class="price-tag-amount">£12.50</div>
                    </div>
                    <div class="product-container gaming-container">
                        <img src="assets/images/playstation5.jpg" alt="PlayStation 5" class="hero-product ps5-product">
                    </div>
                    <div class="hero-content">
                        <h1>WIN A PS5 ULTIMATE BUNDLE!</h1>
                        <p>PlayStation 5 console, extra controller, headset, and 5 games of your choice!</p>
                        <a href="#gaming" class="enter-btn">GAME ON! »</a>
                    </div>
                </div>
                
                <!-- Slide 6: Home Renovation Package -->
                <div class="hero-slide" style="background-image: url('assets/images/home-background.jpg');">
                    <div class="prize-tag">HOME MAKEOVER</div>
                    <div class="price-tag">
                        <div class="price-tag-text">TICKETS FROM</div>
                        <div class="price-tag-amount">£25</div>
                    </div>
                    <div class="product-container home-container">
                        <img src="assets/images/home-renovation.jpg" alt="Home Renovation" class="hero-product home-product">
                    </div>
                    <div class="hero-content">
                        <h1>£25,000 HOME RENOVATION PACKAGE!</h1>
                        <p>Transform your living space with this incredible home makeover prize!</p>
                        <a href="#home-makeover" class="enter-btn">ENTER NOW »</a>
                    </div>
                </div>
            </div>
            <!-- Slider Navigation -->
            <div class="slider-nav">
                <button class="slider-prev">❮</button>
                <div class="slider-dots"></div>
                <button class="slider-next">❯</button>
            </div>
        </section>

        <section class="explore-section">
            <h2>EXPLORE OUR COMPETITIONS</h2>
            <div class="stats-container">
                <div class="stats-item">
                    <div class="stats-icon">🏆</div>
                    <div class="stats-content">
                        <div class="stats-title">Over 9.68 million</div>
                        <div class="stats-subtitle">winners</div>
                    </div>
                </div>
                <div class="stats-divider"></div>
                <div class="stats-item">
                    <div class="stats-icon">🎁</div>
                    <div class="stats-content">
                        <div class="stats-title">Over £92.6 million</div>
                        <div class="stats-subtitle">in prizes won</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="live-raffles">
            <h2>Live Raffles</h2>
            <div class="raffle-grid">
                <!-- iPhone 15 Prize Card -->
                <div class="prize-card tilt" data-product-id="iphone15" data-category="tech">
                    <img src="assets/images/iphone15.jpg" alt="iPhone 15 Pro">
                    <div class="prize-meta">
                        <span class="prize-tickets">487 tickets left</span>
                    </div>
                    <h3>iPhone 15 Pro</h3>
                    <p class="price">R10 per ticket</p>
                    <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z"></div>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: 60%;"></div>
                        <span class="progress-text">60% Sold</span>
                    </div>
                    <a href="#iphone15" class="cta-button">Buy Ticket</a>
                </div>
                <!-- MacBook Pro Prize Card -->
                <div class="prize-card tilt" data-product-id="macbook" data-category="tech">
                    <img src="assets/images/macbook-pro.jpg" alt="MacBook Pro">
                    <div class="prize-meta">
                        <span class="prize-tickets">342 tickets left</span>
                    </div>
                    <h3>MacBook Pro</h3>
                    <p class="price">R20 per ticket</p>
                    <div class="countdown-timer" data-end-time="2025-04-20T20:00:00Z"></div>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: 80%;"></div>
                        <span class="progress-text">80% Sold</span>
                    </div>
                    <a href="#macbook" class="cta-button">Buy Ticket</a>
                </div>
                <!-- Holiday Prize Card -->
                <div class="prize-card tilt" data-product-id="holiday" data-category="travel">
                    <img src="assets/images/holiday1.jpg" alt="Luxury Holiday">
                    <div class="prize-meta">
                        <span class="prize-tickets">250 tickets left</span>
                    </div>
                    <h3>Luxury Holiday</h3>
                    <p class="price">R15 per ticket</p>
                    <div class="countdown-timer" data-end-time="2025-05-15T20:00:00Z"></div>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: 40%;"></div>
                        <span class="progress-text">40% Sold</span>
                    </div>
                    <a href="#holiday" class="cta-button">Buy Ticket</a>
                </div>
                <div class="prize-card tilt coming-soon">
                    <h3>Coming Soon</h3>
                    <p>New prizes added weekly</p>
                </div>
            </div>
        </section>

        <section class="trust-elements">
            <h2>Why Choose Us</h2>
            <div class="trust-grid">
                <div class="trust-item">
                    <img src="assets/icons/security.svg" alt="Security Icon">
                    <h3>Secure Checkout</h3>
                    <p>All transactions are SSL encrypted.</p>
                </div>
                <div class="trust-item">
                    <img src="assets/icons/ticket.svg" alt="Fair Draw Icon">
                    <h3>Fair Draws</h3>
                    <p>Random winners selected by verified algorithm.</p>
                </div>
                <div class="trust-item">
                    <img src="assets/icons/trophy.svg" alt="Winners Icon">
                    <h3>Real Winners</h3>
                    <p>See our gallery of past winners and testimonials.</p>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <h2>Hear From Our Winners</h2>
            <div class="testimonial-carousel">
                <div class="testimonial-slide">
                    <img src="assets/images/winners/winner1.jpg" alt="John D.">
                    <blockquote>
                        "I never thought I'd actually win! The Tesla is amazing and the whole process was so smooth."
                    </blockquote>
                    <cite>— John D., London</cite>
                </div>
            </div>
        </section>
    </main>

    <?php include 'footer.php'; ?>

    <!-- Ticket Purchase Modal (updated version) -->
    <div class="modal-container" id="ticket-modal">
        <div class="modal">
            <button class="modal-close">&times;</button>
            <h2 class="modal-product-title">Select Tickets</h2>
            <p class="modal-product-desc"></p>
            <div class="ticket-selector">
                <button class="ticket-btn" data-quantity="1">1</button>
                <button class="ticket-btn" data-quantity="5">5</button>
                <button class="ticket-btn" data-quantity="10">10</button>
                <button class="ticket-btn" data-quantity="20">20</button>
                <button class="ticket-btn" data-quantity="50">50</button>
                <div class="custom-quantity">
                    <label for="custom-ticket-amount">Custom:</label>
                    <input type="number" id="custom-ticket-amount" min="1" max="100" value="1">
                </div>
            </div>
            <div class="ticket-summary">
                <p>Total: <span class="ticket-total">R15</span></p>
            </div>
            <button class="cta-button add-to-cart-btn">Add to Cart</button>
        </div>
    </div>

    <!-- Product Detail Modal (to be added to index.php and raffles/index.php) -->
    <div class="modal-container" id="product-detail-modal">
        <div class="modal product-modal">
          <button class="modal-close" id="product-modal-close">&times;</button>
          
          <div class="product-modal-content">
            <!-- Product details will be dynamically loaded here -->
            <div class="product-modal-loading">
              <div class="spinner"></div>
              <span>Loading product details...</span>
            </div>
          </div>
        </div>
    </div>

    <script src="js/countdown.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/carousel.js"></script>
    <script src="js/product-modal.js"></script>
    <script src="js/product-tracking.js"></script>
    <script src="js/hero-slider.js"></script>
    <script src="js/header.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const countdownElements = document.querySelectorAll('.countdown-timer');
            countdownElements.forEach(element => {
                const endTime = element.dataset.endTime || '2025-04-20T20:00:00Z';
                startCountdown(element, endTime);
            });

            startCountdown(document.getElementById('countdown-tesla'), '2025-04-22T20:00:00Z');

            // Mobile menu functionality
            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.querySelector('.main-nav');
            const header = document.querySelector('.site-header');
            
            // Toggle menu
            menuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('active');
                document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mainNav.contains(e.target) && !menuToggle.contains(e.target) && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Header scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            initCarousel();
        });
    </script>
</body>
</html>

