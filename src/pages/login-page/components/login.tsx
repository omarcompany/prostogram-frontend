import { Auth } from '../../main-page/components/auth';
import { PopupType } from '../../../components/popups/popup-type';
import { submitAuthMethod } from '../../../types';

export const Login = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}): JSX.Element => {
  const handleSubmit: submitAuthMethod = (event, email, password) => {
    openPopup(PopupType.SomethingWrong);
  };

  return (
    <Auth
      handleSubmit={handleSubmit}
      submitTitle="Sign in"
      headerTitle="Login"
    />
  );
};
