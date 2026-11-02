  import type {
  ProfileData,
  SkillCategory,
  SoftSkillItem,
  ExperienceItem,
  ProjectItem,
  CertificateItem,
  ContactInfo,

} from '../types';

export const profileData: ProfileData = {
  name: 'I Gusti Agung Made Oka Darmestha',
  shortname: 'Oka Darmestha',
  role: 'Web Developer & Data Enthusiast',
  roles: [
    'Web Developer',
    'Mobile App Enthusiast',
    'Data Analyst',
  ],
  education: 'Mahasiswa Semester 5 Teknologi Informasi',
  campus: 'Politeknik Negeri Malang (POLINEMA)',
  bio: 'Seorang mahasiswa IT yang memiliki minat besar dalam Web Development, Aplikasi Mobile, dan Analisis Data. Saat ini sedang mencari peluang magang (internship) di semester 6 guna menerapkan keahlian teknis saya dan berkontribusi pada proyek industri yang nyata.',
  avatarUrl:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=700&fit=crop',
  resumeUrl: '/resume.pdf',
  metrics: {
    semester: 'Semester 5',
    projectsCount: '4+ Proyek',
    organization: 'Kastaf RMB HMTI',
  },
};

export const skillsData: SkillCategory[] = [
  {
    id: 'web',
    title: 'Web Development',
    description:
      'Pengembangan aplikasi web modern, modular, dan terstruktur dari backend hingga antarmuka pengguna.',
    iconName: 'code',
    skills: ['PHP', 'Laravel', 'Filament PHP', 'Tailwind CSS'],
    colSpan: 'md:col-span-7',
    bgBadge: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    id: 'mobile',
    title: 'Mobile & Programming',
    description:
      'Pembuatan aplikasi mobile multiplatform dan pemrograman logika analitis.',
    iconName: 'smartphone',
    skills: ['Flutter', 'Dart', 'Python'],
    colSpan: 'md:col-span-5',
    bgBadge: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  {
    id: 'database',
    title: 'Database Management',
    description:
      'Perancangan basis data relasional, manipulasi query optimal, serta pengolahan data analitik berskala besar.',
    iconName: 'database',
    skills: ['PostgreSQL', 'MySQL'],
    colSpan: 'md:col-span-5',
    bgBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description:
      'Alat bantu kolaborasi tim, perancangan antarmuka (UI/UX), arsitektur alur kerja, dan simulasi jaringan.',
    iconName: 'wrench',
    skills: ['Git / GitHub', 'Figma', 'Draw.io'],
    colSpan: 'md:col-span-7',
    bgBadge: 'bg-slate-100 text-slate-700 border-slate-200',
  },
];

export const softSkillsData: SoftSkillItem[] = [
  {
    id: 'leadership',
    title: 'Kepemimpinan & Manajemen Tim',
    description:
      'Mampu memimpin, mengoordinasikan, dan mengarahkan anggota tim dalam mencapai target program kerja organisasi dan proyek pengembangan.',
    iconName: 'users',
  },
  {
    id: 'problem-solving',
    title: 'Pemecahan Masalah (Problem Solving)',
    description:
      'Kritis dalam menganalisis akar masalah teknis maupun operasional serta tanggap merumuskan alternatif solusi yang efektif.',
    iconName: 'puzzle',
  },
  {
    id: 'communication',
    title: 'Komunikasi Efektif & Kolaborasi',
    description:
      'Terampil menyampaikan ide dengan lugas serta menjalin koordinasi yang solid antar individu maupun lintas divisi.',
    iconName: 'chat',
  },
  {
    id: 'time-management',
    title: 'Manajemen Waktu & Adaptabilitas',
    description:
      'Disiplin menyusun skala prioritas tinggi antara tuntutan akademik perkuliahan, amanah organisasi, dan eksplorasi skill baru.',
    iconName: 'clock',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'Kepala Staf Departemen RMB',
    organization: 'Himpunan Mahasiswa Teknologi Informasi (HMTI) POLINEMA',
    period: '2024 - Sekarang',
    type: 'Organisasi Kampus',
    description:
    'Memimpin dan mengoordinasikan program pengembangan kompetensi mahasiswa, berfokus pada inovasi riset teknologi serta penyaluran minat dan bakat secara menyeluruh.',
    highlights: [
    'Memfasilitasi wadah penyaluran minat dan bakat non-akademik mahasiswa melalui pembentukan komunitas dan penyelenggaraan kompetisi (seperti e-sports dan olahraga).',
    'Mengarahkan dan mengevaluasi kinerja staf departemen untuk memastikan seluruh program kerja riset dan pengembangan bakat terlaksana secara efektif dan tepat sasaran.',
]
  },
  {
    id: 2,
    role: 'Ketua Pelaksana Seminar Nasional 2025 HMTI',
    organization: 'Himpunan Mahasiswa Teknologi Informasi (HMTI) POLINEMA',
    period: '2025',
    type: 'Organisasi Kampus',
    description:
      'Memimpin dan mengoordinasikan seluruh elemen kepanitiaan dari tahap perencanaan, eksekusi, hingga evaluasi acara Seminar Nasional 2025.',
    highlights: [
    'Mengoordinasikan berbagai divisi kerja untuk memastikan kelancaran operasional, administrasi acara berskala nasional.',
    'Menjalin kerja sama strategis dengan pembicara ahli, sponsor, serta media partner untuk mendukung kesuksesan acara.',
    'Berhasil mengelola timeline proyek dan mengeksekusi rangkaian acara yang dihadiri oleh ratusan peserta secara terstruktur.'
]
  },
];

export const projectsData: ProjectItem[] = [ 
  {
    id: 1,
    title: 'Hunian Lestari',
    category: 'Web App',
    summary:
      'Website company profile dan katalog properti perumahan dengan filter interaktif.',
    fullDescription:
      'Platform profil perusahaan pengembang properti hunian asri ramah lingkungan. Menyajikan katalog perumahan dengan virtual tour foto, kalkulator simulasi KPR, dan sistem janji temu survei lokasi langsung dengan agen penjualan.',
    features: [
      'Filter pencarian unit berdasarkan rentang harga, tipe rumah, dan lokasi',
      'Kalkulator simulasi estimasi cicilan KPR terintegrasi',
      'Panel manajemen leads dan jadwal survei lapangan',
      'Desain responsif ramah pengguna seluler',
    ],
    tags: ['PHP', 'MVC Framework', 'Bootstrap', 'MySQL'],
    gradient: 'from-blue-500/10 via-sky-500/5 to-transparent',
    accentColor: 'text-blue-600',
    demoUrl: '#',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Lab Profile POLINEMA',
    category: 'Sistem Informasi',
    summary:
      'Sistem informasi dan profil Laboratorium Business Analyst di POLINEMA.',
    fullDescription:
      'Sistem informasi akademik komprehensif untuk mendigitalkan operasional Laboratorium Business Analyst di Jurusan Teknologi Informasi POLINEMA. Mengakomodasi publikasi profil laboratorium, inventarisasi aset perangkat, dan peminjaman fasilitas riset.',
    features: [
      'Pusat publikasi hasil riset dan publikasi ilmiah dosen/mahasiswa',
      'Sistem pemesanan jadwal laboratorium dan perangkat riset terpusat',
      'Manajemen data asisten lab dan pelaporan inventaris berkala',
      'Otorisasi berbasis role pengguna (Dosen, Mahasiswa, Asisten)',
    ],
    tags: ['PHP', 'PostgreSQL', 'Tailwind CSS', 'Draw.io'],
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    accentColor: 'text-emerald-600',
    demoUrl: '#',
    githubUrl: 'https://github.com',
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-data',
    title: 'Sertifikat Bootcamp Data Analyst',
    issuer: 'Karirnex',
    year: '2025',
    skills: ['Excel', 'SQL', 'Python', 'Power BI'],
    description:
      'Pelatihan komprehensif yang mencakup fundamental analisis data, pembersihan dan pemformatan data menggunakan Excel dan Google BigQuery (SQL), pengenalan Python untuk struktur data melalui Google Colab, serta visualisasi data dan pembuatan dashboard menggunakan Power BI, lengkap dengan studi kasus pada setiap sesinya.',
    verifyUrl: 'https://example.com/verify/CERT-WD-2025-0891',
    image: '/image/sertif2.jpg',
  },
  {
    id: 'cert2',
    title: 'Bootcamp Sertifikasi MS. Excel, Word, Power Point Specialist',
    issuer: 'KarirNex',
    year: '2026',
    skills: [
      'Microsoft Excel (Formula, Pivot Table, Basic Macro VBA)',
      'Microsoft Word (Document Formatting, Create CV ATS)',
      'Microsoft PowerPoint (Interactive Presentation, Animation)',
      'Data Visualization & Dashboard'
],
description:
  'Bootcamp intensif selama 3 minggu (6 pertemuan) yang berfokus pada penguasaan Microsoft Office. Pelatihan ini mencakup pengelolaan data dan pembuatan dashboard di Excel, perancangan dokumen dan CV ramah ATS di Word, serta pembuatan presentasi interaktif dengan elemen visual di PowerPoint.',
    verifyUrl: 'https://example.com/verify/CERT-DBA-2024-4420',
    image: '/image/Sertif1.jpg',
  },
];

export const contactData: ContactInfo = {
  email: 'okadarmestha@gmail.com',
  whatsappNumber: '6283117753891',
  whatsappFormatted: '+62 8311-7753-891',
  githubUrl: 'https://github.com/MadeOka06',
  linkedinUrl: 'https://www.linkedin.com/in/i-gusti-agung-made-oka-darmestha-a604ab379/',
};
