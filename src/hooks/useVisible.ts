import { RefObject, useEffect, useMemo, useState } from "react";

export const useVisible = (ref: RefObject<HTMLElement>, cb?: (arg?: any) => any) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [position, setPosition] = useState<DOMRectReadOnly | null>(null);

  const visibilityObserver = useMemo(() => {
    return new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
  }, [isIntersecting]);

  const debounce = (fn: (...args: any) => any, ms = 50) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        fn.apply(null, args);
      }, ms);
    };
  };
  const activeObserver = useMemo(() => {
    return new IntersectionObserver(([entry]) =>
      debounce(() => {
        if (!entry.isIntersecting) return setPosition(null);
        setPosition(entry.intersectionRect);
      }, 100)()
    );
  }, [position]);

  useEffect(() => {
    if (!ref.current) return;
    visibilityObserver.observe(ref.current);

    return () => visibilityObserver.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (!ref.current) return;
    activeObserver.observe(ref.current);
    return () => activeObserver?.disconnect();
  }, [position]);

  return isIntersecting;
};
