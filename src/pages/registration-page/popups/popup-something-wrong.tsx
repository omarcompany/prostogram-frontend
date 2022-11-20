import { Popup } from './popup';

export const PopupSomethingWrong = (): JSX.Element => {
  return (
    <Popup>
      <>
        <img
          className="popup-auth-image"
          src="/images/something-wrong.svg"
          alt="something wrong"
        />
        <p className="popup-auth-message">Something went wrong! Try again.</p>
      </>
    </Popup>
  );
};
