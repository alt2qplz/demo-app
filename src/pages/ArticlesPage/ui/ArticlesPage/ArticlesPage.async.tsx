import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Loading page imitation
  setTimeout(() => resolve(import('./ArticlesPage')), 700);
}));
