import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'default' | 'error' | 'inverted'
type TextAlign = 'left' | 'center' | 'right';
type TextSize = 'size_s' | 'size_m' | 'size_l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  'size_s': 'h3',
  'size_m': 'h2',
  'size_l': 'h1',
};

interface TextProps {
  className?: string;
  title?: string,
  text?: string,
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
  'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = 'default',
    text,
    title,
    align = 'left',
    size = 'size_m',
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <HeaderTag
        className={cls.title}
        data-testid={`${dataTestId}.Header`}
      >
        {props.title}
      </HeaderTag>}
      {text && <p
        className={cls.text}
        data-testid={`${dataTestId}.Paragraph`}
      >
        {props.text}
      </p>}
    </div>
  );
});

Text.displayName = 'Text';
