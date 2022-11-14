import { Popup } from './popup';

export function PopupRegistrationSuccess({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element {
  return (
    <Popup onClose={onClose}>
      <>
        <img
          className="popup-auth-image"
          src="/images/registration-success.svg"
          alt="registration success"
        />
        <p className="popup-auth-message">Registration successful!</p>
      </>
    </Popup>
  );
}
