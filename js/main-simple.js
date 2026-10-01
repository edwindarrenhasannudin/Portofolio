// ====== SIMPLE SPLASH TEST ======
// Test apakah splash screen berfungsi

window.addEventListener('load', () => {
  console.log('Window load event fired');
  
  setTimeout(() => {
    const splash = document.querySelector('.splash');
    console.log('Hiding splash screen...');
    if (splash) {
      splash.style.display = 'none';
      console.log('✓ Splash hidden');
    } else {
      console.warn('❌ Splash element not found');
    }
  }, 1500);
});
