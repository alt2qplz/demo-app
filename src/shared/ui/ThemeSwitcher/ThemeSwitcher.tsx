import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/themeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [props.className])}
      theme={'clear'}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
    </Button>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
