import React, { useRef } from 'react';
import Debug from './Debug';
import useScroller from './hooks/useScroller';

export interface ScrollerProps {
  children(props: { scrollProgress?: number }): JSX.Element;
  scrollTriggerOffset?: {
    start: number | string;
    end: number | string;
  };
  debug?: boolean;
  autoAdjustScrollOffset?: boolean;
}

const Scroller = function ({
  children,
  scrollTriggerOffset = {
    start: 0,
    end: 0,
  },
  debug = false,
  autoAdjustScrollOffset = false,
}: ScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const {
    scrollTriggerOffsetPx,
    elementTriggerOffsetByDocument,
    scrollProgress,
  } = useScroller({
    ref,
    scrollTriggerOffset,
    autoAdjustScrollOffset,
  });

  return (
    <>
      {React.cloneElement(children({ scrollProgress }), { ref })}
      {debug && (
        <Debug
          triggerStartPosition={
            scrollTriggerOffsetPx.start + window.innerHeight
          }
          triggerEndPosition={scrollTriggerOffsetPx.end}
          elementTriggerStart={elementTriggerOffsetByDocument.top}
          elementTriggerEnd={elementTriggerOffsetByDocument.bottom}
          scrollProgress={scrollProgress}
        />
      )}
    </>
  );
};

export default Scroller;

export { useScroller };
