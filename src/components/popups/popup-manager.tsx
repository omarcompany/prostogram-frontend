import { PopupEditAvatar } from '../../pages/main-page/popups/popup-edit-avatar';
import { PopupEditProfile } from '../../pages/main-page/popups/popup-edit-profile';
import { PopupRegistrationSuccess } from '../../pages/registration-page/popups/popup-registration-successful';
import { PopupSomethingWrong } from '../../pages/registration-page/popups/popup-something-wrong';
import { PopupType } from './popup-type';

interface IPopupManagerProps {
  onClose: () => void;
  isOpen: boolean;
  popupType: PopupType;
}

export const PopupManager = ({
  onClose,
  isOpen,
  popupType = PopupType.None,
}: IPopupManagerProps): JSX.Element | null => {
  if (!isOpen) return null;

  switch (popupType) {
    case PopupType.EditAvatar:
      return <PopupEditAvatar onClose={onClose} />;
    case PopupType.EditProfile:
      return <PopupEditProfile onClose={onClose} />;
    case PopupType.RegistrationSuccess:
      return <PopupRegistrationSuccess onClose={onClose} />;
    case PopupType.SomethingWrong:
      return <PopupSomethingWrong onClose={onClose} />;
    case PopupType.None:
      return null;
    default:
      return null;
  }
};
