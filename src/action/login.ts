import { api } from '../store';

export const singIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
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
