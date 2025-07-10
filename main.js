// toogle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec  => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar 
    let header = document.querySelector('header'); 
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toogle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}; 

// scroll reveal 
ScrollReveal({
    distance: '25px',
    duration: 2000,
    delay: 200, 
});

ScrollReveal().reveal('.home-content, header', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-container, .contact form', { origin: 'button' });
ScrollReveal().reveal('.contact h2, .about-img', { origin: 'left' });
ScrollReveal().reveal('.contact p, .about-content', { origin: 'right' });

document.addEventListener('DOMContentLoaded', (e) => {
    // Set timeout untuk menyembunyikan splash screen
    setTimeout(() => {
        const splash = document.querySelector('.splash');
        splash.style.display = 'none';
        
        // Tampilkan konten utama
        document.querySelector('.content').style.display = 'block';
    }, 1500); // Sesuaikan waktu dengan durasi animasi
}); 

const certificateImages = [
  "assets/Edwin Darren Hasannudin.png",
  "assets/Sertifikat public speaking.jpg",
  "assets/Sertifikat Kabinet Edwin Hasannudin.png",
  "assets/Sertifikat Edwin Darren Hasannudin-1.png",
  // Tambahkan path gambar sertifikat lain di sini
];

let currentIndex = 0;
const imgEl = document.getElementById('certificate-img');
const cardEl = document.getElementById('certificate-card');
const dots = document.querySelectorAll('.carousel-dots .dot');

function showCertificate(idx) {
  imgEl.src = certificateImages[idx];
  // Update dot aktif
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}
// Ganti sertifikat ke berikutnya saat card diklik
cardEl.onclick = function() {
  currentIndex = (currentIndex + 1) % certificateImages.length;
  showCertificate(currentIndex);
};
dots.forEach((dot, i) => {
  dot.onclick = function() {
    currentIndex = i;
    showCertificate(currentIndex);
  };
});

// Inisialisasi tampilan awal
showCertificate(currentIndex);

const projectCards = document.querySelectorAll('.project-card');
const btnProjectLeft = document.getElementById('project-btn-left');
const btnProjectRight = document.getElementById('project-btn-right');
let projectIndex = 0;

function updateProjectStack() {
  projectCards.forEach((card, i) => {
    card.classList.remove('active', 'left', 'right', 'far');
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
}

btnProjectLeft.onclick = function() {
  projectIndex = (projectIndex - 1 + projectCards.length) % projectCards.length;
  updateProjectStack();
};
btnProjectRight.onclick = function() {
  projectIndex = (projectIndex + 1) % projectCards.length;
  updateProjectStack();
};

// Inisialisasi tampilan awal
updateProjectStack();
