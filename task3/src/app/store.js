import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "../Store/userSlice";

export default configureStore({
    reducer:{
        user:useReducer,
    },
});