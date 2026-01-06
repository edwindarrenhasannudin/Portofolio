# Quick Reference Guide

## 📂 Folder Structure
```
Portfolio/
├── index.html          (main HTML file)
├── main.js            (initialize all modules)
├── light-theme.js     (theme toggle)
├── style.css          (import all CSS files)
├── styles/            (modular CSS files)
├── js/                (modular JavaScript files)
├── assets/            (images & resources)
└── *.md               (documentation)
```

## 🎨 CSS Files Reference

| File | Purpose | Size |
|------|---------|------|
| `variables.css` | Colors, theme variables | 48 lines |
| `globals.css` | Reset, base styles | 19 lines |
| `animations.css` | Keyframes, transitions | 68 lines |
| `header.css` | Header, navbar styling | 85 lines |
| `home.css` | Home section, hero | 178 lines |
| `about.css` | About section | 73 lines |
| `services.css` | Services section | 51 lines |
| `portfolio.css` | Portfolio & projects | 200 lines |
| `certificates.css` | Certificate carousel | 126 lines |
| `contact.css` | Contact & footer | 96 lines |
| `responsive.css` | Media queries, breakpoints | 900+ lines |

## 🔧 JavaScript Modules Reference

| Module | Purpose | Functions |
|--------|---------|-----------|
| `navbar.js` | Menu toggle, hamburger icon | `init()`, `toggle()`, `close()` |
| `scroll-navigation.js` | Active link highlight, sticky header | `init()` |
| `scroll-reveal.js` | ScrollReveal animations | `init()` |
| `splash-screen.js` | Splash screen logic | `init()` |
| `certificates.js` | Certificate carousel | `init()`, `addCertificate()` |
| `projects.js` | Project carousel | `init()`, `nextProject()`, `previousProject()`, `goToProject()` |

## 🔍 Common Tasks

### Change Primary Color
1. Open: `styles/variables.css`
2. Find: `--main-color: #00abf0;`
3. Edit the hex value

### Add New Section Styling
1. Create: `styles/new-section.css`
2. Add: `@import url('styles/new-section.css');` di `style.css`
3. Done!

### Add New Module
1. Create: `js/new-module.js` dengan IIFE pattern
2. Add: `<script src="js/new-module.js"></script>` di `index.html`
3. Call: `NewModule.init()` di `main.js`

### Add Certificate Image
1. Add image to: `assets/`
2. Update: `js/certificates.js` → `certificateImages` array
3. OR use: `CertificateCarousel.addCertificate('assets/path.jpg');`

### Change Splash Duration
1. Open: `js/splash-screen.js`
2. Find: `const SPLASH_DURATION = 1500;`
3. Change value (in milliseconds)

### Debug Issues
1. Open: Browser DevTools (F12)
2. Go to: Console tab
3. Check: Error messages
4. Look at: Source files to set breakpoints

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Styles not loading | Check `style.css` imports, verify `styles/` folder exists |
| JS not working | Check script order in `index.html`, verify `js/` folder exists |
| Navbar not toggling | Check `id="menu-icon"` exists in HTML |
| Carousel not moving | Check `certificate-img` id in HTML, verify images exist |
| Scroll reveals not working | Ensure ScrollReveal library is loaded before modules |
| Active link not highlighting | Check nav links `href` match section `id` |

## 📱 Breakpoints (Responsive)

From `styles/responsive.css`:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: below 768px
- Small mobile: 375px and below

## 🎯 Best Practices

✅ **DO:**
- Keep CSS organized by section
- Keep JS organized by feature
- Comment your code
- Use meaningful variable names
- Test on mobile devices

❌ **DON'T:**
- Modify multiple files for one change
- Use inline styles
- Skip responsive testing
- Copy-paste code without understanding
- Leave console errors

## 📞 Support Tips

If something breaks:
1. Check file paths (case-sensitive!)
2. Verify all `<script>` tags in HTML
3. Check browser console (F12)
4. Clear browser cache (Ctrl+Shift+Del)
5. Try in incognito mode
6. Check file encoding (should be UTF-8)

## 🚀 Next Level

Consider:
- [ ] Add CSS preprocessor (SASS/SCSS)
- [ ] Add JavaScript bundler (Webpack/Vite)
- [ ] Add version control (Git)
- [ ] Add testing framework
- [ ] Add CI/CD pipeline
- [ ] Deploy to hosting (Netlify/Vercel)

---

**Last Updated:** January 6, 2026
**Status:** ✅ Refactor Complete
