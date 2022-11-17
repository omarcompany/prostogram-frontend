import { api } from '../store';

export const singUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await api.post<string>('/signup', {
      email,
      password,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
