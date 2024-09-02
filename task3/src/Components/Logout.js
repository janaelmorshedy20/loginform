import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser as logout } from "../Store/userSlice";  
import { selectUser } from "../Store/userSlice";
import"./Login.css"

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout()); 
    };

    return (
        <div>
             <img src="\1a5d8c05200b6f1d9a56d8133b09923f.jpg" alt="Background" className="background-image" />
            <h2>
                 <span className="user_name"> welcome {user.email}</span>
            </h2>
            
            <button type="submitlogout" onClick={handleLogout}>Logout</button>
          
        </div>
    );
};

export default Logout;
