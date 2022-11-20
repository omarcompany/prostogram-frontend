import { FormEvent, useRef } from 'react';

import { createCard } from '../../../store/api-action/card';
import { Popup } from './popup';
import { PopupLabel } from './popup-label';
import { store } from '../../../store/store';

export const PopupNewCard = (): JSX.Element => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const imageUrlRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value || '';
    const link = imageUrlRef.current?.value || '';

    store.dispatch(createCard({ name, link }));
  };

  return (
    <Popup
      title={'New place'}
      textSubmit={'Create'}
      submitHandler={handleSubmit}
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
