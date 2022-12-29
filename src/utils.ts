import { AuthorizationStatus } from './const';
import { dropToken } from './services/token';
import { setAuthStatus, setUserData } from './store/action';
import { signOut } from './store/api-action/logout';
import { store } from './store/store';

export const logout = () => {
  store.dispatch(signOut());
  store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  store.dispatch(setUserData(null));
  dropToken();
};
