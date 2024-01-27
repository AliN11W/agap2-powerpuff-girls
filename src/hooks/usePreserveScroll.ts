import { useEffect } from 'react';

const usePreserveScroll = (key: string) => {
  useEffect(() => {
    // Restore scroll position
    const savedScrollPosition = sessionStorage.getItem(key);
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    // Save scroll position
    const handleBeforeUnload = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Optionally clear the saved position if you don't need it anymore
      // sessionStorage.removeItem(key);
    };
  }, [key]); // The effect will re-run only if key changes
};

export default usePreserveScroll;
