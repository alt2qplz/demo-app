import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { sidebarItems } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isAuth = useSelector(getUserAuthData);

  const filteredSidebarItems = useMemo(() => {
    return sidebarItems.filter((el) => {
      return !(el.authOnly && !isAuth);
    });
  }, [isAuth]);

  const toggleCollapse = () => { setCollapsed(prev => !prev); };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [props.className])}
      data-testid="sidebar"
    >
      <Button
        data-testid="toggle-btn"
        onClick={toggleCollapse}
        square
        size={ButtonSize.L}
        theme={'backgroundInverted'}
        className={cls.collapseBtn}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {filteredSidebarItems.map(item => {
          return <SidebarItem item={item} key={item.link} collapsed={collapsed}/>;
        })}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
