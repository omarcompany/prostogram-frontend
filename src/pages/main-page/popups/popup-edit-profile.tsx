import { FormEvent, useRef } from 'react';
import { profileInfo } from '../../../mocks/profile-info';
import { Popup } from './popup';
import { PopupLabel } from './popup-label';

export const PopupEditProfile = ({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element => {
  const { name, description } = profileInfo;

  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    profileInfo.name = nameRef.current?.value || '';
    profileInfo.description = descriptionRef.current?.value || '';

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
        <PopupLabel defaultValue={name} inputRef={nameRef} />
        <PopupLabel defaultValue={description} inputRef={descriptionRef} />
      </>
    </Popup>
  );
};
