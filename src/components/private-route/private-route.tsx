import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

interface IPrivateRouteGroupsProps {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export const PrivateRoute = ({
  authorizationStatus,
  children,
}: IPrivateRouteGroupsProps): JSX.Element => {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
};
