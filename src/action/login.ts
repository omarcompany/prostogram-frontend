import { api } from '../store';
import { IUser } from '../interfaces';

export const singIn = async ({ email, password }: IUser) => {
  try {
    const result = await api.post('/signin', {
      password,
      email,
    });
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};
