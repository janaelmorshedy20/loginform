
import React from 'react';
import { useNavigate } from "react-router-dom";
import"./Login.css"

export const Home = () => {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate("/login");
    };

    const handleGetStarted = () => {
        navigate("/dashboard"); 
    };

    return (
        <div className='home'>
            <h1>Welcome to the Home Page</h1>
            <button type="button" onClick={handleLogin}>Login</button>
            <button type="button" onClick={handleGetStarted}>Dashboard</button>
        </div>
    );
};

export default Home;

