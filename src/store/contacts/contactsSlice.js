import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: null,
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export const contactsReducer = contactsSlice.reducer;
