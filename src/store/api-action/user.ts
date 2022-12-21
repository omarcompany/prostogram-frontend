import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptUserDataToClient } from '../../adapter';
import { api, store } from '../store';
import { AuthorizationStatus } from '../../const';
import { handleError } from '../../services/handle-error';
import { setAuthStatus, setUserData } from '../action';

export const getUserData = createAsyncThunk('user/getUserData', async () => {
  try {
    const result = await api.get('/user/me');
    store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
    store.dispatch(setUserData(adaptUserDataToClient(result.data)));
  } catch (error) {
    console.log(error);
  }
});

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ name, about }: { name: string; about: string }) => {
    try {
      const result = await api.patch('/user/me', {
        name,
        about,
      });
      store.dispatch(setUserData(adaptUserDataToClient(result.data)));
    } catch (error) {
      handleError(error);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  '/user/updateAvatar',
  async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const result = await api.patch('/user/me/avatar', formData);
      store.dispatch(setUserData(adaptUserDataToClient(result.data)));
    } catch (error) {
      handleError(error);
    }
  }
);
