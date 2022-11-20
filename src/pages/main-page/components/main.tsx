import { CardBoard } from './card-board';
import { Profile } from './profile';

export const Main = (): JSX.Element => {
  return (
    <>
      <Profile />
      <section className="content">
        <CardBoard />
      </section>
    </>
  );
};
