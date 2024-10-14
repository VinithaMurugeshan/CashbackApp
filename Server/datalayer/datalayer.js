const mysql = require('mysql2/promise');
require('dotenv').config();

// MySQL Connection Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Register User
async function registerUser(email, password) {
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    await pool.execute(query, [email, password]);
}

// Get User by Email
async function getUserByEmail(email) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
}

// Create a Transaction
async function createTransaction(userId, amount, cashbackAmount) {
    const query = 'INSERT INTO transactions (user_id, amount, cashback_amount) VALUES (?, ?, ?)';
    await pool.execute(query, [userId, amount, cashbackAmount]);
}

// Get Transactions by User ID
async function getTransactionsByUserId(userId) {
    const [rows] = await pool.execute('SELECT * FROM transactions WHERE user_id = ?', [userId]);
    return rows;
}

module.exports = { registerUser, getUserByEmail, createTransaction, getTransactionsByUserId };
