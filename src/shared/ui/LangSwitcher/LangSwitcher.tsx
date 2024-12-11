import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return <Button
    className={classNames(cls.LangSwitcher, {}, [props.className])}
    theme={'clear'}
    onClick={toggleLang}
  >
    {t('Язык')}
  </Button>;
});

LangSwitcher.displayName = 'LangSwitcher';
