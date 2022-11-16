import { api } from '../store';

export const getCurrentUser = async () => {
  try {
    const result = await api.get('/user/me');
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};
