# Struktur JavaScript yang Sudah Direfactor

## Perubahan yang Dilakukan

Portfolio JavaScript yang awalnya **129 baris** dalam **1 file (main.js)** telah dipisah menjadi **6 module** dalam folder `js/`.

## Struktur Folder Baru

```
Portofolio/
├── index.html
├── main.js              (File utama - hanya initialization)
├── light-theme.js
├── js/                  (Folder baru)
│   ├── navbar.js            (Toggle menu & hamburger - 24 baris)
│   ├── scroll-navigation.js  (Active link & sticky header - 48 baris)
│   ├── scroll-reveal.js      (ScrollReveal animations - 22 baris)
│   ├── splash-screen.js      (Splash screen logic - 22 baris)
│   ├── certificates.js       (Certificate carousel - 61 baris)
│   └── projects.js           (Project carousel - 63 baris)
└── styles/
```

## Analisis & Improvements

### 1. **Navbar Module** (`navbar.js`)
- **Fungsi:** Toggle menu icon & navbar
- **Improvements:**
  - Menggunakan IIFE (Immediately Invoked Function Expression)
  - Event listener lebih clean (bukan `onclick`)
  - Method `close()` untuk close navbar ketika scroll

### 2. **Scroll Navigation Module** (`scroll-navigation.js`)
- **Fungsi:** Menandai active link saat scroll & sticky header
- **Improvements:**
  - Pisah logika untuk `updateActiveLink`, `toggleStickyHeader`, `closeNavbar`
  - Lebih mudah di-debug dan di-maintain
  - Fix bug: `forEach.apply` diganti dengan `forEach` yang benar

### 3. **Scroll Reveal Module** (`scroll-reveal.js`)
- **Fungsi:** Inisialisasi ScrollReveal animations
- **Improvements:**
  - Terpusat di satu file
  - Mudah menambah/ubah animation config
  - Meningkatkan readability

### 4. **Splash Screen Module** (`splash-screen.js`)
- **Fungsi:** Hide splash screen setelah duration
- **Improvements:**
  - Duration jadi constant yang mudah di-ubah
  - Lebih clean & maintainable

### 5. **Certificate Carousel Module** (`certificates.js`)
- **Fungsi:** Carousel untuk sertifikat
- **Improvements:**
  - Menggunakan `addEventListener` (modern)
  - Method `addCertificate()` untuk add sertifikat baru
  - State management yang jelas

### 6. **Project Carousel Module** (`projects.js`)
- **Fungsi:** Carousel untuk project
- **Improvements:**
  - Logic untuk active/left/right/far states lebih clean
  - Method `goToProject()` untuk navigate ke index tertentu
  - Better error handling

## Diagram Flow

```
index.html
    ↓ (loads scripts in order)
    ├─ navbar.js
    ├─ scroll-navigation.js
    ├─ scroll-reveal.js
    ├─ splash-screen.js
    ├─ certificates.js
    ├─ projects.js
    └─ main.js (initialize semua modules)
        ↓
    DOMContentLoaded event
        ↓
    Navbar.init()
    ScrollNavigation.init()
    ScrollRevealInit.init()
    SplashScreen.init()
    CertificateCarousel.init()
    ProjectCarousel.init()
```

## Keuntungan Refactor

### ✅ Modular & Clean
- Setiap feature memiliki module sendiri
- Tidak ada code yang saling bertabrakan

### ✅ Easy to Maintain
- Bug di carousel? Edit `projects.js` atau `certificates.js`
- Ubah behavior scroll? Edit `scroll-navigation.js`

### ✅ Easy to Extend
- Tambah fitur baru → buat file module baru
- Reuse modules di project lain

### ✅ Better Performance
- Lazy loading bisa diterapkan
- Tree-shaking untuk production build

### ✅ Better Error Handling
- Null check di setiap module
- Mencegah error jika element tidak ditemukan

## Cara Menggunakan

### 1. Tambah Certificate Baru
```javascript
// Di main.js atau HTML script
CertificateCarousel.addCertificate('assets/new-certificate.png');
```

### 2. Go to Project Tertentu
```javascript
// Go ke project ke-3 (index 2)
ProjectCarousel.goToProject(2);
```

### 3. Customize ScrollReveal
Edit `js/scroll-reveal.js`:
```javascript
ScrollReveal({
  distance: '50px',      // Ubah distance
  duration: 3000,        // Ubah duration
  delay: 100,            // Ubah delay
});
```

### 4. Customize Splash Duration
Edit `js/splash-screen.js`:
```javascript
const SPLASH_DURATION = 2000; // Ubah menjadi 2 detik
```

## Debugging Tips

Jika ada error:

1. **Check Console** (F12 → Console)
   - Cari error message
   - Biasanya karena element tidak ditemukan

2. **Common Issues:**
   - `Navbar is not defined` → `navbar.js` belum loaded
   - `Cannot read property of null` → element selector salah
   - Certificate tidak berubah → `certificate-img` id salah di HTML

3. **Solutions:**
   - Pastikan semua `<script>` di index.html sudah ada
   - Cek ID/class di HTML cocok dengan JS
   - Gunakan `console.log()` untuk debug

## Next Steps (Optional)

Jika ingin lebih optimal:

1. **Minify & Bundling** (Webpack, Rollup, Parcel)
2. **Add Error Logging** (Sentry, LogRocket)
3. **Unit Testing** (Jest, Vitest)
4. **Code Splitting** (lazy load modules)

---

**Catatan:** Load order sangat penting! Pastikan urutan script di index.html sesuai.
