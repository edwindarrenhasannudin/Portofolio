// ====== PROJECT CAROUSEL ======
const ProjectCarousel = (() => {
  let projectCards = [];
  let btnProjectLeft = null;
  let btnProjectRight = null;
  let projectIndex = 0;

  const init = () => {
    // Get elements after components are loaded
    projectCards = document.querySelectorAll('.project-card');
    btnProjectLeft = document.getElementById('project-btn-left');
    btnProjectRight = document.getElementById('project-btn-right');

    if (projectCards.length === 0) {
      console.warn('⚠️ Project cards not found');
      return;
    }

    if (!btnProjectLeft || !btnProjectRight) {
      console.warn('⚠️ Project carousel buttons not found');
      return;
    }

    btnProjectLeft.addEventListener('click', previousProject);
    btnProjectRight.addEventListener('click', nextProject);

    // Tampilkan project pertama
    updateStack();
    console.log('✓ Project carousel initialized with', projectCards.length, 'projects');
  };

  const updateStack = () => {
    projectCards.forEach((card, i) => {
      // Hapus semua class
      card.classList.remove('active', 'left', 'right', 'far');

      // Tentukan posisi card
      if (i === projectIndex) {
        card.classList.add('active');
      } else if (i === (projectIndex - 1 + projectCards.length) % projectCards.length) {
        card.classList.add('left');
      } else if (i === (projectIndex + 1) % projectCards.length) {
        card.classList.add('right');
      } else {
        card.classList.add('far');
      }
    });
  };

  const nextProject = () => {
    projectIndex = (projectIndex + 1) % projectCards.length;
    updateStack();
  };

  const previousProject = () => {
    projectIndex = (projectIndex - 1 + projectCards.length) % projectCards.length;
    updateStack();
  };

  const goToProject = (index) => {
    if (index >= 0 && index < projectCards.length) {
      projectIndex = index;
      updateStack();
    }
  };

  return { init, nextProject, previousProject, goToProject };
})();
