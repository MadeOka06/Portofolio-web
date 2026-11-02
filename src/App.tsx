import { useState, useEffect } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import SoftSkills from './components/sections/SoftSkills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen antialiased flex flex-col relative overflow-hidden" style={{ backgroundColor: '#0A1931', color: '#F6FAFD' }}>

      {/* ── Global Background Blob Ornaments ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Top-left blob */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(26,61,99,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        {/* Bottom-right blob */}
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(26,61,99,0.45) 0%, transparent 70%)', filter: 'blur(80px)', animationDelay: '4s' }}
        />
        {/* Center accent blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(ellipse, rgba(74,127,167,0.15) 0%, transparent 70%)', filter: 'blur(80px)', animationDelay: '2s' }}
        />
      </div>

      {/* ── Navigation Bar ── */}
      <Navbar />

      {/* ── Main Content ── */}
      <main className="flex-1 w-full relative z-10">
        <Hero />
        <Skills />
        <SoftSkills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* ── Floating Scroll-to-Top Button ── */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full text-white shadow-lg hover:scale-110 active:scale-95 cursor-pointer animate-fadeIn transition-all"
          style={{ backgroundColor: '#4A7FA7', boxShadow: '0 4px 20px rgba(74,127,167,0.4)' }}
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
