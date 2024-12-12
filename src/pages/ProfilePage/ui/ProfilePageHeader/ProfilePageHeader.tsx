import React, { memo, useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';

export const ProfilePageHeader = memo(() => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();

  const edit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const cancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  if (!canEdit) return (
    <div className={classNames(cls.ProfilePageHeader, {}, [])}>
      <Text title={t('Профиль')}/>
    </div>
  );

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [])}>
      <Text title={t('Профиль')}/>
      {readonly
        ? (
          <Button onClick={edit}>
            {t('Редактировать')}
          </Button>
        ) : (
          <div className={cls['btn-group']}>
            <Button onClick={onSave}>
              {t('Сохранить')}
            </Button>
            <Button onClick={cancelEdit} theme={'danger'}>
              {t('Отменить')}
            </Button>
          </div>
        )
      }
    </div>
  );
});

ProfilePageHeader.displayName = 'ProfilePageHeader';
