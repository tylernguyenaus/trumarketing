import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search, hash, key } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Run immediately and on next paint to avoid mobile browser restoration races.
    scrollToTop();
    const raf = window.requestAnimationFrame(scrollToTop);

    return () => window.cancelAnimationFrame(raf);
  }, [pathname, search, hash, key]);

  return null;
}
