import {
  IActivatedUser,
  IActivatedUserServer,
  IDefaultUser,
  IDefaultUserServer,
  IUserData,
} from './interfaces';
import { ICard, ICardServer } from './interfaces/interfases';
import { store } from './store/store';

const activatedUserServerToUserData = (
  user: IActivatedUserServer
): IUserData => {
  return {
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    about: user.about,
    email: user.email,
  };
};

const adaptCardToClient = (card: ICardServer): ICard => {
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

const adaptCardsToClient = (cards: Array<ICardServer>): Array<ICard> => {
  return cards.map((card) => adaptCardToClient(card));
};

const adaptDefaultUserServerToClient = (
  user: IDefaultUserServer
): IDefaultUser => {
  return {
    ...user,
  };
};

const adaptActivatedUserServerToClient = (
  user: IActivatedUserServer
): IActivatedUser => {
  return {
    ...user,
  };
};

const Card = (card: ICardServer): ICard => {
  return adaptCardToClient(card);
};

const Cards = (cards: Array<ICardServer>): Array<ICard> => {
  return adaptCardsToClient(cards);
};

const DefaultUser = (user: IDefaultUserServer): IDefaultUser => {
  return adaptDefaultUserServerToClient(user);
};

const ActivatedUser = (user: IActivatedUserServer): IActivatedUser => {
  return adaptActivatedUserServerToClient(user);
};

const UserData = (user: IActivatedUser): IUserData => {
  return activatedUserServerToUserData(user);
};

export const Adapter = { DefaultUser, ActivatedUser, Card, Cards, UserData };
