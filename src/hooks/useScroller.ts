import { useEffect, useState } from 'react';
import useEventListener from './useEventListener';
import calculateResize from '../utils/calculateResize';
import calculateScroll from '../utils/calculateScroll';
import calculateProgressLength from '../utils/calculateProgressLength';
import generateTestCase from '../utils/generateTestCase';

interface Props {
  scrollTriggerOffset?: {
    start: number | string;
    end: number | string;
  };
  ref: any;
  autoAdjustScrollOffset?: boolean;
}

type WindowSize = [windowWidth: number, windowHeight: number];

const getScrollTop = (): number =>
  document.body.scrollTop || document.documentElement.scrollTop;

const getWindowSize = (): WindowSize => [window.innerWidth, window.innerHeight];

const getBodySize = () => [
  document.body.clientWidth,
  document.body.clientHeight,
];

interface Props {
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
}: Props) => {
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
    const windowSize = getWindowSize();
    const [, bodyHeight] = getBodySize();

    const {
      elementTriggerOffsetTop: newElementTriggerOffsetTop,
      elementTriggerOffsetBottom: newElementTriggerOffsetBottom,
      scrollTriggerStartOffsetPx: newScrollTriggerOffsetPxStart,
      scrollTriggerEndOffsetPx: newScrollTriggerOffsetPxEnd,
    } = calculateResize(
      scrollTriggerOffset,
      scrollTop,
      elementViewportOffsetTop,
      elementHeight,
      windowSize,
      { height: bodyHeight },
      autoAdjustScrollOffset
    );

    const progressLenght = calculateProgressLength(
      elementHeight,
      windowSize[1],
      newScrollTriggerOffsetPxStart,
      newScrollTriggerOffsetPxEnd
    );

    setElementTriggerOffsetTop(newElementTriggerOffsetTop);
    setElementTriggerOffsetBottom(newElementTriggerOffsetBottom);
    setScrollTriggerOffsetPxStart(newScrollTriggerOffsetPxStart);
    setScrollTriggerOffsetPxEnd(newScrollTriggerOffsetPxEnd);
    setScrollLength(progressLenght);
  };

  const handleScroll = () => {
    const scrollTop = getScrollTop();
    const [, windowHeight] = getWindowSize();
    const progress = calculateScroll(
      scrollTop,
      { height: windowHeight },
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
