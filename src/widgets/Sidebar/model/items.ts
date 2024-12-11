import React from 'react';

import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';
import HomePageIcon from 'shared/assets/icons/home-20-20.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesPageIcon from 'shared/assets/icons/article-20-20.svg';

export type SidebarItemType = {
  link: string,
  text: string,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
  authOnly?: boolean
}

export const sidebarItems: SidebarItemType[] = [
  {
    text: 'Главная',
    link: '/',
    Icon: HomePageIcon
  },
  {
    text: 'О Сайте',
    link: '/about',
    Icon: AboutPageIcon
  },
  {
    text: 'Профиль',
    link: '/profile',
    Icon: ProfilePageIcon,
    authOnly: true
  },
  {
    text: 'Статьи',
    link: '/articles',
    Icon: ArticlesPageIcon,
    authOnly: true
  }
];
