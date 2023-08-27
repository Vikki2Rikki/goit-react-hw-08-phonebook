import { createSlice } from '@reduxjs/toolkit';
import {
  createNewContactThunk,
  deleteContactThunk,
  fetchContactsTunk,
} from './operations';
import {
  handleCreateNewContactsFulfilled,
  handleDeleteContactsFulfilled,
  handleFetchContactsFulfilled,
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContactsTunk.fulfilled, handleFetchContactsFulfilled)
      .addCase(
        createNewContactThunk.fulfilled,
        handleCreateNewContactsFulfilled
      )
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactsFulfilled)
      .addMatcher(action => action.type.endsWith('/pending', handlePending))
      .addMatcher(action => action.type.endsWith('/fulfilled', handleFulfilled))
      .addMatcher(action => action.type.endsWith('/rejected', handleRejected)),
});

export const contactsReducer = contactsSlice.reducer;
