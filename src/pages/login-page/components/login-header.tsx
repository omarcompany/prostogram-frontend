import { Header } from '../../../components/header';

export const LoginHeader = (): JSX.Element => {
  return (
    <Header
      children={<button className="auth-header-button">Sign up</button>}
    />
  );
};
