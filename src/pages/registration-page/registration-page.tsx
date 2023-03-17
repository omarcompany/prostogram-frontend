import { Registration } from './components/registration';
import { RegistrationHeader } from './components/registration-header';
import { Head } from '../../components/head/head';

export const RegistrationPage = (): JSX.Element => {
  return (
    <>
      <Head title="Registration - Prostogram" />
      <RegistrationHeader />
      <Registration />
    </>
  );
};
