import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser as logout } from '../Store/userSlice';
import { selectUser } from '../Store/userSlice';
import { useNavigate } from 'react-router-dom';
import './Login'; // Import the CSS file

export const Dashboard = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("authToken");
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="dashboard-container">
            <img src="\1a5d8c05200b6f1d9a56d8133b09923f.jpg" alt="Background" className="background-image" />
            <h1 className="welcome-message">Welcome to the Dashboard</h1>
            <p className="user_name">Welcome {user.email}</p>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
