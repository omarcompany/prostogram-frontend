import { useState } from 'react';
import { profileInfo } from '../mocks/profile-info';
import { PopupEditAvatar } from './popups/popup-edit-avatar';
import { PopupEditProfile } from './popups/popup-edit-profile';

export function Main(): JSX.Element {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const onCloseAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };

  const { name, description } = profileInfo;

  return (
    <>
      <section className="profile">
        <div className="avatar">
          <img className="avatar-image" src="images/avatar.jpg" alt="avatar" />
        </div>
        <div className="profile-info">
          <h2 className="profile-info-name">{name}</h2>
          <button
            className="button edit-profile-button"
            type="button"
            onClick={() => setIsEditProfilePopupOpen(true)}
          >
            <img src="images/edit-button.svg" alt="edit" />
          </button>
          <p className="profile-info-description">{description}</p>
        </div>
        <button className="button add-button" type="button">
          +
        </button>
      </section>

      {isEditProfilePopupOpen && (
        <PopupEditProfile
          profileInfo={profileInfo}
          onClose={onCloseAllPopups}
        />
      )}

      {isEditAvatarPopupOpen && (
        <PopupEditAvatar onClose={onCloseAllPopups} />
      )}

      <section className="content">
        <ul className="elements">
          <li className="element">
            <img className="element-image" src="images/one.jpg" alt="one" />
            <div className="element-title">
              <p className="element-paragraph">Karachaevsk</p>
              <img className="element-like" alt="like" />
            </div>
          </li>
          <li className="element">
            <img className="element-image" src="images/two.jpg" alt="two" />
            <div className="element-title">
              <p className="element-paragraph">Elbrus</p>
              <img className="element-like" alt="like" />
            </div>
          </li>
          <li className="element">
            <img className="element-image" src="images/three.png" alt="three" />
            <div className="element-title">
              <p className="element-paragraph">Dombai</p>
              <img className="element-like" alt="like" />
            </div>
          </li>
          <li className="element">
            <img className="element-image" src="images/four.png" alt="four" />
            <div className="element-title">
              <p className="element-paragraph">Elbrus</p>
              <img className="element-like" alt="like" />
            </div>
          </li>
          <li className="element">
            <img className="element-image" src="images/five.jpg" alt="five" />
            <div className="element-title">
              <p className="element-paragraph">Dombai</p>
              <img className="element-like" alt="like" />
            </div>
          </li>
          <li className="element">
            <img className="element-image" src="images/six.png" alt="six" />
            <div className="element-title">
              <p className="element-paragraph">Karachaevo-Cherkesk</p>
              <img className="element-like" alt="like" />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
