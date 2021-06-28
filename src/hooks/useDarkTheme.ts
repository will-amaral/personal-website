import { useState, useEffect } from 'react';

import useMediaQuery from './useMediaQuery';
import useStorage from './useStorage';

function useDarkTheme() {
  const [isDark, setIsDark] = useState(false);
  const prefersDark = useMediaQuery('prefers-color-scheme: dark');
  const theme = useStorage('theme');

  const toggleTheme = () => {
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    document.body.classList.toggle('dark');
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (theme === 'dark' || (!theme && prefersDark)) {
      setIsDark(true);
      document.body.classList.add('dark');
    } else {
      setIsDark(false);
      document.body.classList.remove('dark');
    }
  }, [prefersDark, theme]);

  return { isDark, toggleTheme };
}

export default useDarkTheme;
