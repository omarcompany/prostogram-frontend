import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter } from '../../adapter';
import { api, store } from '../store';
import { AuthorizationStatus } from '../../const';
import { handleError } from '../../services/handle-error';
import { IActivatedUserServer } from '../../interfaces';
import { setAuthStatus, setUserData } from '../action';

export const getUserData = createAsyncThunk('user/getUserData', async () => {
  try {
    const { data } = await api.get<IActivatedUserServer>('/user/me');
    store.dispatch(setUserData(Adapter.UserData(Adapter.ActivatedUser(data))));
    store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  } catch (error) {
    handleError(error, false);
  }
});

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ name, about }: { name: string; about: string }) => {
    try {
      const { data } = await api.patch<IActivatedUserServer>('/user/me', {
        name,
        about,
      });
      store.dispatch(
        setUserData(Adapter.UserData(Adapter.ActivatedUser(data)))
      );
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
      const { data } = await api.patch<IActivatedUserServer>(
        '/user/me/avatar',
        formData
      );
      store.dispatch(
        setUserData(Adapter.UserData(Adapter.ActivatedUser(data)))
      );
    } catch (error) {
      handleError(error);
    }
  }
);
