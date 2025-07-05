'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const pathname = usePathname();
  
  // Check if we're on a page other than the main page
  const isOnSubPage = pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate opacity based on scroll position
      // Fade starts immediately and becomes fully transparent after scrolling 60% of viewport height
      const fadeDistance = windowHeight * 0.6;
      const opacity = Math.max(0, 1 - (scrollPosition / fadeDistance));
      
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ 
      opacity: scrollOpacity,
      pointerEvents: scrollOpacity < 0.1 ? 'none' : 'auto'
    }}>
      <div className="brand">
        <a href="/" className="change-cursor" style={{color: 'inherit', textDecoration: 'none'}}>
          Kimmie Rokahr Design
        </a>
      </div>
      <ul>
        <li><a href={isOnSubPage ? "/#home" : "#home"} className="change-cursor">Home</a></li>
        <li><a href={isOnSubPage ? "/#about" : "#about"} className="change-cursor">About</a></li>
        <li><a href={isOnSubPage ? "/#portfolio" : "#portfolio"} className="change-cursor">Portfolio</a></li>
        <li><a href={isOnSubPage ? "/#contact" : "#contact"} className="change-cursor">Contact</a></li>
      </ul>
    </nav>
  );
}
