import { useEffect } from 'react';

const usePreserveScroll = (key: string) => {
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(key);
    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }, 0)
    }

    const handleScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };

    // Register scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Save scroll position before unloading the page
    const handleBeforeUnload = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Cleanup
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [key]);
};

export default usePreserveScroll;
