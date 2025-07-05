'use client';


import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
        <Link href="/" className="change-cursor" style={{color: 'inherit', textDecoration: 'none'}}>
          Kimmie Rokahr Design
        </Link>
      </div>
      <ul>
        <li><Link href={isOnSubPage ? "/#home" : "#home"} className="change-cursor">Home</Link></li>
        <li><Link href={isOnSubPage ? "/#about" : "#about"} className="change-cursor">About</Link></li>
        <li><Link href={isOnSubPage ? "/#portfolio" : "#portfolio"} className="change-cursor">Portfolio</Link></li>
        <li><Link href={isOnSubPage ? "/#contact" : "#contact"} className="change-cursor">Contact</Link></li>
      </ul>
    </nav>
  );
}
