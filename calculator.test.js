const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => {

  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test.skip('can add two large positive numbers', () => {

  });

  test.skip('can add two negative numbers', () => {

  });

  test.skip('can add zero', () => {

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
      actual = even(7);
      expect(actual).toBe(expected);
    })
});

describe('odd', () => {
  test(
    'check if a number is odd', () => {
      expected = true;
      actual = odd(97);
      expect(actual).toBe(expected);
    })
});
