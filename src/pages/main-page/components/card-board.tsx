import { useContext, useEffect, useState } from 'react';

import { adaptCardsToClient } from '../../../adapter';
import { Card } from './card';
import { Cards } from '../../../types';
import { getCards } from '../../../action/card';
import { UserDataContext } from '../../../context/user-data-provider';

export const CardBoard = (): JSX.Element => {
  const { userData } = useContext(UserDataContext);
  const [cards, setCards] = useState<Cards>([]);

  useEffect(() => {
    getCards()
      .then((data) => {
        setCards(adaptCardsToClient(data, userData?.id ?? ''));
      })
      .catch((error) => console.log(error));
  }, [userData?.id]);

  return (
    <ul className="elements">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </ul>
  );
};
