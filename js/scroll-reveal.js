// ====== SCROLL REVEAL ANIMATIONS ======
const ScrollRevealInit = (() => {
  const init = () => {
    // Check if ScrollReveal library is loaded
    if (typeof ScrollReveal === 'undefined') {
      console.warn('⚠️ ScrollReveal library not loaded. Install from unpkg');
      return;
    }

    // Konfigurasi ScrollReveal
    ScrollReveal({
      distance: '25px',
      duration: 2000,
      delay: 200,
    });

    // Reveal dari atas
    ScrollReveal().reveal('.home-content, header', { origin: 'top' });

    // Reveal dari bawah
    ScrollReveal().reveal('.home-img, .service-container, .portfolio-container, .contact form', {
      origin: 'bottom',
    });

    // Reveal dari kiri
    ScrollReveal().reveal('.contact h2, .about-img', { origin: 'left' });

    // Reveal dari kanan
    ScrollReveal().reveal('.contact p, .about-content', { origin: 'right' });
  };

  return { init };
})();
