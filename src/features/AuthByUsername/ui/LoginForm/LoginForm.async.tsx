import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // Loading page imitation
  setTimeout(() => resolve(import('./LoginForm')), 700);
}));
