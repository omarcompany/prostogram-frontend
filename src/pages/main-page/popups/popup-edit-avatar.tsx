import { FormEvent, useContext, useRef } from 'react';

import { Popup } from './popup';
import { PopupLabel } from './popup-label';
import { updateAvatar } from '../../../action/user';
import { UserDataContext } from '../../../context/user-data-provider';

export const PopupEditAvatar = ({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element => {
  const { userData, setUserData } = useContext(UserDataContext);

  const avatarRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = avatarRef.current?.value || '';
    updateAvatar(url)
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
      title={'Update Avatar'}
      textSubmit={'Save'}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <PopupLabel
          defaultValue={userData?.avatar ?? ''}
          inputRef={avatarRef}
        />
      }
    />
  );
};
