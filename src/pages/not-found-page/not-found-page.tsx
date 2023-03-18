import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Head } from '../../components/head/head';

export const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Head title="Page not found - Prostogram" />
      <section>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Main}>Return to main page</Link>
      </section>
    </>
  );
};
