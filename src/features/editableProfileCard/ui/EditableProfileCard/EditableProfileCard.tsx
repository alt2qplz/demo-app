import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Text } from 'shared/ui/Text/Text';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/service/fetchProfileData/fetchProfileData';
import { ProfileCard } from 'entities/Profile';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

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
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <EditableProfileCardHeader />
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
      </VStack>
    </DynamicModuleLoader>
  );
});

EditableProfileCard.displayName = 'EditableProfileCard';
