import { PopupType } from '../../../components/popups/popup-type';
import { avatarInfo } from '../../../mocks/avatar-info';
import { profileInfo } from '../../../mocks/profile-info';
import { CardBoard } from './card-board';

export const Main = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}): JSX.Element => {
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
          <img
            className="avatar-edit-icon"
            alt="avatar edit icon"
            src="images/pencil.png"
          />
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

      <section className="content">
        <CardBoard />
      </section>
    </>
  );
};
