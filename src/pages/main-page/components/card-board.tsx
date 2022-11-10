import { cards } from '../../../mocks/cards';
import { Card } from './card';

export const CardBoard = (): JSX.Element => {
  return (
    <ul className="elements">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </ul>
  );
};
