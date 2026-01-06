// ====== SCROLL & ACTIVE NAV LINK ======
const ScrollNavigation = (() => {
  let sections = [];
  let navLinks = [];
  let header = null;
  let navbar = null;

  const init = () => {
    // Get elements after components are loaded
    sections = document.querySelectorAll('section');
    navLinks = document.querySelectorAll('header nav a');
    header = document.querySelector('header');
    navbar = document.querySelector('.navbar');

    if (sections.length === 0) {
      console.warn('⚠️ Sections not found');
      return;
    }

    window.addEventListener('scroll', onScroll);
    console.log('✓ Scroll navigation initialized');
  };

  const onScroll = () => {
    updateActiveLink();
    toggleStickyHeader();
    closeNavbar();
  };

  const updateActiveLink = () => {
    const scrollTop = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        // Remove active dari semua links
        navLinks.forEach((link) => link.classList.remove('active'));
        
        // Tambah active ke link yang sesuai
        const activeLink = document.querySelector(`header nav a[href*="${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };

  const toggleStickyHeader = () => {
    if (!header) return;
    header.classList.toggle('sticky', window.scrollY > 100);
  };

  const closeNavbar = () => {
    if (navbar) {
      navbar.classList.remove('active');
      const menuIcon = document.querySelector('#menu-icon');
      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
      }
    }
  };

  return { init };
})();
