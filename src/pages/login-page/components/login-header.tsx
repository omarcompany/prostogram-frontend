import { Link } from 'react-router-dom';

import { Header } from '../../../components/header';
import { AppRoute } from '../../../const';

export const LoginHeader = (): JSX.Element => {
  return (
    <Header
      children={
        <Link
          className="auth-header-link header-link button"
          to={AppRoute.Registration}
          target="_top"
          rel="noopener noreferrer"
        >
          Sign up
        </Link>
      }
    />
  );
};
