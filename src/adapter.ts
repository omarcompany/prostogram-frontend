import { Cards, CardsServer } from './types';
import { IUserData, IUserDataServer } from './interfaces';
import { ICard, ICardServer } from './interfaces/interfases';

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

export const adaptCardToClient = (card: ICardServer, userId: string): ICard => {
  const counter = card.likes.length;
  const liked = !card.likes.every((item) => item !== userId);
  return {
    id: card._id,
    name: card.name,
    url: card.link,
    counter,
    liked,
  };
};

export const adaptCardsToClient = (
  cards: CardsServer,
  userId: string
): Cards => {
  return cards.map((card) => adaptCardToClient(card, userId));
};
