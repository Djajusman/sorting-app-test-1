const {
    sortDescendingManual,
    maxSubarraySumBruteForce,
    sumEvenNumbersIterative
  } = require('../utils/logicFunctions');
  
  exports.sortDescending = (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers)) return res.status(400).json({ error: "Invalid input" });
  
    const sorted = sortDescendingManual(numbers);
    res.json({ result: sorted });
  };
  
  exports.maxSubarraySum = (req, res) => {
    const { array, length } = req.body;
    if (!Array.isArray(array) || typeof length !== 'number') {
      return res.status(400).json({ error: "Invalid input" });
    }
  
    const result = maxSubarraySumBruteForce(array, length);
    res.json({ result });
  };
  
  exports.sumEvenNumbers = (req, res) => {
    const { object } = req.body;
    if (typeof object !== 'object' || object === null) {
      return res.status(400).json({ error: "Invalid input" });
    }
  
    const result = sumEvenNumbersIterative(object);
    res.json({ result });
  };
  