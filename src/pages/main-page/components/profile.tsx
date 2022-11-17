import { useEffect, useState } from 'react';

import { getUserData } from '../../../action/user';
import { PopupType } from '../../../components/popups/popup-type';
import { IUserData } from '../../../interfaces';

export const Profile = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}) => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    getUserData()
      .then((data) => {
        setUserData(data)
      })
      .catch((error) => console.log(error));
  }, []);

  const editAvatarClickHandler = () => {
    openPopup(PopupType.EditAvatar);
  };
  const editProfileClickHandler = () => {
    openPopup(PopupType.EditProfile);
  };

  return (
    <section className="profile">
      <div className="avatar" onClick={editAvatarClickHandler}>
        <img className="avatar-image" src={userData?.avatar ?? "-"} alt="avatar" />
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
      <button className="button add-button" type="button">
        +
      </button>
    </section>
  );
};
