const projects = {
  cryptography: {
    title: 'Cryptography',
    category: 'Application development',
    image: 'Kriptografi.png',
    summary: 'An AES encryption and decryption program developed with Java.',
    tags: ['Java', 'AES', 'Encryption', 'Decryption'],
    repository: 'https://github.com/edwindarrenhasannudin/Kriptografi',
  },
  'al-istiqomah': {
    title: 'Website Information System for Yayasan MTs / MA Al-Istiqomah',
    category: 'Web development',
    image: 'Al-Istiqomah.jpg',
    summary: 'A website information system developed for Yayasan MTs / MA Al-Istiqomah.',
    tags: ['HTML', 'CSS', 'PHP'],
    repository: 'https://github.com/edwindarrenhasannudin/al-istiqomah',
  },
  'desa-girimulyo': {
    title: 'Website for Desa Girimulyo',
    category: 'Web development',
    image: 'Website Desa Girimulyo.png',
    summary: 'A website developed for Desa Girimulyo.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/edwindarrenhasannudin/Desa-Girimulyo',
  },
  'food-ordering': {
    title: 'Food Ordering System',
    category: 'Web development',
    image: 'Sistem Pemesanan Makanan.png',
    summary: 'A food ordering system developed as part of a Web Programming course.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/edwindarrenhasannudin/Sistem-Pemesanan-Makanan',
  },
  'uiux-desa-girimulyo': {
    title: 'UI/UX Design for Desa Girimulyo',
    category: 'UI/UX design',
    image: 'Desain Website Desa Girimulyo.png',
    summary: 'A UI/UX design for the Girimulyo Village website.',
    tags: ['Figma', 'UI/UX', 'Web design'],
    repository: 'https://www.figma.com/design/2ydMDm4QNJzqklgCUM39Ch/Desa-Girimulyo?node-id=0-1&t=a00i9NjSTjkzNqDW-1',
    repositoryLabel: 'View Figma design',
  },
  'uiux-patrolin': {
    title: 'UI/UX Design for Patrolin',
    category: 'UI/UX design',
    image: 'Desain UI UX Aplikasi Patrolin.png',
    summary: 'A UI/UX design for the Patrolin application, created as part of a Human-Computer Interaction course.',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    repository: 'https://www.figma.com/design/vvtCnRQkbf8Va54lxxrj2Y/IMK---PRATOLIN?node-id=9-2',
    repositoryLabel: 'View Figma design',
  },
  'uiux-mini-bootcamp': {
    title: 'UI/UX Design for Mini Bootcamp 1.0',
    category: 'UI/UX design',
    image: 'Tampilan UI UX di Mini Bootcamp.png',
    summary: 'A UI/UX design for Mini Bootcamp 1.0 organized by HMIF ITERA.',
    tags: ['Figma', 'UI/UX'],
    repository: 'https://github.com/edwindarrenhasannudin/mini_project',
  },
  'company-branding': {
    title: 'Company Branding Website',
    category: 'Web development',
    image: 'Website Branding Perusahaan.png',
    summary: 'A company branding website developed as part of a Web Programming course.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/edwindarrenhasannudin/Branding-Perusahaan',
  },
  'dynamic-task-list': {
    title: 'Dynamic Task Management System',
    category: 'Web development',
    image: 'Sistem Daftar Tugas Dinamis.png',
    summary: 'A dynamic task management system developed as part of a Web Programming practicum.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/edwindarrenhasannudin/Daftar-Tugas-Dinamis',
  },
  'student-grade-calculator': {
    title: 'Student Grade Calculator System',
    category: 'Web development',
    image: 'Sistem Kalkulator Nilai Mahasiswa.png',
    summary: 'A student grade calculator system developed as part of a Web Programming practicum.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/edwindarrenhasannudin/Kalkulator-Nilai-Mahasiswa',
  },
  'my-idol-website': {
    title: 'My Idol Website',
    category: 'Web development',
    image: 'Website Idola Saya.png',
    summary: 'A “My Idol” website developed as part of a Web Programming course.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/edwindarrenhasannudin/Idola-Saya',
  },
  'web-programming-project': {
    title: 'Web Programming Project',
    category: 'Web development',
    image: 'Tugas Website.png',
    summary: 'A website project developed as part of a Web Programming practicum.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/edwindarrenhasannudin/Tugas_Website',
  },
  'library-management': {
    title: 'Web-Based Library Management System',
    category: 'Web development',
    image: 'Sistem Web Perpustakaan.png',
    summary: 'A web-based library management system.',
    tags: ['HTML', 'CSS', 'PHP'],
    repository: 'https://github.com/edwindarrenhasannudin/Web-Perpustakaan',
  },
  'news-management': {
    title: 'Web-Based News Management System',
    category: 'Web development',
    image: 'Website Berita.png',
    summary: 'A web-based news management system.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/edwindarrenhasannudin/Website-berita',
  },
  'nitro-itera-racing': {
    title: 'Nitro ITERA Racing',
    category: 'Game development',
    image: 'Nitro ITERA Racing.png',
    summary: 'A game developed with Java as part of an Object-Oriented Programming course.',
    tags: ['Java', 'Object-Oriented Programming'],
    repository: 'https://github.com/edwindarrenhasannudin/Tugas_Website',
  },
};

