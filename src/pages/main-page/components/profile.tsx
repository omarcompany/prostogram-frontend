import { useContext } from 'react';

import { PopupType } from '../../../components/popups/popup-type';
import { UserDataContext } from '../../../context/user-data-provider';

export const Profile = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}) => {
  const { userData } = useContext(UserDataContext);

  const editAvatarClickHandler = () => {
    openPopup(PopupType.EditAvatar);
  };
  const editProfileClickHandler = () => {
    openPopup(PopupType.EditProfile);
  };

  const addNewCardClickHandler = () => {
    openPopup(PopupType.NewCard);
  };

  return (
    <section className="profile">
      <div className="avatar" onClick={editAvatarClickHandler}>
        <img
          className="avatar-image"
          src={userData?.avatar ?? '-'}
          alt="avatar"
        />
        <img
          className="avatar-edit-icon"
          alt="avatar edit icon"
          src="images/pencil.png"
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-info-name">{userData?.name}</h2>
        <button
          className="button edit-profile-button"
          type="button"
          onClick={editProfileClickHandler}
        >
          <img src="images/edit-button.svg" alt="edit" />
        </button>
        <p className="profile-info-description">{userData?.about}</p>
      </div>
      <button
        className="button add-button"
        type="button"
        onClick={addNewCardClickHandler}
      >
        +
      </button>
    </section>
  );
};
