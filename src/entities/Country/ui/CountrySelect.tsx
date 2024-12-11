import React, { memo, useCallback, useMemo } from 'react';
import { Country } from '../model/types/country';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

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

  return <Select
    label={t('Страна')}
    value={value}
    onChange={onChangeHandler}
    readonly={readonly}
    options={options}
    className={className}
  />;
});

CountrySelect.displayName = 'CurrencySelect';
