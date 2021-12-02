import getConvertedTriggersToPx from './getConvertedTriggersToPx';
import getAdjustedTriggerOffset from './getAdjustedTriggerOffset';

const calculateResize = (
  scrollTriggerOffsetRaw: {
    start: number | string;
    end: number | string;
  },
  scrollTop: number,
  elementViewportOffsetTop: number,
  elementHeight: number,
  windowSize: [number, number],
  bodySize: { height: number },
  autoAdjustScrollOffset: boolean
) => {
  const elementOffsetTop = elementViewportOffsetTop + scrollTop;

  const elementTriggerOffsetTop = elementOffsetTop;
  const elementTriggerOffsetBottom = elementOffsetTop + elementHeight;

  const [scrollTriggerStartOffsetPx, scrollTriggerEndOffsetPx] =
    getConvertedTriggersToPx(
      [scrollTriggerOffsetRaw.start, scrollTriggerOffsetRaw.end],
      windowSize[0],
      windowSize[1]
    );

  let autoAdjustOffsetStart = 0;
  let autoAdjustOffsetEnd = 0;

  if (autoAdjustScrollOffset) {
    const {
      startOffset: calculatedAutoAdjustOffsetStart,
      endOffset: calculatedAutoAdjustOffsetEnd,
    } = getAdjustedTriggerOffset(
      {
        top: elementTriggerOffsetTop,
        bottom: elementTriggerOffsetBottom,
      },
      windowSize[1],
      bodySize.height
    );
    autoAdjustOffsetStart = calculatedAutoAdjustOffsetStart;
    autoAdjustOffsetEnd = calculatedAutoAdjustOffsetEnd;
  }

  return {
    elementTriggerOffsetTop,
    elementTriggerOffsetBottom,
    scrollTriggerStartOffsetPx:
      scrollTriggerStartOffsetPx + autoAdjustOffsetStart,
    scrollTriggerEndOffsetPx: scrollTriggerEndOffsetPx + autoAdjustOffsetEnd,
  };
};

export default calculateResize;
