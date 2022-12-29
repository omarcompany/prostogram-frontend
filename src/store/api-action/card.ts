import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter } from '../../adapter';
import { api, store } from '../store';
import { handleError } from '../../services/handle-error';
import {
  addCard,
  onCardChange,
  removeCardFromStore,
  setCards,
} from '../action';
import { ICardServer } from '../../interfaces/interfases';

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
      const { data } = await api.post<ICardServer>('/cards', formData);
      store.dispatch(addCard(Adapter.Card(data)));
    } catch (error) {
      handleError(error);
    }
  }
);

export const getCards = createAsyncThunk('cards/getCards', async () => {
  try {
    const { data } = await api.get<Array<ICardServer>>('/cards');
    store.dispatch(setCards(Adapter.Cards(data)));
  } catch (error) {
    handleError(error);
  }
});

export const deleteCard = createAsyncThunk(
  '/cards/deleteCard',
  async (id: string) => {
    try {
      const { data } = await api.delete<ICardServer>(`/cards/${id}`);
      const removedCard = Adapter.Card(data);
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
      const { data } = await api.put<ICardServer>(`/cards/${id}/likes`);
      store.dispatch(onCardChange(Adapter.Card(data)));
    } catch (error) {
      handleError(error);
    }
  }
);

export const dislikeCard = createAsyncThunk(
  '/cards/dislikeCard',
  async (id: string) => {
    try {
      const { data } = await api.delete<ICardServer>(`/cards/${id}/likes`);
      store.dispatch(onCardChange(Adapter.Card(data)));
    } catch (error) {
      handleError(error);
    }
  }
);
