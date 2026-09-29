// ====== CERTIFICATE WALL ======
const CertificateWall = (() => {
  const bootcampCertificates = [
    {
      image: 'assets/optimized-certificates/Edwin_Darren_Hasannudin-bootcamp-sertifikasi-microsoft-office-excel-word-power-point-specialist-1.jpg',
      title: 'Microsoft Office Specialist certificate 1'
    },
    {
      image: 'assets/optimized-certificates/Edwin_Darren_Hasannudin-bootcamp-sertifikasi-microsoft-office-excel-word-power-point-specialist-2.jpg',
      title: 'Microsoft Office Specialist certificate 2'
    }
  ];

  const certificates = [
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin Sertifikat Day 4-1.jpg',
      title: 'DigiHabit — Day 4',
      category: 'Training'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin Sertifikat Day 3 DigiHabit-1.jpg',
      title: 'DigiHabit — Day 3',
      category: 'Training'
    },
    {
      image: 'assets/optimized-certificates/Sertifikat_YOT_TechTalk_2026_Edwin_Darren_Hasannudin.jpg',
      title: 'YOT TechTalk 2026',
      category: 'Talk'
    },
    {
      image: 'assets/optimized-certificates/Sertifikat-EDWIN DARREN HASANNUDIN-CFL Block Chain.jpg',
      title: 'CFL Blockchain',
      category: 'Training'
    },
    {
      image: 'assets/optimized-certificates/EDWIN DARREN HASANNUDIN  E-Sertifkat Webinar CFL-1.jpg',
      title: 'CFL Webinar',
      category: 'Webinar'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin  E-sertifikat Digihabit Build Your Career.jpg',
      title: 'DigiHabit — Build Your Career',
      category: 'Career'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin E-sertifikat Webinar AMEFEST.jpg',
      title: 'AMEFEST Webinar',
      category: 'Webinar'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin  E-sertifikat Ai For Business by aifest id.jpg',
      title: 'AI for Business',
      category: 'AI'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin E-Sertifikat AI For Content Creator by Aifest id.jpg',
      title: 'AI for Content Creator',
      category: 'AI'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin E-Sertifikat Webinar Ai For Automation _ Aifest Id.jpg',
      title: 'AI for Automation',
      category: 'AI'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin E-sertifikat Ai For Freelancer _ Aifest Id.jpg',
      title: 'AI for Freelancer',
      category: 'AI'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin E-Sertifikat Ai For Job Seeker on Aifest Id.jpg',
      title: 'AI for Job Seeker',
      category: 'AI'
    },
    {
      image: 'assets/optimized-certificates/E-sertifikat Edwin Darren Hasannudin Ai for Self space _ Aifest id.jpg',
      title: 'AI for Self Space',
      category: 'AI'
    },
    {
      image: 'assets/optimized-certificates/E-sertifikat Edwin Darren Hasannudin Ai For Student _ Aifest id.jpg',
      title: 'AI for Student',
      category: 'AI'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin - Sistem Informasi-1.jpg',
      title: 'Information Systems',
      category: 'Academic'
    },
    {
      image: 'assets/optimized-certificates/2631A-HM.01.02_Sertifikat Magang an Edwin Darren Hasannudin Institut Teknologi Sumatera-1.jpg',
      title: 'Internship — Institut Teknologi Sumatera',
      category: 'Internship'
    },
    {
      image: 'assets/optimized-certificates/Sertifikat Edwin Darren Hasannudin-1.jpg',
      title: 'Certificate of Achievement',
      category: 'Achievement'
    },
    {
      image: 'assets/optimized-certificates/Sertifikat Kabinet Edwin Hasannudin.jpg',
      title: 'Cabinet Organization',
      category: 'Organization'
    },
    {
      image: 'assets/optimized-certificates/Sertifikat public speaking.jpg',
      title: 'Public Speaking',
      category: 'Skill'
    },
    {
      image: 'assets/optimized-certificates/Edwin Darren Hasannudin.jpg',
      title: 'Certificate of Participation',
      category: 'Achievement'
    }
  ];

  const createCertificateLink = (certificate, className) => {
    const link = document.createElement('a');
    const image = document.createElement('img');
    const title = document.createElement('span');

    link.className = className;
    link.href = certificate.image;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `View ${certificate.title}`);

    image.src = certificate.image;
    image.alt = certificate.title;
    image.loading = 'lazy';
    image.decoding = 'async';

    title.textContent = certificate.title;
    link.append(image, title);
    return link;
  };

  const init = () => {
    const bootcampContainer = document.getElementById('bootcamp-certificates');
    const certificateGrid = document.getElementById('certificate-grid');

    if (!bootcampContainer || !certificateGrid) {
      console.warn('⚠️ Certificate wall elements not found');
      return;
    }

    bootcampCertificates.forEach((certificate, index) => {
      const card = createCertificateLink(certificate, 'certificate-featured-file');
      const label = document.createElement('span');
      label.className = 'certificate-file-number';
      label.textContent = `Certificate ${index + 1}`;
      card.append(label);
      bootcampContainer.append(card);
    });

    certificates.forEach((certificate) => {
      const card = createCertificateLink(certificate, 'certificate-tile');
      const category = document.createElement('span');
      category.className = 'certificate-tile-category';
      category.textContent = certificate.category;
      card.append(category);
      certificateGrid.append(card);
    });

    console.log('✓ Certificate wall initialized with', certificates.length + bootcampCertificates.length, 'certificates');
  };

  return { init };
})();
