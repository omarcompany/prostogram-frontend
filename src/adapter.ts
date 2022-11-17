import { IUserData, IUserDataServer } from './interfaces';

export const adaptUserDataToClient = (
  userData: IUserDataServer
): IUserData => ({
  name: userData.name,
  avatar: userData.avatar,
  about: userData.about,
  password: userData.password,
  email: userData.email,
});
