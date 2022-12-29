import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const';
import { ICard } from '../interfaces/interfases';
import { IUserData } from '../interfaces';
import {
  addCard,
  closePopup,
  onCardChange,
  openPopup,
  removeCardFromStore,
  setAuthStatus,
  setCards,
  setSelectedCard,
  setUserData,
} from './action';
import { PopupType } from '../components/popups/popup-type';

interface IInitialState {
  authorizationStatus: AuthorizationStatus;
  userData: IUserData | null;
  cards: Array<ICard>;
  popupOpened: boolean;
  popupType: PopupType;
  selectedCard: ICard | null;
}

const initialState: IInitialState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  userData: null,
  cards: [],
  popupOpened: false,
  popupType: PopupType.None,
  selectedCard: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setAuthStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
  builder.addCase(setCards, (state, action) => {
    state.cards = action.payload;
  });
  builder.addCase(openPopup, (state, action) => {
    state.popupOpened = true;
    state.popupType = action.payload;
  });
  builder.addCase(closePopup, (state, action) => {
    state.popupOpened = false;
  });
  builder.addCase(setSelectedCard, (state, action) => {
    state.selectedCard = action.payload;
  });
  builder.addCase(addCard, (state, action) => {
    state.cards.push(action.payload);
  });
  builder.addCase(removeCardFromStore, (state, action) => {
    const id = action.payload;
    const index = state.cards.findIndex((item) => item.id === id);

    if (index !== -1) {
      state.cards.splice(index, 1);
    }
  });
  builder.addCase(onCardChange, (state, action) => {
    const card = action.payload;
    const index = state.cards.findIndex((item) => item.id === card.id);

    if (index !== -1) {
      state.cards[index] = card;
    }
  });
});
