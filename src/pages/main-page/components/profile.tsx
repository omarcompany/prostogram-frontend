import { BACKEND_URL } from '../../../const';
import { openPopup } from '../../../store/action';
import { PopupType } from '../../../components/popups/popup-type';
import { store } from '../../../store/store';
import { updateAvatar } from '../../../store/api-action/user';
import { useAppSelector } from '../../../store/hooks';

export const Profile = () => {
  const userData = useAppSelector((store) => store.userData);

  const selectAvatarHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      store.dispatch(updateAvatar(files[0]));
    }
  };

  const editProfileClickHandler = () => {
    store.dispatch(openPopup(PopupType.EditProfile));
  };

  const addNewCardClickHandler = () => {
    store.dispatch(openPopup(PopupType.NewCard));
  };

  const avatarUrl = userData?.avatar
    ? `${BACKEND_URL}/${userData.avatar}`
    : './images/default-avatar.jpg';

  return (
    <section className="profile">
      <div className="avatar">
        <img className="avatar-image" src={avatarUrl} alt="avatar" />
        <label htmlFor="avatar-input">
          <img
            className="avatar-edit-icon"
            alt="avatar edit icon"
            src="images/pencil.png"
          />
        </label>
        <input
          className="avatar-edit-input"
          id="avatar-input"
          type="file"
          accept="image/*"
          onChange={selectAvatarHandler}
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
