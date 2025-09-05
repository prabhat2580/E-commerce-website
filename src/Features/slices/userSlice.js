// src/Features/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUser: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        state.user = null;
        localStorage.removeItem("user");
      }
    },
  },
});

export const { login, logout, setUser } = userSlice.actions;
export const selectUser = (state) => state.user.user; // ✅ safe now
export default userSlice.reducer;
