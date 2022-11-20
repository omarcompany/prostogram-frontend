import { closePopup } from '../../../store/action';
import { PortalProvider } from '../../../components/popups/portal-provider';
import { store } from '../../../store/store';

export const Popup = ({ children }: { children: JSX.Element }) => {
  return (
    <PortalProvider>
      <div className="popup-wrapper">
        <div className="popup">
          <div className="popup-auth">
            <button
              className="button popup-close-button"
              type="button"
              title="Close"
              onClick={() => store.dispatch(closePopup())}
            ></button>
            {children}
          </div>
        </div>
      </div>
    </PortalProvider>
  );
};
