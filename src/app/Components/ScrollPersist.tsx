'use client';
import { useEffect } from 'react';

export default function ScrollPersist() {
  useEffect(() => {
    const key = `scroll:${location.pathname}${location.hash}`;

    // Restore once on mount
    const saved = localStorage.getItem(key);
    if (saved) {
      const y = parseInt(saved, 10);
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
      });
    }

    // Save on scroll
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          localStorage.setItem(key, String(window.scrollY));
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
