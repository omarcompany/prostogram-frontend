import { AuthorizationStatus } from './const';
import { dropToken } from './services/token';
import { setAuthStatus } from './store/action';
import { store } from './store/store';

export const logout = () => {
  dropToken();
  store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
};
