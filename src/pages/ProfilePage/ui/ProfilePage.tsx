import React, { memo, useCallback, useEffect } from 'react';
import cls from './ProfilePage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  ProfileCard,
  profileActions,
  profileReducer,
  ValidateProfileError
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect";
import {useParams} from "react-router-dom";

const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id}  = useParams<{ id: string }>();

  const validateErrorTranslates = {
    [ValidateProfileError.NO_DATA]: t('Нет данных профиля'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректное значение страны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректное значение возраста'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректное значение имени'),
  };

  useInitialEffect(() => {
    if (id) dispatch(fetchProfileData(id));
  });

  const onChangeFirstname = useCallback((value = '') => {
    dispatch(profileActions.updateForm({ first: value }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value = '') => {
    dispatch(profileActions.updateForm({ lastname: value }));
  }, [dispatch]);

  const onChangeCity = useCallback((value = '') => {
    dispatch(profileActions.updateForm({ city: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value = '0') => {
    if (Number.isNaN(Number(value))) return;
    dispatch(profileActions.updateForm({ age: Number(value) }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value = '') => {
    dispatch(profileActions.updateForm({ username: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value = '') => {
    dispatch(profileActions.updateForm({ avatar: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateForm({ country }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateForm({ currency }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [props.className])}>
        <ProfilePageHeader />
        {!!validateErrors?.length && validateErrors.map(error => {
          return <Text theme="error" text={validateErrorTranslates[error]} key={error}/>;
        })}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
        />
      </div>
    </DynamicModuleLoader>
  );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
