import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../store';
import { handleError } from '../../services/handle-error';

export const signOut = createAsyncThunk('signout', async () => {
  try {
    await api.post('/signout');
  } catch (error) {
    handleError(error);
  }
});
