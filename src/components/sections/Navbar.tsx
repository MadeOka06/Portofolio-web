import { useState, useEffect } from 'react';
import { IconMenu, IconX } from '../common/Icons';
import { profileData } from '../../data/portfolioData';

const navLinks = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'soft-skills', label: 'Soft Skills' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'sertifikasi', label: 'Sertifikasi' },
  { id: 'kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // ScrollSpy logic
      const sections = navLinks.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-400 ${
        scrolled
          ? 'backdrop-blur-xl shadow-lg shadow-black/20 py-3 bg-[#0A1931]/85 border-b border-[#4A7FA7]/20'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#beranda"
          className="text-2xl font-extrabold tracking-tight transition-transform hover:scale-105 active:scale-95 group flex items-center gap-1"
          style={{ color: '#F6FAFD' }}
        >
          <span>{profileData.shortname}</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#4A7FA7] group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1A3D63]/40 p-1.5 rounded-full border border-[#4A7FA7]/20 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-[#4A7FA7] shadow-[0_2px_12px_rgba(74,127,167,0.4)] scale-100 font-semibold'
                    : 'text-[#B3CFE5] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="#kontak"
            className="btn-shimmer px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-[#4A7FA7] to-[#3a688b] text-white shadow-[0_4px_16px_rgba(74,127,167,0.35)] hover:shadow-[0_6px_22px_rgba(74,127,167,0.5)]"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl transition-colors bg-[#1A3D63]/60 border border-[#4A7FA7]/30 text-[#B3CFE5]"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Modern Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1A3D63]/30 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#4A7FA7] via-[#60A5FA] to-[#38BDF8] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(56,189,248,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="md:hidden px-4 pt-3 pb-6 space-y-1.5 shadow-2xl backdrop-blur-2xl animate-fadeIn border-b border-[#4A7FA7]/20"
          style={{ backgroundColor: 'rgba(10, 25, 49, 0.96)' }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 text-base font-medium rounded-xl transition-all ${
                  isActive
                    ? 'text-white bg-[#4A7FA7]/30 border border-[#4A7FA7]/40 font-semibold'
                    : 'text-[#B3CFE5] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all bg-[#4A7FA7] text-white shadow-lg"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
