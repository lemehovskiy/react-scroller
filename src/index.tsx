import React, { useRef } from 'react';
import Debug from './Debug';
import useScroller from './hooks/useScroller';

interface SvgBorderProps {
  children: any;
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
}: SvgBorderProps) {
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
    <div ref={ref}>
      {children({ scrollProgress })}
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
    </div>
  );
};

export default Scroller;
