export interface IUserData {
  id: string;
  name: string;
  avatar: string;
  about: string;
  email: string;
}

export interface IActivatedUser extends IDefaultUser {
  accessToken: string;
}

export interface IDefaultUser {
  id: string;
  name: string;
  avatar: string;
  about: string;
  email: string;
  isActivated: boolean;
}

export interface IActivatedUserServer extends IDefaultUserServer {
  accessToken: string;
}

export interface IDefaultUserServer {
  id: string;
  name: string;
  avatar: string;
  about: string;
  email: string;
  isActivated: boolean;
}

export interface IAuthData {
  email: string;
  password: string;
}
