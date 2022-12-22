import { FormEvent, useRef, useState } from 'react';

import { createCard } from '../../../store/api-action/card';
import { Popup } from './popup';
import { PopupLabel } from './popup-label';
import { store } from '../../../store/store';

export const PopupNewCard = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('Choose a file...');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setFile(file);
      setFileName(file.name);
    }
  };

  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value || '';
    if (file) {
      store.dispatch(createCard({ name, file }));
    }
  };

  return (
    <Popup
      title={'New place'}
      textSubmit={'Create'}
      submitHandler={handleSubmit}
    >
      <>
        <PopupLabel defaultValue={'Caribbean Sea'} inputRef={nameRef} />
        <label className="new-card-label">
          <input
            className="new-card-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {fileName}
        </label>
      </>
    </Popup>
  );
};
