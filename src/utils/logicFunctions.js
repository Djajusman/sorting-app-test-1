function sortDescendingManual(arr) {
    const result = [...arr];
    for (let i = 0; i < result.length; i++) {
      let maxIdx = i;
      for (let j = i + 1; j < result.length; j++) {
        if (result[j] > result[maxIdx]) {
          maxIdx = j;
        }
      }
      [result[i], result[maxIdx]] = [result[maxIdx], result[i]];
    }
    return result;
  }
  
  function maxSubarraySumBruteForce(arr, windowSize) {
    if (!Array.isArray(arr) || windowSize <= 0 || windowSize > arr.length) return null;
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length - windowSize; i++) {
      let currentSum = 0;
      for (let j = 0; j < windowSize; j++) {
        currentSum += arr[i + j];
      }
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
  
  function sumEvenNumbersIterative(obj) {
    let sum = 0;
    const stack = [obj];
    while (stack.length > 0) {
      const current = stack.pop();
      for (const key in current) {
        const value = current[key];
        if (typeof value === 'number' && value % 2 === 0) {
          sum += value;
        } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          stack.push(value);
        }
      }
    }
    return sum;
  }
  
  module.exports = {
    sortDescendingManual,
    maxSubarraySumBruteForce,
    sumEvenNumbersIterative
  };
  