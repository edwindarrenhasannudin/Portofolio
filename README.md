# Edwin Darren H - Portfolio

Website portofolio pribadi Edwin Darren Hasannudin, Lulusan Teknik Informatika di Institut Teknologi Sumatera dan pengembang web/UI/UX designer. Situs ini menampilkan profil, pengalaman, layanan, proyek, sertifikat, dan informasi kontak.

**Website:** [edwindarrenhasannudin.github.io/portfolio](https://edwindarrenhasannudin.github.io/portfolio)

## Teknologi

- React untuk merender aplikasi dan mengelola lifecycle halaman
- Vite untuk server pengembangan dan production build
- Komponen HTML yang ada dipakai sebagai langkah migrasi bertahap ke JSX
- Boxicons, Font Awesome, dan ScrollReveal dimuat dari CDN

## Menjalankan secara lokal

Perlu Node.js dan npm. Pasang dependency, lalu mulai server:

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite (biasanya <http://localhost:5173>).

## Build untuk produksi

```bash
npm run build
npm run preview
```

Vite menghasilkan situs di `dist/`. Aset, halaman detail proyek, serta stylesheet untuk halaman detail ikut disalin ke hasil build.

## Struktur proyek

```text
.
├── index.html          # Dokumen HTML Vite
├── src/                # Entry React dan komposisi aplikasi
├── components/         # Konten HTML yang dimigrasikan bertahap
├── js/                 # Fitur halaman yang digunakan React
├── styles/             # Stylesheet halaman
├── projects/           # Halaman detail proyek statis
├── assets/             # Gambar, ikon, sertifikat, dan berkas CV
├── style.css           # Entry stylesheet utama
├── vite.config.js      # Konfigurasi Vite dan penyalinan berkas statis
└── package.json        # Perintah dan dependency
```

## Publikasi

Untuk GitHub Pages, deploy isi folder `dist/` (misalnya dengan GitHub Actions). Build memakai path relatif agar bisa berjalan di root domain maupun di subpath seperti `/portfolio/`.
