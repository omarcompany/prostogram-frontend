import { PopupDeleteCard } from '../../pages/main-page/popups/popup-delete-card';
import { PopupEditProfile } from '../../pages/main-page/popups/popup-edit-profile';
import { PopupNewCard } from '../../pages/main-page/popups/popup-new-card';
import { PopupProhibited } from './popup-prohibited';
import { PopupRegistrationSuccess } from '../../pages/registration-page/popups/popup-registration-successful';
import { PopupSomethingWrong } from './popup-something-wrong';
import { PopupType } from './popup-type';
import { useAppSelector } from '../../store/hooks';

export const PopupManager = (): JSX.Element | null => {
  const { isOpen, popupType } = useAppSelector((store) => ({
    isOpen: store.popupOpened,
    popupType: store.popupType,
  }));

  if (!isOpen) return null;

  switch (popupType) {
    case PopupType.EditProfile:
      return <PopupEditProfile />;
    case PopupType.RegistrationSuccess:
      return <PopupRegistrationSuccess />;
    case PopupType.SomethingWrong:
      return <PopupSomethingWrong />;
    case PopupType.NewCard:
      return <PopupNewCard />;
    case PopupType.DeleteCard:
      return <PopupDeleteCard />;
    case PopupType.Prohibited:
      return <PopupProhibited />;
    case PopupType.None:
      return null;
    default:
      return null;
  }
};
