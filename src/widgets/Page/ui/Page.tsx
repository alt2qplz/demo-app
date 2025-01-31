import { classNames } from 'shared/lib/classNames/classNames';
import {
  memo, MutableRefObject, ReactNode, useRef, UIEvent
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import cls from './Page.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUIScrollByPath } from '../model/selectors/getPageScroll';
import { pageActions } from '../model/slices/pageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector(
    (state: StateSchema) => getUIScrollByPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(pageActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 300);

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.Page, { [cls.clearBottomPadding]: !!onScrollEnd }, [className])}
      onScroll={onScroll}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
    </main>
  );
});

Page.displayName = 'Page';