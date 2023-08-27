import { createSlice } from '@reduxjs/toolkit';
import {
  handleLogOut,
  handlePending,
  handleRefresh,
  handleRegisterLogin,
  handleRejected,
} from './handlers';
const { register, logIn, logOut, refresh } = require('./operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterLogin)
      .addCase(logIn.fulfilled, handleRegisterLogin)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, handleRefresh)
      .addCase(refresh.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
