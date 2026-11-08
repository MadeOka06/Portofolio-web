import { useState, useEffect } from 'react';
import { IconMenu, IconX } from '../common/Icons';
import { Logo } from '../common/Logo';
import { profileData } from '../../data/portfolioData';

const navLinks = [
  { id: 'beranda', label: 'BERANDA', code: '01' },
  { id: 'keahlian', label: 'KEAHLIAN', code: '02' },
  { id: 'soft-skills', label: 'KOMPETENSI', code: '03' },
  { id: 'pengalaman', label: 'ORGANISASI', code: '04' },
  { id: 'proyek', label: 'PROYEK', code: '05' },
  { id: 'sertifikasi', label: 'SERTIFIKASI', code: '06' },
  { id: 'kontak', label: 'KONTAK', code: '07' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Navbar shrink on scroll
      setScrolled(window.scrollY > 30);

      // ScrollSpy
      const sections = navLinks.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;
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
    <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-[#DDD9CD] transition-all duration-500 ease-out ${scrolled ? 'bg-[#F5F3EC]/95 backdrop-blur-sm h-12' : 'bg-[#F5F3EC] h-auto'}`}>
      {/* ── Main Top Bar ── */}
      <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ease-out ${scrolled ? 'h-12' : 'h-14'}`}>

        {/* Wordmark & Folio */}
        <div className="flex items-center gap-4">
          <a
            href="#beranda"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-80"
            aria-label="Beranda"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Logo size={28} />
            </div>
            <span className="font-mono-swiss text-xs sm:text-sm font-semibold tracking-[0.1em] text-[#121212]">
              {profileData.shortname.toUpperCase()}
            </span>
          </a>

        </div>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-mono-swiss text-[11px] tracking-[0.08em] flex items-center gap-1.5 transition-opacity py-1 text-[#121212] hover:opacity-60"
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#D84227] inline-block" />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Link (Desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#kontak"
            className="font-mono-swiss text-[11px] tracking-[0.08em] font-semibold text-[#121212] border-b border-[#121212] pb-0.5 hover:text-[#D84227] hover:border-[#D84227] transition-colors"
          >
            HUBUNGI SAYA →
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 text-[#121212] hover:opacity-60 transition-opacity"
          aria-label="Menu"
        >
          {isOpen ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Slide-Down Reading Progress Line (Swiss Terracotta) ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden">
        <div
          className="h-full bg-[#D84227] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      {isOpen && (
        <div className="lg:hidden bg-[#F5F3EC] border-t border-[#DDD9CD] px-4 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="font-mono-swiss text-xs tracking-[0.08em] flex items-center justify-between py-2 border-b border-[#DDD9CD]/60 text-[#121212]"
              >
                <div className="flex items-center gap-2">
                  {isActive && <span className="w-1.5 h-1.5 bg-[#D84227]" />}
                  <span>{link.label}</span>
                </div>
                <span className="text-[#87857E] text-[10px]">{link.code}</span>
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="block text-center font-mono-swiss text-xs tracking-[0.08em] bg-[#121212] text-[#F5F3EC] py-2.5"
            >
              HUBUNGI SAYA →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

