import React, { memo, useCallback, useMemo } from 'react';
import { Currency } from '../model/types/currency';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';

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

  return <ListBox
    className={className}
    value={value}
    defaultValue={t('Укажите валюту')}
    label={t('Валюта')}
    items={options}
    onChange={onChangeHandler}
    readonly={readonly}
    direction="top right"
  />;
});

CurrencySelect.displayName = 'CurrencySelect';
