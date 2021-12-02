import getAdjustedTriggerOffset from './getAdjustedTriggerOffset';

test('Bottom offset', () => {
  expect(
    getAdjustedTriggerOffset({ top: 2200, bottom: 2400 }, 800, 2900)
  ).toEqual({ startOffset: 0, endOffset: 300 });
});

test('Bottom offset with small screen', () => {
  expect(
    getAdjustedTriggerOffset({ top: 2200, bottom: 2400 }, 450, 2900)
  ).toEqual({ startOffset: 0, endOffset: 0 });
});

test('Start offset', () => {
  expect(getAdjustedTriggerOffset({ top: 0, bottom: 200 }, 800, 2900)).toEqual({
    startOffset: -800,
    endOffset: 0,
  });
});

test('Start offset with small screen', () => {
  expect(getAdjustedTriggerOffset({ top: 0, bottom: 200 }, 450, 2900)).toEqual({
    startOffset: -450,
    endOffset: 0,
  });
});
