import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';


//navigation bar handling
const Navbar = ({ onLogout }) => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Cashback App</h1>
            <div className="navbar-links">
                <Link to="/">Dashboard</Link>
                <Link to="/transactions">Transactions</Link>
                <button className="logout-button" onClick={onLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
