import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptCardsToClient, adaptCardToClient } from '../../adapter';
import { api, store } from '../store';
import { handleError } from '../../services/handle-error';
import {
  addCard,
  onCardChange,
  removeCardFromStore,
  setCards,
} from '../action';

interface INewCard {
  name: string;
  file: File;
}

export const createCard = createAsyncThunk(
  '/cards/createCard',
  async ({ name, file }: INewCard) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      const result = await api.post('/cards', formData);
      store.dispatch(addCard(adaptCardToClient(result.data)));
    } catch (error) {
      handleError(error);
    }
  }
);

export const getCards = createAsyncThunk('cards/getCards', async () => {
  try {
    const result = await api.get('/cards');
    store.dispatch(setCards(adaptCardsToClient(result.data)));
  } catch (error) {
    handleError(error);
  }
});

export const deleteCard = createAsyncThunk(
  '/cards/deleteCard',
  async (id: string) => {
    try {
      const result = await api.delete(`/cards/${id}`);
      const removedCard = adaptCardToClient(result.data);
      store.dispatch(removeCardFromStore(removedCard.id));
    } catch (error) {
      handleError(error);
    }
  }
);

export const likeCard = createAsyncThunk(
  '/cards/likeCard',
  async (id: string) => {
    try {
      const result = await api.put(`/cards/${id}/likes`);
      store.dispatch(onCardChange(adaptCardToClient(result.data)));
    } catch (error) {
      handleError(error);
    }
  }
);

export const dislikeCard = createAsyncThunk(
  '/cards/dislikeCard',
  async (id: string) => {
    try {
      const result = await api.delete(`/cards/${id}/likes`);
      store.dispatch(onCardChange(adaptCardToClient(result.data)));
    } catch (error) {
      handleError(error);
    }
  }
);
