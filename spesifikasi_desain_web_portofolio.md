# Spesifikasi Desain Web Portofolio

**Tema:** Modern, Profesional, "Ocean Tech"
**Referensi Layout:** Geobiops Portfolio (Hero, Skills, Projects, Snippets)
**Referensi Warna:** Blue Palette (`image_9dc41a.png`)

---

## 1. Identitas Visual

- **Gaya Desain:** Modern, Profesional, Bersih (*Clean*), dan Dinamis dengan nuansa *Ocean Tech* (dominasi biru gelap).
- **Tipografi:** **Montserrat** (Terapkan untuk semua elemen teks dari Heading hingga Body).
  - *Tailwind Config:* Tambahkan ke `tailwind.config.js` di bagian `fontFamily: { sans: ['Montserrat', 'sans-serif'] }`.

---

## 2. Palet Warna (Color Palette)

Desain menggunakan skema warna biru yang elegan dan terpercaya, **tidak** menggunakan section terang bergantian. Semua section berbasis gelap.

| Peran | Kode Warna | Nama | Penggunaan |
|---|---|---|---|
| Background Utama | `#0A1931` | Deep Navy Blue | Background body/page, Hero, Footer |
| Background Sekunder | `#1A3D63` | Dark Blue | Cards (Project, Snippet), Navbar, ikon skill box |
| Aksen Utama | `#4A7FA7` | Steel Blue | Tombol CTA, highlight nama, filter aktif, badge kategori, border tipis card |
| Teks Sekunder | `#B3CFE5` | Light Blue/Greyish | Sub-judul, deskripsi, muted text, nav link |
| Teks Utama | `#F6FAFD` | Ice White | Heading, nama, teks heading nav, teks tombol |

---

## 3. Struktur Layout & Spesifikasi Section

### A. Header (Navbar)

- **Background:** Transparan di atas Hero, atau `#0A1931` saat di-scroll (sticky).
- **Logo/Nama:** Teks kiri, warna `#F6FAFD`.
- **Navigasi:** Home, Mentorship, Portfolio, Snippet, Blog — warna `#B3CFE5`, hover menjadi `#F6FAFD` dengan transisi halus.

---

### B. Hero Section

- **Background:** `#0A1931` (Deep Navy Blue) sebagai dasar solid.
- **Ornamen Visual (Wajib):**
  - Efek *glowing* halus atau bentuk geometris abstrak (blob/waves) menggunakan warna `#1A3D63` dengan opacity 30–40% di belakang foto profil dan di sudut-sudut halaman.
  - Elemen dekoratif plus (`+`) dan lingkaran kecil berwarna `#4A7FA7` di sekitar foto profil.
- **Konten Kiri:**
  - Sapaan: *"Hello Buddy"* — warna `#F6FAFD`.
  - Headline: *"I am [Nama]"* — nama di-highlight dengan `#4A7FA7`.
  - Sub-headline: *"Prompt Engineer & UI/UX Enthusiast"* — warna `#B3CFE5`.
  - Deskripsi singkat — warna `#B3CFE5`.
  - Tombol **"Download CV"**: Background `#4A7FA7`, teks `#F6FAFD`, border-radius `rounded-xl`.
  - Tombol **"More"**: Outline border `#4A7FA7`, teks `#F6FAFD`, background transparan.
- **Konten Kanan:**
  - Foto profil dengan aksen bentuk organik (blob) berwarna `#1A3D63`.

---

### C. Tools and Skills Section

- **Background:** `#0A1931` — tetap gelap, konsisten dengan keseluruhan halaman.
- **Teks Judul:** `#F6FAFD`, posisi tengah.
- **Grid Ikon Teknologi:** Ikon (HTML, CSS, Figma, React, Tailwind, dst.) diletakkan di dalam kotak membulat (`rounded-xl`) dengan background `#1A3D63` dan efek *glassmorphism* halus (backdrop-filter blur ringan).

---

### D. Featured Project Section

- **Background:** `#0A1931` — tetap gelap.
- **Teks Judul & Deskripsi:** Judul `#F6FAFD`, deskripsi `#B3CFE5`.
- **Sistem Filter Tab:**
  - Tab normal: border `#4A7FA7` (opacity rendah), teks `#B3CFE5`.
  - Tab aktif: background `#4A7FA7`, teks `#F6FAFD`.
- **Card Proyek:**
  - Background: `#1A3D63` dengan border tipis `#4A7FA7` (opacity 20%) — efek *glassmorphism* halus.
  - Gambar thumbnail di atas card.
  - Badge kategori (misal: "UI/UX"): warna `#4A7FA7`.
  - Judul proyek: `#F6FAFD`.

---

### E. Code Snippet Section

- **Background:** `#0A1931` — konsisten dengan tema gelap.
- **Layout:** Grid 2 kolom.
- **Card Snippet:**
  - Background: `#1A3D63` dengan border tipis `#4A7FA7` (opacity 20%).
  - Konten: Judul (`#F6FAFD`), deskripsi singkat (`#B3CFE5`), ikon teknologi, dan jumlah bintang (*Stars*).
  - Hover: efek terangkat `hover:-translate-y-1 hover:shadow-xl transition-all duration-300`.

---

### F. Footer / Let's Connect

- **Background:** `#0A1931` — menutup halaman dengan warna solid dan konsisten.
- **Teks:** `#B3CFE5` untuk teks biasa, `#F6FAFD` untuk judul/heading.
- **Komponen:** Tautan sosial media dengan ikon, teks hak cipta.

---

## 4. Spesifikasi Teknis UI/UX

- **Sudut (Border Radius):** Gunakan `rounded-xl` atau `rounded-2xl` pada semua kartu, gambar, dan tombol.
- **Bayangan (Shadow):** Gunakan `shadow-lg` dengan warna biru gelap (`#0A1931`) untuk kesan kedalaman di atas background gelap.
- **Transisi (Hover Effects):** Setiap tombol dan kartu harus memiliki efek `hover:-translate-y-1 hover:shadow-xl transition-all duration-300`.
- **Glassmorphism:** Pada card Proyek dan Code Snippet, gunakan `background: #1A3D63` + `backdrop-filter: blur(...)` + border `1px solid rgba(74, 127, 167, 0.2)` untuk efek kedalaman (*depth*).
- **Ornamen Background:** Tambahkan elemen dekoratif abstrak (blob/wave SVG) dengan warna `#1A3D63` opacity 30–40% agar background tidak monoton flat.