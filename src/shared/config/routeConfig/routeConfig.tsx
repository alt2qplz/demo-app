import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE = 'article',
  ARTICLE_CREATE = 'create',
  ARTICLE_EDIT = 'edit',
  NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]:'/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE]: '/article',
  [AppRoutes.ARTICLE_CREATE]: '/article/new',
  [AppRoutes.ARTICLE_EDIT]: '/article/:id/edit',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: routePath['profile']+'/:id',
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: routePath['articles'],
    element: <ArticlesPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE]: {
    path: routePath['article']+'/:id',
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${routePath.create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${routePath.edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath['not_found'],
    element: <NotFoundPage />
  },
};
