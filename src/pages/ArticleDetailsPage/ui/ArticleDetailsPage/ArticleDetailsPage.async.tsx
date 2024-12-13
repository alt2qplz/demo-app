import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Loading page imitation
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
