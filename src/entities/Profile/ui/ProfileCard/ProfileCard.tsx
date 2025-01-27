import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';

interface ProfileCardProps {
  className?: string;
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCountry?: (country: Country) => void;
  onChangeCurrency?: (currency: Currency) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    data,
    error,
    isLoading,
    className,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency
  } = props;

  if (isLoading) {
    return <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [props.className, cls.loading])}
    >
      <Loader/>
    </HStack>;
  }

  if (error) {
    return <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [props.className, cls.error])}
    >
      <Text theme={'error'} text={error} title={t('Произошла ошибка при загрузке профиля')} align={'center'}/>
    </HStack>;
  }

  const mods = {
    [cls.editing]: !readonly
  };

  return (
    <VStack gap="8" max justify="start" className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar &&
          <HStack justify="start" max>
            <Avatar src={data?.avatar} size={200}/>
          </HStack>
      }
      <Input
        value={data?.first}
        placeholder={t('Имя')}
        readonly={readonly}
        onChange={onChangeFirstname}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Фамилия')}
        readonly={readonly}
        onChange={onChangeLastname}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        readonly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data?.age}
        placeholder={t('Возраст')}
        readonly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data?.username}
        placeholder={t('Имя пользователя')}
        readonly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Ссылка на аватар')}
        readonly={readonly}
        onChange={onChangeAvatar}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
    </VStack>
  );
});

ProfileCard.displayName = 'ProfileCard';