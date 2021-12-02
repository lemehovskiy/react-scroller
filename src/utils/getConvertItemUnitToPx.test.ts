import getConvertItemUnitToPx from './getConvertItemUnitToPx';

test('Simple px', () => {
  expect(getConvertItemUnitToPx('100px', 200, 100)).toEqual(100);
});

test('Simple px with extra spacings', () => {
  expect(getConvertItemUnitToPx('100 px ', 200, 100)).toEqual(100);
});

test('Simple percents with extra spacings', () => {
  expect(getConvertItemUnitToPx('100 % ', 200, 100)).toEqual(200);
});

test('Simple viewport width with extra spacings', () => {
  expect(getConvertItemUnitToPx('50 vw ', 200, 150)).toEqual(100);
});

test('Simple viewport height with extra spacings', () => {
  expect(getConvertItemUnitToPx('   5 0 vh ', 200, 400)).toEqual(200);
});

test('Unsupported units', () => {
  expect(getConvertItemUnitToPx('   5 0 v ', 200, 500)).toEqual(50);
});
