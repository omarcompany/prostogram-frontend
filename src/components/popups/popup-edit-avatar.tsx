import { FormEvent, useRef } from 'react';
import { Popup } from './popup';
import { PopupLabel } from './popup-label';

interface IPopupEditAvatarProps {
  onClose: () => void;
}

export function PopupEditAvatar({
  onClose,
}: IPopupEditAvatarProps): JSX.Element {
  const avatarRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onClose();
  };

  return (
    <Popup
      title={'Update Avatar'}
      textSubmit={'Save'}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={<PopupLabel value={'/img/myAvatar.png'} valueRef={avatarRef} />}
    />
  );
}
