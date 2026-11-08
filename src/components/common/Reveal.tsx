import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  width?: 'fit' | 'full';
}

export default function Reveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 750,
  threshold = 0.08,
  width = 'full',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(() => {
    // If running in an environment without IntersectionObserver, initialize visible immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback timer: ensure content is revealed even if observer is slow or blocked
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500 + delay);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            clearTimeout(fallbackTimer);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [threshold, delay]);

  const getInitialTransform = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate3d(0, 28px, 0)';
      case 'fade-down':
        return 'translate3d(0, -28px, 0)';
      case 'fade-left':
        return 'translate3d(32px, 0, 0)';
      case 'fade-right':
        return 'translate3d(-32px, 0, 0)';
      case 'zoom-in':
        return 'scale(0.96)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`${width === 'full' ? 'w-full' : 'w-auto'} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
