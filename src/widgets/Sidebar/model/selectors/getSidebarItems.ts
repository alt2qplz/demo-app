import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';
import HomePageIcon from 'shared/assets/icons/home-20-20.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesPageIcon from 'shared/assets/icons/article-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItems: SidebarItemType[] = [
      {
        text: 'Главная',
        link: '/',
        Icon: HomePageIcon
      },
      {
        text: 'О Сайте',
        link: '/about',
        Icon: AboutPageIcon
      }];

    if (userData) {
      sidebarItems.push(
        {
          text: 'Профиль',
          link: '/profile/' + userData.id,
          Icon: ProfilePageIcon,
          authOnly: true
        },
        {
          text: 'Статьи',
          link: '/articles',
          Icon: ArticlesPageIcon,
          authOnly: true
        }
      );
    }

    return sidebarItems;
  }
);
