import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [props.className])}>
      {t('Страница не найдена')}
      <br/>
      <AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>{t('Вернуться на главную')}</AppLink>
    </div>
  );
});

NotFoundPage.displayName = 'NotFoundPage';
