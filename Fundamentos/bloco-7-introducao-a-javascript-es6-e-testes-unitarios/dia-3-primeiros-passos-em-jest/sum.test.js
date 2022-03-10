const sum = require('./sum')

test('verifica a function sum', () => {
  expect(sum(2, 3)).toEqual(5);
  expect(sum(0, 0)).toEqual(0);
  expect(sum(4, '5')).toThrow();

});