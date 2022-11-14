import { RegistrationHeader } from './components/registration-header';
import { Registration } from './components/registration';
import { PopupType } from '../../components/popups/popup-type';

export const RegistrationPage = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}): JSX.Element => {
  return (
    <>
      <RegistrationHeader />
      <Registration openPopup={openPopup} />
    </>
  );
};
