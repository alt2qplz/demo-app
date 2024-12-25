import React, { memo, useCallback, useMemo } from 'react';
import { Country } from '../model/types/country';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CountrySelectProps {
  className?: string;
  value?: Country
  onChange?: (country: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly  } = props;
  const { t } = useTranslation();

  const options = useMemo(() => {
    return [
      { value: Country.AR, content: `${t('Армения')}` },
      { value: Country.BU, content: `${t('Белорусь')}` },
      { value: Country.KZ, content: `${t('Казахстан')}` },
      { value: Country.RU, content: `${t('Россия')}` },
      { value: Country.UKR, content: `${t('Украина')}` },
    ];
  }, [t]);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return <ListBox
    onChange={onChangeHandler}
    value={value}
    defaultValue={t('Укажите страну')}
    label={t('Страна')}
    items={options}
    readonly={readonly}
    direction="top"
    className={className}
  />;
});

CountrySelect.displayName = 'CurrencySelect';
