// ====== SPLASH SCREEN ======
const SplashScreen = (() => {
  const SPLASH_DURATION = 1500; // milliseconds

  const init = () => {
    hideSplash();
  };

  const hideSplash = () => {
    setTimeout(() => {
      const splash = document.querySelector('.splash');

      if (splash) {
        splash.style.display = 'none';
        console.log('✓ Splash screen hidden');
      } else {
        console.warn('⚠️ Splash screen element not found');
      }
    }, SPLASH_DURATION);
  };

  return { init };
})();
