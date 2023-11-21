const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
  isEven,
} = require("./calculator");

describe('sum', () => {

  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => {
    expected = 460_240_866;
    actual = sum(3_453_212, 456_787_654);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -106;
    actual = sum(-17, -89);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 0;
    actual = sum(0, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test(
    'can subtract 2 small numbers', () => {
      expected = 9;
      actual = subtract(10, 1);
      expect(actual).toBe(expected);
    }
  )
});

describe('multiply', () => {
  test(
    'can multiply 2 small numbers', () => {
      expected = 35;
      actual = multiply(7, 5);
      expect(actual).toBe(expected);
    })
});

describe('divide', () => {
  test(
    'can divide 2 small numbers', () => {
      expected = 4;
      actual = divide(24, 6);
      expect(actual).toBe(expected);
    })
});

describe('modulus', () => {
  test(
    'can find the modulus of a number', () => {
      expected = 0;
      actual = modulus(12, 2);
      expect(actual).toBe(expected);
    })
});

describe('even', () => {
  test(
    'check if a number is even', () => {
      expected = false;
      actual = isEven(7);
      expect(actual).toBe(expected);
    })
});

describe('odd', () => {
  test(
    'check if a number is odd', () => {
      expected = true;
      actual = isEven(97);
      expect(actual).not.toBe(expected);
    })
});
