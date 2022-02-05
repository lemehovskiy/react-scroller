import { useEffect, useState } from 'react';
import {
  getProgress,
  getScrollTop,
  getWindowHeight,
  getResizeValues,
  getBodyHeight,
} from '@lemehovskiy/scroller-utils/dist';
import useEventListener from './useEventListener';

export interface UseScrollerProps {
  scrollTriggerOffset?: {
    start: number | string;
    end: number | string;
  };
  ref: any;
  autoAdjustScrollOffset?: boolean;
}

const useScroller = ({
  scrollTriggerOffset = {
    start: 0,
    end: 0,
  },
  autoAdjustScrollOffset = false,

  ref,
}: UseScrollerProps) => {
  const [elementTriggerOffsetTop, setElementTriggerOffsetTop] = useState(0);

  const [elementTriggerOffsetBottom, setElementTriggerOffsetBottom] =
    useState(0);

  const [scrollLength, setScrollLength] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [scrollTriggerOffsetPxStart, setScrollTriggerOffsetPxStart] =
    useState(0);

  const [scrollTriggerOffsetPxEnd, setScrollTriggerOffsetPxEnd] = useState(0);

  const handleResizeNew = () => {
    const scrollTop = getScrollTop();
    const { y: elementViewportOffsetTop, height: elementHeight } =
      ref.current.getBoundingClientRect();
    const windowHeight = getWindowHeight();
    const bodyHeight = getBodyHeight();

    const {
      elementTriggerOffsetTop: newElementTriggerOffsetTop,
      elementTriggerOffsetBottom: newElementTriggerOffsetBottom,
      progressLength,
      scrollTriggerOffsetStart: newScrollTriggerOffsetPxStart,
      scrollTriggerOffsetEnd: newScrollTriggerOffsetPxEnd,
    } = getResizeValues(
      scrollTop,
      windowHeight,
      bodyHeight,
      elementViewportOffsetTop,
      elementHeight,
      scrollTriggerOffset,
      autoAdjustScrollOffset
    );

    setElementTriggerOffsetTop(newElementTriggerOffsetTop);
    setElementTriggerOffsetBottom(newElementTriggerOffsetBottom);
    setScrollTriggerOffsetPxStart(newScrollTriggerOffsetPxStart);
    setScrollTriggerOffsetPxEnd(newScrollTriggerOffsetPxEnd);
    setScrollLength(progressLength);
  };

  const handleScroll = () => {
    const scrollTop = getScrollTop();
    const windowHeight = getWindowHeight();
    const progress = getProgress(
      scrollTop,
      windowHeight,
      scrollTriggerOffsetPxStart,
      elementTriggerOffsetTop,
      scrollLength
    );

    setScrollProgress(progress);
  };

  useEventListener(window, 'resize', handleResizeNew);
  useEventListener(window, 'scroll', handleScroll);

  useEffect(() => {
    handleResizeNew();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementTriggerOffsetTop, elementTriggerOffsetBottom]);

  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementTriggerOffsetTop, scrollTriggerOffsetPxStart]);

  return {
    scrollTriggerOffsetPx: {
      start: scrollTriggerOffsetPxStart,
      end: scrollTriggerOffsetPxEnd,
    },
    elementTriggerOffsetByDocument: {
      top: elementTriggerOffsetTop,
      bottom: elementTriggerOffsetBottom,
    },
    scrollProgress,
  };
};

export default useScroller;
