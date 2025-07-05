'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringTarget, setIsHoveringTarget] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Initially hidden to avoid SSR mismatch
  const [isClient, setIsClient] = useState(false); // State to check if on client side
  const pathname = usePathname();

  // Reset cursor state when pathname changes
  useEffect(() => {
    // Declare updateCursor here so it is in scope for cleanup
    const updateCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    setIsHoveringTarget(false);
  }, [pathname]);

  useEffect(() => {
    // Set isClient to true after mounting, enabling client-side rendering
    setIsClient(true);

    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const updateCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };


    // Mouse move listener
    window.addEventListener('mousemove', updateCursor);

    // Mouse out and over listeners on document to detect when the mouse leaves or enters the viewport
    const handleMouseOut = (e: MouseEvent) => {
      const event = e as MouseEvent & { toElement?: EventTarget | null };
      if (!e.relatedTarget && !event.toElement) {
        setIsVisible(false);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const event = e as MouseEvent & { fromElement?: EventTarget | null };
      if (!e.relatedTarget && !event.fromElement) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    // Event delegation for mouseover and mouseout on target elements
    const handleTargetMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.classList.contains('change-cursor') ||
        target.closest('.change-cursor')
      ) {
        setIsHoveringTarget(true);
      }
    };
    const handleTargetMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.classList.contains('change-cursor') ||
        target.closest('.change-cursor')
      ) {
        setIsHoveringTarget(false);
      }
    };

    document.addEventListener('mouseover', handleTargetMouseOver);
    document.addEventListener('mouseout', handleTargetMouseOut);

    // Set initial visibility when mouse is in viewport
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseover', handleTargetMouseOver);
      document.removeEventListener('mouseout', handleTargetMouseOut);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    document.body.style.cursor = isTouchDevice ? 'auto' : 'none';

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Only render the cursor on the client
  if (!isClient) return null;

  return createPortal(
    isVisible && (
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: isHoveringTarget ? '#A7B5C0' : '#36454F',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'background-color 0.2s ease, transform 0.1s ease',
        }}
      ></div>
    ),
    document.body
  );
}
