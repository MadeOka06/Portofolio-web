# Dokumen Desain Web Portofolio
**Tema:** Modern, Profesional, "Ocean Tech"
**Referensi Layout:** Geobiops Portfolio (Hero, Skills, Projects, Snippets)
**Referensi Warna:** Blue Palette (image_9dc41a.png)

## 1. Skema Warna (Color Palette Mapping)
Kita akan mentransisikan desain dari dominan Hitam/Hijau menjadi skema Biru yang elegan dan terpercaya.

*   **Background Utama (Body/Base):** `#0A1931` (Deep Navy Blue) - Memberikan kesan profesional, dalam, dan modern.
*   **Background Sekunder (Cards, Navbar, Footer):** `#1A3D63` (Dark Blue) - Digunakan untuk memisahkan elemen dari background utama (misal: kartu *Code Snippet* atau *Project*).
*   **Warna Aksen (Tombol, Teks Highlight, Indikator Aktif):** `#4A7FA7` (Steel Blue) - Digunakan untuk tombol "Download CV", badge, dan filter aktif.
*   **Warna Teks Sekunder (Sub-judul, Deskripsi, Muted Text):** `#B3CFE5` (Light Blue/Greyish) - Nyaman dibaca di atas background gelap.
*   **Warna Teks Utama (Heading, Nama, Teks Putih):** `#F6FAFD` (Ice White) - Kontras tinggi untuk keterbacaan maksimal.

## 2. Perubahan Sisi Background (Background Revamp)
Sesuai permintaan, background tidak lagi sekadar warna flat yang membosankan.
*   **Implementasi:** Menggunakan solid `#0A1931` sebagai dasar.
*   **Ornamen Visual:** Pada bagian *Hero Section* (di belakang foto profil) dan *Background Page*, tambahkan efek *glowing* halus atau bentuk geometris abstrak (blob/waves) menggunakan warna `#1A3D63` dengan opacity rendah (sekitar 30-40%). Ini terinspirasi dari latar belakang abstrak pada gambar palet warna yang Anda berikan.
*   **Glassmorphism Halus:** Untuk kartu (cards) pada bagian *Project* dan *Code Snippet*, gunakan warna `#1A3D63` dengan efek blur sedikit (backdrop-filter) dan border tipis berwarna `#4A7FA7` (opacity 20%) untuk memberikan kesan kedalaman (depth).

## 3. Struktur Halaman & Layout
Isi web disesuaikan dengan struktur referensi:

1.  **Header (Navbar):**
    *   Logo/Teks di kiri (Putih `#F6FAFD`).
    *   Navigasi: Home, Mentorship, Portfolio, Snippet, Blog (Warna `#B3CFE5`, hover menjadi `#F6FAFD`).
2.  **Hero Section:**
    *   Sapaan: "Hello Buddy" (`#F6FAFD`).
    *   Headline: "I am [Nama Anda]" (Nama di-highlight dengan `#4A7FA7`).
    *   Sub-headline: "Prompt Engineer & UI/UX Enthusiast" (`#B3CFE5`).
    *   Deskripsi singkat (Warna `#B3CFE5`).
    *   Tombol: "Download CV" (Background `#4A7FA7`, Teks `#F6FAFD`) & "More" (Outline border `#4A7FA7`).
    *   Kanan: Foto profil dengan aksen bentuk organik (blob) berwarna `#1A3D63` dan elemen dekoratif plus/lingkaran (`#4A7FA7`).
3.  **Tools and Skills:**
    *   Judul di tengah (`#F6FAFD`).
    *   Grid ikon teknologi dengan background kotak membulat (`#1A3D63`).
4.  **Featured Project:**
    *   Deskripsi pendek di bawah judul.
    *   Sistem Filter (All, UI/UX, Web Design, dll). Tombol aktif menggunakan background `#4A7FA7`.
    *   Card Proyek: Gambar thumbnail, Kategori (`#4A7FA7`), dan Judul Proyek (`#F6FAFD`).
5.  **Code Snippet:**
    *   Grid 2 kolom.
    *   Card berisi Judul, Deskripsi singkat, ikon teknologi, dan jumlah *Stars*.
    *   Background card `#1A3D63` dengan hover efek terangkat (translate-y).