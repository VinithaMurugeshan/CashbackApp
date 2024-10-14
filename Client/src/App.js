import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import './App.css';

const App = () => {
    const [token, setToken] = useState('');

    const handleLogin = (token) => {
        setToken(token);
    };

    const handleLogout = () => {
        setToken('');
    };

    return (
        <Router>
            <div className="app-container">
                <Navbar onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={token ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/login" element={<Auth onLogin={handleLogin} />} />
                    <Route path="/transactions" element={token ? <Transaction token={token} /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
