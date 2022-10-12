export function Main(): JSX.Element {
  return (
    <>
      <section className="profile">
        <div className="avatar">
          <img className="avatar-image" src="images/avatar.jpg" alt="avatar" />
        </div>
        <div className="profile-info">
          <h2 className="profile-info-name">Jacques-Yves Cousteau</h2>
          <button className="button edit-profile-button" type="button">
            <img src="images/edit-button.svg" alt="edit" />
          </button>
          <p className="profile-info-description">The ocean explorer</p>
        </div>
        <button className="button add-button" type="button">
          +
        </button>
      </section>

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
      <div className="edit-wrapper">
        <div className="edit">
          <button
            className="button edit-close-button"
            type="button"
            title="Close"
          ></button>
          <form className="edit-form" action="#" method="post">
            <p className="edit-form-header">Edit profile</p>

            <label className="edit-form-label">
              <input
                className="edit-form-input edit-form-name"
                type="text"
                id="name"
                name="profile_info_name"
              />
            </label>

            <label className="edit-form-label">
              <input
                className="edit-form-input edit-form-description"
                type="text"
                id="description"
                name="profile_info_description"
              />
            </label>

            <input
              className="button edit-form-submit"
              type="submit"
              id="submit"
              name="profile_info_submit"
              value="Save"
            />
          </form>
        </div>
      </div>
    </>
  );
}
