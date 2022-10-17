import { useState } from 'react';
import { avatarInfo } from '../mocks/avatar-info';
import { profileInfo } from '../mocks/profile-info';
import { CardBoard } from './card/card-board';
import { PopupManager } from './popups/popup-manager';
import { PopupType } from './popups/popup-type';

export const Main = (): JSX.Element => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState(PopupType.None);

  const openPopup = (type: PopupType) => {
    setPopupType(type);
    setPopupOpen(true);
  };

  const onClosePopup = () => setPopupOpen(false);

  const editAvatarClickHandler = () => {
    openPopup(PopupType.EditAvatar);
  };
  const editProfileClickHandler = () => {
    openPopup(PopupType.EditProfile);
  };

  const { name, description } = profileInfo;
  const { url } = avatarInfo;

  return (
    <>
      <section className="profile">
        <div className="avatar" onClick={editAvatarClickHandler}>
          <img className="avatar-image" src={url} alt="avatar" />
          <img className="avatar-edit-icon" src="images/pencil.png" />
        </div>
        <div className="profile-info">
          <h2 className="profile-info-name">{name}</h2>
          <button
            className="button edit-profile-button"
            type="button"
            onClick={editProfileClickHandler}
          >
            <img src="images/edit-button.svg" alt="edit" />
          </button>
          <p className="profile-info-description">{description}</p>
        </div>
        <button className="button add-button" type="button">
          +
        </button>
      </section>

      <PopupManager
        onClose={onClosePopup}
        isOpen={popupOpen}
        popupType={popupType}
      />

      <section className="content">
        <CardBoard />
      </section>
    </>
  );
};
