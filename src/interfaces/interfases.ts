export interface IProfileInfo {
  name: string;
  description: string;
}

export interface ICard {
  id: string;
  name: string;
  urn: string;
  counter: number;
  liked: boolean;
}

export interface ICardServer {
  _id: string;
  name: string;
  urn: string;
  createdAt: string;
  owner: string;
  likes: string[];
}
