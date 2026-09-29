# 👋 Edwin Darren H - Portfolio

<div align="center">

[![GitHub followers](https://img.shields.io/github/followers/edwindarrenhasannudin?style=social)](https://github.com/edwindarrenhasannudin)
[![Twitter Follow](https://img.shields.io/twitter/follow/edw_darren?style=social)](https://twitter.com/edw_darren)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=flat-square)](https://edwindarrenhasannudin.github.io/portfolio)

**Full-Stack Developer | UI/UX Designer | Informatics Engineering Student**

</div>

---

## 🎯 About Me

Hi! I'm **Edwin Darren Hasannudin**, an Informatics Engineering student at **Institut Teknologi Sumatera (ITERA)**, currently in semester 8. I'm passionate about building scalable web applications and creating beautiful, user-centered designs.

I actively participate in campus organizations and activities to expand my network and enhance my communication skills. With **16+ projects** in web development and UI/UX design, I'm committed to delivering high-quality digital solutions.

---

## 💼 Skills & Technologies

### Frontend Development
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks & Libraries**: Responsive Design, AJAX
- **Styling**: CSS Grid, Flexbox, Animations, Dark Mode Support
- **Tools**: Font Awesome, Boxicons

### Backend Development
- **Languages**: PHP, JavaScript (Node.js)
- **Database**: MySQL, MongoDB

### Design & UX
- **Design Tools**: Figma, UI/UX Principles
- **Specialization**: Web Design, Mobile App Design

### Other Skills
- **Version Control**: Git, GitHub
- **Tools**: VS Code, FormSubmit API
- **Architecture**: Component-based development

---

## 🚀 Featured Projects

### Web Development Projects

| Project | Description | Technologies | Link |
|---------|-------------|---------------|------|
| **Al-Istiqomah Information System** | Website system for MTs/MA Al-Istiqomah foundation | HTML, CSS, PHP | [Repository](https://github.com/edwindarrenhasannudin/al-istiqomah) |
| **Desa Girimulyo Website** | Official website for Girimulyo Village | HTML, CSS, JavaScript | [Repository](https://github.com/edwindarrenhasannudin/Desa-Girimulyo) |
| **Food Ordering System** | Dynamic food ordering platform for web programming course | HTML, CSS, JavaScript | [Repository](https://github.com/edwindarrenhasannudin/Sistem-Pemesanan-Makanan) |
| **Company Branding Website** | Professional branding website project | HTML, CSS, JavaScript | [Repository](https://github.com/edwindarrenhasannudin/Branding-Perusahaan) |
| **Dynamic Task System** | Interactive task management application | HTML, CSS, JavaScript | [Repository](https://github.com/edwindarrenhasannudin/Sistem-Daftar-Tugas-Dinamis) |

### UI/UX Design Projects

| Project | Description | Platform | Link |
|---------|-------------|----------|------|
| **Desa Girimulyo Design** | Complete UI/UX design for village website | Figma | [Design](https://www.figma.com/design/2ydMDm4QNJzqklgCUM39Ch/Desa-Girimulyo) |
| **Patrolin Mobile App** | Mobile app UI/UX design for IMK course | Figma | [Design](https://www.figma.com/design/vvtCnRQkbf8Va54lxxrj2Y/IMK---PRATOLIN) |
| **Mini Bootcamp UI/UX** | Design project from HMIF ITERA Mini Bootcamp 1.0 | Figma | [Repository](https://github.com/edwindarrenhasannudin/mini_project) |

---

## 📁 Portfolio Features

This portfolio website showcases:

- ✨ **Modern, Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Light/Dark Theme** - Light theme by default with an optional dark theme
- 🎭 **Smooth Animations** - Scroll reveal effects and interactive components
- 🎪 **Project Carousel** - Interactive carousel to browse projects
- 📧 **Contact Form** - Direct contact integration with FormSubmit API
- 📱 **Mobile Optimized** - Fully responsive navigation and layout
- ♿ **Accessible** - ARIA labels and semantic HTML

---

## 🛠️ Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── style.css                  # Global styles
├── main.js                    # Main JavaScript file
├── light-theme.js             # Light theme toggle
├── components/                # HTML components
│   ├── header.html            # Navigation header
│   ├── home.html              # Hero section
│   ├── about.html             # About section
│   ├── services.html          # Services section
│   ├── portfolio.html         # Portfolio/Projects section
│   ├── certificates.html      # Certificates section
│   ├── contact.html           # Contact & footer section
│   └── splash.html            # Loading splash screen
├── styles/                    # CSS stylesheets
│   ├── variables.css          # CSS variables (colors, fonts)
│   ├── globals.css            # Global styles
│   ├── header.css             # Header styles
│   ├── home.css               # Home section styles
│   ├── about.css              # About section styles
│   ├── services.css           # Services section styles
│   ├── portfolio.css          # Portfolio section styles
│   ├── certificates.css       # Certificates section styles
│   ├── contact.css            # Contact section styles
│   ├── animations.css         # Animation effects
│   ├── responsive.css         # Media queries
│   └── contact.css            # Contact styles
├── js/                        # JavaScript modules
│   ├── navbar.js              # Navigation logic
│   ├── scroll-navigation.js   # Scroll handling
│   ├── scroll-reveal.js       # Scroll reveal animations
│   ├── projects.js            # Project carousel
│   ├── splash-screen.js       # Splash screen logic
│   └── debug.js               # Debugging utilities
└── assets/                    # Images and static files
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/edwindarrenhasannudin/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **View live**
   Visit: [https://edwindarrenhasannudin.github.io/portfolio](https://edwindarrenhasannudin.github.io/portfolio)

---

## 🎨 Customization

### Change Colors
Edit the CSS variables in [styles/variables.css](styles/variables.css):

```css
:root {
  --main-color: #0ef;        /* Primary color */
  --bg-color: #081b29;       /* Background color */
  --text-color: #ededed;     /* Text color */
  /* ... more variables ... */
}
```

### Update Content
1. Modify component files in the `components/` folder
2. Update project information in `components/portfolio.html`
3. Change personal information in `components/home.html`

### Add New Projects
1. Add project image to `assets/` folder
2. Create a new `.project-card` in `components/portfolio.html`
3. Update the carousel in `js/projects.js` if needed

---

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 1024px
- **Desktop**: > 1024px

---

## 🔗 Connect With Me

<div align="center">

[**GitHub**](https://github.com/edwindarrenhasannudin) | 
[**LinkedIn**](https://www.linkedin.com/in/edwin-darren-hasannudin-13b768324/) | 
[**Email**](mailto:edwint1j@gmail.com) | 
[**WhatsApp**](https://wa.me/6282162175970)

</div>

---

## 📄 Resume/CV

Download my complete CV: [EDWIN DARREN HASANNUDIN-resume.pdf](assets/EDWIN%20DARREN%20HASANNUDIN-resume.pdf)

---

## 📊 GitHub Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=edwindarrenhasannudin&theme=dark&show_icons=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=edwindarrenhasannudin&theme=dark&layout=compact)

</div>

---

## 📝 License

This project is open source and available under the MIT License. Feel free to use this portfolio as inspiration for your own!

---

## 🙏 Acknowledgments

- **Institut Teknologi Sumatera (ITERA)** - Educational institution
- **HMIF ITERA** - Campus organization
- **Font Awesome** - Icon library
- **Boxicons** - Icon library
- **FormSubmit** - Form submission service

---

<div align="center">

**Made with ❤️ by Edwin Darren Hasannudin**

*Last updated: January 2026*

</div>
