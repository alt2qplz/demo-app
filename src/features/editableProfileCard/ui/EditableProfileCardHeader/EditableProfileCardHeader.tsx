import React, { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { profileActions } from '../../model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';

export const EditableProfileCardHeader = memo(() => {
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
    <HStack max justify="between" className={classNames('', {}, [])}>
      <Text title={t('Профиль')}/>
    </HStack>
  );

  return (
    <HStack max justify="between" className={classNames('', {}, [])}>
      <Text title={t('Профиль')}/>
      {readonly
        ? (
          <Button onClick={edit}>
            {t('Редактировать')}
          </Button>
        ) : (
          <HStack gap="8">
            <Button onClick={onSave}>
              {t('Сохранить')}
            </Button>
            <Button onClick={cancelEdit} theme={'danger'}>
              {t('Отменить')}
            </Button>
          </HStack>
        )
      }
    </HStack>
  );
});

EditableProfileCardHeader.displayName = 'ProfilePageHeader';
