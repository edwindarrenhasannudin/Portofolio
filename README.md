# Edwin Darren H - Portfolio

Website portofolio pribadi Edwin Darren Hasannudin, Lulusan Teknik Informatika di Institut Teknologi Sumatera dan pengembang web/UI/UX designer. Situs ini menampilkan profil, pengalaman, layanan, proyek, sertifikat, dan informasi kontak.

**Website:** [edwindarrenhasannudin.github.io/portfolio](https://edwindarrenhasannudin.github.io/portfolio)

## Teknologi

- HTML, CSS, dan JavaScript tanpa framework atau proses build
- Komponen halaman HTML dimuat dari folder `components/`
- Boxicons, Font Awesome, ScrollReveal, dan Typed.js dimuat dari CDN

## Menjalankan secara lokal

Karena halaman memuat komponen menggunakan `fetch()`, jalankan situs melalui server lokal (jangan membuka `index.html` langsung sebagai `file://`).

Dengan Python:

```bash
python -m http.server 8000
```

Kemudian buka <http://localhost:8000>.

## Struktur proyek

```text
.
├── index.html          # Halaman utama dan pemuat komponen
├── style.css           # Impor stylesheet situs
├── styles/             # Gaya global, bagian halaman, dan responsif
├── components/         # Potongan HTML untuk bagian-bagian halaman
├── js/                 # Navigasi, animasi, splash screen, dan carousel
├── projects/           # Halaman detail proyek
├── assets/             # Gambar, ikon, sertifikat, dan berkas CV
├── main.js             # Inisialisasi utama
└── light-theme.js      # Skrip tema tambahan
```

## Publikasi

Repositori ini merupakan situs statis. Untuk menerbitkannya dengan GitHub Pages, pilih branch dan folder root repositori pada **Settings → Pages**. Pastikan `index.html` berada di root publikasi.
