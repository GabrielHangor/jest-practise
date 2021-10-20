const { expect } = require('@jest/globals');
const testFunctions = require('./script');

test('Should return capitalized string', () => {
  expect(testFunctions.capitalize('hello')).toBe('Hello');
});

test('Should return reversed string', () => {
  expect(testFunctions.reverseString('hello')).toBe('olleh');
});

test('Should perform basic computing operations properly', () => {
  expect(testFunctions.calculator.add(1, 2)).toBe(3);
  expect(testFunctions.calculator.subtract(5, 3)).toBe(2);
  expect(testFunctions.calculator.divide(10, 5)).toBe(2);
  expect(testFunctions.calculator.multiply(3, 2)).toBe(6);
});

test('Should encrypt string properly according to the Caesar Cyper', () => {
  expect(testFunctions.caesar('abcde', -1)).toBe('zabcd');
  expect(testFunctions.caesar('HellO WoRlD', 10)).toBe('RovvY GyBvN');
  expect(testFunctions.caesar('Hello, Gabriel!', 5)).toBe('Mjqqt, Lfgwnjq!');
});

test('Should return an object with the correct properties', () => {
  expect(testFunctions.analyze([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
