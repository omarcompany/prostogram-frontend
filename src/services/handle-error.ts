import request from 'axios';

import { HttpCode } from '../const';
import { openPopup } from '../store/action';
import { PopupType } from '../components/popups/popup-type';
import { store } from '../store/store';

export const handleError = (error: unknown): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        console.log(response.data.error);
        break;
      case HttpCode.Unauthorized:
        store.dispatch(openPopup(PopupType.SomethingWrong));
        break;
      case HttpCode.NotFound:
        console.log(response.data.error);
        break;
      case HttpCode.Forbidden:
        store.dispatch(openPopup(PopupType.Prohibited));
        break;
    }
  }
};
