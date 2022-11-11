import { Header } from '../../../components/header';

export const RegistrationHeader = (): JSX.Element => {
  return (
    <Header
      children={<button className="auth-header-button">Sign in</button>}
    />
  );
};
