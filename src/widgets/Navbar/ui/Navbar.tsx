import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.userLogout());
  }, [dispatch]);

  if (authData) return (
    <header
      data-testid="navbar"
      className={classNames(cls.Navbar, {}, [props.className])}
    >
      <div className={cls.links}>
        <Button theme={'outlineInverted'} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </div>
    </header>
  );

  return (
    <header
      data-testid="navbar"
      className={classNames(cls.Navbar, {}, [props.className])}
    >
      <div className={cls.links}>
        <Button theme={'backgroundInverted'} onClick={onShow}>
          {t('Войти')}
        </Button>
      </div>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose}/>}
    </header>
  );
});

Navbar.displayName = 'Navbar';
