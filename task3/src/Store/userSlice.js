// src/Store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    login(state, action) {  // Define the login action
      // Login logic here, for example:
      state.user = action.payload;
    },
  },
});

export const { setUser, clearUser, login } = userSlice.actions; // Export login
export const selectUser = (state) => state.user; // Define and export selectUser
export default userSlice.reducer;
