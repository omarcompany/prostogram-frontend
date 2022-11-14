import { PortalProvider } from '../../../components/popups/portal-provider';

interface IPopupProps {
  onClose: () => void;
  children: JSX.Element;
}

export const Popup = ({ onClose, children }: IPopupProps) => {
  return (
    <PortalProvider>
      <div className="popup-wrapper">
        <div className="popup">
          <div className="popup-auth">
            <button
              className="button popup-close-button"
              type="button"
              title="Close"
              onClick={onClose}
            ></button>
            {children}
          </div>
        </div>
      </div>
    </PortalProvider>
  );
};
