import { createContext, useContext } from 'react';
import { useDarkTheme } from '@/hooks';

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => null,
});

export function AppWrapper({ children }) {
  const sharedState = useDarkTheme();
  return <ThemeContext.Provider value={sharedState}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
