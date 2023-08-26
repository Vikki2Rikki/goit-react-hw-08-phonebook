// export const isAuthSelect = state => state.auth.token;
// export const profileSelect = state => state.auth.profile;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
