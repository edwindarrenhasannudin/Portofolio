// ====== DEBUG - Check Script Loading ======

console.log('1️⃣ main.js loaded');

// Check if all modules are defined
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  
  // Check modules
  console.log('Navbar:', typeof Navbar !== 'undefined' ? '✓ loaded' : '❌ NOT loaded');
  console.log('ScrollNavigation:', typeof ScrollNavigation !== 'undefined' ? '✓ loaded' : '❌ NOT loaded');
  console.log('ScrollRevealInit:', typeof ScrollRevealInit !== 'undefined' ? '✓ loaded' : '❌ NOT loaded');
  console.log('SplashScreen:', typeof SplashScreen !== 'undefined' ? '✓ loaded' : '❌ NOT loaded');
  console.log('CertificateCarousel:', typeof CertificateCarousel !== 'undefined' ? '✓ loaded' : '❌ NOT loaded');
  console.log('ProjectCarousel:', typeof ProjectCarousel !== 'undefined' ? '✓ loaded' : '❌ NOT loaded');
  
  // Check important elements
  console.log('Splash element:', document.querySelector('.splash') ? '✓ found' : '❌ NOT found');
  console.log('Header element:', document.querySelector('header') ? '✓ found' : '❌ NOT found');
  console.log('Navbar element:', document.querySelector('.navbar') ? '✓ found' : '❌ NOT found');
  console.log('Menu icon:', document.querySelector('#menu-icon') ? '✓ found' : '❌ NOT found');
});
