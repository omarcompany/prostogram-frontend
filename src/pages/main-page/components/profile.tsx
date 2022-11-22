import { PopupType } from '../../../components/popups/popup-type';
import { openPopup } from '../../../store/action';
import { useAppSelector } from '../../../store/hooks';
import { store } from '../../../store/store';

export const Profile = () => {
  const userData = useAppSelector((store) => store.userData);

  const editAvatarClickHandler = () => {
    store.dispatch(openPopup(PopupType.EditAvatar));
  };

  const editProfileClickHandler = () => {
    store.dispatch(openPopup(PopupType.EditProfile));
  };

  const addNewCardClickHandler = () => {
    store.dispatch(openPopup(PopupType.NewCard));
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
