import { createContext, useState } from 'react';

import { AuthorizationStatus } from '../const';

interface IAuthContext {
  authorizationStatus: AuthorizationStatus;
  setAuthorizationStatus: (status: AuthorizationStatus) => void;
}

export const AuthContext = createContext<IAuthContext>({
  authorizationStatus: AuthorizationStatus.Unknown,
  setAuthorizationStatus: (status) => {},
});

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [authorizationStatus, setAuthorizationStatus] =
    useState<AuthorizationStatus>(AuthorizationStatus.Unknown);

  return (
    <AuthContext.Provider
      value={{ authorizationStatus, setAuthorizationStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};
