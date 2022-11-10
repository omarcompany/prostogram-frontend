import { useState } from 'react';
import { ICard } from '../../../interfaces/interfases';

export const Card = ({ card }: { card: ICard }): JSX.Element => {
  const { id, name, url, liked, counter } = card;
  const [isLiked, setIsLike] = useState(liked);
  const [likes, setLikes] = useState(counter);

  if (isLiked && likes === 0) {
    setIsLike(false);
  }

  const classaNamelike = isLiked
    ? `element-like-active`
    : `element-like-disabled`;
  return (
    <li className="element">
      <img className="element-image" src={url} alt={`${name}_${id}`} />
      <img id="trash" alt="trash icon" className="element-trash-icon" src="images/trash.svg" />
      <div className="element-title">
        <p className="element-paragraph">{name}</p>
        <div className="like-wrapper">
          <img
            className={classaNamelike}
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
