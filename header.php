<header class="site-header">
    <div class="logo">
        <img src="assets/images/RaffleLogo.png" alt="Raffle Master Logo">
        <a href="index.php">Raffle Master</a>
    </div>
    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
        <ul>
            <li><a href="index.php" class="nav-link">Home</a></li>
            <li><a href="raffles.php" class="nav-link">Raffles</a></li>
            <li><a href="winners.php" class="nav-link">Winners</a></li>
            <li><a href="how-it-works.php" class="nav-link">How It Works</a></li>
            <li><a href="cart.php" class="nav-link cart-link">Cart <span class="cart-count">0</span></a></li>
        </ul>
    </nav>
    <!-- Mobile Menu Toggle -->
    <button class="menu-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <!-- Overlay for mobile menu -->
    <div class="menu-overlay"></div>
</header>
<!-- Mobile Navigation (outside header for positioning) -->
<div class="mobile-menu-container">
    <div class="mobile-menu-header">
        <div class="logo">
            <img src="assets/images/RaffleLogo.png" alt="Raffle Master Logo">
            <span>Raffle Master</span>
        </div>
        <button class="mobile-menu-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <nav class="mobile-nav">
        <ul>
            <li><a href="index.php" class="nav-link">Home</a></li>
            <li><a href="raffles.php" class="nav-link">Raffles</a></li>
            <li><a href="winners.php" class="nav-link">Winners</a></li>
            <li><a href="how-it-works.php" class="nav-link">How It Works</a></li>
        </ul>
        <div class="mobile-cart-container">
            <a href="cart.php" class="mobile-cart-link">Cart <span class="cart-count">0</span></a>
        </div>
    </nav>
</div>