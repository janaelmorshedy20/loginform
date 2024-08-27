import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser as logout } from "../Store/userSlice";  // Renaming the import to avoid conflict
import { selectUser } from "../Store/userSlice";
import"./Login.css"

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout()); // Now using the renamed 'logout'
    };

    return (
        <div>
            <h1>
                Welcome <span className="user_name"> {user.email}</span>
            </h1>
            <button type="submit" onClick={handleLogout}>Logout</button>
          
        </div>
    );
};

export default Logout;
