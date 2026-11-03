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
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-red-400 bg-[#0A1931]">
          <p className="text-lg font-semibold">Komponen ini mengalami kendala saat dimuat.</p>
          <pre className="text-xs text-left inline-block mt-4 p-4 rounded-xl bg-[#1A3D63]/80 overflow-auto max-w-full">
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
    <ErrorBoundary>
      <div className="min-h-screen antialiased flex flex-col relative overflow-x-hidden bg-[#0A1931] text-[#F6FAFD]">

        {/* ── Global Background Ambient Ornaments ── */}
        <div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* Top-left soft cyan-navy blob */}
          <div
            className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full animate-blob opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(26,61,99,0.5) 50%, transparent 70%)', filter: 'blur(70px)' }}
          />
          {/* Bottom-right soft ocean blob */}
          <div
            className="absolute -bottom-32 -right-32 w-[650px] h-[650px] rounded-full animate-blob opacity-35"
            style={{ background: 'radial-gradient(circle, rgba(74,127,167,0.35) 0%, rgba(15,35,60,0.5) 50%, transparent 70%)', filter: 'blur(80px)', animationDelay: '4s' }}
          />
          {/* Center ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-25 animate-blob"
            style={{ background: 'radial-gradient(ellipse, rgba(96,165,250,0.18) 0%, transparent 70%)', filter: 'blur(90px)', animationDelay: '2s' }}
          />
        </div>

        {/* ── Navigation Bar with Scroll Progress ── */}
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
            className="fixed bottom-7 right-7 z-40 p-4 rounded-2xl text-white shadow-[0_8px_25px_rgba(74,127,167,0.5)] hover:scale-110 active:scale-95 cursor-pointer animate-fadeIn transition-all duration-300 bg-gradient-to-r from-[#4A7FA7] to-[#2563EB] border border-white/20 backdrop-blur-md"
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </ErrorBoundary>
  );
}
