import { api } from '../store';
import { IUser } from '../interfaces';

export const singUp = async ({ email, password }: IUser) => {
  try {
    await api.post<string>('/users/signup', {
      password,
      email,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
