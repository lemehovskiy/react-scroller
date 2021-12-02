import calculateScroll from './calculateScroll';

test('Invisible element', () => {
  expect(calculateScroll(0, { height: 917 }, 0, 2017.390625, 1192.09375)).toEqual(0);
});

test('Visible element', () => {
  expect(
    calculateScroll(1375, { height: 917 }, 0, 2017.390625, 1192.09375)
  ).toEqual(0.2304);
});
