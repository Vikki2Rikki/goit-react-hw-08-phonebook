export const handleSignUpFulfilld = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};
export const handleFulfilld = state => {
  state.isLoading = false;
};
export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};
