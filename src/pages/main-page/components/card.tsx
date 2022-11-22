import { useState } from 'react';
import { PopupType } from '../../../components/popups/popup-type';

import { ICard } from '../../../interfaces/interfases';
import { openPopup, setSelectedCard } from '../../../store/action';
import { store } from '../../../store/store';

export const Card = ({ card }: { card: ICard }): JSX.Element => {
  const { id, name, url, liked, counter } = card;
  const [isLiked, setIsLike] = useState(liked);
  const [likes, setLikes] = useState(counter);

  if (isLiked && likes === 0) {
    setIsLike(false);
  }

  const handleDeleteClick = () => {
    store.dispatch(setSelectedCard(card));
    store.dispatch(openPopup(PopupType.DeleteCard));
  };

  const classNamelike = isLiked
    ? `element-like-active`
    : `element-like-disabled`;
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
          <img
            className={classNamelike}
            alt="like"
            onClick={() => {
              isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
              setIsLike(!isLiked);
            }}
          />
          {likes > 0 && <p className="like-counter">{likes}</p>}
        </div>
      </div>
    </li>
  );
};
