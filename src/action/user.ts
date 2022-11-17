import { adaptUserDataToClient } from '../adapter';
import { api } from '../store';

export const getUserData = async () => {
  try {
    const result = await api.get('/user/me');
    return adaptUserDataToClient(result.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
