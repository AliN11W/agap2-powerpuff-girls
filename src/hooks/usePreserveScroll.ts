import { useEffect, useLayoutEffect } from 'react';

const usePreserveScroll = (key: string) => {
  useEffect(() => {
    // Restore scroll position if it was saved
    const savedScrollPosition = sessionStorage.getItem(key);

    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }, 0);
    }

    const handleScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // Cleanup
      window.removeEventListener('scroll', handleScroll);
    };
  }, [key]);
};

export default usePreserveScroll;
