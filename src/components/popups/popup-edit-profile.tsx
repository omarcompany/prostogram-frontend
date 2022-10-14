import { FormEvent, useRef } from 'react';
import { IProfileInfo } from '../../interfaces/interfases';
import { Popup } from './popup';
import { PopupLabel } from './popup-label';

interface IPopupEditProfileProps {
  profileInfo: IProfileInfo;
  onClose: () => void;
}

export function PopupEditProfile({
  profileInfo,
  onClose,
}: IPopupEditProfileProps): JSX.Element {
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
      children={
        <>
          <PopupLabel value={name} valueRef={nameRef} />
          <PopupLabel value={description} valueRef={descriptionRef} />
        </>
      }
    />
  );
}
