import { PopupEditAvatar } from '../../pages/main-page/popups/popup-edit-avatar';
import { PopupEditProfile } from '../../pages/main-page/popups/popup-edit-profile';
import { PopupNewCard } from '../../pages/main-page/popups/popup-new-card';
import { PopupRegistrationSuccess } from '../../pages/registration-page/popups/popup-registration-successful';
import { PopupSomethingWrong } from '../../pages/registration-page/popups/popup-something-wrong';
import { useAppSelector } from '../../store/hooks';
import { PopupType } from './popup-type';

export const PopupManager = (): JSX.Element | null => {
  const { isOpen, popupType } = useAppSelector((store) => ({
    isOpen: store.popupOpened,
    popupType: store.popupType,
  }));

  if (!isOpen) return null;

  switch (popupType) {
    case PopupType.EditAvatar:
      return <PopupEditAvatar />;
    case PopupType.EditProfile:
      return <PopupEditProfile />;
    case PopupType.RegistrationSuccess:
      return <PopupRegistrationSuccess />;
    case PopupType.SomethingWrong:
      return <PopupSomethingWrong />;
    case PopupType.NewCard:
      return <PopupNewCard />;
    case PopupType.None:
      return null;
    default:
      return null;
  }
};
