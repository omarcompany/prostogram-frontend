import { Popup } from './popup';

export function PopupRegistrationSuccess(): JSX.Element {
  return (
    <Popup>
      <>
        <img
          className="popup-auth-image"
          src="/images/registration-success.svg"
          alt="registration success"
        />
        <p className="popup-auth-message">Registration successful!</p>
        <p className="popup-auth-message-description">
          Please click the activation link we sent to your email
        </p>
      </>
    </Popup>
  );
}
