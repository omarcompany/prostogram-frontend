import { useContext } from 'react';
import { FormEvent, useRef } from 'react';

import { Popup } from './popup';
import { PopupLabel } from './popup-label';
import { updateProfile } from '../../../action/user';
import { UserDataContext } from '../../../context/user-data-provider';

export const PopupEditProfile = ({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element => {
  const { userData, setUserData } = useContext(UserDataContext);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value || '';
    const about = descriptionRef.current?.value || '';

    updateProfile({ name, about })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    onClose();
  };

  return (
    <Popup
      title={'Edit profile'}
      textSubmit={'Save'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <PopupLabel defaultValue={userData?.name ?? ''} inputRef={nameRef} />
        <PopupLabel
          defaultValue={userData?.about ?? ''}
          inputRef={descriptionRef}
        />
      </>
    </Popup>
  );
};
