export interface IProfileInfo {
  name: string;
  description: string;
}

export interface IAvatarInfo {
  url: string;
}

export interface ICard {
  id: string;
  name: string;
  url: string;
  counter: number;
  liked: boolean;
}
