import { Link } from 'react-router-dom';

import { Auth } from '../../main-page/components/auth';
import { AppRoute } from '../../../const';
import { PopupType } from '../../../components/popups/popup-type';
import { singUp } from '../../../action/registration';
import { submitAuthMethod } from '../../../types';

export const Registration = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}): JSX.Element => {
  const handleSubmit: submitAuthMethod = (event, email, password) => {
    singUp({ email, password })
      .then(() => {
        openPopup(PopupType.RegistrationSuccess);
      })
      .catch((error) => {
        openPopup(PopupType.SomethingWrong);
      });
  };

  return (
    <Auth
      handleSubmit={handleSubmit}
      submitTitle={'Sing up'}
      headerTitle={'Registration'}
    >
      <Link
        className="alredy-have-account-link header-link"
        to={AppRoute.Login}
        target="_top"
        rel="noopener noreferrer"
      >
        Have an Account Already? Sign in
      </Link>
    </Auth>
  );
};
