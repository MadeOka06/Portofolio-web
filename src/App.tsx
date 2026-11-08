import { useState, useEffect, Component, type ErrorInfo, type ReactNode } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import SoftSkills from './components/sections/SoftSkills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-[#C23616] bg-[#F5F3EC] border border-[#DDD9CD]">
          <p className="font-mono-swiss text-xs font-semibold">TERJADI KENDALA PADA TAMPILAN SISTEM.</p>
          <pre className="text-xs text-left inline-block mt-4 p-4 border border-[#DDD9CD] bg-[#EFECE3]">
            {this.state.error?.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const checkScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowScrollTop(window.scrollY > 400);
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen relative bg-[#F5F3EC] text-[#121212] overflow-x-hidden selection:bg-[#121212] selection:text-[#F5F3EC]">

        {/* ── Fixed Swiss Top Bar (stays fixed while scrolling) ── */}
        <Navbar />

        {/* ── Main Content Container ── */}
        <main className="relative z-10 w-full">
          <Hero />
          <Skills />
          <SoftSkills />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </main>

        {/* ── Vertical Scroll Progress Rail (right edge) ── */}
        <div className="fixed right-0 top-0 bottom-0 w-[3px] z-40 bg-[#DDD9CD]/40 pointer-events-none">
          <div
            className="w-full bg-[#D84227] transition-all duration-100 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* ── Sharp Minimalist Scroll-to-Top Button ── */}
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-[#F5F3EC] border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-[#F5F3EC] cursor-pointer transition-all duration-300"
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
          style={{
            opacity: showScrollTop ? 1 : 0,
            transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
            pointerEvents: showScrollTop ? 'auto' : 'none',
            transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1), background-color 0.2s ease, color 0.2s ease',
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </ErrorBoundary>
  );
}
