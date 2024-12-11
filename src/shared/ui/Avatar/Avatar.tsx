import React, { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    size
  } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return <div
    className={classNames(cls.Avatar, {}, [className])}
    style={{ ...styles, backgroundImage: `url(${src})` }}
  />;
});

Avatar.displayName = 'Avatar';
