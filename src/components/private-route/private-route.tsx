import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store/hooks';

export const PrivateRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const authorizationStatus = useAppSelector(
    (store) => store.authorizationStatus
  );

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
};
