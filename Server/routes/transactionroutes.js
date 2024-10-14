const express = require('express');
const transactionController = require('../controller/transactioncontroller');
const authMiddleware = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/', authMiddleware, transactionController.create); // Create transaction
router.get('/', authMiddleware, transactionController.getByUserId); // Get transactions by user ID

module.exports = router;
