import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter } from '../../adapter';
import { AuthorizationStatus } from '../../const';
import { api, store } from '../store';
import { handleError } from '../../services/handle-error';
import { IActivatedUserServer, IAuthData } from '../../interfaces';
import { setAuthStatus, setUserData } from '../action';
import { saveToken } from '../../services/token';

export const signIn = createAsyncThunk(
  'signin',
  async (authData: IAuthData) => {
    try {
      const { data } = await api.post<IActivatedUserServer>(
        '/signin',
        authData
      );
      const activatedUser = Adapter.ActivatedUser(data);
      saveToken(activatedUser.accessToken);
      store.dispatch(setUserData(Adapter.UserData(activatedUser)));
      store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch (error) {
      handleError(error);
    }
  }
);
