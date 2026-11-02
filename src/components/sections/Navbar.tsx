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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md shadow-lg py-3.5'
          : 'py-5'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(26, 61, 99, 0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(74, 127, 167, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#beranda"
          className="text-2xl font-bold tracking-tight transition-colors"
          style={{ color: '#F6FAFD' }}
        >
          {profileData.shortname}
          <span style={{ color: '#4A7FA7' }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-3.5 py-2 text-sm font-medium rounded-lg transition-all"
                style={{
                  color: isActive ? '#F6FAFD' : '#B3CFE5',
                  backgroundColor: isActive ? 'rgba(74, 127, 167, 0.25)' : 'transparent',
                  fontWeight: isActive ? '600' : '500',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = '#F6FAFD';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = '#B3CFE5';
                }}
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
            className="px-4 py-2 text-sm font-semibold rounded-lg transition-all shadow-sm hover:scale-105 active:scale-95"
            style={{
              backgroundColor: '#4A7FA7',
              color: '#F6FAFD',
              boxShadow: '0 2px 12px rgba(74,127,167,0.35)',
            }}
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: '#B3CFE5' }}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="md:hidden px-4 pt-2 pb-5 space-y-1 shadow-xl animate-fadeIn"
          style={{
            backgroundColor: '#1A3D63',
            borderBottom: '1px solid rgba(74, 127, 167, 0.2)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-lg transition-colors"
                style={{
                  color: isActive ? '#F6FAFD' : '#B3CFE5',
                  backgroundColor: isActive ? 'rgba(74, 127, 167, 0.25)' : 'transparent',
                }}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full px-4 py-2.5 text-sm font-semibold rounded-lg transition-all"
              style={{ backgroundColor: '#4A7FA7', color: '#F6FAFD' }}
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
