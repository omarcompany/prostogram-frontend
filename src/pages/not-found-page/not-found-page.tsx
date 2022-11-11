import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export const NotFoundPage = (): JSX.Element => {
  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Return to main page</Link>
    </section>
  );
};
