import { Link } from 'react-router-dom';

import { Header } from '../../../components/header';
import { AppRoute } from '../../../const';

export const RegistrationHeader = (): JSX.Element => {
  return (
    <Header
      children={
        <Link
          className="auth-header-link header-link"
          to={AppRoute.Login}
          target="_top"
          rel="noopener noreferrer"
        >
          Sign in
        </Link>
      }
    />
  );
};
