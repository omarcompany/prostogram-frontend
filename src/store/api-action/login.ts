import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../../const';
import { api, store } from '../store';
import { getUserData } from './user';
import { handleError } from '../../services/handle-error';
import { redirectToRoute, setAuthStatus } from '../action';
import { saveToken } from '../../services/token';

export const singIn = createAsyncThunk(
  'signin',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const result = await api.post('/signin', {
        password,
        email,
      });
      saveToken(result.data.token);
      store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
      store.dispatch(getUserData());
    } catch (error) {
      handleError(error);
    }
  }
);
