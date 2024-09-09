import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Store/userSlice';
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState(""); 
    const [alert, setAlert] = useState("none");
    const navigate = useNavigate();
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setServerError(""); // Clear any previous server errors

            // Hardcoded credentials for demo purposes
            const validEmail = "admin@proffer.com";
            const validPassword = "123456";

            if (email === validEmail && password === validPassword) {
                // Store the token in localStorage (simulated)
                localStorage.setItem("authToken", "your-token");
                navigate("/dashboard");

                // Dispatch the login action with a token
                dispatch(login({
                    email: email,
                    token: "your-token",
                    loggedIn: true,
                }));
            } else {
                setServerError("Invalid email or password. Please try again.");
            }
        }
    };

    return (
        <div className='login'>
            <img src="\1a5d8c05200b6f1d9a56d8133b09923f.jpg" alt="Background" className="background-image" />
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
