import { Footer } from './components/footer';
import { MainHeader } from './components/main-header';
import { Main } from './components/main';
import { PopupType } from '../../components/popups/popup-type';

export const MainPage = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}): JSX.Element => {
  return (
    <>
      <MainHeader />

      <Main openPopup={openPopup}/>

      <Footer />
    </>
  );
};
