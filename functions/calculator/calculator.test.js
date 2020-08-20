import calculator from './calculator';


test('Addition: integers', () => {
  expect(calculator.add(10, 20)).toBe(30);
});

test('Addition: float', () => {
  expect(calculator.add(0.5, 0.2)).toBeCloseTo(0.7);
});

test('Subtraction: integer', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test('Subtraction: float', () => {
  expect(calculator.subtract(0.5, 0.2)).toBeCloseTo(0.3);
});

test('Subtraction: negative numbers', () => {
  expect(calculator.subtract(-10, 5)).toBe(-15);
});

test('Division: integers', () => {
  expect(calculator.divide(20, 2)).toBe(10);
});

test('Division: float', () => {
  expect(calculator.divide(20.4, 0.4)).toBeCloseTo(51);
});

test('Multiplication: integers', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

test('Multiplication: floats', () => {
  expect(calculator.multiply(4.4, 0.5)).toBeCloseTo(2.2);
});