import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer
};

const LoginForm = memo(function LoginForm (props: LoginFormProps) {
  const { onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') onSuccess();
  }, [onSuccess, dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [props.className])}>
        <Text title={t('Форма авторизации')} size="size_l"/>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {error && <Text text={t('Вы ввели неверные данные')} theme={'error'}/>}
        <Input
          autofocus
          type="text"
          placeholder={t('Введите username')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls['auth-button']}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
