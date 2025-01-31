import React, { memo } from 'react';
import cls from './ProfilePage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { id }  = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) return <Text title={t('Профиль не найден')}/>;

  return (
    <Page className={classNames(cls.ProfilePage, {}, [props.className])}>
      <EditableProfileCard id={id}/>
    </Page>
  );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
