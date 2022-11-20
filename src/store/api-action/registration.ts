import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from '../store';
import { AppRoute } from '../../const';
import { openPopup, redirectToRoute } from '../action';
import { PopupType } from '../../components/popups/popup-type';

export const singUp = createAsyncThunk(
  'signup',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      await api.post<string>('/signup', {
        email,
        password,
      });
      store.dispatch(redirectToRoute(AppRoute.Login));
      store.dispatch(openPopup(PopupType.RegistrationSuccess));
    } catch (error) {
      store.dispatch(openPopup(PopupType.SomethingWrong));
      console.log(error);
    }
  }
);
