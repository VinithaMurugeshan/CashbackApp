//importing react hooks
import React, { useState } from 'react';

//importing api functions
import { registerUser, loginUser } from '../api';

//importing css
import './styles/Auth.css';

//Authentication component
const Auth = ({ onLogin }) => {

    //statevariables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(true);
    const [message, setMessage] = useState('');

    //submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (isRegistering) {
                await registerUser(email, password);
                setMessage('Registration successful! Please log in.');
                setIsRegistering(false);
            } else {
                const data = await loginUser(email, password);
                onLogin(data.token);
                setMessage('Login successful!');
            }
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            <p>{message}</p>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default Auth;
