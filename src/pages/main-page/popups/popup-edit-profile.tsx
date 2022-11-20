import { FormEvent, useRef } from 'react';

import { Popup } from './popup';
import { PopupLabel } from './popup-label';
import { updateProfile } from '../../../store/api-action/user';
import { store } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

export const PopupEditProfile = (): JSX.Element => {
  const userData = useAppSelector((store) => store.userData);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value || '';
    const about = descriptionRef.current?.value || '';

    store.dispatch(updateProfile({ name, about }));
  };

  return (
    <Popup
      title={'Edit profile'}
      textSubmit={'Save'}
      submitHandler={handleSubmit}
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
