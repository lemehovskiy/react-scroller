export default function getAdjustedTriggerOffset(
  elementOffset: {
    top: number;
    bottom: number;
  },
  windowSize: number,
  documentHeight: number
) {

  let startOffset = 0;
  const startOffsetSpace = elementOffset.top;
  if (windowSize > startOffsetSpace) {
    startOffset = startOffsetSpace - windowSize;
  }

  let endOffset = 0;
  const endOffsetSpace = documentHeight - elementOffset.bottom;
  if (windowSize > endOffsetSpace) {
    endOffset = windowSize - endOffsetSpace;
  }

  return {
    startOffset,
    endOffset,
  };
}
