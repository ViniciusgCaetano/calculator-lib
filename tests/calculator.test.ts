import { add, subtract, multiply, divide } from '../src/index';

describe('Calculator Library', () => {
  test('Addition of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('Subtraction of two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 5)).toBe(-5);
  });

  test('Multiplication of two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('Division of two numbers', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(10, 2)).toBe(5);
  });

  test('Division by zero should throw an error', () => {
    expect(() => divide(6, 0)).toThrow('Division by zero is not allowed');
  });
});
