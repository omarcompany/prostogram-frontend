import { Link } from 'react-router-dom';

import { Auth } from '../../../components/auth';
import { AppRoute } from '../../../const';
import { singUp } from '../../../store/api-action/registration';
import { submitAuthMethod } from '../../../types';
import { store } from '../../../store/store';

export const Registration = (): JSX.Element => {
  const handleSubmit: submitAuthMethod = (event, email, password) => {
    store.dispatch(singUp({ email, password }));
  };

  return (
    <Auth
      handleSubmit={handleSubmit}
      submitTitle={'Sing up'}
      headerTitle={'Registration'}
    >
      <Link
        className="alredy-have-account-link header-link"
        to={AppRoute.Login}
        target="_top"
        rel="noopener noreferrer"
      >
        Have an Account Already? Sign in
      </Link>
    </Auth>
  );
};
