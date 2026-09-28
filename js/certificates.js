// ====== CERTIFICATE CAROUSEL ======
const CertificateCarousel = (() => {
  const certificateImages = [
    'assets/optimized-certificates/Sertifikat_YOT_TechTalk_2026_Edwin_Darren_Hasannudin.jpg',
    'assets/optimized-certificates/Sertifikat-EDWIN DARREN HASANNUDIN-CFL Block Chain.jpg',
    'assets/optimized-certificates/EDWIN DARREN HASANNUDIN  E-Sertifkat Webinar CFL-1.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin  E-sertifikat Digihabit Build Your Career.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin E-sertifikat Webinar AMEFEST.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin  E-sertifikat Ai For Business by aifest id.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin E-Sertifikat AI For Content Creator by Aifest id.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin E-Sertifikat Webinar Ai For Automation _ Aifest Id.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin E-sertifikat Ai For Freelancer _ Aifest Id.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin E-Sertifikat Ai For Job Seeker on Aifest Id.jpg',
    'assets/optimized-certificates/E-sertifikat Edwin Darren Hasannudin Ai for Self space _ Aifest id.jpg',
    'assets/optimized-certificates/E-sertifikat Edwin Darren Hasannudin Ai For Student _ Aifest id.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin - Sistem Informasi-1.jpg',
    'assets/optimized-certificates/2631A-HM.01.02_Sertifikat Magang an Edwin Darren Hasannudin Institut Teknologi Sumatera-1.jpg',
    'assets/optimized-certificates/Sertifikat Edwin Darren Hasannudin-1.jpg',
    'assets/optimized-certificates/Sertifikat Kabinet Edwin Hasannudin.jpg',
    'assets/optimized-certificates/Sertifikat public speaking.jpg',
    'assets/optimized-certificates/Edwin Darren Hasannudin.jpg',
  ];

  let currentIndex = 0;
  let imgEl = null;
  let cardEl = null;
  let dots = [];

  const init = () => {
    // Get elements after components are loaded
    imgEl = document.getElementById('certificate-img');
    cardEl = document.getElementById('certificate-card');
    dots = document.querySelectorAll('.carousel-dots .dot');

    if (!imgEl || !cardEl || dots.length === 0) {
      console.warn('⚠️ Certificate carousel elements not found');
      return;
    }

    // Event listeners untuk tombol navigasi arrow
    const leftBtn = cardEl.querySelector('.carousel-btn.left');
    const rightBtn = cardEl.querySelector('.carousel-btn.right');
    
    if (leftBtn) {
      leftBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevCertificate();
      });
    }
    if (rightBtn) {
      rightBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextCertificate();
      });
    }

    // Event listener untuk card click
    cardEl.addEventListener('click', nextCertificate);

    // Event listeners untuk dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToCertificate(index));
    });

    // Tampilkan sertifikat pertama
    showCertificate(currentIndex);
    console.log('✓ Certificate carousel initialized');
  };

  const showCertificate = (index) => {
    if (!imgEl) return;
    imgEl.src = certificateImages[index];
    updateDots(index);
  };

  const updateDots = (index) => {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  const nextCertificate = () => {
    currentIndex = (currentIndex + 1) % certificateImages.length;
    showCertificate(currentIndex);
  };

  const prevCertificate = () => {
    currentIndex = (currentIndex - 1 + certificateImages.length) % certificateImages.length;
    showCertificate(currentIndex);
  };

  const goToCertificate = (index) => {
    currentIndex = index;
    showCertificate(currentIndex);
  };

  // Method untuk add certificate baru
  const addCertificate = (imagePath) => {
    certificateImages.push(imagePath);
  };

  return { init, addCertificate };
})();
