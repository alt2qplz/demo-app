import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'default' | 'error' | 'inverted'
type TextAlign = 'left' | 'center' | 'right';
type TextSize = 'size_m' | 'size_l'

interface TextProps {
  className?: string;
  title?: string,
  text?: string,
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = 'default',
    text,
    title,
    align = 'left',
    size = 'medium'
  } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <h2 className={cls.title}>{props.title}</h2>}
      {text && <p className={cls.text}>{props.text}</p>}
    </div>
  );
});

Text.displayName = 'Text';
