import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal/Portal';

interface Props {
  className?: string,
  children?: React.ReactNode,
  isOpen: boolean,
  onClose: () => void,
  lazy?: boolean;
}

const ANIMATION_DELAY = 200; //ms

export const Modal: React.FC<Props> = (props) => {
  const {
    className,
    isOpen,
    onClose,
    children,
    lazy
  } = props;

  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  // const closingTimer = useRef<ReturnType<typeof setTimeout> | null>(null); // Mutable Ref
  const closingTimer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>; // Mutable Ref

  const mods: Mods = {
    [cls.isOpened]: isOpen,
    [cls.isClosing]: isClosing
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    closingTimer.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') closeHandler();
  }, [closeHandler]);

  const contentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(closingTimer.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) return null;

  return <Portal>
    <div className={classNames(cls.Modal, mods, [className])} data-testid="modal">
      <div className={cls.overlay} onClick={closeHandler} data-testid="modal-overlay">
        <div className={cls.content} onClick={contentClickHandler}>
          {children}
        </div>
      </div>
    </div>
  </Portal>;
};
