import { PopupEditAvatar } from './popup-edit-avatar';
import { PopupEditProfile } from './popup-edit-profile';
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
    case PopupType.None:
      return null;
    default:
      return null;
  }
};
