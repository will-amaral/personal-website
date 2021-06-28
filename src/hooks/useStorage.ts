import { useState, useEffect } from 'react';

function useStorage(query: string) {
  const [item, setItem] = useState('');

  useEffect(() => {
    setItem(localStorage.getItem(query));
  }, []);

  useEffect(() => {
    const listener = () => {
      const stored = localStorage.getItem(query);
      if (stored !== item) {
        setItem(stored);
      }
    };
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, [item, query]);

  return item;
}

export default useStorage;
