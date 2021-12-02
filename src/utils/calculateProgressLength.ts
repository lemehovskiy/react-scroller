const calculateProgressLength = (
  elementHeight: number,
  windowHeight: number,
  scrollTriggerStartOffset: number,
  scrollTriggerEndOffset: number
) =>
  elementHeight +
  windowHeight +
  scrollTriggerStartOffset -
  scrollTriggerEndOffset;

export default calculateProgressLength;
