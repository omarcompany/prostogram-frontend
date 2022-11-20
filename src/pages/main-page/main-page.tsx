import { Footer } from './components/footer';
import { MainHeader } from './components/main-header';
import { Main } from './components/main';

export const MainPage = (): JSX.Element => {
  return (
    <>
      <MainHeader />

      <Main />

      <Footer />
    </>
  );
};
