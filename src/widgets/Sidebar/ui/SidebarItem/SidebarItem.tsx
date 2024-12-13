import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(function (props: SidebarItemProps) {
  const { t } = useTranslation();

  return (
    <AppLink className={classNames(cls.link, { [cls.collapsed]: props.collapsed })} theme={AppLinkTheme.SECONDARY} to={props.item.link}>
      <props.item.Icon className={cls.icon}/>
      <span>{t(props.item.text)}</span>
    </AppLink>
  );
});

SidebarItem.displayName = 'SidebarItem';
