import { Footer } from './components/footer';
import { MainHeader } from './components/main-header';
import { Main } from './components/main';
import { Head } from '../../components/head/head';

export const MainPage = (): JSX.Element => {
  return (
    <>
      <Head title="Prostogram" />

      <MainHeader />

      <Main />

      <Footer />
    </>
  );
};
