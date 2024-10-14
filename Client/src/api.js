//importing axios 
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

//for registering the user
export const registerUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/register`, { email, password });
    return response.data;
};

//for login 
export const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
};

//for create transaction
export const createTransaction = async (amount, cashback_amount, token) => {
    const response = await axios.post(
        `${API_URL}/transaction`,
        { amount, cashback_amount },
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    );
    return response.data;
};

//to get transaction
export const getTransactions = async (token) => {
    const response = await axios.get(`${API_URL}/transaction`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
