// ====== NAVBAR & MENU TOGGLE ======
const Navbar = (() => {
  let menuIcon = null;
  let navbar = null;

  const init = () => {
    // Get elements after components are loaded
    menuIcon = document.querySelector('#menu-icon');
    navbar = document.querySelector('.navbar');

    if (!menuIcon || !navbar) {
      console.warn('⚠️ Navbar elements not found');
      return;
    }

    menuIcon.addEventListener('click', toggle);
    console.log('✓ Navbar initialized');
  };

  const toggle = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
  };

  const close = () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
  };

  return { init, toggle, close };
})();
