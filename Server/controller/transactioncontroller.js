const Transaction = require('../models/transaction');

const transactionController = {
    async create(req, res) {
        const { amount, cashback_amount } = req.body;
        const userId = req.user.id; // Get user ID from JWT
        const transactionId = await Transaction.create(userId, amount, cashback_amount);
        res.status(201).json({ message: 'Transaction created successfully', transactionId });
    },

    async getByUserId(req, res) {
        const userId = req.user.id; // Get user ID from JWT
        const transactions = await Transaction.findByUserId(userId);
        res.json(transactions);
    },
};

module.exports = transactionController;
