import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import { useTranslation } from 'react-i18next';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const counterValue = useSelector(getCounterValue);

  const inc = () => {
    dispatch(counterActions.increment());
  };

  const dec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value">{t('значение')} = {counterValue}</h1>
      <Button data-testid="inc" onClick={inc}>{t('Инкремент')}</Button>
      <Button data-testid="dec" onClick={dec}>{t('Декремент')}</Button>
    </div>
  );
};
