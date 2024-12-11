import React, { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose
  } = props;

  return (
    <Modal
      lazy
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
