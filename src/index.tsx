import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/auth-provider';

import { App } from './app';
import { UserDataProvider } from './context/user-data-provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </AuthProvider>
  </React.StrictMode>
);
