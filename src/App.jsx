import { Fragment, useEffect } from 'react';
import about from '../components/about.html?raw';
import certificates from '../components/certificates.html?raw';
import contact from '../components/contact.html?raw';
import experience from '../components/experience.html?raw';
import header from '../components/header.html?raw';
import home from '../components/home.html?raw';
import portfolio from '../components/portfolio.html?raw';
import services from '../components/services.html?raw';
import splash from '../components/splash.html?raw';
import OrganizationLeadership from './components/OrganizationLeadership.jsx';
import { CertificateWall } from '../js/certificates.js';
import { Navbar } from '../js/navbar.js';
import { ProjectCarousel } from '../js/projects.js';
import { ScrollNavigation } from '../js/scroll-navigation.js';
import { ScrollRevealInit } from '../js/scroll-reveal.js';
import { SplashScreen } from '../js/splash-screen.js';

const sections = [
  header,
  splash,
  home,
  about,
  experience,
  services,
  portfolio,
  certificates,
  contact,
];

function StaticSection({ markup }) {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

export default function App() {
  useEffect(() => {
    SplashScreen.init();
    Navbar.init();
    ScrollNavigation.init();
    ScrollRevealInit.init();
    CertificateWall.init();
    ProjectCarousel.init();

    const icon = document.getElementById('icon');
    if (!icon) {
      console.warn('Theme toggle icon not found');
      return undefined;
    }

    const updateThemeIcon = () => {
      const isLight = document.body.classList.contains('light-theme');
      icon.src = isLight ? 'assets/moon.png' : 'assets/sun.png';
      document
        .querySelectorAll('.project-card a i.fa-up-right-from-square')
        .forEach((projectIcon) => {
          projectIcon.style.color = isLight ? '' : '#FFEA00';
        });
    };

    const savedTheme = localStorage.getItem('portfolio-theme');
    document.body.classList.toggle('light-theme', savedTheme !== 'dark');
    updateThemeIcon();

    const toggleTheme = () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      updateThemeIcon();
    };

    icon.addEventListener('click', toggleTheme);
    return () => icon.removeEventListener('click', toggleTheme);
  }, []);

  return sections.map((markup, index) => (
    <Fragment key={index}>
      <StaticSection markup={markup} />
      {markup === experience && <OrganizationLeadership />}
    </Fragment>
  ));
}
