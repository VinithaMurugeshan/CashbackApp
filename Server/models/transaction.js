const db = require('../db');

class Transaction {
    static async create(user_id, amount, cashback_amount) {
        const [result] = await db.execute('INSERT INTO transactions (user_id, amount, cashback_amount) VALUES (?, ?, ?)', 
                                            [user_id, amount, cashback_amount]);
        return result.insertId;
    }

    static async findByUserId(userId) {
        const [rows] = await db.execute('SELECT * FROM transactions WHERE user_id = ?', [userId]);
        return rows;
    }
}

module.exports = Transaction;
