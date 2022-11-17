import { PopupType } from '../../../components/popups/popup-type';
import { CardBoard } from './card-board';
import { Profile } from './profile';

export const Main = ({
  openPopup,
}: {
  openPopup: (popupType: PopupType) => void;
}): JSX.Element => {
  return (
    <>
      <Profile openPopup={openPopup} />
      <section className="content">
        <CardBoard />
      </section>
    </>
  );
};
