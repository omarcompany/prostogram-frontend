import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';

export const App = (): JSX.Element => {
  return (
    <main>
      <Header />

      <Main />

      <Footer />
    </main>
  );
};
