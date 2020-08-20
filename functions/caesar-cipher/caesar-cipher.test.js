import caesarCipher from './caesar-cipher';

test('Single word, all lower case, no wrap', () => {
  expect(caesarCipher('hello', 5)).toBe('mjqqt');
});

test('Single word, all lower case, wrap', () => {
  expect(caesarCipher('world', 5)).toBe('btwqi');
});

test('Multiple words, all lower case, no wrap', () => {
  expect(caesarCipher('hello friend', 5)).toBe('mjqqt kwnjsi');
});

test('Multiple words, all lower case, wrap', () => {
  expect(caesarCipher('hello friend', 5)).toBe('mjqqt kwnjsi');
});

test('Multiple words, lower and upper case, no wrap', () => {
  expect(caesarCipher('Hello My Friend', 5)).toBe('Mjqqt Rd Kwnjsi');
});

test('Multiple words, lower and upper case, wrap', () => {
  expect(caesarCipher('Hello World', 5)).toBe('Mjqqt Btwqi');
});

test('Pontuation', () => {
  expect(caesarCipher('Hello World!', 5)).toBe('Mjqqt Btwqi!');
});

test('Large key', () => {
  expect(caesarCipher('Hello World!', 53251)).toBe('Khoor Zruog!');
});