const projectId = new URLSearchParams(window.location.search).get('project');
const project = projects[projectId];
const main = document.getElementById('project-detail');

if (!project) {
  document.title = 'Project not found | Edwin Darren';
  main.innerHTML = `
    <div class="project-detail-toolbar">
      <a class="project-detail-back" href="../index.html#portfolio">
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
        Back to portfolio
      </a>
    </div>
    <section class="project-detail-section">
      <h1>Project not found</h1>
      <p>The requested project could not be found.</p>
    </section>`;
} else {
  document.title = `${project.title} | Edwin Darren`;

  main.innerHTML = `
    <div class="project-detail-toolbar">
      <a class="project-detail-back" href="../index.html#portfolio">
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
        Back to portfolio
      </a>
      <button class="project-theme-toggle" id="project-theme-toggle" type="button" aria-label="Switch to dark theme">
        <img src="../assets/moon.png" alt="">
      </button>
    </div>
    <header class="project-detail-hero">
      <img src="../assets/${project.image}" alt="${project.title}">
      <div class="project-detail-intro">
        <p class="project-detail-eyebrow">${project.category}</p>
        <h1>${project.title}</h1>
        <p>${project.summary}</p>
        <div class="project-detail-tags" aria-label="Technologies and tools">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    </header>
    <section class="project-detail-section project-detail-description">
      <h2>Project overview</h2>
      <div class="project-detail-description-grid">
        <article class="project-detail-block">
          <h3>Background</h3>
          <p>${project.background || 'Add the context, audience, and problem this project addresses in this project entry.'}</p>
        </article>
        <article class="project-detail-block">
          <h3>Objective</h3>
          <p>${project.objective || 'Describe the goals and intended outcomes of the project in this project entry.'}</p>
        </article>
        <article class="project-detail-block">
          <h3>Technology and tools</h3>
          <p>${project.tags.join(', ')}. Add any other tools, libraries, or methods used.</p>
        </article>
        <article class="project-detail-block">
          <h3>Features and scope</h3>
          <p>${project.features || 'List the main features, pages, or deliverables included in the project in this project entry.'}</p>
        </article>
      </div>
    </section>
    <section class="project-detail-section">
      <h2>Implementation details</h2>
      <p>${project.implementation || 'Explain the design or development process, important technical decisions, and how the project works in this project entry.'}</p>
    </section>
    <section class="project-detail-section">
      <h2>Role and responsibilities</h2>
      <p>${project.role || 'Describe your role, contributions, collaboration, and the parts you completed in this project entry.'}</p>
    </section>
    <a class="project-detail-link" href="${project.repository}" target="_blank" rel="noopener noreferrer">
      ${project.repositoryLabel || 'View project repository'}
      <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
    </a>`;

  const themeToggle = document.getElementById('project-theme-toggle');
  const themeIcon = themeToggle.querySelector('img');
  const updateTheme = (isLightTheme) => {
    document.body.classList.toggle('light-theme', isLightTheme);
    themeIcon.src = isLightTheme ? '../assets/moon.png' : '../assets/sun.png';
    themeToggle.setAttribute('aria-label', `Switch to ${isLightTheme ? 'dark' : 'light'} theme`);
  };

  updateTheme(localStorage.getItem('portfolio-theme') !== 'dark');
  themeToggle.addEventListener('click', () => {
    const isLightTheme = !document.body.classList.contains('light-theme');
    localStorage.setItem('portfolio-theme', isLightTheme ? 'light' : 'dark');
    updateTheme(isLightTheme);
  });
}
