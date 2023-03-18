import { LoginHeader } from './components/login-header';
import { Login } from './components/login';
import { Head } from '../../components/head/head';

export const LoginPage = (): JSX.Element => {
  return (
    <>
      <Head title="Login - Prostogram" />
      <LoginHeader />
      <Login />
    </>
  );
};
