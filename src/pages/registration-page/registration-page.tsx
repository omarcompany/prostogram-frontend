import { RegistrationHeader } from './components/registration-header';
import { Registration } from './components/registration';

export const RegistrationPage = (): JSX.Element => {
  return (
    <>
      <RegistrationHeader />
      <Registration />
    </>
  );
};
