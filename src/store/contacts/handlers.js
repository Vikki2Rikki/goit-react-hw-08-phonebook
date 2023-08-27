export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};
export const handleCreateNewContactsFulfilled = (state, { payload }) => {
  state.items.unshift(payload);
};
export const handleDeleteContactsFulfilled = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload.id);
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleFulfilled = state => {
  state.isLoading = false;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

//  export const handleAddContact = (state, { payload }) => {
//    state.items.unshift(payload);
//  };

//  export const handleDeleteContact = (state, { payload }) => {
//    const index = state.items.findIndex(contact => contact.id === payload.id);
//    state.items.splice(index, 1);
//  };
