import calculateResize from './calculateResize';

test('Calculate resize', () => {
  expect(
    calculateResize(
      { start: 0, end: 0 },
      1279,
      738.390625,
      275.09375,
      [880, 917],
      { height: 2292 },
      false
    )
  ).toEqual({
    elementTriggerOffsetTop: 2017.390625,
    elementTriggerOffsetBottom: 2292.484375,
    scrollTriggerStartOffsetPx: 0,
    scrollTriggerEndOffsetPx: 0,
  });
});

test('calculateResize', () => {
  expect(
    calculateResize(
      { start: 0, end: 0 },
      1144,
      873.390625,
      275.09375,
      [880, 917],
      { height: 2292 },
      false
    )
  ).toEqual({
    elementTriggerOffsetTop: 2017.390625,
    elementTriggerOffsetBottom: 2292.484375,
    scrollTriggerStartOffsetPx: 0,
    scrollTriggerEndOffsetPx: 0,
  });
});

test('calculateResize', () => {
  expect(
    calculateResize(
      { start: 0, end: 0 },
      0,
      2017.390625,
      275.09375,
      [880, 917],
      { height: 2292 },
      false
    )
  ).toEqual({
    elementTriggerOffsetTop: 2017.390625,
    elementTriggerOffsetBottom: 2292.484375,
    scrollTriggerStartOffsetPx: 0,
    scrollTriggerEndOffsetPx: 0,
  });
});
