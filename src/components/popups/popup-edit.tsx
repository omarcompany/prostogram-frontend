import { FormEvent, useRef } from 'react';
import { IProfileInfo } from '../../interfaces/interfases';

interface IPopupEditProps {
  profileInfo: IProfileInfo;
  onClosePopup: () => void;
}

export function PopupEdit({
  profileInfo,
  onClosePopup,
}: IPopupEditProps): JSX.Element {
  const { name, description } = profileInfo;

  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    profileInfo.name = nameRef.current?.value || '';
    profileInfo.description = descriptionRef.current?.value || '';

    onClosePopup();
  };

  const handleCloseButton = () => {
    onClosePopup();
  };

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <button
          className="button popup-close-button"
          type="button"
          title="Close"
          onClick={handleCloseButton}
        />
        <form className="popup-form" onSubmit={handleSubmit}>
          <p className="popup-form-header">Edit profile</p>

          <label className="popup-form-label">
            <input
              className="popup-form-input"
              type="text"
              id="name"
              name="profile_info_name"
              defaultValue={name}
              ref={nameRef}
            />
          </label>

          <label className="popup-form-label">
            <input
              className="popup-form-input"
              type="text"
              id="description"
              name="profile_info_description"
              defaultValue={description}
              ref={descriptionRef}
            />
          </label>

          <input
            className="button popup-form-submit"
            type="submit"
            id="submit"
            name="profile_info_submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
}
