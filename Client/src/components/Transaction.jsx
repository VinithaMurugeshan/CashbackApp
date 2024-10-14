import React, { useEffect, useState } from 'react';
import { createTransaction, getTransactions } from '../api';
import './styles/Transaction.css';

const Transaction = ({ token }) => {
    const [amount, setAmount] = useState('');
    const [cashbackAmount, setCashbackAmount] = useState('');
    const [transactions, setTransactions] = useState([]);

    //fetch the transactions 
    const fetchTransactions = async () => {
        const data = await getTransactions(token);
        setTransactions(data);
    };

    //handle the transactions
    const handleTransaction = async (e) => {
        e.preventDefault();
        await createTransaction(amount, cashbackAmount, token);
        setAmount('');
        setCashbackAmount('');
        fetchTransactions(); // Refresh the transaction list
    };

    useEffect(() => {
        fetchTransactions();
    }, [token]);

    return (
        <div className="transaction-container">
            <h2>Create Transaction</h2>
            <form onSubmit={handleTransaction}>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Cashback Amount"
                    value={cashbackAmount}
                    onChange={(e) => setCashbackAmount(e.target.value)}
                    required
                />
                <button type="submit">Add Transaction</button>
            </form>

            <h2>Your Transactions</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        Amount: ${transaction.amount}, Cashback: ${transaction.cashback_amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transaction;
