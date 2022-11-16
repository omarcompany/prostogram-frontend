import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { Auth } from '../../../components/auth';
import { AuthContext } from '../../../context/auth-provider';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { PopupType } from '../../../components/popups/popup-type';
import { saveToken } from '../../../services/token';
import { singIn } from '../../../action/login';
import { submitAuthMethod } from '../../../types';

export const Login = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}): JSX.Element => {
  const navigate = useNavigate();
  const {authorizationStatus, setAuthorizationStatus } = useContext(AuthContext);

  const handleSubmit: submitAuthMethod = (event, email, password) => {
    singIn({ email, password })
      .then((result) => {
        saveToken(result.data.token);
        setAuthorizationStatus(AuthorizationStatus.Auth);
        navigate(AppRoute.Main);
      })
      .catch((error) => {
        openPopup(PopupType.SomethingWrong);
      });
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
