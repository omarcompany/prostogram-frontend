import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { AuthContext } from '../../context/auth-provider';

export const PrivateRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { authorizationStatus } = useContext(AuthContext);

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
};
