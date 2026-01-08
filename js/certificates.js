// ====== CERTIFICATE CAROUSEL ======
const CertificateCarousel = (() => {
  const certificateImages = [
    'assets/Edwin Darren Hasannudin - Sistem Informasi-1.png',
    'assets/2631A-HM.01.02_Sertifikat Magang an Edwin Darren Hasannudin Institut Teknologi Sumatera-1.png',
    'assets/Sertifikat Edwin Darren Hasannudin-1.png',
    'assets/Sertifikat Kabinet Edwin Hasannudin.png',
    'assets/Sertifikat public speaking.jpg',
    'assets/Edwin Darren Hasannudin.png',
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
