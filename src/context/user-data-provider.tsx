import { createContext, useState } from 'react';

import { IUserData } from '../interfaces';

interface IUserDataContext {
  userData: IUserData | null;
  setUserData: (data: IUserData | null) => void;
}

export const UserDataContext = createContext<IUserDataContext>({
  userData: null,
  setUserData: (data: IUserData | null) => {},
});

export const UserDataProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
