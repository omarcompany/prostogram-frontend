import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../../const';
import { api, store } from '../store';
import { openPopup, redirectToRoute, setAuthStatus } from '../action';
import { PopupType } from '../../components/popups/popup-type';
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
    } catch (error) {
      store.dispatch(openPopup(PopupType.SomethingWrong));
    }
  }
);
