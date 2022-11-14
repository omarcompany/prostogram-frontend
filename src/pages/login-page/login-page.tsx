import { LoginHeader } from './components/login-header';
import { Login } from './components/login';
import { PopupType } from '../../components/popups/popup-type';

export const LoginPage = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}): JSX.Element => {
  return (
    <>
      <LoginHeader />
      <Login openPopup={openPopup} />
    </>
  );
};
