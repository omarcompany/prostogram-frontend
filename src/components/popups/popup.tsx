import { FormEvent } from "react";

interface IPopupProps {
  title: string;
  textSubmit: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  children: JSX.Element;
}

export function Popup({
  title,
  textSubmit,
  onSubmit,
  onClose,
  children,
}: IPopupProps) {

  const handleSubmit = onSubmit;

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <button
          className="button popup-close-button"
          type="button"
          title="Close"
          onClick={onClose}
        />
        <form className="popup-form" onSubmit={handleSubmit}>
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
  );
}
