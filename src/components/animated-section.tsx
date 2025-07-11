// src/components/animated-section.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up';
}

export function AnimatedSection({
  children,
  className,
  direction = 'up',
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const animationClass = {
    left: 'animate-fade-in-left',
    right: 'animate-fade-in-right',
    up: 'animate-fade-in-up',
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible ? cn('opacity-100 translate-x-0 translate-y-0', animationClass[direction]) : 'opacity-0',
        direction === 'left' && !isVisible && '-translate-x-10',
        direction === 'right' && !isVisible && 'translate-x-10',
        direction === 'up' && !isVisible && 'translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
}
