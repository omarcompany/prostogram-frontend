import { createAction } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../const';
import { Cards } from '../types';
import { ICard } from '../interfaces/interfases';
import { IUserData } from '../interfaces';
import { PopupType } from '../components/popups/popup-type';

export const setAuthStatus = createAction<AuthorizationStatus>(
  'global/setAuthStatus'
);

export const setUserData = createAction<IUserData>('user/setUserData');

export const setCards = createAction<Cards>('cards/setCards');

export const redirectToRoute = createAction<AppRoute>('global/redirectToRoute');

export const openPopup = createAction<PopupType>('global/openPopup');

export const closePopup = createAction<void>('global/closePopup');

export const setSelectedCard = createAction<ICard>('global/selectedCard');

export const addCard = createAction<ICard>('/cards/addCard');

export const removeCardFromStore = createAction<string>(
  '/cards/removeCardFromStore'
);

export const onCardChange = createAction<ICard>('/cards/changeCard');
