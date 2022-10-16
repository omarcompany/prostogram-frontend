import { FormEvent, useRef } from 'react';
import { avatarInfo } from '../../mocks/avatar-info';
import { Popup } from './popup';
import { PopupLabel } from './popup-label';

export const PopupEditAvatar = ({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element => {
  const avatarRef = useRef<HTMLInputElement | null>(null);

  const url = avatarInfo.url;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    avatarInfo.url = avatarRef.current?.value || '';

    onClose();
  };

  return (
    <Popup
      title={'Update Avatar'}
      textSubmit={'Save'}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={<PopupLabel defaultValue={url} inputRef={avatarRef} />}
    />
  );
};
