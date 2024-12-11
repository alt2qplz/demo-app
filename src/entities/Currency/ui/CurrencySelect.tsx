import React, { memo, useCallback, useMemo } from 'react';
import { Currency } from '../model/types/currency';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

interface CurrencySelectProps {
  className?: string;
  value?: Currency
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly  } = props;
  const { t } = useTranslation();

  const options = useMemo(() => {
    return [
      { value: Currency.RUB, content: `${t('Рубли')}` },
      { value: Currency.USD, content: `${t('Доллар')}` },
      { value: Currency.EUR, content: `${t('Евро')}` },
    ];
  }, [t]);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return <Select
    label={t('Валюта')}
    value={value}
    onChange={onChangeHandler}
    readonly={readonly}
    options={options}
    className={className}
  />;
});

CurrencySelect.displayName = 'CurrencySelect';
