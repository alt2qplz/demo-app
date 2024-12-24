import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItems = useSelector(getSidebarItems);

  const toggleCollapse = () => { setCollapsed(prev => !prev); };

  return (
    <menu
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
        {sidebarItems.map(item => {
          return <SidebarItem item={item} key={item.link} collapsed={collapsed}/>;
        })}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </menu>
  );
});

Sidebar.displayName = 'Sidebar';
