import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptCardsToClient } from '../../adapter';
import { api, store } from '../store';
import { handleError } from '../../services/handle-error';
import { setCards } from '../action';

export const createCard = createAsyncThunk(
  '/cards/createCard',
  async ({ name, link }: { name: string; link: string }) => {
    try {
      await api.post('/cards', {
        name,
        link,
      });
      store.dispatch(getCards());
    } catch (error) {
      handleError(error);
    }
  }
);

export const getCards = createAsyncThunk('cards/getCards', async () => {
  try {
    const result = await api.get('/cards');
    const userId = store.getState().userData?.id ?? '';
    store.dispatch(setCards(adaptCardsToClient(result.data, userId)));
  } catch (error) {
    handleError(error);
  }
});

export const deleteCard = createAsyncThunk(
  '/cards/deleteCard',
  async (id: string) => {
    try {
      await api.delete(`/cards/${id}`);
      store.dispatch(getCards());
    } catch (error) {
      handleError(error);
    }
  }
);

export const likeCard = createAsyncThunk(
  '/cards/likeCard',
  async (id: string) => {
    try {
      await api.put(`/cards/${id}/likes`);
      store.dispatch(getCards());
    } catch (error) {
      handleError(error);
    }
  }
);

export const dislikeCard = createAsyncThunk(
  '/cards/dislikeCard',
  async (id: string) => {
    try {
      await api.delete(`/cards/${id}/likes`);
      store.dispatch(getCards());
    } catch (error) {
      handleError(error);
    }
  }
);
