export const handleRegisterLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handlePending = state => {
  state.isRefreshing = true;
};

export const handleRejected = (state, { payload }) => {
  state.isRefreshing = false;
};
