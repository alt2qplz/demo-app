import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext';
import { FC, useMemo, useState } from 'react';

// Получаем тему из локалстора и причисляем к типу Theme
// Так как сам локалстор всегда возвращает string
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  // useMemo позволяет мемоизировать значение и возвращать его, пока в массиве зависимостей ничего не изменилось
  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  document.body.className = theme;

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
