import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("login");
console.log(user);
const initialState = {
  isAuthenticated: user ? true : false,
  user: user ? user : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
