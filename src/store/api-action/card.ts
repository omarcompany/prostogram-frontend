import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptCardsToClient } from '../../adapter';
import { api, store } from '../store';
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
      console.log(error);
    }
  }
);

export const getCards = createAsyncThunk('cards/getCards', async () => {
  try {
    const result = await api.get('/cards');
    const userId = store.getState().userData?.id ?? '';
    store.dispatch(setCards(adaptCardsToClient(result.data, userId)));
  } catch (error) {
    console.log(error);
  }
});
