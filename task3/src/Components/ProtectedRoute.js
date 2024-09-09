
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Store/userSlice';

const ProtectedRoute = ({ element }) => {
    const user = useSelector(selectUser);

    // If the user is not authenticated, redirect to the login page
    if (!user) {
        return <Navigate to="/login" />;
    }

    // If authenticated, render the given component
    return element;
};

export default ProtectedRoute;

