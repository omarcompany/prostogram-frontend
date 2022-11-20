import { FormEvent, useRef } from 'react';

import { Popup } from './popup';
import { PopupLabel } from './popup-label';
import { store } from '../../../store/store';
import { updateAvatar } from '../../../store/api-action/user';
import { useAppSelector } from '../../../store/hooks';

export const PopupEditAvatar = (): JSX.Element => {
  const userData = useAppSelector((store) => store.userData);

  const avatarRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = avatarRef.current?.value || '';

    store.dispatch(updateAvatar(url));
  };

  return (
    <Popup
      title={'Update Avatar'}
      textSubmit={'Save'}
      submitHandler={handleSubmit}
      children={
        <PopupLabel
          defaultValue={userData?.avatar ?? ''}
          inputRef={avatarRef}
        />
      }
    />
  );
};
