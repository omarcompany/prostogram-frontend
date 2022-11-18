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

export const updateProfile = async ({
  name,
  about,
}: {
  name: string;
  about: string;
}) => {
  try {
    const result = await api.patch('/user/me', {
      name,
      about,
    });
    return adaptUserDataToClient(result.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateAvatar = async (avatar: string) => {
  try {
    const result = await api.patch('/user/me/avatar', {
      avatar,
    });
    return adaptUserDataToClient(result.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
