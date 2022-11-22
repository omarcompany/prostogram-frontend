import { FormEvent } from 'react';

import { closePopup } from '../../../store/action';
import { PortalProvider } from '../../../components/popups/portal-provider';
import { store } from '../../../store/store';

interface IPopupProps {
  title: string;
  textSubmit: string;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  children?: JSX.Element;
}

export function Popup({
  title,
  textSubmit,
  submitHandler,
  children,
}: IPopupProps) {
  return (
    <PortalProvider>
      <div className="popup-wrapper">
        <div className="popup">
          <button
            className="button popup-close-button"
            type="button"
            title="Close"
            onClick={() => {
              store.dispatch(closePopup());
            }}
          />
          <form
            className="popup-form"
            onSubmit={(event) => {
              submitHandler(event);
              store.dispatch(closePopup());
            }}
          >
            <p className="popup-form-header">{title}</p>

            {children}

            <input
              className="button popup-form-submit"
              type="submit"
              id="submit"
              name="profile_info_submit"
              value={textSubmit}
            />
          </form>
        </div>
      </div>
    </PortalProvider>
  );
}
