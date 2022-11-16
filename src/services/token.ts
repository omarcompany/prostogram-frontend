const AUTH_TOKEN_KEY_NAME = 'prostogram-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  const prostogramToken = `Bearer ${token}`;
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, prostogramToken);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
