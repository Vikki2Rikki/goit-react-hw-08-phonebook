import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNewContact, deletedContact, getAllContacts } from 'api/api';

export const getAllContactsTunk = createAsyncThunk(
  'contacts/getAll',
  async () => {
    return await getAllContacts();
  }
);

export const createNewContactThunk = createAsyncThunk(
  'contacts/add',
  async body => {
    return await createNewContact(body);
  }
);

export const deletedContactThunk = createAsyncThunk(
  'contacts/deleted',
  async id => {
    return await deletedContact(id);
  }
);
