import { useState, useEffect, useCallback, useContext, createContext, ReactNode } from 'react';
import { Theme, THEME_STORAGE_KEY } from '@/utils/theme';

type ThemeContextType = {
  // null until mounted, since the server can't know the visitor's theme
  theme: Theme | null;
  toggleTheme: () => void;
}

const defaultValues: ThemeContextType = {
  theme: null,
  toggleTheme: () => { },
}

export const ThemeContext = createContext<ThemeContextType>(defaultValues);
export const useThemeContext = () => useContext(ThemeContext);

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme | null>(defaultValues.theme);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

    // Keep following the system preference until the visitor picks a theme themselves
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) return;
    const onChange = (e: MediaQueryListEvent) => {
      if (getStoredTheme()) return;
      const next = e.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch { }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
