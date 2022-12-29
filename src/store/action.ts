import { createAction } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../const';
import { IUserData } from '../interfaces';
import { ICard } from '../interfaces/interfases';
import { PopupType } from '../components/popups/popup-type';

export const setAuthStatus = createAction<AuthorizationStatus>(
  'global/setAuthStatus'
);

export const setUserData = createAction<IUserData | null>('user/setUserData');

export const setCards = createAction<Array<ICard>>('cards/setCards');

export const redirectToRoute = createAction<AppRoute>('global/redirectToRoute');

export const openPopup = createAction<PopupType>('global/openPopup');

export const closePopup = createAction<void>('global/closePopup');

export const setSelectedCard = createAction<ICard>('global/selectedCard');

export const addCard = createAction<ICard>('/cards/addCard');

export const removeCardFromStore = createAction<string>(
  '/cards/removeCardFromStore'
);

export const onCardChange = createAction<ICard>('/cards/changeCard');
