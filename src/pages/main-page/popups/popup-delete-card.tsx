import { FormEvent } from 'react';

import { deleteCard } from '../../../store/api-action/card';
import { Popup } from './popup';
import { store } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

export const PopupDeleteCard = (): JSX.Element => {
  const card = useAppSelector((store) => store.selectedCard);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    store.dispatch(deleteCard(card?.id ?? ''));
  };

  return (
    <Popup
      title={'Are you sure?'}
      textSubmit={'Yes'}
      submitHandler={handleSubmit}
    />
  );
};
