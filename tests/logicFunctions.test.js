const {
    sortDescendingManual,
    maxSubarraySumBruteForce,
    sumEvenNumbersIterative
  } = require('../src/utils/logicFunctions');
  
  describe('sortDescendingManual', () => {
    test('sorts array descending', () => {
      expect(sortDescendingManual([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
    });
  });
  
  describe('maxSubarraySumBruteForce', () => {
    test('returns correct max subarray sum', () => {
      expect(maxSubarraySumBruteForce([100, 200, 300, 400], 2)).toBe(700);
      expect(maxSubarraySumBruteForce([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
      expect(maxSubarraySumBruteForce([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    });
  });
  
  describe('sumEvenNumbersIterative', () => {
    test('returns correct sum of even numbers', () => {
      const obj1 = { outer: 2, obj: { inner: 2, otherObj: { superInner: 2 } } };
      const obj2 = { a: 2, b: { b: 2, bb: { b: 3, bb: { b: 2 } } }, c: { c: { c: 2 } }, e: { e: { e: 4 } } };
      expect(sumEvenNumbersIterative(obj1)).toBe(6);
      expect(sumEvenNumbersIterative(obj2)).toBe(12);
    });
  });
  