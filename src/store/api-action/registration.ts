import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from '../store';
import { AppRoute } from '../../const';
import { handleError } from '../../services/handle-error';
import { openPopup, redirectToRoute } from '../action';
import { PopupType } from '../../components/popups/popup-type';
import { IAuthData, IDefaultUserServer } from '../../interfaces';

export const singUp = createAsyncThunk(
  'signup',
  async (authData: IAuthData) => {
    try {
      await api.post<IDefaultUserServer>('/signup', authData);
      store.dispatch(redirectToRoute(AppRoute.Login));
      store.dispatch(openPopup(PopupType.RegistrationSuccess));
    } catch (error) {
      handleError(error);
    }
  }
);
