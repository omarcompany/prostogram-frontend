import { PopupType } from '../../../components/popups/popup-type';

import { ICard } from '../../../interfaces/interfases';
import { openPopup, setSelectedCard } from '../../../store/action';
import { dislikeCard, likeCard } from '../../../store/api-action/card';
import { store } from '../../../store/store';

export const Card = ({ card }: { card: ICard }): JSX.Element => {
  const { id, name, url, liked, counter } = card;

  const handleDeleteClick = () => {
    store.dispatch(setSelectedCard(card));
    store.dispatch(openPopup(PopupType.DeleteCard));
  };

  const handleLikeClick = () => {
    if (!liked) {
      store.dispatch(likeCard(id));
    } else {
      store.dispatch(dislikeCard(id));
    }
  };

  const classNamelike = liked ? `element-like-active` : `element-like-disabled`;

  return (
    <li className="element">
      <img className="element-image" src={url} alt={`${name}_${id}`} />
      <img
        id="trash"
        alt="trash icon"
        className="element-trash-icon"
        src="images/trash.svg"
        onClick={handleDeleteClick}
      />
      <div className="element-title">
        <p className="element-paragraph">{name}</p>
        <div className="like-wrapper">
          <img className={classNamelike} alt="like" onClick={handleLikeClick} />
          {counter > 0 && <p className="like-counter">{counter}</p>}
        </div>
      </div>
    </li>
  );
};
