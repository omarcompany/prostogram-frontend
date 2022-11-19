import { FormEvent } from 'react';

import { ICard, ICardServer } from './interfaces/interfases';

export type submitAuthMethod = (
  event: FormEvent<HTMLFormElement>,
  email: string,
  password: string
) => void;

export type Cards = ICard[];
export type CardsServer = ICardServer[];
