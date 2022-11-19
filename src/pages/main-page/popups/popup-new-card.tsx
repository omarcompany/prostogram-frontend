import { FormEvent, useRef } from 'react';

import { createCard } from '../../../action/card';
import { Popup } from './popup';
import { PopupLabel } from './popup-label';

export const PopupNewCard = ({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const imageUrlRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value || '';
    const link = imageUrlRef.current?.value || '';

    createCard(name, link)
      .then((data) => {
        
      })
      .catch((error) => {
        console.log(error);
      });

    onClose();
  };

  return (
    <Popup
      title={'New place'}
      textSubmit={'Create'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <PopupLabel defaultValue={'Caribbean Sea'} inputRef={nameRef} />
        <PopupLabel
          defaultValue={
            'https://www.globalchange.gov/sites/globalchange/files/ph-caribbean.jpg'
          }
          inputRef={imageUrlRef}
        />
      </>
    </Popup>
  );
};
