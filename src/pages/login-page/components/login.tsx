import { Navigate } from 'react-router-dom';

import { Auth } from '../../../components/auth';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { signIn } from '../../../store/api-action/login';
import { submitAuthMethod } from '../../../types';
import { store } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

export const Login = (): JSX.Element => {
  const authorizationStatus = useAppSelector(
    (store) => store.authorizationStatus
  );

  const handleSubmit: submitAuthMethod = (event, email, password) => {
    store.dispatch(signIn({ email, password }));
  };

  return authorizationStatus === AuthorizationStatus.Auth ? (
    <Navigate to={AppRoute.Main} />
  ) : (
    <Auth
      handleSubmit={handleSubmit}
      submitTitle="Sign in"
      headerTitle="Login"
    />
  );
};
