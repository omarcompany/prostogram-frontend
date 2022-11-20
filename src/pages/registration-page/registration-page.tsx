import { Registration } from './components/registration';
import { RegistrationHeader } from './components/registration-header';

export const RegistrationPage = (): JSX.Element => {
  return (
    <>
      <RegistrationHeader />
      <Registration />
    </>
  );
};
