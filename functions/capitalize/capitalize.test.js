const capitalize = require('./capitalize');

test('All lower case', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('All upper case', () => {
  expect(capitalize('HELLO')).toBe('Hello');
});

test('String with spaces', () => {
  expect(capitalize('Hello World')).toBe('Hello world');
});

test('Mixture of upper and lower case (ExAmPlE)', () => {
  expect(capitalize('hELLo WOrld')).toBe('Hello world');
});

test('Returns empty string for a number input', () => {
  expect(capitalize(2)).toBe('');
});