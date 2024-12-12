import { FC, lazy } from 'react';

export const AddCommentFormAsync = lazy<FC>(() => new Promise((resolve) => {
  // @ts-ignore
  // Loading page imitation
  setTimeout(() => resolve(import('./AddCommentForm')), 700);
}));
