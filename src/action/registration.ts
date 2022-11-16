import { api } from '../store';
import { IUser } from '../interfaces';

export const singUp = async ({ email, password }: IUser) => {
  try {
    await api.post<string>('/signup', {
      email,
      password,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};