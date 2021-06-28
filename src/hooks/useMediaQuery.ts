import { useState, useEffect } from 'react';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(${query})`);
    if (media.matches) {
      setMatches(true);
    }
    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
