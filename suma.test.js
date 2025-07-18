const suma = require('./suma');

test('adds 1 + 2 to equal 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('adds 1 + 9 to equal 10', () => {
  expect(suma(1, 9)).toBe(10);
});