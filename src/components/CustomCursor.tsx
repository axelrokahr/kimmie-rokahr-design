'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringTarget, setIsHoveringTarget] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const pathname = usePathname();

  // Detect touch device on mount
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(touch);
    }
  }, []);

  // Reset cursor state when pathname changes
  useEffect(() => {
    setIsHoveringTarget(false);
  }, [pathname]);

  useEffect(() => {
    if (!isClient || isTouch) return;
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const updateCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', updateCursor);

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

    setIsVisible(true);

    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseover', handleTargetMouseOver);
      document.removeEventListener('mouseout', handleTargetMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, [isClient, isTouch]);

  // Only render the cursor on the client and if not touch
  if (!isClient || isTouch) return null;

  return createPortal(
    isVisible && (
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: isHoveringTarget ? '#A7B5C0' : '#36454F',
          border: 'none',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'background-color 0.2s ease, border 0.2s ease, transform 0.1s ease',
        }}
      ></div>
    ),
    document.body
  );
}
