import { useEffect, useRef } from 'react';

const useEventListener = (
  target: any,
  type: string,
  listener: (e: any) => any
) => {
  const listenerRef = useRef(listener);
  listenerRef.current = listener;

  const wrappedListener: typeof listenerRef.current = (evt) =>
    listenerRef.current.call(target, evt);

  useEffect(() => {
    const targetIsRef = Object.prototype.hasOwnProperty.call(target, 'current');
    const currentTarget = targetIsRef ? target.current : target;
    currentTarget.addEventListener(type, wrappedListener);
    return () => {
      currentTarget.removeEventListener(type, wrappedListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, type]);
};

export default useEventListener;
