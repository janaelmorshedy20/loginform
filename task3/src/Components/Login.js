import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../Store/userSlice';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState(""); // To capture server errors

    const dispatch = useDispatch();

    const validateForm = () => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setServerError(""); // Clear any previous server errors

            try {
                const response = await axios.post('https://backend.profferdeals.com/api/admin/login', {
                    email: email,
                    password: password,
                }, {
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                const { token } = response.data;

                // Store the token in localStorage or cookies
                localStorage.setItem('authToken', token);

                // Dispatch the login action with the token
                dispatch(login({
                    email: email,
                    token: token,
                    loggedIn: true,
                }));

                // Correct the URL to the actual protected route
                const authToken = localStorage.getItem('authToken');

                axios.get('https://backend.profferdeals.com/api/admin/login' , {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                    },
                })
                .then(response => {
                    // Handle successful response
                    console.log('Protected data:', response.data);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error fetching protected data:', error);
                    setServerError("Error fetching protected data.");
                });

            } catch (error) {
                setServerError("Login failed. Please check your credentials and try again.");
            }
        }
    };

    return (
        <div className='login'>
            <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>

                <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}

                {serverError && <p className="error">{serverError}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
