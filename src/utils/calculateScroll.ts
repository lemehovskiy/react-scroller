const calculateScroll = (
  scrollTop: number,
  windowSize: { height: number },
  scrollTriggerOffsetPxStart: number,
  elementOffsetTop: number,
  scrollLength: number
) => {
  const scrollTriggerStart =
    scrollTop + windowSize.height + scrollTriggerOffsetPxStart;

  let progress = (scrollTriggerStart - elementOffsetTop) / scrollLength;

  if (progress > 1) progress = 1;
  if (progress < 0) progress = 0;

  const roundedProgress = Math.round(progress * 10000) / 10000;

  return roundedProgress;
};

export default calculateScroll;
