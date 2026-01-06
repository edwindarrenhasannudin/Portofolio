// ====== PORTFOLIO - MAIN JS (INIT MODULE) ======
// Import dan initialize semua modules

function initializePortfolio() {
  try {
    // Initialize splash screen FIRST (hide loading screen)
    if (typeof SplashScreen !== 'undefined') {
      SplashScreen.init();
    } else {
      console.warn('⚠️ SplashScreen module not loaded');
    }

    // Initialize navbar & menu
    if (typeof Navbar !== 'undefined') {
      Navbar.init();
    } else {
      console.warn('⚠️ Navbar module not loaded');
    }

    // Initialize scroll navigation
    if (typeof ScrollNavigation !== 'undefined') {
      ScrollNavigation.init();
    } else {
      console.warn('⚠️ ScrollNavigation module not loaded');
    }

    // Initialize scroll reveal animations
    if (typeof ScrollRevealInit !== 'undefined') {
      ScrollRevealInit.init();
    } else {
      console.warn('⚠️ ScrollRevealInit module not loaded');
    }

    // Initialize certificate carousel
    if (typeof CertificateCarousel !== 'undefined') {
      CertificateCarousel.init();
    } else {
      console.warn('⚠️ CertificateCarousel module not loaded');
    }

    // Initialize project carousel
    if (typeof ProjectCarousel !== 'undefined') {
      ProjectCarousel.init();
    } else {
      console.warn('⚠️ ProjectCarousel module not loaded');
    }

    console.log('✓ Portfolio initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing portfolio:', error);
  }
}

// Wait for components to be loaded before initializing
if (document.readyState === 'loading') {
  // Page still loading
  document.addEventListener('componentsLoaded', initializePortfolio);
} else {
  // Page already loaded (components might already be loaded)
  document.addEventListener('componentsLoaded', initializePortfolio);
  // Also try with DOMContentLoaded as fallback
  document.addEventListener('DOMContentLoaded', initializePortfolio);
}

