// import {
//   handleFulfilld,
//   handlePending,
//   handleRejected,
//   handleSignUpFulfilld,
// } from './handlers';

import { createSlice } from '@reduxjs/toolkit';
const { register, logIn, logOut, refresh } = require('./operations');

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.pending, (state, action) => state)
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.rejected, (state, action) => state)
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      }),

  // [logOut.fulfilled](state) {
  //   state.user = { name: null, email: null };
  //   state.token = null;
  //   state.isLoggedIn = false;
  // },
  // [refreshUser.pending](state) {
  //   state.isRefreshing = true;
  // },
  // [refreshUser.fulfilled](state, action) {
  //   state.user = action.payload;
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // },
  // [refreshUser.rejected](state) {
  //   state.isRefreshing = false;
  // },
  // },

  // extraReducers: builder =>
  //   builder
  //     .addCase(singUpThunk.fulfilled, handleSignUpFulfilld)
  //     .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
  //     .addMatcher(({ type }) => type.endsWith('/fulfilld'), handleFulfilld)
  //     .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected),
});

export const authReducer = authSlice.reducer;
