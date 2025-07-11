// src/components/parallax-section.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  id?: string;
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  priority?: boolean;
  dataAiHint?: string;
  applyContentEffects?: boolean;
}

export function ParallaxSection({
  id,
  src,
  alt,
  children,
  className,
  priority = false,
  dataAiHint,
  applyContentEffects = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroTitle = document.getElementById('hero-title');

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        
        // Parallax for background image
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const parallaxImage = sectionRef.current?.querySelector('img');
          if (parallaxImage) {
            const relativeOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
            parallaxImage.style.transform = `translate3d(0, ${relativeOffset * 0.3}px, 0) scale(1.15)`;
          }
        }

        // Effects for content
        if (applyContentEffects && heroTitle) {
          const scrollFraction = Math.max(0, Math.min(1, window.scrollY / (window.innerHeight * 0.5)));
          const scale = 1 - scrollFraction * 0.7; // From 1 down to 0.3
          const opacity = 1 - scrollFraction * 1.5;
          const yOffset = -window.scrollY * 0.4;
          
          heroTitle.style.transform = `translate(-50%, -50%) translateY(${yOffset}px) scale(${Math.max(0, scale)})`;
          heroTitle.style.opacity = `${Math.max(0, opacity)}`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [applyContentEffects]);

  return (
    <section ref={sectionRef} id={id} className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
         <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            data-ai-hint={dataAiHint}
            style={{ transform: `scale(1.15)` }}
          />
      </div>
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div 
        className="relative z-20 flex flex-col items-center justify-center h-full"
      >
        {children}
      </div>
    </section>
  );
}
