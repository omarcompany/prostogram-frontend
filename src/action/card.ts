import { api } from '../store';

export const createCard = async (name: string, link: string) => {
  try {
    await api.post<string>('/cards', {
      name,
      link,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCards = async () => {
  try {
    const result = await api.get('/cards');
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
