import { Popup } from '../../pages/registration-page/popups/popup';

export const PopupProhibited = (): JSX.Element => {
  return (
    <Popup>
      <>
        <img
          className="popup-auth-image"
          src="/images/something-wrong.svg"
          alt="something wrong"
        />
        <p className="popup-auth-message">
          You cannot delete other people's cards
        </p>
      </>
    </Popup>
  );
};
