import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const throttleTimer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    return () => {
      clearTimeout(throttleTimer.current);
    };
  }, []);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      throttleTimer.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
