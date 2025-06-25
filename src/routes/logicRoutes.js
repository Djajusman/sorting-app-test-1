const express = require('express');
const router = express.Router();
const logicController = require('../controllers/logicController');

router.post('/sort-desc', logicController.sortDescending);
router.post('/max-subarray', logicController.maxSubarraySum);
router.post('/sum-even', logicController.sumEvenNumbers);

module.exports = router;
