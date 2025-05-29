import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: '',
  password: '',
  error: '',
  loggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    resetLogin: (state) => {
      state.username = '';
      state.password = '';
      state.error = '';
      state.loggedIn = false;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setError,
  setLoggedIn,
  resetLogin,
} = loginSlice.actions;

export default loginSlice.reducer;
