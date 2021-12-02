import calculateProgressLength from './calculateProgressLength';

test('Simple progress test', () => {
  expect(calculateProgressLength(275.09375, 917, 0, 0)).toEqual(1192.09375);
});
