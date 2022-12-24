import { Cards, CardsServer } from './types';
import { IUserData, IUserDataServer } from './interfaces';
import { ICard, ICardServer } from './interfaces/interfases';
import { store } from './store/store';

export const adaptUserDataToClient = (
  userData: IUserDataServer
): IUserData => ({
  name: userData.name,
  avatar: userData.avatar,
  about: userData.about,
  password: userData.password,
  email: userData.email,
  id: userData._id,
});

export const adaptCardToClient = (card: ICardServer): ICard => {
  const userId = store.getState().userData?.id ?? '';
  const counter = card.likes.length;
  const liked = userId ? !card.likes.every((item) => item !== userId) : false;
  return {
    id: card._id,
    name: card.name,
    urn: card.urn,
    counter,
    liked,
  };
};

export const adaptCardsToClient = (cards: CardsServer): Cards => {
  return cards.map((card) => adaptCardToClient(card));
};
