export interface IUserData {
  name: string;
  avatar: string;
  about: string;
  password?: string;
  email?: string;
}

export interface IUserDataServer {
  name: string;
  avatar: string;
  about: string;
  _id?: string;
  email?: string;
  password?: string;
}
