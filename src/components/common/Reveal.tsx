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
  threshold = 0.12,
  width = 'full',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getInitialTransform = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate3d(0, 36px, 0) scale(0.97)';
      case 'fade-down':
        return 'translate3d(0, -36px, 0) scale(0.97)';
      case 'fade-left':
        return 'translate3d(45px, 0, 0)';
      case 'fade-right':
        return 'translate3d(-45px, 0, 0)';
      case 'zoom-in':
        return 'scale(0.9)';
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
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
