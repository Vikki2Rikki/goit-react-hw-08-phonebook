import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNewContact, deleteContact, fetchContacts } from 'api/api';

export const fetchContactsTunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewContactThunk = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    //const { name, number } = body;
    try {
      return await createNewContact(body);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContact(id);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
