import { useEffect } from 'react';

import { Card } from './card';
import { getCards } from '../../../store/api-action/card';
import { store } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

export const CardBoard = (): JSX.Element => {
  useEffect(() => {
    store.dispatch(getCards());
  }, []);

  const cards = useAppSelector((store) => store.cards);

  return (
    <ul className="elements">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </ul>
  );
};
